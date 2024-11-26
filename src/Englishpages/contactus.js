import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";
import "../global.css"; // Ensure global styles are still imported if necessary
import { useTranslation } from "react-i18next";
import { toast } from "react-hot-toast"; // For success/error notifications

export default function ContactUs() {
  const [activeTab, setActiveTab] = useState("Indivual");
  const { t } = useTranslation();

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    city: "",
    district: "",
    boatType: "",
    boatMaterial: "",
    boatSize: "",
    message: "",
  });

  const [termsAccepted, setTermsAccepted] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      toast.error("You must accept the Terms of Service and Privacy Policy.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
        }),
      });

      if (response.ok) {
        toast.success("Your message has been sent successfully!");
        setFormData({
          name: "",
          surname: "",
          phone: "",
          email: "",
          city: "",
          district: "",
          boatType: "",
          boatMaterial: "",
          boatSize: "",
          message: "",
        });
        setTermsAccepted(false);
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      toast.error("An error occurred while sending your message.");
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row w-full mr-auto items-center justify-center mt-32">
      <div>
        <Tabs
          defaultValue="Indivual"
          onValueChange={(value) => setActiveTab(value)}
        >
          <div className=" flex justify-center mt-28">
            <TabsList className="bg-gray-200 mt-3 rounded-[1.8rem] border border-[#e9f4ff] flex justify-center p-5 h-20">
              <TabsTrigger
                value="Indivual"
                className={`border-none mx-[19px] bg-transparent text-[23px] mt-[6px] cursor-pointer font-semibold ${
                  activeTab === "Indivual"
                    ? "bg-white border border-[#e9f4ff] rounded-lg text-black h-[40px]"
                    : "hover:bg-gray-200 rounded-lg"
                }`}
              >
                Individual
              </TabsTrigger>
              <TabsTrigger
                value="Partnerships"
                className={`border-none mx-[19px] bg-transparent text-[23px] mt-[6px] cursor-pointer font-semibold ${
                  activeTab === "Partnerships"
                    ? "bg-white border border-[#e9f4ff] rounded-lg text-black h-[40px]"
                    : "hover:bg-gray-200 rounded-lg"
                }`}
              >
                Partnership
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Contents */}
          <div className="mt-10">
            {/* Individual Tab Content */}
            <TabsContent
              value="Indivual"
              className={`${
                activeTab === "Indivual" ? "block" : "hidden"
              } mt-[80px] p-5 rounded-lg z-100 transition-colors w-full sm:w-[600px] text-black bg-white`}
            >
              <div>
                <h2 className="font-extrabold text-left"> {t("IC")}</h2>
                <p>{t("ICP")}</p>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="flex-1 flex flex-col">
                      <label className="font-bold mb-1">{t("N")}*</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Ahmet"
                        className="w-full p-[5px] border border-black rounded-[15px]"
                        required
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <label className="font-bold mb-1">{t("S")}*</label>
                      <input
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleInputChange}
                        placeholder="e.g. Yılmaz"
                        className="w-full p-[5px] border border-black rounded-[15px]"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="flex-1 flex flex-col">
                      <label className="font-bold mb-1">{t("P")}*</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(123) 456-789"
                        className="w-full p-[5px] border border-black rounded-[15px]"
                        required
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <label className="font-bold mb-1">{t("E")}*</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="ornek@mail.com"
                        className="w-full p-[5px] border border-black rounded-[15px]"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="flex-1 flex flex-col">
                      <label className="font-bold mb-1">{t("CD")}</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="e.g. Ankara"
                        className="w-full p-[5px] border border-black rounded-[15px]"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <label className="font-bold mb-1">{t("District")}</label>
                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        placeholder="e.g. Çankaya"
                        className="w-full p-[5px] border border-black rounded-[15px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="flex-1 flex flex-col">
                      <label className="font-bold mb-1">{t("BT")}</label>
                      <input
                        type="text"
                        name="boatType"
                        value={formData.boatType}
                        onChange={handleInputChange}
                        placeholder="e.g. Sailboat"
                        className="w-full p-[5px] border border-black rounded-[15px]"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <label className="font-bold mb-1">{t("BS")}</label>
                      <input
                        type="text"
                        name="boatSize"
                        value={formData.boatSize}
                        onChange={handleInputChange}
                        placeholder="e.g. 15 meters"
                        className="w-full p-[5px] border border-black rounded-[15px]"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <label className="font-bold mb-1">{t("BM")}</label>
                    <input
                      type="text"
                      name="boatMaterial"
                      value={formData.boatMaterial}
                      onChange={handleInputChange}
                      placeholder="e.g. Fiberglass, Wood, Aluminum"
                      className="w-full p-[5px] border border-black rounded-[15px]"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <label className="font-bold mb-1">{t("TM")}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Leave us a message..."
                      className="w-full p-[5px] border border-black rounded-[15px] resize-vertical"
                    ></textarea>
                  </div>
                  <label className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={() => setTermsAccepted(!termsAccepted)}
                      className="mr-2"
                    />
                    <div>
                      I accept the{" "}
                      <a
                        href="/terms-of-service"
                        className="underline text-blue-500"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy-policy"
                        className="underline text-blue-500"
                      >
                        Privacy Policy
                      </a>
                      .
                    </div>
                  </label>
                  <button
                    type="submit"
                    disabled={!termsAccepted} // Disable if terms not accepted
                    className={`bg-[#003369] text-white border-none py-[10px] px-[20px] rounded-[17px] w-full sm:w-[30%] h-[50px] cursor-pointer ${
                      termsAccepted
                        ? "hover:bg-[#0056b3]"
                        : "cursor-not-allowed opacity-50"
                    }`}
                  >
                    Send
                  </button>
                </form>
              </div>
            </TabsContent>
            {/* Partnerships Tab Content */}
            <TabsContent
              value="Partnerships"
              className={`${
                activeTab === "Partnerships" ? "block" : "hidden"
              } mt-[80px] p-5 rounded-lg transition-colors w-full sm:w-[600px] text-black bg-white`}
            >
              <div>
                <h2 className="font-extrabold text-left">{t("BP")}</h2>
                <p>{t("BPP")}</p>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="flex-1 flex flex-col">
                      <label className="font-bold mb-1">{t("N")}*</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Ahmet"
                        className="w-full p-[5px] border border-black rounded-[15px]"
                        required
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <label className="font-bold mb-1">{t("S")}*</label>
                      <input
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleInputChange}
                        placeholder="e.g. Yılmaz"
                        className="w-full p-[5px] border border-black rounded-[15px]"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="flex-1 flex flex-col">
                      <label className="font-bold mb-1">{t("P")}*</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(123) 456-789"
                        className="w-full p-[5px] border border-black rounded-[15px]"
                        required
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <label className="font-bold mb-1">{t("E")}*</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="ornek@mail.com"
                        className="w-full p-[5px] border border-black rounded-[15px]"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="flex-1 flex flex-col">
                      <label className="font-bold mb-1">{t("CD")}</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="e.g. Ankara"
                        className="w-full p-[5px] border border-black rounded-[15px]"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <label className="font-bold mb-1">{t("District")}</label>
                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        placeholder="e.g. Çankaya"
                        className="w-full p-[5px] border border-black rounded-[15px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="flex-1 flex flex-col">
                      <label className="font-bold mb-1">{t("BT")}</label>
                      <input
                        type="text"
                        name="boatType"
                        value={formData.boatType}
                        onChange={handleInputChange}
                        placeholder="e.g. Sailboat"
                        className="w-full p-[5px] border border-black rounded-[15px]"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <label className="font-bold mb-1">{t("BS")}</label>
                      <input
                        type="text"
                        name="boatSize"
                        value={formData.boatSize}
                        onChange={handleInputChange}
                        placeholder="e.g. 15 meters"
                        className="w-full p-[5px] border border-black rounded-[15px]"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <label className="font-bold mb-1">{t("BM")}</label>
                    <input
                      type="text"
                      name="boatMaterial"
                      value={formData.boatMaterial}
                      onChange={handleInputChange}
                      placeholder="e.g. Fiberglass, Wood, Aluminum"
                      className="w-full p-[5px] border border-black rounded-[15px]"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <label className="font-bold mb-1">{t("TM")}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Leave us a message..."
                      className="w-full p-[5px] border border-black rounded-[15px] resize-vertical"
                    ></textarea>
                  </div>
                  <label className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={() => setTermsAccepted(!termsAccepted)}
                      className="mr-2"
                    />
                    <div>
                      I accept the{" "}
                      <a
                        href="/terms-of-service"
                        className="underline text-blue-500"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy-policy"
                        className="underline text-blue-500"
                      >
                        Privacy Policy
                      </a>
                      .
                    </div>
                  </label>
                  <button
                    type="submit"
                    disabled={!termsAccepted} // Disable if terms not accepted
                    className={`bg-[#003369] text-white border-none py-[10px] px-[20px] rounded-[17px] w-full sm:w-[30%] h-[50px] cursor-pointer ${
                      termsAccepted
                        ? "hover:bg-[#0056b3]"
                        : "cursor-not-allowed opacity-50"
                    }`}
                  >
                    Send
                  </button>
                </form>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* Address/Contact Section */}
      <div className="mt-10 bg-sky-200 p-5 rounded-lg w-full sm:w-[400px] ml-0 sm:ml-16 flex flex-col">
        <address className="not-italic mb-3">
          <p>Bilkent Cyberpark Tepe Building B01 Çankaya, Ankara/Turkey.</p>
          <p>Weteringschans 165, 1017 XD Amsterdam</p>
        </address>
        <p>Email: info@marisonia.com</p>
        <p>Phone: +90 (312) 265 05 09</p>
        <p>Phone: +31 61 2055158</p>
        <div className="mt-4">
          <p>LinkedIn: /INFINIA</p>
          <p>Instagram: /Infiniaofficial</p>
          <p>X (Twitter): /INFINIAofficial</p>
        </div>
      </div>
    </div>
  );
}
