"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeMediumTitles"
        background="aurora"
        cardStyle="outline"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Hizmetler", id: "features" },
        { name: "Ürünler", id: "products" },
        { name: "İletişim", id: "contact" },
      ]}
      brandName="Hilltech"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{ variant: "plain" }}
      title="Hilltech Elektronik Güvenlik Sistemleri"
      description="Modern elektronik güvenlik çözümleriyle yaşam alanlarınızı ve ticari varlıklarınızı en üst düzey teknolojiyle koruma altına alıyoruz."
      buttons={[{ text: "Hizmetleri Keşfet", href: "#features" }]}
      imageSrc="http://img.b2bpic.net/free-photo/empty-national-secret-service-operation-room-used-follow-safety-alerts_482257-90051.jpg"
      imageAlt="modern security system monitor"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      title="Uzmanlık Alanlarımız ve Hizmetlerimiz"
      description="Elektronik güvenlikte projelendirmeden kurulum ve desteğe kadar uçtan uca çözümler sunuyoruz."
      features={[
        { id: "s1", title: "Güvenlik Kamera Sistemleri", description: "Yüksek çözünürlüklü ve yapay zeka destekli izleme çözümleri.", tag: "Kamera" },
        { id: "s2", title: "Erişim Kontrol Sistemleri", description: "Biyometrik okuyucular ve kartlı geçiş yönetim panelleri.", tag: "Kontrol" },
        { id: "s3", title: "Akıllı Yangın ve Alarm", description: "Risk durumunda anında müdahale ve uyarı ağları.", tag: "Alarm" }
      ]}
      className="py-20"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Hakkımızda"
      title="Güvenliğiniz, Bizim Uzmanlığımız"
      description="Hilltech, uzun yıllara dayanan deneyimi ile sektörün en güvenilir çözüm ortağıdır."
      subdescription="Teknolojik gelişmeleri yakından takip ederek, güvenliğinizi geleceğe hazırlıyoruz."
      icon={Shield}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-male-security-guard-with-radio-station-camera-screens_23-2150368740.jpg"
      imageAlt="security technician working"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Dome Kamera Sistemi", price: "1.200 TL", imageSrc: "http://img.b2bpic.net/free-photo/cctv-security-camera-ceiling_53876-123083.jpg" },
        { id: "p2", name: "Biyometrik Okuyucu", price: "2.500 TL", imageSrc: "http://img.b2bpic.net/free-photo/man-getting-intercom-read-his-fingerprint-open-door-with-gloves_176474-2789.jpg" },
        { id: "p3", name: "Akıllı Alarm Paneli", price: "3.100 TL", imageSrc: "http://img.b2bpic.net/free-photo/cctv-security-technology-with-lock-icon-digital-remix_53876-104935.jpg" },
        { id: "p4", name: "Kablosuz Sensör Seti", price: "850 TL", imageSrc: "http://img.b2bpic.net/free-photo/top-view-hand-with-robotic-vacuum-cleaner-home_23-2150663444.jpg" }
      ]}
      title="Öne Çıkan Ürünler"
      description="Endüstriyel ve ev tipi güvenlik ihtiyaçlarınız için profesyonel donanımlar."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      names={["TeknoSecure", "SafeGuard Pro", "VisionGuard", "SmartLock", "DefendTech"]}
      title="İş Ortaklarımız"
      description="Güvenilir markalarla en iyi teknolojik donanımları projelerimize dahil ediyoruz."
      textboxLayout="split"
      useInvertedBackground={false}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Ahmet Y.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-succesful-senior-entrrepeneur-conference-room_482257-4100.jpg" },
        { id: "t2", name: "Ayşe M.", imageSrc: "http://img.b2bpic.net/free-photo/blond-business-woman-standing-with-crossed-arms_23-2148095775.jpg" }
      ]}
      cardTitle="Müşterilerimizin Yorumları"
      cardTag="Referanslar"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        { id: "q1", title: "Sistem kurulumu ne kadar sürer?", content: "Genellikle 1-2 iş günü içerisinde tamamlanır." },
        { id: "q2", title: "Teknik destek veriyor musunuz?", content: "Tüm ürünlerimize 7/24 teknik destek sağlıyoruz." }
      ]}
      title="Sıkça Sorulan Sorular"
      description="Güvenlik sistemlerimiz hakkında en çok merak edilenler."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "downward-rays-animated" }}
      text="Ücretsiz keşif ve fiyat teklifi için bizimle iletişime geçin."
      buttons={[{ text: "İletişime Geç", href: "mailto:info@hilltech.com.tr" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Hilltech"
      leftLink={{ text: "Gizlilik Politikası", href: "#" }}
      rightLink={{ text: "Kullanım Şartları", href: "#" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}