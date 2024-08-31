import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";
import "../global.css"; // Ensure global styles are still imported if necessary

export default function ContactUs() {
  const [activeTab, setActiveTab] = useState("Indivual");

  return (
    <div className="mb-[120px] w-1/2  mr-auto ml-[70rem]">
      <Tabs defaultValue="Indivual" onValueChange={value => setActiveTab(value)}>
        <TabsList className="w-[35rem] bg-gray-200 ml-0 mr-auto mt-3 rounded-[1.8rem] border border-[#e9f4ff] flex justify-center p-5 h-20">
          <TabsTrigger value="Indivual" className={`border-none mx-[19px] bg-transparent text-[23px] mt-[6px] cursor-pointer font-semibold ${activeTab === "Indivual" ? "bg-white border border-[#e9f4ff] rounded-lg text-black h-[40px]" : "hover:bg-gray-200 rounded-lg"}`}>
            Individual
          </TabsTrigger>
          <TabsTrigger value="Partnerships" className={`border-none mx-[19px] bg-transparent text-[23px] mt-[6px] cursor-pointer font-semibold ${activeTab === "Partnerships" ? "bg-white border border-[#e9f4ff] rounded-lg text-black h-[40px]" : "hover:bg-gray-200 rounded-lg"}`}>
            Partnership
          </TabsTrigger>
        </TabsList>
        <div className="mt-10">
          <TabsContent value="Indivual" className={`${activeTab === "Indivual" ? "block" : "hidden"} mt-[40px] p-5 rounded-lg transition-colors w-[60%] ml-0 text-black bg-white`}>
            <div>
              <h2 className="font-extrabold text-left">Contact Us</h2>
              <p>You can contact us to protect your boat with Marisonia's innovative technology. Afterwards, our team will get in touch with you.</p>
              <form className=" gap-5">
                <div className="">
                  <label className="font-bold mb-1">Name*</label>
                  <input type="text" placeholder="e.g. Ahmet" className="w-full p-[5px] border border-black rounded-[15px]" />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="font-bold mb-1">Surname*</label>
                  <input type="text" placeholder="e.g. Yılmaz" className="w-full p-[5px] border border-black rounded-[15px]" />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="font-bold mb-1">Phone*</label>
                  <input type="text" placeholder="(123) 456-789" className="w-full p-[5px] border border-black rounded-[15px]" />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="font-bold mb-1">E-mail*</label>
                  <input type="text" placeholder="ornek@mail.com" className="w-full p-[5px] border border-black rounded-[15px]" />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="font-bold mb-1">City/District</label>
                  <input type="text" placeholder="e.g. Ankara/Çankaya" className="w-full p-[5px] border border-black rounded-[15px]" />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="font-bold mb-1">Boat Types</label>
                  <input type="text" placeholder="e.g. Sail" className="w-full p-[5px] border border-black rounded-[15px]" />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="font-bold mb-1">Approximate Size</label>
                  <input type="text" placeholder="e.g. 15 meter" className="w-full p-[5px] border border-black rounded-[15px]" />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="font-bold mb-1">Body Material</label>
                  <input type="text" placeholder="e.g. Fiberglass, Wood, Alum" className="w-full p-[5px] border border-black rounded-[15px]" />
                </div>
                <div className="flex-1 basis-full flex flex-col">
                  <label className="font-bold mb-1">Text Message</label>
                  <textarea placeholder="Leave us a message..." className="w-full p-[5px] border border-black rounded-[15px] resize-vertical"></textarea>
                </div>
              </form>
            </div>
          </TabsContent>
          <TabsContent value="Partnerships" className={`${activeTab === "Partnerships" ? "block" : "hidden"} mt-[40px] p-5 rounded-lg transition-colors w-[60%] ml-0 text-black bg-white`}>
            <div>
              <h2 className="font-extrabold text-left">Business Partnership</h2>
              <p>To seize the opportunity to become a part of this innovative product by establishing a business partnership with Marisonia, please fill out the form below. Our team will contact you as soon as possible through your provided contact information.</p>
              <form className=" gap-5">
                <div className="">
                  <label className="font-bold mb-1">Name*</label>
                  <input type="text" placeholder="e.g. John" className="w-full p-[5px] border border-black rounded-[15px]" />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="font-bold mb-1">Surname*</label>
                  <input type="text" placeholder="e.g. Doe" className="w-full p-[5px] border border-black rounded-[15px]" />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="font-bold mb-1">E-mail*</label>
                  <input type="text" placeholder="e.g.@mail.com" className="w-full p-[5px] border border-black rounded-[15px]" />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="font-bold mb-1">Phone*</label>
                  <input type="text" placeholder="(123) 456-789" className="w-full p-[5px] border border-black rounded-[15px]" />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="font-bold mb-1">Company Name*</label>
                  <input type="text" placeholder="e.g." className="w-full p-[5px] border border-black rounded-[15px]" />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="font-bold mb-1">Title</label>
                  <input type="text" placeholder="e.g. Satış Sorumlusu" className="w-full p-[5px] border border-black rounded-[15px]" />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="font-bold mb-1">City/District</label>
                  <input type="text" placeholder="e.g. Ankara/Çankaya" className="w-full p-[5px] border border-black rounded-[15px]" />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="font-bold mb-1">Related Area</label>
                  <input type="text" placeholder="Reason to Contact" className="w-full p-[5px] border border-black rounded-[15px]" />
                </div>
                <div className="flex-1 basis-full flex flex-col">
                  <label className="font-bold mb-1">Text Message</label>
                  <textarea placeholder="Leave us a message..." className="w-full p-[5px] border border-black rounded-[15px] resize-vertical"></textarea>
                </div>
              </form>
            </div>
          </TabsContent>
        </div>
      </Tabs>
      <div className="mt-5 w-[60%] ml-0 flex flex-col items-start">
        <label className="flex items-center mb-3">
          <input type="checkbox" className="mr-2" />
          I accept the <a href="/terms-of-service" className="underline text-blue-500">Terms of Service</a> and <a href="/privacy-policy" className="underline text-blue-500">Privacy Policy</a>.
        </label>
        <button type="submit" className="bg-[#003369] text-white border-none py-[10px] px-[20px] rounded-[17px] w-[30%] h-[50px] cursor-pointer hover:bg-[#0056b3]">
          Send
        </button>
      </div>
      
<div className="mt-10 bg-sky-200 p-5 rounded-lg w-[50%] ml-16 flex flex-col relative -top-[560px] left-[600px]">
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
