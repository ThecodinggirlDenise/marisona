import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation files
const resources = {
  en: {
    translation: {
      "Flag Pic": "/images/",
      "Our Story": "Our Story",
      "How It Works": "How It Works",
      Products: "Products",
      Contact: "Contact",
      FQA: "FQA",
      Blog: "Blog",
      "Enhance Your Boating Experience": "Enhance Your Boating Experience",
      "Ultrasonic Anti-Fouling System": "Ultrasonic Anti-Fouling System",
      "Efficient and seamless ride on the water; conserves fuel, extends maintenance interval":
        "Efficient and seamless ride on the water; conserves fuel, extends maintenance interval",
      "Get a Special Pricing for Your Vessels!":
        "Get a Special Pricing for Your Vessels!",
      "Get a quote": "Get a quote",
      "More About Us": "More About Us",
      "Start Smooth Sailing": "Start Smooth Sailing",
      "Learn More": "Learn More",
      "Marisonia: The Shield Your Boat Deserves":
        "Marisonia: The Shield Your Boat Deserves",
      M1H: "Marisonia uses the power of ultrasound waves to prevent aquatic organisms from attaching to immersed surfaces.",
      "While conventional anti-fouling methods, such as utilizing toxic anti-fouling paints or biocide agents, can mitigate the impact of these organisms, embracing advanced technologies presents an environmentally sound and efficient alternative. This innovative approach aligns well with evolving regulatory frameworks, ensuring a more sustainable solution for mitigating biofouling.":
        "While conventional anti-fouling methods, such as utilizing toxic anti-fouling paints or biocide agents, can mitigate the impact of these organisms, embracing advanced technologies presents an environmentally sound and efficient alternative. This innovative approach aligns well with evolving regulatory frameworks, ensuring a more sustainable solution for mitigating biofouling.",
      MS4: "Unveiling the Necessity for Uninterrupted Quality Time on Your Boat",
      MS5: "Marisonia uses the power of ultrasound waves to prevent aquatic organisms from attaching immersed surfaces effectively.",
      "MS5-2":
        " While conventional anti-fouling methods, such as utilizing toxic anti-fouling paints or biocide agents, can mitigate the impact of these organisms, embracing advanced technologies presents an environmentally sound and efficient alternative. This innovative approach aligns well with evolving regulatory frameworks, ensuring a more sustainable solution for mitigating biofouling.",
      MS6: "Ultrasonic bursts are high-frequency sound waves. When used in marine applications, these bursts have a highly efficient effect on microorganisms in the water, preventing them from adhering to and growing on the surface of ships or boats.",
      "Eco-Friendly": "Eco-Friendly",
      MS7: "Ultrasonic antifouling systems pose no harm to marine life, emitting waves that don't interfere with the sonar of fish or marine mammals and avoiding the release of harmful chemicals into the food chain.",
      "Reduce Maintenance": "Reduce Maintenance",
      MS8: "There is no need to haul your boat out of water annually so that Marisonia quickly pays for itself multiple times over the vessel's lifespan.",
      "Fuel Consumption": "Fuel Consumption",
      "Reduces fuel consumption by up to 30%. Prevents the increase of friction force on the boat by preventing marine organisms from adhering to the boat hull and gear.":
        "Reduces fuel consumption by up to 30%. Prevents the increase of friction force on the boat by preventing marine organisms from adhering to the boat hull and gear.",
      MS9: "Easy to Install",
      MS10: "The Marisonia ultrasound transducers are easily affixed to the dry side of the surface to be safeguarded. These transducers generate a minuscule, finely modulated pressure pattern within the water layer directly in contact with the protected surface.",
      Testimonials: "Testimonials",
      "Marisonia from Customer Perspective":
        "Marisonia from Customer Perspective",
      "Get a Quote": "Get a Quote",
      "I have had Marisonia installed on my boat for almost a year now, and the difference is very clear compared to the boats moored next to me in Bitez. While mold and algae are visibly accumulating on the neighboring boats, my hull remains very clean.":
        "I have had Marisonia installed on my boat for almost a year now, and the difference is very clear compared to the boats moored next to me in Bitez. While mold and algae are visibly accumulating on the neighboring boats, my hull remains very clean.",
      "I cleaned the bottom of my boat and applied antifouling paint. 2 months later, Marisonia was installed. When my boat was taken out of the water 6 months after that, the condition of the bottom was very impressive. I will continue this season without cleaning the bottom.":
        "I cleaned the bottom of my boat and applied antifouling paint. 2 months later, Marisonia was installed. When my boat was taken out of the water 6 months after that, the condition of the bottom was very impressive. I will continue this season without cleaning the bottom.",
      "My boat spent the winter in Büyükçekmece Marina, Istanbul. Marisonia has been active for a full year. The view captured by the marina diver was wonderful. Normally, algae reaching almost arm's length were not visible.":
        "My boat spent the winter in Büyükçekmece Marina, Istanbul. Marisonia has been active for a full year. The view captured by the marina diver was wonderful. Normally, algae reaching almost arm's length were not visible.",
      D1: "We have been offering Marisonia to our customers for about a year, and the feedback we have received has always been very positive. The team behind the product is also very professional; they have been with us every step of the way.",
      P1: "We install Marisonia as an option on the boats we manufacture ourselves. We have not received any negative feedback from our customers. We received training from the company for the initial installation, and they have been attentive to our every issue in the ongoing process.",
      C1: "Since we are in Istanbul, Marisonia has started to be included as a standard feature in the boats we produce. The positive feedback we receive from our customers makes us happy.",
      "We're a professional team offering":
        "We're a professional team offering",
      "Rapid Response Guarantee": "Rapid Response Guarantee",
      "We pride ourselves on swift response times, ensuring you get the anti-fouling protection you need without delay.":
        "We pride ourselves on swift response times, ensuring you get the anti-fouling protection you need without delay.",
      "Made-to-Measure Solutions": "Made-to-Measure Solutions",
      "Doubles the time to haul out your boat, allowing you to have more time to enjoy your boat.":
        "Doubles the time to haul out your boat, allowing you to have more time to enjoy your boat.",
      "Direct, Personalized Support": "Direct, Personalized Support",
      "Experience one-on-one attention from our team, dedicated to meeting your specific requirements.":
        "Experience one-on-one attention from our team, dedicated to meeting your specific requirements.",
      "2-years Warranty": "2-years Warranty",
      "With a comprehensive 2-year warranty, we stand by the durability and quality of our in-house manufactured anti-fouling system, ensuring long-lasting performance.":
        "With a comprehensive 2-year warranty, we stand by the durability and quality of our in-house manufactured anti-fouling system, ensuring long-lasting performance.",
      OS1H: "Time for Eco-Maritime Excellence",
      OS1P: "We are a human-centric Design & Innovation firm specializing in designing and developing new eco-friendly technologies and products for the marine world such as Marisonia anti-fouling system.",
      OS2H: "Marisonia: Innovating for a Sustainable Marine World with INFINIA",
      OS2P: "Marisonia aims to provide eco-friendly and comprehensive electronic solutions to the challenges detected in the marine world. It is an initiative that draws its innovation and design power from INFINIA's engineers, seeking solutions to human and environmentally oriented challenges in the marine industry.It is a company that enables the utilization of INFINIA's expertise and opens its know-how to the service of the marine world, ranging from satellite infrastructure to sensor technologies.",
      OS3H: "Our mission is to simplify your marine day life.",
      OS3P: "Marisonia envisions a sustainable marine industry where cutting-edge electronic solutions lead to a cleaner, more efficient, and environmentally responsible future.At Marisonia, our mission is to pioneer eco-friendly electronic solutions that address the diverse challenges within the marine sector. We are committed to delivering comprehensive, innovative technologies that enhance performance, reduce environmental impact, and ensure a harmonious coexistence with the world's oceans.",
      HITW1H: "Marisonia: Your Boat's Green and Sustainable Guardian",
      HITW2H:
        "Marisonia is a system developed for the marine industry that removes microorganisms that may come under the boat by emitting different sound waves at regular intervals. In this way, it prevents the formation of algae and prevents the living environments of visible crustaceans from forming.",
      HITW2P:
        "Marisonia is a system developed for the marine industry that removes microorganisms that may come under the boat by emitting different sound waves at regular intervals. In this way, it prevents the formation of algae and prevents the living environments of visible crustaceans from forming.",
      HITW2H: "Why Do You Need Anti-Fouling Systems?",
      HITW3P:
        "Biofouling is the attachment and growth of marine organisms on stationary or moored vessels, driven by natural adhesion tendencies. Protecting marine vessels from biofouling is crucial because it significantly decreases hull and running gear efficiency, leading to higher fuel consumption and maintenance needs. This not only affects the vessel's performance but also hampers the enjoyment of smooth rides on the water. Anti-fouling systems are essential to ensure an optimal boating experience by preventing biofouling-related issues. Additionally, the use of seawater for cooling in commercial vessels can lead to the growth of organisms like barnacles and algae, which obstruct water flow, reduce cooling efficiency, and pose pontential damage risks to engines and equipment.",
      HITW4H: "Reduce Speed",
      H4P: "Biofouling creates resistance to the boat's movement in the water. This can significantly decrease the boat's speed. Organisms growing on the surface along the vessel's surface thus lowering the boat's speed.",
      HITW5H: "Decreased Maneuverability",
      H5P: "Biofouling can also impact the boat's maneuvering capability. It can disrupt stability, diminishing the performance of critical components such as steering.",
      H6H: "Increased Fuel Usage",
      H6P: "Biofouling on the surface escalates the energy required for the boat to move. Research indicates that fuel consumption caused by biofouling can increase fuel consumption by up to 40%.",
      H7H: "More Frequent Maintenance",
      H7P: "Biofouling necessitates regular cleaning and maintenance. This can increase costs, and in some cases, the corrosion caused by surface organisms can cause damage requiring expensive repairs.",
      H1H: "When Marine Growth Takes Over",
      OS: "Our Solution",
      OSP: "Ultrasonic bursts are high-frequency sound waves. When used in marine applications, these bursts have a highly efficient effect on microorganisms in the water, preventing them from adhering to and growing on the surface of ships or boats.The continuous and regular propagation of these waves prevents living organisms like bacteria, algae, and shellfish from adhering to the surface and forming colonies. Therefore, using ultrasonic bursts regularly is an effective way to control the biofouling process.",
      LH: "Unveiling the Necessity for Uninterrupted Quality Time on Your Boat",
      EF: "Environmentally Friendly",
      EFP: "Protects ships, preserves seas; harmless to marine life.",
      IP: "Increased Performance",
      IPP: "Enhanced Capacity to Sustain Speed and Optimize Boat Performance.",
      EI: "Easy to Install",
      EIP: "Proficient Teams, Quick Install: Optimal Use in Half a Day!",
      RC: "Reduced Costs",
      RCP: "Conserves fuel, extends maintenance, lowers costs.",
      NMHFC: "No More Haul For Cleaning",
      NMHFCP: "Prolongs the Maintenance Interval.",
      ILT: "Increased Leisure Time",
      ILTP: "Efficient and seamless ride on the water.",
      PH1: "We can provide tailored solutions for your vessel.",
      PH1P: "Explore our wide range of services.",
      GAQ: "    Get a Quote",
      PH2H: "Going Green on the Waves: Embrace Environmentally Friendly Boating Solutions",
      PH2SH: " Biocide Use in Marine Coatings Faces Growing Regulations",
      PH2P: " Authorities worldwide are increasingly imposing restrictions and bans on biocide use in marine coatings to protect marine life and human health.",
      PH3H: "Green Waves Ahead: Marisonia's Eco-friendly Solution",
      PH3SH1: " Invasive Non-Native Species Threat",
      PH3P1:
        "Marine organisms easily transported via ships' ballast water or hulls pose a severe threat to global marine biodiversity by outcompeting native species. This has already happened in various regions. A recent study identified around 800 invasive aquatic species, making the Mediterranean the most invaded sea globally. Alarmingly, 71% of leisure vessels carried non-indigenous species.",
      PH3SH2: "Safe Ultrasonic Antifouling",
      PH3P2:
        "Ultrasonic antifouling systems pose no harm to marine life, emitting waves that don't interfere with fish or marine mammals' sonar and avoiding the release of harmful chemicals into the food chain.",
      Tech: "Tehnical",
      Spec: "Specifications",
      PL: "Marisonia Ultrasonic Transducers: Precise Installation for Enhanced Protection",
      PL2: "The Marisonia ultrasonic transducers are easily affixed to the dry  side of the surface to be safeguarded. These transducers generate a minuscule, finely modulated pressure pattern within the water layer, disrupting any initial contact with predator species.",
      PL3: "Ensuring seamless integration, Marisonia facilitates easy installation through our proficient installation teams, allowing optimal system utilization within a mere half-day timeframe!",
      W: "Warranty",
      WP: "Marisonia provides a comprehensive 2-year warranty for your assurance.",
      WIC: "Who is Covered?",
      WICP: "Marisonia offers a comprehensive 2-year manufacturer’s warranty under the following conditions:",
      WICP1:
        " Installation of the product must be performed by authorized representatives.",
      WICP2:
        "The control box and the transducers should not be dealt without an authorized representative.",
      WICP3:
        "Please note: This warranty primarily covers durability and quality under specified usage conditions.",
      GASP: "  Get a Special Pricing for Your Vessels!",
    },
  },
  tr: {
    translation: {
      "Flag Pic": "/images/",
      "Our Story": "Bizim Hikayemiz",
      "How It Works": "Nasıl Çalışır?",
      Products: "Ürünümüz",
      Contact: "İletişim",
      FQA: "SSS",
      Blog: "Blog",
      "Enhance Your Boating Experience": "Tekne Sürüş Deneyiminizi Geliştirin",
      "Ultrasonic Anti-Fouling System":
        "Yeni Nesil Tekne Altı Kirlenme Önleyici Sistem",
      "Efficient and seamless ride on the water; conserves fuel, extends maintenance interval":
        "Su üzerinde verimli ve kesintisiz sürüş; Yakıt tasarrufu sağlar, bakım gereksinimini uzatır",
      "Get a Special Pricing for Your Vessels!":
        "Tekneniz için Özel Fiyat Alın!",
      "Get a quote": "Teklif alın",
      "More About Us": "Hakkımızda daha fazlası",
      "Start Smooth Sailing": "Denize Açılmaya Hazır Olun",
      "Learn More": "Daha Fazla Bilgi Edinin",
      "Marisonia: The Shield Your Boat Deserves":
        "Marisonia: Teknenizin Hak Ettiği Kalkan",
      M1H: "Marisonia, suda yaşayan organizmaların su ile teması olan yüzeylere yapışmasını önlemek için ultrasonik dalgalarının gücünü kullanır.",
      "While conventional anti-fouling methods, such as utilizing toxic anti-fouling paints or biocide agents, can mitigate the impact of these organisms, embracing advanced technologies presents an environmentally sound and efficient alternative. This innovative approach aligns well with evolving regulatory frameworks, ensuring a more sustainable solution for mitigating biofouling.":
        "Zehirli anti-fouling boyalar veya biyosit ajanları kullanma gibi geleneksel anti-fouling yöntemleri bu organizmaların etkisini azaltabilirken, gelişmiş teknolojileri benimsemek çevre dostu ve verimli bir alternatif sunar. Bu yenilikçi yaklaşım, gelişen düzenleyici çerçevelerle iyi uyum sağlar ve biofouling'i azaltmak için daha sürdürülebilir bir çözüm sunar.",
      MS4: "Teknenizde Keyifli Zamanı Sunuyoruz",
      MS6: "Yeni nesil tekne altı kirlenme önleyici sistem yüksek frekanslı ses dalgalarını kullanır. Denizcilik uygulamalarında kullanıldığında, bu dalgalar sudaki mikroorganizmalar üzerinde uzaklaştırıcı bir etkiye sahip olup, bunların gemi veya tekne yüzeyine yapışmasını ve büyümesini engeller.",
      MS5: "Marisonia, suda yaşayan organizmaların su ile temas eden yüzeylere etkili bir şekilde yapışmasını önlemek için ultrasonik dalgalarının gücünü kullanır.",
      "MS5-2":
        "Zehirli boyalar veya biyosit maddelerinin kullanılması gibi geleneksel kirlenme önleyici yöntemler bu organizmaların etkisini hafifletebilirken, oysa çevresel açıdan duyarlı bir çözüm için ileri teknolojileri benimsemek gerekir. Marisonia sağlam ve etkili bir alternatiftir. Bu yenilikçi yaklaşım, gelişen düzenleyici çerçevelerle iyi uyum sağlayarak biyolojik kirliliğin azaltılması için daha sürdürülebilir bir çözüm sağlar.",
      "Eco-Friendly": "Çevre Dostu",
      MS7: "Ultrasonic anti-fouling system deniz yaşamına zarar vermez, balıkları veya deniz canlılarını etkilemeyen dalgalar yayar ve zararlı kimyasalların besin zincirine salınmasını önler.",
      "Reduce Maintenance": "Bakımı Azaltın",
      MS8: "Marisonia kullanımı ile teknenizi her yıl sudan çıkarılmasına gerek yoktur, böylece  teknenin kullanım ömrü boyunca kendini defalarca amorti eder.",
      "Fuel Consumption": "Yakıt Tüketimi",
      "Reduces fuel consumption by up to 30%. Prevents the increase of friction force on the boat by preventing marine organisms from adhering to the boat hull and gear.":
        "Yakıt tüketimini %30'a kadar azaltır. Deniz organizmalarının tekne gövdesine ve donanımına yapışmasını önleyerek sürtünme kuvvetinin artmasını engeller.",
      MS9: "Kurulumu Kolay",
      MS10: "Marisonia ultrasonik dönüştürücüleri, korunacak yüzeyin kuru tarafına kolayca uygulanır. Bu dönüştürücüler, korunan yüzeyle doğrudan temas halinde olan su katmanı içinde çok küçük, ince bir şekilde modüle edilmiş bir basınç modeli oluşturur.",
      "The Marisonia ultrasound transducers are easily affixed to the dry side of the surface to be safeguarded. These transducers generate a minuscule, finely modulated pressure pattern within the water layer directly in contact with the protected surface.":
        "Marisonia ultrasonik dönüştürücüler, korunacak yüzeyin kuru tarafına kolayca monte edilir. Bu dönüştürücüler, korunan yüzeyle doğrudan temas halinde olan su tabakası içinde çok küçük, ince modüle edilmiş bir basınç deseni oluşturur.",
      Testimonials: "Referanslar",
      "Marisonia from Customer Perspective": "Kullanıcı Gözünden Marisonia",
      "Get a Quote": "Fiyat Teklif Alın",
      "I have had Marisonia installed on my boat for almost a year now, and the difference is very clear compared to the boats moored next to me in Bitez. While mold and algae are visibly accumulating on the neighboring boats, my hull remains very clean.":
        "Marisonia'yı tekneye takalı neredeyse bir yıl oldu ve Bitez'de yanımda bağlı teknelere kıyasla fark çok net. Komşu teknelerde küf ve yosunlar gözle görülür şekilde birikmekteyken, benim gövdem çok temiz kalıyor.",
      "I cleaned the bottom of my boat and applied antifouling paint. 2 months later, Marisonia was installed. When my boat was taken out of the water 6 months after that, the condition of the bottom was very impressive. I will continue this season without cleaning the bottom.":
        "Teknemin altını temizledim ve antifouling boya uyguladım. 2 ay sonra Marisonia kuruldu. 6 ay sonra tekne sudan çıkarıldığında altının durumu çok etkileyiciydi. Bu sezonu altını temizlemeden devam ettireceğim.",
      "My boat spent the winter in Büyükçekmece Marina, Istanbul. Marisonia has been active for a full year. The view captured by the marina diver was wonderful. Normally, algae reaching almost arm's length were not visible.":
        "Teknem Büyükçekmece Marina, İstanbul'da kış geçirdi. Marisonia bir yıldır aktif durumda. Marina dalgıcı tarafından çekilen görüntü harikaydı. Normalde kol boyuna kadar ulaşan yosunlar görünmüyordu.",
      D1: "Marisonia’yı yaklaşık bir senedir müşterilerimize sunuyoruz ve aldığımız geri dönüşler hep çok olumlu. Ürünün arkasındaki ekip de çok profesyonel, her adımda yanımızda oldular.",
      P1: "Kendi ürettiğimiz teknelerimize opsiyon olarak Marisonia takıyoruz. Müşterilemizden kötü bir geribildirim almadık. İlk kurulum zamanında Marisonia ekibinden eğitim aldık ve devam eden süreçlerde de her sorumuza teknik ve detaylı cevap verdiler.",
      C1: "Bulunduğumuz bölge İstanbul olduğundan, ürettiğimiz teknelerde Marisonia standart olarak yer almaya başladı. Müşterilerimizden aldığımız olumlu dönüşler yüzümüzü güldürüyor.",

      "We're a professional team offering":
        "Ekibimiz En Yüksek Kalite Standartlarında Hizmet Sunar",
      "Rapid Response Guarantee": "Hızlı Geri Dönüş",
      "We pride ourselves on swift response times, ensuring you get the anti-fouling protection you need without delay.":
        "İhtiyacınız olan kirlenme önleyici korumayı gecikmeden almanızı sağlayan hızlı tepki süreleriyle gurur duyuyoruz.",
      "Made-to-Measure Solutions": "Ölçüye Göre Çözümler",
      "Doubles the time to haul out your boat, allowing you to have more time to enjoy your boat.":
        "Teknenizi çıkarma süresini iki katına çıkararak teknenizin keyfini çıkarmak için daha fazla zaman ayırmanıza olanak tanır.",
      "Direct, Personalized Support": "Doğrudan, Kişiselleştirilmiş Destek",
      "Experience one-on-one attention from our team, dedicated to meeting your specific requirements.":
        "Özel gereksinimlerinizi karşılamaya adanmış ekibimizin birebir ilgisini deneyimleyin.",
      "2-years Warranty": "2 Yıl Garanti",
      "With a comprehensive 2-year warranty, we stand by the durability and quality of our in-house manufactured anti-fouling system, ensuring long-lasting performance.":
        "Marisonia'nın tüm ekipmanını kapsamlı 2 yıllık garantisiyle sunmanın gönül rahatlığını taşıyoruz.",
      OS1H: "Eko-Denizcilikte Mükemmeliyet Zamanı",
      OS1P: "Marisonia kirlenme önleyici sistem gibi denizcilik dünyasına yönelik yeni çevre dostu teknolojiler ve ürünler tasarlama ve geliştirme konusunda uzmanlaşmış, insan odaklı bir tasarım ve inovasyon firmasıyız.",
      OS2H: "Marisonia: INFINIA ile Sürdürülebilir Denizcilik Dünyası için Yenilikler",
      OS2P: "Marisonia, denizcilik dünyasında tespit edilen zorluklara çevre dostu ve kapsamlı elektronik çözümler sunmayı amaçlamaktadır. İnovasyon ve tasarım gücünü, denizcilik endüstrisindeki insan ve çevre odaklı zorluklara çözüm arayan INFINIA mühendislerinden alan bir girişimdir. INFINIA, uydu altyapısından sensör teknolojilerine kadar bilgi birikimini denizcilik dünyasının hizmetine açan  bir şirkettir.",
      OS3H: "Misyonumuz denizdeki hayatınızı kolaylaştırmak",
      OS3P: "Marisonia, en ileri elektronik çözümlerin daha temiz, daha verimli ve çevresel açıdan sorumlu bir geleceğe yelken açtığı sürdürülebilir bir denizcilik endüstrisi öngörüyor.Marisonia'da misyonumuz, denizcilik sektöründeki çeşitli zorlukları ele alan çevre dostu elektronik çözümlere öncülük etmektir. Performansı artıran, çevresel etkiyi azaltan ve deniz ekosistemiyle uyumlu bir şekilde bir arada yaşamayı sağlayan kapsamlı, yenilikçi teknolojiler sunmaya kararlıyız.",
      HITW1H: "Marisonia: Teknenizin Yeşil ve Sürdürülebilir Koruyucusu",
      HITW2P:
        "Marisonia, denizcilik sektörü için geliştirilmiş, belirli aralıklarla farklı ses dalgaları yayarak teknenin altına yapışabilecek mikroorganizmaları uzaklaştıran bir sistemdir. Bu sayede yosun oluşumunu ve kabukluların yaşam ortamlarının oluşmasını engeller.",
      HITW2H: "Neden Kirlenme Önleyici Sistemlere İhtiyacınız Var?",
      HITW3P:
        "Biyolojik kirlilik, deniz organizmalarının doğal yapışma eğilimleri nedeniyle sabit veya demirli gemilere bağlanması ve büyümesidir. Deniz taşıtlarını biyolojik kirlilikten korumak çok önemlidir. Çünkü bu daha yüksek yakıt tüketimine ve bakım gereksinimlerine yol açar. Bu sadece teknenin performansını etkilemekle kalmıyor, aynı zamanda su üzerinde sürüş keyfini de engelliyor. Kirlenme önleyici sistemler, biyolojik kirlilikle ilgili sorunları önleyerek optimum tekne deneyimi sağlamak için gereklidir.",
      HITW4H: "Hızı Azaltır",
      H4P: "Biyolojik kirlilik teknenin sudaki hareketine karşı direnç oluşturur. Bu ilave direnç teknenin hızını önemli ölçüde azaltabilir. Yüzeyde büyüyen organizmalar, teknenin yüzeyindeki su akışını bozarak teknenin hızını düşürür.",
      HITW5H: "Manevra Kabiliyetini Azaltır",
      H5P: "Biyolojik kirlenme aynı zamanda teknenin manevra kabiliyetini de etkileyebilir. Teknenin dengesini ve stabilitesini bozabilir, yönlendirme veya tahrik sistemleri gibi kritik bileşenlerin performansını azaltabilir.",
      H6H: "Yakıt Tüketimini Arttırır",
      H6P: "Yüzeydeki biyolojik kirlilik teknenin hareket etmesi için gereken enerjiyi artırır. Bu, motorun daha fazla çalışmasını gerektirir ve dolayısıyla yakıt tüketimi artar. Araştırmalar biyolojik kirliliğin neden olduğu direncin yakıt tüketimini %40'a kadar artırabildiğini gösteriyor.",
      H7H: "Daha Sık Bakıma İhtiyaç Duyar",
      H7P: "Biyolojik kirlilik düzenli temizlik ve bakım gerektirir. Bu, işgücü ve kaynak maliyetlerini artırabilir. Ayrıca bazı durumlarda yüzey organizmalarının neden olduğu korozyon, teknenin yüzeyine zarar vererek pahalı onarımlar gerektirebilir.",
      H1H: "Teknenizin Altını Organizmalar Ele Geçirdiğinde",
      OS: "Çözümümüz",
      OSP: "Ultrasonik dalgalar yüksek frekanslı ses dalgalarıdır. Denizcilik uygulamalarında kullanıldığında, bu dalgalar sudaki mikroorganizmalar üzerinde oldukça etkili bir etkiye sahip olup, bunların gemi veya tekne yüzeyine yapışmasını ve büyümesini engeller.Bu dalgaların sürekli ve düzenli yayılması, bakteri, alg, kabuklu deniz ürünleri gibi canlı organizmaların yüzeye tutunarak koloni oluşturmasını engeller. Bu nedenle, ultrasonik dalgaların düzenli olarak kullanılması, biyolojik kirlenme sürecini kontrol etmenin etkili bir yoludur.",
      LH: "Teknenizde Keyifli Zamanı Sunuyoruz",
      EF: "Çevre dostu",
      EFP: "Tekneleri Korur, Denizleri Korur: Deniz Yaşamına Zararsızdır",
      IP: "Artan Performans",
      IPP: "Hızı Korumak ve Tekne Performansını Optimize Etmek için Geliştirilmiş Kapasite",
      EI: "Kurulumu Kolay",
      EIP: "Uzman Ekipler, Hızlı Kurulum: Yarım Günde Kullanıma Hazır",
      RC: "Azaltılmış Maliyet",
      RCP: "Yakıt tasarrufu sağlar, bakım süresini uzatır, maliyetleri düşürür.",
      NMHFC: "Artık Temizlemeye Gerek Yok",
      NMHFCP: "Bakım Aralığını Uzatır",
      ILT: "Artan Boş Zaman",
      ILTP: "Su Üzerinde Verimli ve Kesintisiz Sürüş",
      PH1: "Teknenize özel çözümler sunarız",
      PH1P: "Geniş hizmet yelpazemizi keşfedin.",
      GAQ: "Fiyat Teklifi Alın",
      PH2H: "Çevre Dostu Teknecilik Çözümlerini Benimseyin",
      PH2SH: "Deniz Kaplamalarında Biyosit Kullanımı Değişen Düzenlemeleri",
      PH2P: "Dünya çapında yetkililer, deniz yaşamını ve insan sağlığını korumak için deniz kaplamalarında biyosit kullanımına giderek artan oranda kısıtlamalar ve yasaklar getirmektedir.",
      PH3H: "Marisonia'nın Çevre Dostu Çözümü",
      PH3SH1: " İstilacı, Yerli Olmayan Türler Tehdidi",
      PH3P1:
        "Teknelerin balast suyu veya gövdeleri yoluyla kolayca taşınan deniz organizmaları, yerli türlerle rekabet ederek küresel deniz biyolojik çeşitliliğine ciddi bir tehdit oluşturmaktadır. Bu zaten çeşitli bölgelerde gerçekleşti. Yakın zamanda yapılan bir araştırmada yaklaşık 800 istilacı türü tespit edildi ve bu da Akdeniz'i dünya çapında en çok istila edilen deniz haline getirdi. Endişe verici bir şekilde, eğlence gemilerinin %71'i yerli olmayan türler taşıyordu.",
      PH3SH2: "Güvenli Tekne Altı Kirlenme Önleyici Sistem",
      PH3P2:
        "Tekne altı kirlenme önleyici sistem deniz yaşamına zarar vermez, balıkların veya deniz canlılarını etkilemeyen dalgalar yayar ve zararlı kimyasalların besin zincirine salınmasını engeller.",
      Tech: "Teknik",
      Spec: "Özellikleri",
      PL: "Marisonia Ultrasonik Dönüştürücüler: Gelişmiş Koruma için Hassas Kurulum",
      PL2: "Marisonia ultrasonik dönüştürücüleri, korunacak yüzeyin kuru tarafına kolayca uygulanır. Bu dönüştürücüler, korunan yüzeyle doğrudan temas halinde olan su katmanı içinde çok küçük, ince ayarlı bir basınç modeli oluşturur.",
      PL3: "Marisonia, uzman kurulum ekiplerimiz aracılığıyla kolay kurulumu sayesinde yalnızca yarım günlük bir zaman dilimi içinde kullanıma hazır hale gelir.",
      W: "Garanti",
      WP: "Marisonia, uzman kurulum ekiplerimiz aracılığıyla kolay kurulumu sayesinde yalnızca yarım günlük bir zaman dilimi içinde kullanıma hazır hale gelir.",
      WIC: "Kimleri Kapsamaktadır?",
      WICP: "Marisonia aşağıdaki koşullar altında 2 yıl boyunca kapsamlı bir üretici garantisi sunmaktadır:",
      WICP1: "Ürün kurulumu yetkili temsilciler tarafından yapılmalıdır.",
      WICP2:
        "Kontrol kutusuna ve/veya transdüserlere yetkili teknisyenler dışında müdahale edilmemelidir.",
      WICP3:
        "Bu garanti öncelikli olarak belirlenen kullanım koşulları altında dayanıklılık ve kaliteyi kapsar.",
      GASP: "Teknelerinize Özel Fiyat Alın!",
    },
  },
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
