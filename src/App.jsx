import { useState, useEffect } from 'react'
import avatarImg from './assets/avatar.png'
import erpCrmImg from './assets/erp_crm.png'
import warehouseStockImg from './assets/warehouse_stock.png'
import ecommerceImg from './assets/ecommerce.png'
import cloudStorageImg from './assets/cloud_storage.png'
import securityImg from './assets/security.png'
import domainHostingImg from './assets/domain_hosting.png'
import customAppsImg from './assets/custom_apps.png'
import './App.css'

// Custom HSL Accent presets
const ACCENTS = [
  { name: 'Purple', hue: 270, color: '#a855f7' },
  { name: 'Emerald', hue: 142, color: '#10b981' },
  { name: 'Blue', hue: 217, color: '#3b82f6' },
  { name: 'Rose', hue: 330, color: '#f43f5e' },
  { name: 'Orange', hue: 24, color: '#f97316' }
];

// Bilingual Translations Mapping
const TRANSLATIONS = {
  tr: {
    navAbout: "Hakkımda",
    navProjects: "Hizmetlerim",
    navTimeline: "Deneyim",
    navContact: "İletişim",
    heroTitle: "Merhaba, Ben",
    heroDescription: "Kurumsal ERP/CRM sistemleri, depo ve stok yönetimi, e-ticaret siteleri, bulut çözümleri ve siber güvenlik alanlarında uçtan uca modern yazılım hizmetleri sunuyorum.",
    heroAction1: "Hizmetlerimi Gör",
    heroAction2: "İletişime Geç",
    aboutHeaderTag: "Özgeçmiş",
    aboutHeaderTitle: "Hakkımda & Yetenekler",
    aboutHeaderSubtitle: "Yazılım felsefem ve sunduğum teknolojik çözümler.",
    aboutBio: "Ben Akın Karadaş. İşletmenizin dijital dönüşümünü hızlandıracak, yüksek güvenlikli, hızlı ve ölçeklenebilir altyapılar kuruyorum. ERP, CRM, Depo Kontrol Sistemleri ve e-ticaret çözümlerimle iş süreçlerinizi otomatikleştirmenize yardımcı oluyorum.",
    statExperience: "Yıl Deneyim",
    statProjects: "Başarılı Entegrasyon",
    statSatisfaction: "Müşteri Memnuniyeti",
    tabSkills: "Uzmanlıklar",
    tabEducation: "Vizyonum",
    tabTools: "Teknolojiler",
    timelineHeaderTag: "Yolculuk",
    timelineHeaderTitle: "Kariyer Zaman Tüneli",
    timelineHeaderSubtitle: "Akın Karadaş olarak iş dünyasına kattığım değerler.",
    contactHeaderTag: "İletişim",
    contactHeaderTitle: "Bana Ulaşın & Teklif Alın",
    contactHeaderSubtitle: "Projeleriniz için teklif isteyebilir veya doğrudan iletişime geçebilirsiniz.",
    contactFormName: "Adınız Soyadınız",
    contactFormEmail: "E-posta Adresiniz",
    contactFormMsg: "Mesajınız veya Teklif Talebiniz",
    contactFormSubmit: "Gönder",
    boardTitle: "Ziyaretçi Defteri",
    boardInfo: "Ziyaretçilerimizden gelen canlı geri bildirimler. Mesajınız anında buraya yansır.",
    estimatorTitle: "Akıllı Proje Fiyat ve Süre Hesaplayıcı",
    estimatorSubtitle: "İhtiyacınız olan hizmetleri seçin, anında tahmini bütçe ve süre edinin.",
    estimatorServices: "İhtiyacınız Olan Hizmetler",
    estimatorScale: "İşletme Ölçeği",
    estimatorScaleStartup: "Kişisel / Startup",
    estimatorScaleSMB: "Orta Ölçekli (KOBİ)",
    estimatorScaleEnterprise: "Büyük Ölçekli / Kurumsal",
    estimatorSpeed: "Geliştirme Hızı",
    estimatorSpeedStandard: "Standart Süre",
    estimatorSpeedExpress: "Hızlı Teslimat (+%30 Maliyet)",
    estimatorResultCost: "Tahmini Bütçe",
    estimatorResultTime: "Tahmini Süre",
    estimatorResultAction: "Bu Detaylarla Teklif İste",
    estimatorResultTimeVal: "hafta",
    techHeader: "Kullanılan Teknolojiler",
    projectLink: "Hizmet Detay Talebi",
    statusBadge: "Birlikte Çalışmaya Açık",
    visitorBoardLive: "Canlı",
    successMsg: "Talebiniz başarıyla alındı ve Ziyaretçi Defteri'ne eklendi!",
    estimationTitleInput: "Tahmini Proje Detayları:",
    estimationServicesInput: "Hizmetler:",
    estimationScaleInput: "Ölçek:",
    estimationSpeedInput: "Hız:",
    estimationCostInput: "Maliyet:",
    estimationTimeInput: "Süre:",
    estimationDisclaimer: "Bu otomatik bir tahmindir. Kesin fiyatlandırma için iletişime geçin."
  },
  en: {
    navAbout: "About Me",
    navProjects: "Services",
    navTimeline: "Experience",
    navContact: "Contact",
    heroTitle: "Hello, I am",
    heroDescription: "Providing end-to-end modern software services in corporate ERP/CRM systems, warehouse and stock management, e-commerce, cloud solutions, and cyber security.",
    heroAction1: "View Services",
    heroAction2: "Contact Me",
    aboutHeaderTag: "Resume",
    aboutHeaderTitle: "About & Skills",
    aboutHeaderSubtitle: "My software philosophy and the technological solutions I offer.",
    aboutBio: "I am Akın Karadaş. I build highly secure, fast, and scalable infrastructures to accelerate the digital transformation of your business. I help automate your workflows with ERP, CRM, Warehouse Control Systems, and e-commerce solutions.",
    statExperience: "Years Experience",
    statProjects: "Successful Integrations",
    statSatisfaction: "Client Satisfaction",
    tabSkills: "Expertise",
    tabEducation: "My Vision",
    tabTools: "Technologies",
    timelineHeaderTag: "Journey",
    timelineHeaderTitle: "Career Timeline",
    timelineHeaderSubtitle: "The value I bring to the business world as Akın Karadaş.",
    contactHeaderTag: "Contact",
    contactHeaderTitle: "Contact Me & Get Quote",
    contactHeaderSubtitle: "You can request a quote for your projects or get in touch directly.",
    contactFormName: "Your Full Name",
    contactFormEmail: "Your Email Address",
    contactFormMsg: "Your Message or Quote Details",
    contactFormSubmit: "Send Message",
    boardTitle: "Visitor Guestbook",
    boardInfo: "Live feedback from our visitors. Your message will instantly appear here.",
    estimatorTitle: "Smart Project Cost & Timeline Estimator",
    estimatorSubtitle: "Select the services you need to instantly get an estimated budget and duration.",
    estimatorServices: "Services You Need",
    estimatorScale: "Business Scale",
    estimatorScaleStartup: "Personal / Startup",
    estimatorScaleSMB: "Medium Business (SMB)",
    estimatorScaleEnterprise: "Large Enterprise",
    estimatorSpeed: "Development Speed",
    estimatorSpeedStandard: "Standard Timeline",
    estimatorSpeedExpress: "Express Delivery (+30% Cost)",
    estimatorResultCost: "Estimated Budget",
    estimatorResultTime: "Estimated Duration",
    estimatorResultAction: "Request Quote with these Details",
    estimatorResultTimeVal: "weeks",
    techHeader: "Technologies Used",
    projectLink: "Request Service Details",
    statusBadge: "Available for Work",
    visitorBoardLive: "Live",
    successMsg: "Your request was received successfully and added to the guestbook!",
    estimationTitleInput: "Estimated Project Details:",
    estimationServicesInput: "Services:",
    estimationScaleInput: "Scale:",
    estimationSpeedInput: "Speed:",
    estimationCostInput: "Cost:",
    estimationTimeInput: "Duration:",
    estimationDisclaimer: "This is an automated estimate. Contact for exact pricing."
  }
};

// Custom Service Projects Database
const SERVICES = [
  {
    id: 1,
    title_tr: 'Kurumsal ERP ve CRM Sistemleri',
    title_en: 'Enterprise ERP & CRM Systems',
    category: 'systems',
    baseCost: 40000,
    baseWeeks: 8,
    description_tr: 'İşletmenizin kaynaklarını ve müşteri ilişkilerini uçtan uca yöneten, verimliliği artıran kurumsal çözümler.',
    description_en: 'End-to-end enterprise solutions managing your resources and customer relationships, maximizing efficiency.',
    longDescription_tr: 'Akın Karadaş olarak geliştirdiğim ERP ve CRM çözümleri; finans, muhasebe, satın alma, İK ve müşteri ilişkileri verilerini tek merkezde birleştirir. Esnek entegrasyon özellikleri, kolay raporlama ve gelişmiş güvenlik standartları sunar.',
    longDescription_en: 'ERP and CRM solutions built by Akın Karadaş consolidate finance, accounting, procurement, HR, and customer relationships in a single hub. Offers flexible integrations, easy reporting, and advanced security.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Sequelize', 'REST APIs'],
    image: erpCrmImg
  },
  {
    id: 2,
    title_tr: 'Depo ve Stok Yönetim Sistemleri',
    title_en: 'Warehouse & Inventory Systems',
    category: 'systems',
    baseCost: 35000,
    baseWeeks: 6,
    description_tr: 'Barkod ve RFID entegrasyonlu, gerçek zamanlı stok takibi ve akıllı lojistik yönetim sistemleri.',
    description_en: 'Real-time stock tracking and smart logistics management systems with barcode & RFID integration.',
    longDescription_tr: 'Hatasız sevkiyat ve depo yerleşimi için özel tasarlanan WMS (Warehouse Management) çözümü. Giriş-çıkış hareketleri, kritik stok seviyesi uyarıları ve detaylı sayım raporları içerir.',
    longDescription_en: 'Tailored WMS (Warehouse Management) solutions designed for error-free shipping and bin allocation. Includes inbound/outbound logging, critical level alerts, and comprehensive auditing reports.',
    tech: ['React', 'Express', 'MongoDB', 'RFID API', 'Barcode Scanner SDK'],
    image: warehouseStockImg
  },
  {
    id: 3,
    title_tr: 'Web Siteleri ve E-Ticaret Platformları',
    title_en: 'Websites & E-Commerce Platforms',
    category: 'web',
    baseCost: 25000,
    baseWeeks: 4,
    description_tr: 'Yüksek hızlı, modern SEO uyumlu kurumsal web siteleri ve yüksek dönüşüm oranlı e-ticaret platformları.',
    description_en: 'High-speed, modern SEO-friendly corporate websites and high-conversion e-commerce platforms.',
    longDescription_tr: 'Özel sepet mimarisi, zengin ödeme geçidi entegrasyonları (iyzico, Stripe), gelişmiş admin paneli ve SEO uyumlu yapısıyla satışlarınızı artıran dijital mağazalar.',
    longDescription_en: 'Digital storefronts configured with custom cart structures, multiple payment gateways (Stripe, iyzico), advanced administration panels, and search engine optimization frameworks.',
    tech: ['Next.js', 'Redux Toolkit', 'Stripe API', 'PostgreSQL', 'Node.js'],
    image: ecommerceImg
  },
  {
    id: 4,
    title_tr: 'Bulut Depolama Çözümleri',
    title_en: 'Cloud Storage Solutions',
    category: 'cloud',
    baseCost: 20000,
    baseWeeks: 4,
    description_tr: 'Verilerinizi güvenli, hızlı ve her yerden erişilebilir kılan ölçeklenebilir bulut altyapıları.',
    description_en: 'Scalable cloud infrastructures making your data secure, fast, and accessible from anywhere.',
    longDescription_tr: 'AWS ve Google Cloud altyapıları üzerinde, veri yedekliliği yüksek, otomatik ölçeklenen (auto-scaling) dosya ve veri tabanı saklama sistemleri tasarımı ve devreye alınması.',
    longDescription_en: 'Design and deployment of highly redundant, auto-scaling database and file storage systems hosted on AWS and Google Cloud Platform.',
    tech: ['AWS S3', 'GCP Storage', 'MinIO', 'Docker', 'Kubernetes'],
    image: cloudStorageImg
  },
  {
    id: 5,
    title_tr: 'Güvenlik ve Siber Güvenlik Çözümleri',
    title_en: 'Security & Cyber Security Solutions',
    category: 'cloud',
    baseCost: 15000,
    baseWeeks: 3,
    description_tr: 'Sistemlerinizi siber tehditlere karşı koruyan güvenlik duvarı, sızma testleri ve veri şifreleme hizmetleri.',
    description_en: 'Firewall protection, penetration testing, and data encryption services shielding your systems from cyber threats.',
    longDescription_tr: 'Ağ güvenliği denetimleri, SSL/TLS konfigürasyonları, sistem sızma testleri, KVKK/GDPR uyumlu veri maskeleme ve güvenli kimlik doğrulama (JWT, OAuth2) entegrasyonları.',
    longDescription_en: 'Network security audits, SSL/TLS hardening, penetration tests, KVKK/GDPR-compliant data masking, and secure authentication (JWT, OAuth2) integrations.',
    tech: ['OpenSSL', 'JWT', 'Nginx WAF', 'OAuth2', 'OWASP Top 10 Auditing'],
    image: securityImg
  },
  {
    id: 6,
    title_tr: 'Kaliteli Alan Adı ve Hosting Hizmetleri',
    title_en: 'Premium Domain & Hosting Services',
    category: 'web',
    baseCost: 5000,
    baseWeeks: 1,
    description_tr: 'Yüksek kullanılabilirlik ve %99.9 çalışma süresi (uptime) garantili hızlı ve kaliteli barındırma çözümleri.',
    description_en: 'Fast and high-quality hosting solutions with high availability and 99.9% uptime guarantee.',
    longDescription_tr: 'Kurumsal siteleriniz için yüksek performanslı VPS/VDS sunucuları, DNS yönetim hizmetleri, periyodik yedeklemeler ve ücretsiz SSL kurulumu.',
    longDescription_en: 'High-performance VPS/VDS servers, managed DNS services, periodic backups, and free SSL provisioning tailored for your enterprise applications.',
    tech: ['Linux Server', 'cPanel/Plesk', 'Cloudflare DNS', 'Nginx', 'SSL Certs'],
    image: domainHostingImg
  },
  {
    id: 7,
    title_tr: 'Kişisel ve Özel İstek Uygulamaları',
    title_en: 'Bespoke & Custom Applications',
    category: 'custom',
    baseCost: 30000,
    baseWeeks: 5,
    description_tr: 'İş modelinize veya kişisel ihtiyaçlarınıza özel olarak sıfırdan geliştirilen butik yazılım çözümleri.',
    description_en: 'Tailor-made software solutions developed from scratch to fit your business model or personal needs.',
    longDescription_tr: 'Dışarıda hazır satılmayan, doğrudan spesifik bir probleminizi çözmek için tasarlanmış özel algoritma, otomasyon ve veri kazıma (scraping) araçları.',
    longDescription_en: 'Custom algorithms, task automation engines, and data scraping utilities specifically designed to resolve complex proprietary bottlenecks.',
    tech: ['React', 'Python', 'Selenium', 'FastAPI', 'Node.js'],
    image: customAppsImg
  }
];

// Typing Text constants
const TYPING_WORDS_TR = ['Akın Karadaş', 'Full-Stack Developer', 'Kurumsal Sistem Tasarımcısı', 'Siber Güvenlik Danışmanı'];
const TYPING_WORDS_EN = ['Akın Karadaş', 'Full-Stack Developer', 'Enterprise Architect', 'Cyber Security Consultant'];

function App() {
  // Lang state
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'tr';
  });

  // Active language resources shorthand
  const t = TRANSLATIONS[lang];

  // Theme state (Dark/Light)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  // Hue theme color state (Accent Color)
  const [hue, setHue] = useState(() => {
    const saved = localStorage.getItem('hue');
    return saved ? parseInt(saved) : 270; // Purple default
  });

  // Active section for navigation highlight
  const [activeSection, setActiveSection] = useState('hero');

  // Typing animation state
  const words = lang === 'tr' ? TYPING_WORDS_TR : TYPING_WORDS_EN;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // About tab state
  const [activeTab, setActiveTab] = useState('skills');

  // Services filter state
  const [filter, setFilter] = useState('all');

  // Modal project state
  const [selectedService, setSelectedService] = useState(null);

  // Project Cost Estimator State
  const [selectedServices, setSelectedServices] = useState([1]); // Default ERP selected
  const [scale, setScale] = useState('smb'); // startup, smb, enterprise
  const [speed, setSpeed] = useState('standard'); // standard, express

  // Contact form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formSubmitError, setFormSubmitError] = useState('');

  // Visitor Message Board state
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('visitorMessages');
    return saved ? JSON.parse(saved) : [
      { name: 'Kaan Acar', message: 'Akın Bey depo otomasyonu projemizi tam zamanında teslim etti. Sistem tıkır tıkır çalışıyor, tavsiye ederim.', time: '3 saat önce' },
      { name: 'Selin Yıldız', message: 'Arayüz tasarımı ve çoklu dil geçişleri gerçekten şahane olmuş, ellerinize sağlık.', time: '1 gün önce' }
    ];
  });

  // Apply Theme Mode (Dark/Light)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Apply Theme Accent Hue Color
  useEffect(() => {
    document.documentElement.style.setProperty('--hue', hue);
    localStorage.setItem('hue', hue);
  }, [hue]);

  // Typing effect logic
  useEffect(() => {
    let timer;
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
      if (typedText === '') {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 500);
      } else {
        timer = setTimeout(() => {
          setTypedText(prev => prev.slice(0, -1));
        }, 50);
      }
    } else {
      if (typedText === currentWord) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timer = setTimeout(() => {
          setTypedText(currentWord.slice(0, typedText.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentWordIndex, words]);

  // Estimator Math Logic calculated directly on render
  let baseCostSum = 0;
  let baseWeeksSum = 0;

  selectedServices.forEach((id) => {
    const service = SERVICES.find((s) => s.id === id);
    if (service) {
      baseCostSum += service.baseCost;
      baseWeeksSum += service.baseWeeks;
    }
  });

  // Scale multiplier
  let scaleMult = 1.0;
  let scaleWeeksMult = 1.0;
  if (scale === 'smb') {
    scaleMult = 1.5;
    scaleWeeksMult = 1.4;
  } else if (scale === 'enterprise') {
    scaleMult = 2.5;
    scaleWeeksMult = 2.0;
  }

  // Speed multiplier
  let speedMult = 1.0;
  let speedWeeksMult = 1.0;
  if (speed === 'express') {
    speedMult = 1.3;
    speedWeeksMult = 0.7; // 30% faster
  }

  const calculatedCost = Math.round(baseCostSum * scaleMult * speedMult);
  const calculatedWeeks = Math.max(1, Math.round(baseWeeksSum * scaleWeeksMult * speedWeeksMult));

  const estimation = { cost: calculatedCost, weeks: calculatedWeeks };

  // Scroll spy to highlight active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'estimator', 'timeline', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Save active language
  const handleLangToggle = (selectedLang) => {
    setLang(selectedLang);
    localStorage.setItem('lang', selectedLang);
    setTypedText(''); // reset typing
  };

  // Form input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Estimator selection toggler
  const handleServiceSelect = (id) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(prev => prev.filter(item => item !== id));
      }
    } else {
      setSelectedServices(prev => [...prev, id]);
    }
  };

  // Push quote parameters to form fields
  const handleExportEstimationToForm = () => {
    const selectedTextList = selectedServices
      .map(id => SERVICES.find(s => s.id === id))
      .map(s => (lang === 'tr' ? s.title_tr : s.title_en))
      .join(', ');

    const scaleLabel = scale === 'startup' 
      ? t.estimatorScaleStartup 
      : scale === 'smb' 
        ? t.estimatorScaleSMB 
        : t.estimatorScaleEnterprise;

    const speedLabel = speed === 'standard' ? t.estimatorSpeedStandard : t.estimatorSpeedExpress;

    const quoteMessage = `--- ${t.estimationTitleInput} ---
* ${t.estimationServicesInput} ${selectedTextList}
* ${t.estimationScaleInput} ${scaleLabel}
* ${t.estimationSpeedInput} ${speedLabel}
* ${t.estimationCostInput} ${estimation.cost.toLocaleString('tr-TR')} TL
* ${t.estimationTimeInput} ~${estimation.weeks} ${t.estimatorResultTimeVal}
(${t.estimationDisclaimer})`;

    setFormData(prev => ({
      ...prev,
      message: quoteMessage
    }));

    // Scroll to contact form smoothly
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = lang === 'tr' ? 'İsim alanı boş bırakılamaz' : 'Name field cannot be empty';
    if (!formData.email.trim()) {
      errors.email = lang === 'tr' ? 'E-posta alanı boş bırakılamaz' : 'Email field cannot be empty';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = lang === 'tr' ? 'Geçerli bir e-posta adresi girin' : 'Enter a valid email address';
    }
    if (!formData.message.trim()) errors.message = lang === 'tr' ? 'Mesaj alanı boş bırakılamaz' : 'Message field cannot be empty';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormLoading(true);
    setFormSubmitError('');
    setFormSuccess(false);

    try {
      const apiUrl = import.meta.env.DEV ? 'http://localhost:5000/api/contact' : '/api/contact';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || (lang === 'tr' ? 'Bir hata oluştu.' : 'An error occurred.'));
      }

      // Success flow
      setFormSuccess(true);
      const newMsg = {
        name: formData.name,
        message: formData.message,
        time: lang === 'tr' ? 'Şimdi' : 'Just now'
      };
      
      const updatedMessages = [newMsg, ...messages];
      setMessages(updatedMessages);
      localStorage.setItem('visitorMessages', JSON.stringify(updatedMessages));

      // Clear form
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setFormSuccess(false);
      }, 7000);
    } catch (err) {
      console.error(err);
      setFormSubmitError(err.message);
    } finally {
      setFormLoading(false);
    }
  };

  // Filtered services list
  const filteredServices = filter === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === filter);

  return (
    <>
      {/* Header / Navbar */}
      <header className="navbar glass-card">
        <div className="nav-container">
          <a href="#hero" className="nav-logo">
            <span className="logo-dot"></span> akın<span>.karadaş</span>
          </a>
          <nav className="nav-links">
            <a href="#about" className={activeSection === 'about' ? 'active' : ''}>{t.navAbout}</a>
            <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>{t.navProjects}</a>
            <a href="#estimator" className={activeSection === 'estimator' ? 'active' : ''}>Bütçe</a>
            <a href="#timeline" className={activeSection === 'timeline' ? 'active' : ''}>{t.navTimeline}</a>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>{t.navContact}</a>
          </nav>
          
          <div className="navbar-controls">
            {/* Dynamic Color Selector dots */}
            <div className="accent-picker">
              {ACCENTS.map((acc) => (
                <button
                  key={acc.name}
                  className={hue === acc.hue ? 'accent-dot active' : 'accent-dot'}
                  style={{ backgroundColor: acc.color }}
                  onClick={() => setHue(acc.hue)}
                  title={acc.name}
                />
              ))}
            </div>

            {/* Language switch */}
            <div className="lang-switcher">
              <button 
                className={lang === 'tr' ? 'lang-btn active' : 'lang-btn'} 
                onClick={() => handleLangToggle('tr')}
              >
                TR
              </button>
              <button 
                className={lang === 'en' ? 'lang-btn active' : 'lang-btn'} 
                onClick={() => handleLangToggle('en')}
              >
                EN
              </button>
            </div>

            {/* Mode Switcher */}
            <button 
              className="theme-toggle" 
              onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="section hero-section">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="hero-content">
          <div className="hero-avatar animate-scale-up">
            <div className="avatar-wrapper">
              <img src={avatarImg} alt="Akın Karadaş Avatar" />
            </div>
            <div className="status-badge">
              <span className="pulse-dot"></span> {t.statusBadge}
            </div>
          </div>
          
          <div className="hero-text animate-slide-up">
            <h1 className="hero-title">
              {t.heroTitle} <span className="gradient-text">Akın Karadaş</span>
            </h1>
            <h2 className="hero-subtitle">
              <span className="typing-text">{typedText}</span><span className="cursor">|</span>
            </h2>
            <p className="hero-description">
              {t.heroDescription}
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary glow-button">
                {t.heroAction1}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="btn btn-secondary">
                {t.heroAction2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="section-header">
          <span className="section-tag">{t.aboutHeaderTag}</span>
          <h2 className="section-title">{t.aboutHeaderTitle}</h2>
          <p className="section-subtitle">{t.aboutHeaderSubtitle}</p>
        </div>

        <div className="about-grid">
          {/* Left Info Panel */}
          <div className="about-info glass-card">
            <h3>{lang === 'tr' ? 'Akın Karadaş Kimdir?' : 'Who is Akın Karadaş?'}</h3>
            <p className="about-bio">
              {t.aboutBio}
            </p>
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">{t.statExperience}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">{t.statProjects}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">{t.statSatisfaction}</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Tab Panel */}
          <div className="about-tabs glass-card">
            <div className="tabs-header">
              <button 
                className={activeTab === 'skills' ? 'tab-btn active' : 'tab-btn'} 
                onClick={() => setActiveTab('skills')}
              >
                {t.tabSkills}
              </button>
              <button 
                className={activeTab === 'experience' ? 'tab-btn active' : 'tab-btn'} 
                onClick={() => setActiveTab('experience')}
              >
                {t.tabEducation}
              </button>
              <button 
                className={activeTab === 'tools' ? 'tab-btn active' : 'tab-btn'} 
                onClick={() => setActiveTab('tools')}
              >
                {t.tabTools}
              </button>
            </div>

            <div className="tabs-content">
              {activeTab === 'skills' && (
                <div className="skills-tab animate-fade-in">
                  <div className="skill-progress">
                    <div className="skill-label">
                      <span>ERP & CRM Architecture</span>
                      <span>95%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="skill-label">
                      <span>Warehouse / Inventory Logics</span>
                      <span>90%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="skill-label">
                      <span>Full-Stack Web (React, Node.js, Next.js)</span>
                      <span>95%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="skill-label">
                      <span>Cloud Systems (AWS / GCP / VPS)</span>
                      <span>85%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="education-tab animate-fade-in">
                  <div className="edu-item">
                    <h4>{lang === 'tr' ? 'Uçtan Uca Kurumsal Mimari' : 'End-to-End Enterprise Architecture'}</h4>
                    <p className="edu-meta">{lang === 'tr' ? 'Vizyonumuz' : 'Our Vision'}</p>
                    <p className="edu-desc">
                      {lang === 'tr' 
                        ? 'İşletmelerin ihtiyaç duyduğu ERP, CRM ve WMS sistemlerini birbirinden kopuk değil, tek bir entegre organizasyon olarak çalışacak şekilde tasarlıyorum.'
                        : 'Designing ERP, CRM, and WMS software not as isolated systems, but as a fully unified digital system tailored for businesses.'}
                    </p>
                  </div>
                  <div className="edu-item">
                    <h4>{lang === 'tr' ? 'Yüksek Uptime & Güvenlik Standardı' : 'High Uptime & Bulletproof Security'}</h4>
                    <p className="edu-meta">{lang === 'tr' ? 'Güvencemiz' : 'Our Guarantee'}</p>
                    <p className="edu-desc">
                      {lang === 'tr'
                        ? 'Bulut ve VPS üzerinde çalışan tüm projelerde yedeklilik planları ve sızma testleri gerçekleştirerek maksimum uptime verimliliği ve veri güvenliği sağlıyorum.'
                        : 'Conducting routine penetration audits and cloud auto-backups to ensure high availability (99.9% uptime) and secure data standards.'}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'tools' && (
                <div className="tools-tab animate-fade-in">
                  <div className="tools-grid">
                    <span className="tool-badge">React & Next.js</span>
                    <span className="tool-badge">Node.js / Express</span>
                    <span className="tool-badge">PostgreSQL & Mongo</span>
                    <span className="tool-badge">AWS S3 / VPS Linux</span>
                    <span className="tool-badge">Docker & Kubernetes</span>
                    <span className="tool-badge">Git & GitHub</span>
                    <span className="tool-badge">Figma UI/UX</span>
                    <span className="tool-badge">Siber Güvenlik / WAF</span>
                    <span className="tool-badge">Python / Automation</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="projects" className="section projects-section">
        <div className="section-header">
          <span className="section-tag">{t.navProjects}</span>
          <h2 className="section-title">{lang === 'tr' ? 'Yazılım Hizmetlerim' : 'My Software Services'}</h2>
          <p className="section-subtitle">{lang === 'tr' ? 'İşletmenizin ölçeğine uygun, yüksek kaliteli siber çözümler.' : 'High-quality software solutions tailored to your business scale.'}</p>
        </div>

        {/* Filter Controls */}
        <div className="project-filters">
          <button className={filter === 'all' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('all')}>
            {lang === 'tr' ? 'Hepsi' : 'All'}
          </button>
          <button className={filter === 'systems' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('systems')}>
            {lang === 'tr' ? 'Kurumsal Sistemler' : 'Systems'}
          </button>
          <button className={filter === 'web' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('web')}>
            {lang === 'tr' ? 'Web & E-Ticaret' : 'Web & Shop'}
          </button>
          <button className={filter === 'cloud' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('cloud')}>
            {lang === 'tr' ? 'Bulut & Güvenlik' : 'Cloud & Sec'}
          </button>
          <button className={filter === 'custom' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('custom')}>
            {lang === 'tr' ? 'Özel İstekler' : 'Bespoke'}
          </button>
        </div>

        {/* Project Grid */}
        <div className="projects-grid">
          {filteredServices.map((service) => (
            <div key={service.id} className="project-card glass-card animate-scale-up">
              <div className="project-image-wrapper">
                <img src={service.image} alt={lang === 'tr' ? service.title_tr : service.title_en} />
                <div className="project-image-overlay">
                  <button className="btn btn-detail" onClick={() => setSelectedService(service)}>
                    {lang === 'tr' ? 'Detayları İncele' : 'View Details'}
                  </button>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category-badge">{service.category.toUpperCase()}</span>
                <h3>{lang === 'tr' ? service.title_tr : service.title_en}</h3>
                <p>{lang === 'tr' ? service.description_tr : service.description_en}</p>
                <div className="project-tech-list">
                  {service.tech.map((techItem, idx) => (
                    <span key={idx} className="tech-badge">{techItem}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Estimator Section */}
      <section id="estimator" className="section estimator-section">
        <div className="hero-glow-1" style={{ top: '30%', right: '10%' }}></div>
        <div className="section-header">
          <span className="section-tag">Bütçe Analizi</span>
          <h2 className="section-title">{t.estimatorTitle}</h2>
          <p className="section-subtitle">{t.estimatorSubtitle}</p>
        </div>

        <div className="estimator-grid glass-card">
          <div className="estimator-form-panel">
            <h3 className="estimator-panel-title">{t.estimatorServices}</h3>
            <div className="estimator-checkbox-group">
              {SERVICES.map((service) => (
                <label 
                  key={service.id} 
                  className={selectedServices.includes(service.id) ? 'estimator-checkbox-card active' : 'estimator-checkbox-card'}
                >
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(service.id)}
                    onChange={() => handleServiceSelect(service.id)}
                  />
                  <div className="checkbox-info">
                    <span className="checkbox-title">{lang === 'tr' ? service.title_tr : service.title_en}</span>
                    <span className="checkbox-price">~{service.baseCost.toLocaleString('tr-TR')} TL</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="estimator-results-panel">
            <div className="estimator-options">
              <div className="option-group">
                <h4>{t.estimatorScale}</h4>
                <div className="radio-group">
                  <label className={scale === 'startup' ? 'radio-card active' : 'radio-card'}>
                    <input type="radio" name="scale" checked={scale === 'startup'} onChange={() => setScale('startup')} />
                    <span>{t.estimatorScaleStartup} (1.0x)</span>
                  </label>
                  <label className={scale === 'smb' ? 'radio-card active' : 'radio-card'}>
                    <input type="radio" name="scale" checked={scale === 'smb'} onChange={() => setScale('smb')} />
                    <span>{t.estimatorScaleSMB} (1.5x)</span>
                  </label>
                  <label className={scale === 'enterprise' ? 'radio-card active' : 'radio-card'}>
                    <input type="radio" name="scale" checked={scale === 'enterprise'} onChange={() => setScale('enterprise')} />
                    <span>{t.estimatorScaleEnterprise} (2.5x)</span>
                  </label>
                </div>
              </div>

              <div className="option-group">
                <h4>{t.estimatorSpeed}</h4>
                <div className="radio-group">
                  <label className={speed === 'standard' ? 'radio-card active' : 'radio-card'}>
                    <input type="radio" name="speed" checked={speed === 'standard'} onChange={() => setSpeed('standard')} />
                    <span>{t.estimatorSpeedStandard}</span>
                  </label>
                  <label className={speed === 'express' ? 'radio-card active' : 'radio-card'}>
                    <input type="radio" name="speed" checked={speed === 'express'} onChange={() => setSpeed('express')} />
                    <span>{t.estimatorSpeedExpress}</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="results-box">
              <div className="result-metric">
                <span className="metric-label">{t.estimatorResultCost}</span>
                <span className="metric-value">{estimation.cost.toLocaleString('tr-TR')} <span className="currency">TL</span></span>
              </div>
              <div className="result-metric">
                <span className="metric-label">{t.estimatorResultTime}</span>
                <span className="metric-value">~{estimation.weeks} <span className="weeks-lbl">{t.estimatorResultTimeVal}</span></span>
              </div>

              <button className="btn btn-primary export-btn" onClick={handleExportEstimationToForm}>
                {t.estimatorResultAction}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Dialog */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content glass-card animate-scale-up" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedService(null)} aria-label="Close">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="modal-body">
              <img src={selectedService.image} alt={lang === 'tr' ? selectedService.title_tr : selectedService.title_en} className="modal-image" />
              <div className="modal-info">
                <span className="project-category-badge">{selectedService.category.toUpperCase()}</span>
                <h2>{lang === 'tr' ? selectedService.title_tr : selectedService.title_en}</h2>
                <p className="modal-long-desc">{lang === 'tr' ? selectedService.longDescription_tr : selectedService.longDescription_en}</p>
                <div className="modal-tech-section">
                  <h4>{t.techHeader}:</h4>
                  <div className="project-tech-list">
                    {selectedService.tech.map((techItem, idx) => (
                      <span key={idx} className="tech-badge">{techItem}</span>
                    ))}
                  </div>
                </div>
                <div className="modal-actions">
                  <button className="btn btn-primary" onClick={() => { setSelectedService(null); handleExportEstimationToForm(); }}>
                    {t.projectLink}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Career Timeline Section */}
      <section id="timeline" className="section timeline-section">
        <div className="section-header">
          <span className="section-tag">{t.timelineHeaderTag}</span>
          <h2 className="section-title">{t.timelineHeaderTitle}</h2>
          <p className="section-subtitle">{t.timelineHeaderSubtitle}</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          <div className="timeline-item left glass-card">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2024 - {lang === 'tr' ? 'Günümüz' : 'Present'}</div>
            <h3>{lang === 'tr' ? 'Kıdemli Kurumsal Sistem Mühendisi' : 'Senior Enterprise System Engineer'}</h3>
            <h4 className="company">Akın IT Solutions</h4>
            <p>
              {lang === 'tr'
                ? 'Şirketlerin iş akışlarını otomatikleştirerek ERP, CRM ve depo stok yönetimi çözümlerini bulut üzerinde kurup yönetmek.'
                : 'Automating business processes by architecting and hosting custom cloud ERP, CRM, and inventory warehouse controls.'}
            </p>
          </div>

          <div className="timeline-item right glass-card">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2021 - 2024</div>
            <h3>{lang === 'tr' ? 'Kıdemli Full-Stack Geliştirici' : 'Senior Full-Stack Developer'}</h3>
            <h4 className="company">TechNova Systems</h4>
            <p>
              {lang === 'tr'
                ? 'E-ticaret sistemleri geliştirme, iyzico/Stripe ödeme entegrasyonları, performans optimizasyonu ve hosting sunucu kurulumları.'
                : 'Developing robust e-commerce architectures, Stripe/iyzico integrations, performance monitoring, and server setups.'}
            </p>
          </div>

          <div className="timeline-item left glass-card">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2018 - 2021</div>
            <h3>{lang === 'tr' ? 'Yazılım & Sunucu Uzmanı' : 'Software & Server Specialist'}</h3>
            <h4 className="company">WebCloud Enterprise</h4>
            <p>
              {lang === 'tr'
                ? 'Linux sunucu yönetimi, alan adı DNS yönlendirmeleri, bulut depolama sistemleri ve siber güvenlik duvarı yapılandırmaları.'
                : 'Linux system administration, Cloudflare DNS routing, cloud storage frameworks, and secure firewall configuration.'}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section & Visitor Message Board */}
      <section id="contact" className="section contact-section">
        <div className="section-header">
          <span className="section-tag">{t.contactHeaderTag}</span>
          <h2 className="section-title">{t.contactHeaderTitle}</h2>
          <p className="section-subtitle">{t.contactHeaderSubtitle}</p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-container glass-card">
            <h3>{lang === 'tr' ? 'İletişim Formu' : 'Contact Form'}</h3>
            
            <div className="contact-direct-info">
              <div className="info-row">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:akin@akkinkaradas.com.tr">akin@akkinkaradas.com.tr</a>
              </div>
              <div className="info-row">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+905337328983">+90 533 732 89 83</a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{t.contactFormName}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className={formErrors.name ? 'form-input error' : 'form-input'}
                  placeholder="John Doe"
                />
                {formErrors.name && <span className="error-text">{formErrors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">{t.contactFormEmail}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className={formErrors.email ? 'form-input error' : 'form-input'}
                  placeholder="john@example.com"
                />
                {formErrors.email && <span className="error-text">{formErrors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">{t.contactFormMsg}</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="6"
                  value={formData.message} 
                  onChange={handleInputChange} 
                  className={formErrors.message ? 'form-input error' : 'form-input'}
                  placeholder="..."
                ></textarea>
                {formErrors.message && <span className="error-text">{formErrors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={formLoading}>
                {formLoading ? (lang === 'tr' ? 'Gönderiliyor...' : 'Sending...') : t.contactFormSubmit}
                {!formLoading && (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                )}
              </button>

              {formSuccess && (
                <div className="form-success-banner animate-fade-in">
                  {t.successMsg}
                </div>
              )}
              
              {formSubmitError && (
                <div className="form-error-banner animate-fade-in" style={{ color: '#ef4444', marginTop: '10px', fontSize: '14px', textAlign: 'center' }}>
                  {formSubmitError}
                </div>
              )}
            </form>
          </div>

          {/* Interactive Message Board */}
          <div className="message-board-container glass-card">
            <div className="board-header">
              <h3>{t.boardTitle}</h3>
              <span className="live-pill"><span className="pulse-dot"></span> {t.visitorBoardLive}</span>
            </div>
            <p className="board-info">{t.boardInfo}</p>
            <div className="messages-list">
              {messages.map((msg, idx) => (
                <div key={idx} className="board-message-item animate-slide-up">
                  <div className="msg-header">
                    <span className="msg-author">{msg.name}</span>
                    <span className="msg-time">{msg.time}</span>
                  </div>
                  <p className="msg-text">{msg.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Akın Karadaş. {lang === 'tr' ? 'Tüm Hakları Saklıdır.' : 'All Rights Reserved.'}</p>
        <p className="footer-credits">{lang === 'tr' ? 'Akın Karadaş için siber standartlarda tasarlanmıştır.' : 'Designed in cyber standards for Akın Karadaş.'}</p>
      </footer>
    </>
  );
}

export default App;
