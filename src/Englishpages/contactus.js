import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";
import "../components/Css/contactus.css";
import "../global.css";

export default function ContactUs() {
  const [activeTab, setActiveTab] = useState("Indivual");

  return (
    <div className="Contact-Us-container">
      <Tabs defaultValue="Indivual" onValueChange={value => setActiveTab(value)}>
        <TabsList className="TopTabs">
          <TabsTrigger value="Indivual" className={`Indivual ${activeTab === "Indivual" ? "TabsTrigger active" : "TabsTrigger"}`}>Individual</TabsTrigger>
          <TabsTrigger value="Partnerships" className={`Partnerships ${activeTab === "Partnerships" ? "TabsTrigger active" : "TabsTrigger"}`}>Partnership</TabsTrigger>
        </TabsList>
        <div className="TabsContentWrapper">
          <TabsContent value="Indivual" className={activeTab === "Indivual" ? "form-content active" : "form-content"}>
            <div>
              <h2 style={{fontWeight:"900",textAlign:"start"}}>Contact Us</h2>
              <p>You can contact us to protect your boat with Marisonia's innovative technology. Afterwards, our team will get in touch with you.</p>
              <form className="contact-form">
                <div className="input-group">
                  <label>Name*</label>
                  <input type="text" placeholder="e.g. Ahmet" />
                </div>
                <div className="input-group">
                  <label>Surname*</label>
                  <input type="text" placeholder="e.g. Yılmaz" />
                </div>
                <div className="input-group">
                  <label>Phone*</label>
                  <input type="text" placeholder="(123) 456-789" />
                </div>
                <div className="input-group">
                  <label>E-mail*</label>
                  <input type="text" placeholder="ornek@mail.com" />
                </div>
                <div className="input-group">
                  <label>City/District</label>
                  <input type="text" placeholder="e.g. Ankara/Çankaya" />
                </div>
                <div className="input-group">
                  <label>Boat Types</label>
                  <input type="text" placeholder="e.g. Sail" />
                </div>
                <div className="input-group">
                  <label>Approximate Size</label>
                  <input type="text" placeholder="e.g. 15 meter" />
                </div>
                <div className="input-group">
                  <label>Body Material</label>
                  <input type="text" placeholder="e.g. Fiberglass, Wood, Alum" />
                </div>
                <div className="input-group" style={{ flexBasis: '100%' }}>
                  <label>Text Message</label>
                  <textarea placeholder="Leave us a message..."></textarea>
                </div>
              </form>
            </div>
          </TabsContent>
          <TabsContent value="Partnerships" className={activeTab === "Partnerships" ? "form-content active" : "form-content"}>
            <div>
              <h2 style={{fontWeight:"900",textAlign:"start"}}>Business Partnership</h2>
              <p>To seize the opportunity to become a part of this innovative product by establishing a business partnership with Marisonia, please fill out the form below. Our team will contact you as soon as possible through your provided contact information.</p>
              <form className="contact-form">
                <div className="input-group">
                  <label>Name*</label>
                  <input type="text" placeholder="e.g. John" />
                </div>
                <div className="input-group">
                  <label>Surname*</label>
                  <input type="text" placeholder="e.g. Doe" />
                </div>
                <div className="input-group">
                  <label>E-mail*</label>
                  <input type="text" placeholder="e.g.@mail.com" />
                </div>
                <div className="input-group">
                  <label>Phone*</label>
                  <input type="text" placeholder="(123) 456-789" />
                </div>
                <div className="input-group">
                  <label>Company Name*</label>
                  <input type="text" placeholder="e.g." />
                </div>
                <div className="input-group">
                  <label>Title</label>
                  <input type="text" placeholder="e.g. Satış Sorumlusu" />
                </div>
                <div className="input-group">
                  <label>City/District</label>
                  <input type="text" placeholder="e.g. Ankara/Çankaya" />
                </div>
                <div className="input-group">
                  <label>Related Area</label>
                  <input type="text" placeholder="Reason to Contact" />
                </div>
                <div className="input-group" style={{ flexBasis: '100%' }}>
                  <label>Text Message</label>
                  <textarea placeholder="Leave us a message..."></textarea>
                </div>
              </form>
            </div>
          </TabsContent>
        </div>
      </Tabs>
      <div className="submit-section">
        <label>
          <input type="checkbox" />
          I accept the <a href="/terms-of-service">Terms of Service</a> and <a href="/privacy-policy">Privacy Policy</a>.
        </label>
        <button type="submit">Send</button>
      </div>
      <div className="contact-info">
        <address>
          <p>Bilkent Cyberpark Tepe Building B01 Çankaya, Ankara/Turkey.</p>
          <p>Weteringschans 165, 1017 XD Amsterdam</p>
        </address>
        <p>Email: info@marisonia.com</p>
        <p>Phone: +90 (312) 265 05 09</p>
        <p>Phone: +31 61 2055158</p>
        <div className="social-media">
          <p>LinkedIn: /INFINIA</p>
          <p>Instagram: /Infiniaofficial</p>
          <p>X (Twitter): /INFINIAofficial</p>
        </div>
      </div>
    </div>
  );
}
