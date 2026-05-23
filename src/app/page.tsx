"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { AlertTriangle, Box, Shield, ShieldCheck, Smartphone, Zap } from "lucide-react";

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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Hilltech"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "plain",
      }}
      title="Hilltech Elektronik Güvenlik Sistemleri"
      description="Modern elektronik güvenlik çözümleriyle yaşam alanlarınızı ve ticari varlıklarınızı en üst düzey teknolojiyle koruma altına alıyoruz."
      buttons={[
        {
          text: "Hizmetlerimizi İnceleyin",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/empty-national-secret-service-operation-room-used-follow-safety-alerts_482257-90051.jpg"
      imageAlt="modern security system monitor"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-attractive-businesswoman-crossing-arms_1262-4724.jpg",
          alt: "Cheerful attractive businesswoman crossing arms",
        },
        {
          src: "http://img.b2bpic.net/free-photo/proud-middle-aged-business-man-conference-room_1262-3062.jpg",
          alt: "Proud Middle-aged Business Man in Conference Room",
        },
        {
          src: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-eyeglasses-crossed-arms-grey-background_613910-13618.jpg",
          alt: "Attractive blond business woman in a white shirt, eyeglasses and crossed arms over grey background.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-smiling-businesswoman-looking-camera-with-arms-crossed-portrait_1163-4337.jpg",
          alt: "Happy smiling businesswoman looking at camera with arms crossed, portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-successful-young-entrepreneur-standing-looking-camera-crossing-arms-smiling_482257-5018.jpg",
          alt: "Portrait of successful young entrepreneur standing looking at camera crossing arms and smiling",
        },
      ]}
      avatarText="Mutlu müşterilerimizden bazıları"
      marqueeItems={[
        {
          type: "text-icon",
          text: "7/24 Teknik Destek",
          icon: ShieldCheck,
        },
        {
          type: "text-icon",
          text: "Hızlı Kurulum",
          icon: Zap,
        },
        {
          type: "text-icon",
          text: "Modern Teknoloji",
          icon: Box,
        },
        {
          type: "text-icon",
          text: "Uzaktan Yönetim",
          icon: Smartphone,
        },
        {
          type: "text-icon",
          text: "Garanti Kapsamı",
          icon: AlertTriangle,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Hakkımızda"
      title="Güvenliğiniz, Bizim Uzmanlığımız"
      description="Hilltech, elektronik güvenlik sektöründe uzun yıllara dayanan deneyimi ile projelendirme, kurulum ve teknik destek hizmetleri sunmaktadır."
      subdescription="Sektörel standartların üzerinde, yenilikçi ve sürdürülebilir güvenlik sistemleriyle her zaman yanınızdayız."
      icon={Shield}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-male-security-guard-with-radio-station-camera-screens_23-2150368740.jpg"
      imageAlt="security technician working"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          title: "7/24 Kesintisiz İzleme",
          descriptions: [
            "Gelişmiş kamera sistemlerimizle her an güvendesiniz.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/composition-tablet-with-home-automation-app_23-2149036814.jpg",
        },
        {
          id: "f2",
          title: "Modern Biometrik Sistemler",
          descriptions: [
            "Parmak izi ve yüz tanıma teknolojileri ile erişim kontrolü.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-empty-steel-measure-cup-white-weights-isolated-wooden-table-professional-coffee-brewing_346278-1477.jpg",
        },
        {
          id: "f3",
          title: "Akıllı Alarm Altyapısı",
          descriptions: [
            "Yangın ve hırsızlık risklerine karşı anında uyarı sistemleri.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/selfservice-terminal-with-loading-screen-payment-device-displays-processing-operation_169016-72768.jpg",
        },
      ]}
      title="Neden Hilltech Güvenlik?"
      description="Entegre güvenlik çözümlerimizle mülklerinizi akıllıca koruyun."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Dome Kamera Sistemi",
          price: "1.200 TL",
          imageSrc: "http://img.b2bpic.net/free-photo/cctv-security-camera-ceiling_53876-123083.jpg",
        },
        {
          id: "p2",
          name: "Biyometrik Okuyucu",
          price: "2.500 TL",
          imageSrc: "http://img.b2bpic.net/free-photo/man-getting-intercom-read-his-fingerprint-open-door-with-gloves_176474-2789.jpg",
        },
        {
          id: "p3",
          name: "Akıllı Alarm Paneli",
          price: "3.100 TL",
          imageSrc: "http://img.b2bpic.net/free-photo/cctv-security-technology-with-lock-icon-digital-remix_53876-104935.jpg",
        },
        {
          id: "p4",
          name: "Kablosuz Sensör Seti",
          price: "850 TL",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-hand-with-robotic-vacuum-cleaner-home_23-2150663444.jpg",
        },
        {
          id: "p5",
          name: "Gaz ve Yangın Dedektörü",
          price: "950 TL",
          imageSrc: "http://img.b2bpic.net/free-photo/smart-home-innovation-technology-with-woman-using-control-panel_53876-124638.jpg",
        },
        {
          id: "p6",
          name: "DVR Kayıt Cihazı",
          price: "1.800 TL",
          imageSrc: "http://img.b2bpic.net/free-photo/masked-worker-photovoltaics-factory-stealing-proprietary-technology-data_482257-119560.jpg",
        },
      ]}
      title="Ürünlerimiz"
      description="Endüstriyel ve ev tipi güvenlik ihtiyaçlarınız için profesyonel ürün serimiz."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="split"
      useInvertedBackground={true}
      names={[
        "TeknoSecure",
        "SafeGuard Pro",
        "VisionGuard",
        "SmartLock Systems",
        "EliteAlarm Solutions",
        "DefendTech Industries",
        "CoreProtect Security",
      ]}
      title="Çözüm Ortaklarımız"
      description="Güvenilir markalarla en iyi teknolojik donanımları projelerimize dahil ediyoruz."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Ahmet Y.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-succesful-senior-entrrepeneur-conference-room_482257-4100.jpg",
        },
        {
          id: "t2",
          name: "Ayşe M.",
          imageSrc: "http://img.b2bpic.net/free-photo/blond-business-woman-standing-with-crossed-arms_23-2148095775.jpg",
        },
        {
          id: "t3",
          name: "Mehmet S.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-consultant-monitoring-financial-updates-targets-laptop_482257-130669.jpg",
        },
        {
          id: "t4",
          name: "Fatma K.",
          imageSrc: "http://img.b2bpic.net/free-photo/manufacturing-analyst-reviewing-solar-panel-production-workflow_482257-125954.jpg",
        },
        {
          id: "t5",
          name: "Canan D.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman-using-digital-tablet-home-office_329181-4278.jpg",
        },
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
        {
          id: "q1",
          title: "Sistem kurulumu ne kadar sürer?",
          content: "Kapsama göre değişmekle birlikte genellikle 1-2 iş günü içerisinde tamamlanır.",
        },
        {
          id: "q2",
          title: "Teknik destek veriyor musunuz?",
          content: "Evet, tüm ürünlerimiz için 7/24 teknik destek ve bakım garantisi sunuyoruz.",
        },
        {
          id: "q3",
          title: "Uzaktan izleme mümkün mü?",
          content: "Evet, mobil uygulamamız üzerinden dünyanın her yerinden sisteminizi izleyebilirsiniz.",
        },
      ]}
      title="Sıkça Sorulan Sorular"
      description="Güvenlik sistemlerimiz hakkında en çok merak edilenler."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "downward-rays-animated",
      }}
      text="Ücretsiz keşif ve fiyat teklifi için bizimle iletişime geçin."
      buttons={[
        {
          text: "Hemen İletişime Geç",
          href: "mailto:info@hilltech.com.tr",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Hilltech"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
