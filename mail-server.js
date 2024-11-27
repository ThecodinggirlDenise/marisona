const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { PublicClientApplication } = require("@azure/msal-node");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();

// Configure CORS
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your React app's URL
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(express.json());

const tokenCacheFile = path.join(process.cwd(), "token_cache.json");

// Helper function to create email HTML
function createEmailHTML(data) {
  let html = "";
  for (const [key, value] of Object.entries(data)) {
    if (key === "template") continue;
    html += `<p><strong>${key}:</strong> ${value}</p>`;
  }
  return html;
}

// Helper function to acquire token
async function acquireToken() {
  const pca = new PublicClientApplication({
    auth: {
      clientId: process.env.MAILER_CLIENT_ID,
      authority: `https://login.microsoftonline.com/${process.env.MAILER_TENANT_ID}`,
    },
    cache: {
      cachePlugin: {
        beforeCacheAccess: async (cacheContext) => {
          if (fs.existsSync(tokenCacheFile)) {
            const cache = fs.readFileSync(tokenCacheFile, "utf-8");
            cacheContext.tokenCache.deserialize(cache);
          }
        },
        afterCacheAccess: async (cacheContext) => {
          if (cacheContext.cacheHasChanged) {
            fs.writeFileSync(
              tokenCacheFile,
              cacheContext.tokenCache.serialize()
            );
          }
        },
      },
    },
  });

  const scopes = ["https://graph.microsoft.com/Mail.Send"];
  let tokenResponse;

  try {
    const accounts = await pca.getTokenCache().getAllAccounts();
    if (accounts.length > 0) {
      tokenResponse = await pca.acquireTokenSilent({
        scopes,
        account: accounts[0],
      });
    } else {
      throw new Error("No accounts found in token cache.");
    }
  } catch (error) {
    console.log(
      "Silent token acquisition failed. Falling back to device code flow:",
      error
    );
    tokenResponse = await pca.acquireTokenByDeviceCode({
      deviceCodeCallback: (response) => console.log(response.message),
      scopes,
    });
  }

  return tokenResponse.accessToken;
}

// Email-sending endpoint
app.post("/api/send-email", async (req, res) => {
  const {
    name,
    surname,
    phone,
    city,
    district,
    boatType,
    boatMaterial,
    boatSize,
    email,
    message,
  } = req.body;

  try {
    const token = await acquireToken();
    const emailContent = createEmailHTML({
      name,
      email,
      message,
      surname,
      phone,
      city,
      district,
      boatType,
      boatMaterial,
      boatSize,
    });

    console.log(emailContent);

    const response = await axios.post(
      "https://graph.microsoft.com/v1.0/me/sendMail",
      {
        message: {
          subject: "Marisonia Website New Email",
          body: { contentType: "HTML", content: emailContent },
          toRecipients: [
            { emailAddress: { address: process.env.MAILER_RECIPIENT_EMAIL } },
          ],
        },
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.status === 202) {
      res.status(200).json({ success: true });
    } else {
      res.status(500).json({ message: "Failed to send email." });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
