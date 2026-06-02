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

// Bilingual Translations Mapping
const TRANSLATIONS = {
  tr: {
    navAbout: "Kurumsal",
    navProjects: "Çözümlerimiz",
    navTimeline: "Metrikler & Tarihçe",
    navContact: "İletişim",
    heroTitle: "Kurumsal Süreçlerde Sıfır Hata, Maksimum Verimlilik",
    heroDescription: "Tekstil, üretim ve toptan ticaret sektörlerindeki işletmeler için uçtan uca dijital dönüşüm, özel ERP/CRM entegrasyonları ve akıllı depo otomasyonları tasarlıyoruz. Operasyonel riskleri siliyor, süreç takibini kurumsal standartlara taşıyoruz.",
    heroAction1: "Ücretsiz Süreç Analizi Planlayın",
    heroAction2: "Çözümlerimizi İnceleyin",
    aboutHeaderTag: "Kurumsal Vizyon",
    aboutHeaderTitle: "Güvenilir Teknoloji Ortağınız",
    aboutHeaderSubtitle: "İş süreçlerinizi yazılımla optimize ederek operasyonel riskleri sıfıra indiriyoruz.",
    aboutBio: "Karadaş Teknoloji Danışmanlığı olarak, özellikle üretim yapan işletmeler, tekstil fabrikaları ve toptan ticaret firmalarının dijital dönüşüm süreçlerini tasarlıyoruz. Kopuk sistemleri tek bir kurumsal mimaride birleştiriyor, veri akışını otomatikleştiriyor ve işletmenizin ölçeklenebilir büyümesini sağlıyoruz.",
    statExperience: "Sektörel Deneyim",
    statProjects: "Başarılı Sistem Kurulumu",
    statSatisfaction: "Uptime & Performans SLA",
    tabSkills: "Çözüm Alanlarımız",
    tabEducation: "Stratejik Yaklaşım",
    tabTools: "Odak Sektörler",
    timelineHeaderTag: "Tarihçe",
    timelineHeaderTitle: "Kilometre Taşları & Metrikler",
    timelineHeaderSubtitle: "Bugüne kadar kurumsal işletmelere ve üretim tesislerine kazandırdığımız dijital yetkinlikler.",
    contactHeaderTag: "İş Birliği",
    contactHeaderTitle: "Dijital Dönüşümü Başlatın",
    contactHeaderSubtitle: "İşletmenizin süreçlerini optimize etmek veya bütçe/kapsam analizi almak için ön analiz formu gönderin.",
    contactFormName: "Yetkili Adı Soyadı",
    contactFormEmail: "Kurumsal E-posta Adresi",
    contactFormMsg: "Talep Detayı veya Proje Kapsamı",
    contactFormSubmit: "Ön Analiz Talebi Gönder",
    estimatorTitle: "Dijital Dönüşüm Kapsam ve Bütçe Planlayıcı",
    estimatorSubtitle: "İşletmenizin ihtiyaç duyduğu kurumsal modülleri seçin, tahmini bütçe ve teslim süresini anında planlayın.",
    estimatorServices: "Entegre Edilecek Kurumsal Çözümler",
    estimatorScale: "İşletme / Operasyon Ölçeği",
    estimatorScaleStartup: "KOBİ / Yerel İşletme",
    estimatorScaleSMB: "Üretici / Orta Ölçekli Fabrika",
    estimatorScaleEnterprise: "Holding / Büyük Ölçekli Grup",
    estimatorSpeed: "Devreye Alma Stratejisi",
    estimatorSpeedStandard: "Planlı Faz Entegrasyonu (Normal Hız)",
    estimatorSpeedExpress: "Hızlandırılmış Canlıya Geçiş (Express Delivery +%30)",
    estimatorResultCost: "Tahmini Yatırım Bütçesi",
    estimatorResultTime: "Tahmini Teslim Süresi",
    estimatorResultAction: "Bu Kapsamla Ön Analiz Toplantısı Planla",
    estimatorResultTimeVal: "hafta",
    techHeader: "Kullanılan Kurumsal Teknolojiler",
    projectLink: "Kapsam Detay Talebi",
    statusBadge: "Kurumsal Danışmanlığa Açık",
    visitorBoardLive: "Canlı",
    successMsg: "Talebiniz başarıyla alındı. En kısa sürede kurumsal analiz ekibimiz sizinle iletişime geçecektir.",
    estimationTitleInput: "Planlanan Proje Kapsamı:",
    estimationServicesInput: "Çözümler:",
    estimationScaleInput: "Ölçek:",
    estimationSpeedInput: "Strateji:",
    estimationCostInput: "Yatırım Bütçesi:",
    estimationTimeInput: "Süre:",
    estimationDisclaimer: "Bu bütçe tahmini bir ön analizdir. Kesin fizibilite çalışması için lütfen analiz toplantısı talep edin."
  },
  en: {
    navAbout: "Enterprise",
    navProjects: "Solutions",
    navTimeline: "Metrics & History",
    navContact: "Contact",
    heroTitle: "Zero-Error Operations, Maximum Productivity",
    heroDescription: "We engineer digital transformation strategies, custom ERP/CRM integrations, and smart warehouse management systems for textile, manufacturing, and wholesale sectors. We streamline tracking and eliminate operational risk.",
    heroAction1: "Schedule Process Audit",
    heroAction2: "Explore Custom Solutions",
    aboutHeaderTag: "Corporate Vision",
    aboutHeaderTitle: "Your Trusted Tech Partner",
    aboutHeaderSubtitle: "We optimize your business operations with tailor-made software, eliminating human errors.",
    aboutBio: "At Karadas Technology Consulting, we engineer digital transformation strategies for industrial factories, textile manufacturers, and large-scale wholesale operations. We merge isolated operations into unified corporate architectures, automate data flows, and support sustainable business scalability.",
    statExperience: "Industry Experience",
    statProjects: "Successful Systems",
    statSatisfaction: "System SLA Uptime",
    tabSkills: "Advisory Areas",
    tabEducation: "Delivery Strategy",
    tabTools: "Target Industries",
    timelineHeaderTag: "History",
    timelineHeaderTitle: "Milestones & Metrics",
    timelineHeaderSubtitle: "Key operational benchmarks and system implementations delivered to enterprise clients.",
    contactHeaderTag: "Partnership",
    contactHeaderTitle: "Initiate Digital Transformation",
    contactHeaderSubtitle: "Submit a request to schedule an operational audit meeting or clarify your project scope.",
    contactFormName: "Full Name & Title",
    contactFormEmail: "Corporate Email Address",
    contactFormMsg: "Project Scope or Advisory Details",
    contactFormSubmit: "Request Technical Audit",
    estimatorTitle: "Enterprise Scope & Budget Planner",
    estimatorSubtitle: "Select the required modules to plan your operational digital investment and development timeline.",
    estimatorServices: "Modules to Integrate",
    estimatorScale: "Operational Scale",
    estimatorScaleStartup: "SMB / Local Business",
    estimatorScaleSMB: "Manufacturer / Mid-size Factory",
    estimatorScaleEnterprise: "Conglomerate / Group Enterprise",
    estimatorSpeed: "Deployment Strategy",
    estimatorSpeedStandard: "Phased Integration (Standard)",
    estimatorSpeedExpress: "Express Deployment (+30% Cost)",
    estimatorResultCost: "Estimated Capital Expenditure",
    estimatorResultTime: "Estimated Timeline",
    estimatorResultAction: "Schedule Audit with this Scope",
    estimatorResultTimeVal: "weeks",
    techHeader: "Enterprise Technologies",
    projectLink: "Request Detailed Scope",
    statusBadge: "Available for Consultations",
    successMsg: "Your request has been received. Our advisory team will follow up within 24 hours.",
    estimationTitleInput: "Planned Scope Details:",
    estimationServicesInput: "Modules:",
    estimationScaleInput: "Scale:",
    estimationSpeedInput: "Strategy:",
    estimationCostInput: "Est. CapEx:",
    estimationTimeInput: "Duration:",
    estimationDisclaimer: "This estimate serves as an initial budget guideline. Contact us for a full feasibility report."
  }
};

// Premium Enterprise Solutions Database
// Premium Enterprise Solutions Database
const SERVICES = [
  {
    id: 1,
    title_tr: 'Kurumsal Web Platformları',
    title_en: 'Enterprise Web Platforms',
    category: 'web',
    baseCost: 8000,
    baseWeeks: 4,
    description_tr: 'Küresel standartlarda, yüksek hızlı B2B bayi portalları ve kurumsal dijital vitrinler.',
    description_en: 'High-speed, scalable B2B dealer portals and corporate digital showcases.',
    problem_tr: 'Yavaş yüklenen, mobil uyumsuz ve bayi siparişlerini verimli yönetemeyen eski web altyapıları prestij ve müşteri kaybına sebep olur.',
    problem_en: 'Legacy, slow, and non-responsive web systems result in lost B2B orders and poor digital brand representation.',
    solution_tr: 'En son web teknolojileriyle sıfırdan inşa edilmiş, ERP entegrasyonlu ve yüksek hacimli bayi trafiğini sıfır gecikmeyle yönetebilen kurumsal platformlar.',
    solution_en: 'Modern, high-availability web platforms integrated directly with back-office systems to orchestrate B2B ordering and tracking.',
    benefit_tr: 'Marka prestijinde artış, sipariş teslimat süreçlerinde %40 hızlanma ve arama motorlarında güçlü konumlanma.',
    benefit_en: 'Stronger brand value, 40% reduction in order processing times, and top search engine rankings.',
    image: ecommerceImg
  },
  {
    id: 2,
    title_tr: 'ERP Yazılımları',
    title_en: 'ERP Software Solutions',
    category: 'systems',
    baseCost: 18000,
    baseWeeks: 10,
    description_tr: 'İşletmenizin finans, satın alma ve operasyonel kaynaklarını tek bir akıllı merkezden yöneten sistemler.',
    description_en: 'Centralized resource planning unifying accounting, inventory, and operations.',
    problem_tr: 'Departmanlar arası kopuk veri akışı, hatalı stok raporları ve manuel yürütülen süreçler operasyonel maliyetleri yükseltir.',
    problem_en: 'Siloed departments, wrong inventory audits, and manual spreadsheet dependencies increase overhead costs.',
    solution_tr: 'Tekstil konfeksiyon ve üretim hatlarına özel, tüm departmanları birleştiren ve anlık rapor veren özel ERP mimarileri.',
    solution_en: 'Bespoke ERP software that aggregates flooring operations, warehouse inventory, and executive dashboards.',
    benefit_tr: 'Operasyonel genel giderlerde %25 düşüş, hatasız stok kontrolü ve yöneticiler için anlık karar destek raporları.',
    benefit_en: '25% decrease in operational overhead, zero stock discrepancies, and real-time executive reports.',
    image: erpCrmImg
  },
  {
    id: 3,
    title_tr: 'CRM Sistemleri',
    title_en: 'CRM Systems',
    category: 'systems',
    baseCost: 12000,
    baseWeeks: 6,
    description_tr: 'Satış ekiplerinizi, müşteri taleplerini ve teklif süreçlerini otomatikleştirerek satış oranlarını artıran çözümler.',
    description_en: 'Automate sales pipelines, follow-ups, and quotes to maximize close rates.',
    problem_tr: 'Takip edilemeyen potansiyel müşteriler, kaybolan e-postalar ve teklif süreçlerindeki gecikmeler ciro kaybına yol açar.',
    problem_en: 'Untracked sales opportunities, scattered emails, and slow quote turnarounds lead to lost sales.',
    solution_tr: 'Müşteri etkileşimlerini kaydeden, teklif hazırlamayı otomatikleştiren ve satış hunisini izleyen özelleştirilmiş CRM yazılımları.',
    solution_en: 'Customized CRM environments recording history, generating pricing agreements, and tracking deal stages.',
    benefit_tr: 'Müşteri geri dönüş sürelerinde %50 kısalma, teklif kazanma oranlarında artış ve güçlü müşteri sadakati.',
    benefit_en: '50% faster response times, higher proposal win rates, and enhanced client relationship lifespans.',
    image: customAppsImg
  },
  {
    id: 4,
    title_tr: 'Üretim Takip Sistemleri',
    title_en: 'Production Tracking Systems',
    category: 'systems',
    baseCost: 15000,
    baseWeeks: 8,
    description_tr: 'Fabrikalarda iş emri, fire oranı ve üretim performansını anlık izleyen otomasyonlar.',
    description_en: 'Real-time production floor auditing, waste monitoring, and OEE tracking.',
    problem_tr: 'Üretim hattındaki bottlenecklerin (darboğaz) tespit edilememesi, yüksek fire oranları ve kağıtla takip edilen iş emirleri verimliliği düşürür.',
    problem_en: 'Undetected floor bottlenecks, high raw material waste, and manual task dispatching decrease manufacturing output.',
    solution_tr: 'Barkod/RFID okuyucu ve tablet entegrasyonuyla makine ve personel bazlı üretim performansını (OEE) izleyen dijital takip sistemleri.',
    solution_en: 'Digital floor tracking systems powered by RFID/barcodes and tablets to audit machine uptime and workforce output (OEE).',
    benefit_tr: 'Üretim verimliliğinde %30 artış, fire oranlarında %15 azalma ve dijital takip sayesinde kağıtsız fabrika vizyonu.',
    benefit_en: '30% output improvement, 15% drop in floor waste, and a paperless smart factory workflow.',
    image: warehouseStockImg
  },
  {
    id: 5,
    title_tr: 'İş Süreci Otomasyonu',
    title_en: 'Business Process Automation',
    category: 'custom',
    baseCost: 9000,
    baseWeeks: 4,
    description_tr: 'Tekrarlayan insan görevlerini, veri girişlerini ve rutin dosya işlemlerini üstlenen yazılım robotları (RPA).',
    description_en: 'Background software robots (RPA) taking over repetitive data entry and administrative tasks.',
    problem_tr: 'Fatura işleme, cari mutabakatlar ve veri kopyalama gibi rutin işlere harcanan binlerce adam/saat emek ve zaman kaybına yol açar.',
    problem_en: 'Thousands of manual hours spent copying data, processing B2B invoices, and double-keying entries lead to human errors.',
    solution_tr: 'Üçüncü parti yazılımlar arasında veri köprüleri kuran ve form doldurma, rapor indirme gibi işleri otomatik yapan arka plan otomasyon motorları.',
    solution_en: 'Software robots that execute cross-system copy-pasting, automated invoice extraction, and file management.',
    benefit_tr: 'Manuel veri giriş hatalarında %95 azalma, çalışanların stratejik işlere yönelmesi ve haftalık 40 saatten fazla zaman tasarrufu.',
    benefit_en: '95% reduction in manual data entry errors, saving 40+ staff hours weekly.',
    image: securityImg
  },
  {
    id: 6,
    title_tr: 'Yapay Zeka Destekli Çözümler',
    title_en: 'AI-Powered Solutions',
    category: 'custom',
    baseCost: 16000,
    baseWeeks: 7,
    description_tr: 'Tahminleme analizleri, akıllı talep tahminleri ve kurumsal verileriniz üzerinde konuşan yapay zeka asistanları.',
    description_en: 'Predictive analytics, demand forecasting, and smart AI models talking to your database.',
    problem_tr: 'Geçmiş verilerin analiz edilememesi sebebiyle yanlış stok satın almaları yapılması ve kurumsal belgeler içinde bilgiye erişim zorluğu.',
    problem_en: 'Wrong inventory planning due to inability to predict demands, and difficulty retrieving intelligence from legacy documents.',
    solution_tr: 'Verilerinizden stok talep tahmini yapan modeller ve şirket içi belgelerden anında doğru cevabı getiren özel AI (RAG) asistanları.',
    solution_en: 'Custom predictive ML algorithms for inventory optimization and enterprise RAG bots reading internal documentation.',
    benefit_tr: 'Hatalı satın almalarda %20 azalma, karar mekanizmalarında veri odaklı doğruluk ve kurumsal bilgiye anında erişim.',
    benefit_en: '20% inventory optimization, data-driven purchasing decisions, and instant document searching.',
    image: customAppsImg
  },
  {
    id: 7,
    title_tr: 'API ve Sistem Entegrasyonları',
    title_en: 'API & System Integrations',
    category: 'cloud',
    baseCost: 8000,
    baseWeeks: 4,
    description_tr: 'Farklı yazılımlarınızı, ödeme geçitlerini ve devlet sistemlerini (e-Fatura) birbirine bağlayan güvenli API köprüleri.',
    description_en: 'Secure API connections linking your payment processors, external software, and state systems.',
    problem_tr: 'Muhasebe yazılımı, depo yazılımı ve web sitesinin entegre çalışmaması sebebiyle manuel çift veri girişi yapılması.',
    problem_en: 'Fragmented systems (WMS, ERP, B2B store) that do not sync, forcing staff to manually double-key data.',
    solution_tr: 'Sistemler arasında güvenli ve yüksek hızlı veri senkronizasyonu sağlayan, veri doğrulama mekanizmalı özel entegrasyon API\'leri.',
    solution_en: 'Tailor-made API bridges and data sync scripts with error catching mechanisms to link disconnected platforms.',
    benefit_tr: 'Süreçlerin tamamen otomatikleşmesi, veri uyumsuzluğundan kaynaklanan hataların sıfırlanması ve operasyonel hız.',
    benefit_en: 'Zero-latency synchronization, elimination of double data entry, and total flow continuity.',
    image: cloudStorageImg
  },
  {
    id: 8,
    title_tr: 'Bakım ve Teknik Destek',
    title_en: 'Maintenance & Technical Support',
    category: 'support',
    baseCost: 4000,
    baseWeeks: 12,
    description_tr: 'Sistemlerinizin güvenliğini, yedekliliğini ve %99.9 çalışabilirliğini garanti eden SLA kapsamlı destek hizmetleri.',
    description_en: 'SLA-backed technical support ensuring server health, security patches, and 99.9% uptime.',
    problem_tr: 'Beklenmedik sunucu çökmeleri, veri kayıpları ve siber saldırılar sırasında hızlı teknik muhatap bulamamak iş duruşuna yol açar.',
    problem_en: 'Server crashes, cyber threats, or stock sync bugs without an immediate technical responder cause expensive business downtime.',
    solution_tr: 'Periyodik yedeklemeler, anlık sunucu izleme (monitoring), güvenlik güncellemeleri ve SLA garantili öncelikli destek hattı.',
    solution_en: 'Routine security patching, database backups, real-time monitoring alerts, and SLA guaranteed response desk.',
    benefit_tr: 'İş duruş süresinin sıfıra indirilmesi, siber tehditlere karşı maksimum koruma ve veri kayıplarının önlenmesi.',
    benefit_en: 'Zero business downtime, robust defense posture, and guaranteed business continuity.',
    image: domainHostingImg
  }
];

// B2B Enterprise Case Studies Database
const PROJECTS = [
  {
    id: 1,
    category: 'textile',
    title_tr: 'RFID Destekli Akıllı Depo Otomasyonu',
    title_en: 'RFID-Powered Smart WMS Integration',
    client_tr: 'Yılmaz Tekstil A.Ş.',
    client_en: 'Yilmaz Textile Corp.',
    summary_tr: 'Tekstil konfeksiyon üretim ve dağıtım deposunda RFID teknolojisi ile sevkiyat hatalarının sıfırlanması.',
    summary_en: 'Zero-error shipment auditing using RFID UHF tracking across textile manufacturing and distribution warehouses.',
    image: warehouseStockImg,
    problem_tr: 'Fabrikaya bağlı 3 farklı depoda el ile yapılan sayımlar ve geleneksel barkodlama, kumaş ve hazır giyim kutularının takibini zorlaştırıyordu. Sipariş hazırlama süreleri ortalama 48 saati buluyor, sevkiyat hataları %8.2 seviyesinde seyrederek ciddi iade maliyetlerine yol açıyordu.',
    problem_en: 'Manual counting and traditional barcodes in three separate factories made roll and apparel box tracking highly error-prone. Dispatch cycle times averaged 48 hours, and shipping error rates hit 8.2%, leading to heavy returns and administrative overhead.',
    analysis_tr: 'Tüm depo operasyonları yerinde izlendi. Kumaş toplarının ve hazır ürün kolilerinin paketleme ve yükleme aşamalarında tek tek barkod okutulmasının ciddi bir darboğaz yarattığı ve insan kaynaklı hatalara davetiye çıkardığı tespit edildi.',
    analysis_en: 'Conducted a physical warehouse audit. Discovered that individual barcode scanning at loading docks created major bottleneck queues, and manual carton counting during peak hours was the primary source of dispatch errors.',
    design_tr: 'Depo giriş ve sevkiyat yükleme kapılarına RFID geçiş antenleri tasarlandı. Üretim hattından çıkan her ürüne RFID etiket atanması ve depo yönetim sistemine (WMS) anlık veri besleyen çift yönlü bir entegrasyon şeması kurgulandı.',
    design_en: 'Designed portal-gate RFID scanners at entry/loading points. Planned automatic serialization for each carton exiting production and mapped a real-time event pipeline to sync with the enterprise warehouse system (WMS).',
    tech_tr: 'RFID UHF Donanım Protokolleri, NestJS Mikroservisleri, React Admin Dashboard, PostgreSQL, AWS Cloud Sync',
    tech_en: 'RFID UHF Hardware Protocols, NestJS Microservices, React Admin Dashboard, PostgreSQL, AWS Cloud Sync',
    implementation_tr: 'Üretim akışını kesmeden, sistem 4 aşamalı faz ile devreye alındı. RFID donanım kalibrasyonları yapıldı ve depo çalışanlarına uygulamalı saha eğitimleri verildi. Sistem ilk ay paralel takip modunda çalıştırılarak optimize edildi.',
    implementation_en: 'Systems deployed in four consecutive weekends to prevent operational downtime. Fine-tuned antenna signal ranges to avoid cross-talk, and provided hands-on tablet workflow tutorials to shift workers.',
    results_tr: 'Sevkiyat hata oranı %8.2\'den %0.1\'in altına indirildi. Sipariş teslimat döngü süresi 48 saatten 6 saate düşürüldü. Sevkiyat hızı ve veri doğruluğu sayesinde yıllık operasyonel kayıplar önlendi; yatırım kendini 7 ayda amorti etti.',
    results_en: 'Reduced dispatch discrepancies from 8.2% to less than 0.1%. Shrunk order cycle times from 48 down to 6 hours. Eliminated customer claim penalties, ensuring full capital investment payback within 7 months.'
  },
  {
    id: 2,
    category: 'systems',
    title_tr: 'Çok Lokasyonlu Entegre Fabrika ERP Sistemi',
    title_en: 'Multi-Location Factory ERP Integration',
    client_tr: 'Demirci Metal Sanayi',
    client_en: 'Demirci Metal Industry',
    summary_tr: 'İki farklı şehirdeki üretim tesislerinin finans, tedarik ve üretim hatlarının tek bir bulut ERP altında birleştirilmesi.',
    summary_en: 'Unifying production lines, procurement and financial accounting under a single secure cloud ERP.',
    image: erpCrmImg,
    problem_tr: 'Farklı şehirlerde yer alan fabrikaların ve merkez ofisin veri tabanlarının entegre olmaması, hammadde alımında koordinasyon kopukluklarına, aşırı stok birikmesine ve teslimat gecikmelerine neden oluyordu.',
    problem_en: 'Siloed database grids in factories located in different cities led to raw material procurement delays, unbalanced stock accumulations, and delayed client deliveries.',
    analysis_tr: 'Fabrika sahasındaki iş emri akışı, hammadde satın alma onay mekanizmaları ve sevkiyat planlama süreçleri uçtan uca haritalandı. Manuel yürüyen onay zincirinin sipariş başına ortalama 3 günlük gecikmeye sebep olduğu saptandı.',
    analysis_en: 'Mapped operational workflow diagrams for material requisition and production dispatch. Revealed that manual document approvals delayed processing schedules by an average of 3 days per batch.',
    design_tr: 'Tüm birimleri ortak bir veri tabanında buluşturan ve anlık veri akışı sağlayan bulut tabanlı bir ERP mimarisi tasarlandı. Fabrika operatörlerinin iş emirlerini dijital olarak takip edebilmeleri için kullanıcı dostu tablet ekranları planlandı.',
    design_en: 'Architected a consolidated cloud ERP scheme. Planned simple, high-contrast industrial tablet UIs for machinery operators to update job ticket completion statuses on the production floor directly.',
    tech_tr: 'Node.js Kurumsal Servisleri, Next.js Yönetim Paneli, Docker Containerization, PostgreSQL, AWS RDS High-Availability',
    tech_en: 'Node.js Enterprise Services, Next.js Admin Panel, Docker Containerization, PostgreSQL, AWS RDS High-Availability',
    implementation_tr: 'Veri kaybını önlemek amacıyla hafta sonları veri göçü (migration) gerçekleştirilerek modüller kademeli şekilde devreye alındı. Personel yetkilendirmeleri yapıldı ve yeni sistem test aşamalarıyla sahada doğrulandı.',
    implementation_en: 'Phased database migrations executed during weekend windows to prevent production stalls. Run pilot checks on raw material inventory logs before unlocking the full finance modules.',
    results_tr: 'Departmanlar arası veri akışı gecikmesi tamamen sıfırlandı. Hammadde envanter maliyetleri %22 oranında düşürüldü ve sipariş teslimat süreçlerinde %30 verimlilik artışı sağlandı.',
    results_en: 'Reduced cross-department operational delays to zero. Decreased raw stock inventory carrying costs by 22%, and achieved a 30% improvement in product delivery turnaround times.'
  },
  {
    id: 3,
    category: 'web',
    title_tr: 'ERP Entegre B2B Bayi Portalı',
    title_en: 'ERP-Integrated B2B Dealer Portal',
    client_tr: 'Kaya Toptancılık & Dağıtım',
    client_en: 'Kaya Wholesale & Distribution',
    summary_tr: '1200 aktif bayinin sipariş, cari hesap ve ödeme süreçlerini otomatikleştiren gerçek zamanlı entegrasyon köprüsü.',
    summary_en: 'Real-time order, ledger, and payment automation engine connecting 1,200 active B2B dealers.',
    image: ecommerceImg,
    problem_tr: 'Bayi siparişlerinin e-posta ve telefonla toplanması, cari hesap mutabakatlarının elle yapılması ve ödemelerin sisteme manuel işlenmesi nedeniyle satış ekibi aşırı yük altındaydı. Geciken mutabakatlar nakit akışını yavaşlatıyordu.',
    problem_en: 'Receiving orders via phone and email while managing billing ledgers on manual spreadsheets created major invoice backlogs. Delayed credit audits slowed capital turnover rates.',
    analysis_tr: 'Bayi sipariş alma döngüsü ve ödeme eşleştirme adımları analiz edildi. Satış temsilcilerinin günlük mesailerinin %65\'ini sipariş girmek ve cari hesap ekstresi göndermekle tükettiği görüldü.',
    analysis_en: 'Audited the sales cycle from requisition to accounts receivable. Found that sales account managers spent 65% of their billable hours manually entering orders and sending statement reports.',
    design_tr: 'Bayilerin özel fiyatlandırma, güncel stok durumlarını görebildikleri, doğrudan ödeme yapıp fatura indirebildikleri ve mevcut ERP sistemiyle API\'ler aracılığıyla senkronize çalışan güvenli B2B bayi portalı tasarlandı.',
    design_en: 'Designed an interactive B2B dealer workspace displaying customer-specific pricing and stock. Built a direct API connector to sync orders, invoice documents, and ledger balance accounts.',
    tech_tr: 'React Frontend, Go REST API, SAP / Logo ERP Entegrasyon Köprüsü, Redis Caching, iyzico Payment API',
    tech_en: 'React Frontend, Go REST API, SAP / Logo ERP Integration Bridge, Redis Caching, iyzico Payment API',
    implementation_tr: 'Portal sızma testlerine (Penetration Test) tabi tutularak üst düzey güvenlik sağlandı. İlk fazda 50 pilot bayi ile canlıda test edildi, gelen geri bildirimler doğrultusunda optimize edilerek tüm bayi ağına açıldı.',
    implementation_en: 'Subjected the API gateways to penetration testing to secure financial endpoints. Launched a beta pilot program with 50 wholesale dealers, refining the checkout interface before scale launch.',
    results_tr: 'Manuel sipariş girişi ve mutabakat hataları sıfıra indirildi. Alacak tahsilat süresi (DSO) ortalama 45 günden 18 güne düşürüldü. Satış ekibinin operasyonel yükü %75 hafifletildi.',
    results_en: 'Eliminated manual order reconciliation errors. Shrunk Days Sales Outstanding (DSO) metrics from 45 down to 18 days. Reduced back-office sales workload by 75%, allowing staff to focus on business development.'
  },
  {
    id: 4,
    category: 'ai',
    title_tr: 'AI Destekli Talep Tahminleme ve Stok Yönetimi',
    title_en: 'AI-Powered Demand Forecasting & Stock Management',
    client_tr: 'Vardarlar Gıda Dağıtım',
    client_en: 'Vardarlar Food Distribution',
    summary_tr: 'Makine öğrenmesi modelleri ile geçmiş satış verilerinin analiz edilerek stok fire oranlarının düşürülmesi.',
    summary_en: 'Machine learning algorithms auditing history to optimize inventory levels and reduce perishable waste.',
    image: customAppsImg,
    problem_tr: 'Bozulabilir gıda ürünlerinin stok yönetimi manuel tahminlerle yürütülüyordu. Bu durum, bazı ürünlerde yüksek oranda fire (bozulma) ve maddi zarar yaratırken, bazılarında ise yok satma nedeniyle ciro kaybına yol açıyordu.',
    problem_en: 'Perishable food stock levels were estimated using legacy methods. This caused high product waste of unsold batches and out-of-stock scenarios during unexpected demand spikes, losing sales revenue.',
    analysis_tr: 'Son 5 yıllık günlük satış verileri, bölgesel tüketim alışkanlıkları ve mevsimsel dalgalanmalar incelendi. Stok planlama biriminin tahminlerindeki hata payının ortalama %28 seviyesinde olduğu tespit edildi.',
    analysis_en: 'Processed five years of daily wholesale invoice records, seasonal weather tables, and regional purchase schedules. Discovered that the planning team’s forecasting margin of error stood at 28%.',
    design_tr: 'Zaman serisi tahminleme (Time Series Forecasting) modelleri kullanan, mevcut ERP envanter modülüne bağlı çalışan ve otomatik satın alma önerileri sunan yapay zeka destekli bir tahmin motoru kurgulandı.',
    design_en: 'Built an automated ML forecasting engine running time-series algorithms. Created an API connection to suggest purchasing orders based on real-time inventory levels.',
    tech_tr: 'Python (Pandas, Prophet, Scikit-learn), FastAPI, PostgreSQL, React Dashboard, Docker Containerization',
    tech_en: 'Python (Pandas, Prophet, Scikit-learn), FastAPI, PostgreSQL, React Dashboard, Docker Containerization',
    implementation_tr: 'ML modelleri geçmiş verilerle eğitilip doğruluk oranı %92\'nin üzerine çıkana dek optimize edildi. Satın alma biriminin kolayca onay verebileceği basit bir öneri paneli geliştirildi ve ERP sistemine bağlandı.',
    implementation_en: 'Trained algorithms on historical datasets until forecast accuracy validated above 92%. Engineered a single-click review dashboard integrated directly with procurement ledger tools.',
    results_tr: 'Hatalı tahminden kaynaklanan gıda fire oranları %34 oranında azaltıldı. Stoksuz kalma (out-of-stock) oranı %1.5\'e indirilerek toplam ciroda %12 doğrudan artış sağlandı.',
    results_en: 'Reduced perishable food waste by 34%. Reduced stockouts to under 1.5%, capturing lost demand and generating a direct 12% revenue increase.'
  }
];

// B2B Enterprise FAQs Database
const FAQ_ITEMS = [
  {
    id: 1,
    q_tr: 'Proje entegrasyon sürecinde fabrikamızın üretimi veya depo sevkiyatlarımız durur mu?',
    q_en: 'Will our factory production or warehouse shipments halt during system integration?',
    a_tr: 'Kesinlikle hayır. Veri göçlerini (migration), entegrasyon testlerini ve canlıya geçiş adımlarını hafta sonları veya üretim dışı vardiyalar sırasında gerçekleştiriyoruz. Operasyonunuz sıfır duruşla devam eder.',
    a_en: 'Absolutely not. We run data migrations, integration syncs, and system deployments off-peak or on weekends, maintaining 100% operational continuity.'
  },
  {
    id: 2,
    q_tr: 'Geliştirilen kurumsal yazılımların kaynak kodları kime ait oluyor?',
    q_en: 'Who owns the source code and IP rights of the customized software?',
    a_tr: 'Proje tesliminde tüm kaynak kodları, veri tabanı şemaları ve fikri mülkiyet hakları resmi sözleşme ile tamamen firmanıza devredilir. Herhangi bir yazılımcıya veya bize bağımlı (vendor lock-in) kalmazsınız.',
    a_en: 'Upon project completion, all source code, database architectures, and intellectual property rights are legally transferred to your enterprise, ensuring zero vendor lock-in.'
  },
  {
    id: 3,
    q_tr: 'Mevcut ERP / muhasebe yazılımımız (SAP, Logo, IAS, vb.) veya e-ticaret sitelerimizle entegre çalışabilir misiniz?',
    q_en: 'Can you integrate with our existing ERP or accounting software (Logo, SAP, Oracle, etc.)?',
    a_tr: 'Evet. Mevcut ERP veya muhasebe sistemlerinizin veritabanı API\'leri, veritabanı katmanları veya XML/Excel entegrasyon uçları üzerinden güvenli entegrasyon köprüleri kurarak çift yönlü senkronizasyonu sağlıyoruz.',
    a_en: 'Yes. We engineer secure API bridges, db staging tables, or batch file readers to establish reliable bi-directional sync with SAP, Logo, Oracle, and other ERP systems.'
  },
  {
    id: 4,
    q_tr: 'Kurulan sistemin güvenliği ve KVKK / GDPR uyumluluğu nasıl sağlanıyor?',
    q_en: 'How do you guarantee database security and KVKK/GDPR compliance?',
    a_tr: 'Yazılımlarımızda veri maskeleme, SSL/TLS şifreleme ve gelişmiş kullanıcı rol yetkilendirmeleri kullanıyoruz. Canlıya geçiş öncesinde sızma testleri (pentest) uygulayarak ISO standartlarında siber güvenlik sağlıyoruz.',
    a_en: 'We implement cryptographic hashing, SSL/TLS transport security, and granular permission access controls. Prior to launch, we run penetration tests to validate enterprise security.'
  },
  {
    id: 5,
    q_tr: 'Sistem devreye alındıktan sonra teknik destek süreciniz nasıl ilerliyor?',
    q_en: 'How does the technical support process operate after launch?',
    a_tr: 'İşletmenizin ihtiyacına göre belirlediğimiz resmi SLA (Hizmet Seviyesi Anlaşması) kapsamında 7/24 kritik sunucu izleme, günlük yedeklemeler ve olası hatalara 1 saat içinde acil müdahale güvencesi sunuyoruz.',
    a_en: 'Under our binding SLA agreements, we provide 24/7 automated monitoring, automated daily cloud backups, and a guaranteed 1-hour engineering response time for emergency events.'
  }
];

const TECH_CATEGORIES = [
  {
    id: 'solutions',
    title_tr: 'Business Solutions',
    title_en: 'Business Solutions',
    highlight: true,
    description_tr: 'Teknik detayların ötesinde, işletmenize doğrudan operasyonel verimlilik ve finansal fayda sağlayan iş çözümleri.',
    description_en: 'Operational capabilities that directly drive efficiency, reduce overhead, and increase productivity.',
    items: [
      { name_tr: 'ERP (Kurumsal Kaynak Planlama)', name_en: 'ERP (Enterprise Resource Planning)', desc_tr: 'Tüm departmanları ve veri akışını tek bir merkezde birleştirir.', desc_en: 'Unifies all business units and data streams under one roof.' },
      { name_tr: 'CRM (Müşteri İlişkileri Yönetimi)', name_en: 'CRM (Customer Relationship Management)', desc_tr: 'Satış hunisini otomatikleştirir ve teklif kazanma oranlarını artırır.', desc_en: 'Automates sales pipelines and accelerates quote turnarounds.' },
      { name_tr: 'Üretim Yönetimi', name_en: 'Production Management', desc_tr: 'Makine uptime (OEE) ve hat verimliliğini anlık izler.', desc_en: 'Monitors machine availability (OEE) and floor bottlenecks.' },
      { name_tr: 'Stok Takibi', name_en: 'Inventory Tracking', desc_tr: 'Barkod/RFID entegrasyonları ile sevkiyat hatalarını sıfıra indirir.', desc_en: 'Utilizes RFID/barcodes to eliminate warehouse shipment errors.' },
      { name_tr: 'Operasyon Yönetimi', name_en: 'Operations Management', desc_tr: 'Manuel operasyonel süreçleri dijital iş planlamasına taşır.', desc_en: 'Transforms manual logistics into automated operational workflows.' },
      { name_tr: 'İş Akışı Otomasyonu', name_en: 'Workflow Automation', desc_tr: 'Departmanlar arası veri entegrasyonu sağlayarak insan hatalarını önler.', desc_en: 'Orchestrates cross-department flows to prevent manual entry errors.' }
    ]
  },
  {
    id: 'frontend',
    title_tr: 'Frontend',
    title_en: 'Frontend',
    description_tr: 'Kullanıcı dostu, hızlı ve mobil uyumlu modern web arayüzleri.',
    description_en: 'High-performance, responsive web interfaces designed for seamless user experiences.',
    items: [
      { name_tr: 'React & Next.js', name_en: 'React & Next.js', desc_tr: 'Bayi portalları için yüksek hızlı sayfa yüklenmesi.', desc_en: 'Fast page loads for B2B portals and dealer interfaces.' },
      { name_tr: 'Responsive Tasarım', name_en: 'Responsive Layouts', desc_tr: 'Fabrika sahasındaki tabletlerden mobil cihazlara tam uyum.', desc_en: 'Optimized views from factory floor tablets to mobile screens.' },
      { name_tr: 'Real-time Web Sockets', name_en: 'Real-time Web Sockets', desc_tr: 'Üretim verilerinin anlık olarak ekrana yansıtılması.', desc_en: 'Instant dashboard sync for manufacturing floor metrics.' }
    ]
  },
  {
    id: 'backend',
    title_tr: 'Backend',
    title_en: 'Backend',
    description_tr: 'Yüksek veri trafiğini ve karmaşık iş mantığını hatasız yöneten sistemler.',
    description_en: 'Robust business logic cores built to process massive operational transactions.',
    items: [
      { name_tr: 'Node.js & NestJS', name_en: 'Node.js & NestJS', desc_tr: 'Kurumsal entegrasyonlar için kararlı ve modüler mimariler.', desc_en: 'Modular framework for reliable corporate microservices.' },
      { name_tr: 'Go (Golang)', name_en: 'Go (Golang)', desc_tr: 'API entegrasyonlarında yüksek performans ve düşük gecikme süresi.', desc_en: 'High-throughput, low-latency execution for API communication.' },
      { name_tr: 'Python FastAPI', name_en: 'Python FastAPI', desc_tr: 'Yapay zeka ve veri analiz servislerinin hızlı entegrasyonu.', desc_en: 'Rapid deployment of predictive analytics and forecasting APIs.' }
    ]
  },
  {
    id: 'database',
    title_tr: 'Database',
    title_en: 'Database',
    description_tr: 'İşletmenizin en değerli varlığı olan verileri güvenle saklayan ve işleyen veritabanları.',
    description_en: 'Highly available storage architectures designed for data integrity and zero records loss.',
    items: [
      { name_tr: 'PostgreSQL', name_en: 'PostgreSQL', desc_tr: 'Finansal kayıtlar ve işlem geçmişi için tam ACID güvenliği.', desc_en: 'ACID-compliant relational engine for financial auditing.' },
      { name_tr: 'Redis Caching', name_en: 'Redis Caching', desc_tr: 'Sık sorgulanan stok verilerini anlık okuyarak hızı artırır.', desc_en: 'In-memory cache for sub-millisecond stock queries.' },
      { name_tr: 'MongoDB', name_en: 'MongoDB', desc_tr: 'Süreç günlükleri ve esnek veri yapıları için hızlı doküman depolama.', desc_en: 'Flexible document store for event logs and audits.' }
    ]
  },
  {
    id: 'devops',
    title_tr: 'DevOps',
    title_en: 'DevOps',
    description_tr: 'Yazılımın kesintisiz ve güvenle güncellenmesini sağlayan altyapılar.',
    description_en: 'Automated software delivery pipelines preventing deployment failures.',
    items: [
      { name_tr: 'Docker', name_en: 'Docker Containerization', desc_tr: 'Farklı sunucularda birebir aynı kararlılıkta çalışma garantisi.', desc_en: 'Ensures application runs identical across cloud environments.' },
      { name_tr: 'GitHub Actions', name_en: 'GitHub Actions CI/CD', desc_tr: 'Otomatik test ve hata denetimleriyle güvenli sürüm yayınlama.', desc_en: 'Automated tests and deployment scripts to prevent downtime.' },
      { name_tr: 'Linux System Ops', name_en: 'Linux System Administration', desc_tr: 'Güvenli sunucu yapılandırması ve işletim sistemi optimizasyonu.', desc_en: 'Hardened OS configs and routine security patch scheduling.' }
    ]
  },
  {
    id: 'cloud',
    title_tr: 'Cloud',
    title_en: 'Cloud',
    description_tr: 'Fiziksel donanım arızalarından bağımsız, kesintisiz çalışma sunan bulut çözümleri.',
    description_en: 'Highly redundant, high-uptime cloud hosting safeguarding your data.',
    items: [
      { name_tr: 'AWS (Amazon Web Services)', name_en: 'Amazon Web Services (AWS)', desc_tr: 'Küresel ölçekte sunucu barındırma, yedekleme ve güvenlik duvarı.', desc_en: 'Global scale hosting, network isolation, and encryption.' },
      { name_tr: 'Google Cloud Platform', name_en: 'Google Cloud Platform (GCP)', desc_tr: 'Büyük veri analizi ve esnek veri depolama entegrasyonu.', desc_en: 'Serverless scalability and real-time big data pipelines.' },
      { name_tr: 'High-Availability (SLA)', name_en: 'High-Availability & SLA', desc_tr: '%99.9 çalışma süresi ve otomatik felaket kurtarma senaryoları.', desc_en: '99.9% uptime guarantees and automatic backup redundancy.' }
    ]
  },
  {
    id: 'ai',
    title_tr: 'AI',
    title_en: 'AI',
    description_tr: 'Operasyonel verilerinizden anlamlı çıkarımlar yaparak karar süreçlerini destekleyen algoritmalar.',
    description_en: 'Intelligent engines parsing operational data to drive automated decision making.',
    items: [
      { name_tr: 'Talep Tahminleme', name_en: 'Demand Forecasting', desc_tr: 'Geçmiş satış verileriyle stok taşıma maliyetlerini azaltma.', desc_en: 'Reduces inventory carrying costs using historical trend models.' },
      { name_tr: 'RAG & Bilgi Asistanları', name_en: 'RAG & AI Assistants', desc_tr: 'Kurumsal dokümanlarınızı tarayarak personele anlık destek sunan yapay zeka.', desc_en: 'Enables workers to query complex factory guidelines via LLMs.' },
      { name_tr: 'Doğal Dil Analizi (NLP)', name_en: 'Natural Language Processing (NLP)', desc_tr: 'Müşteri taleplerini otomatik analiz etme ve sınıflandırma.', desc_en: 'Parses and routes incoming support and lead requests automatically.' }
    ]
  }
];

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

  // Active section for navigation highlight
  const [activeSection, setActiveSection] = useState('hero');

  // About tab state
  const [activeTab, setActiveTab] = useState('skills');

  // Independent filters state
  const [serviceFilter, setServiceFilter] = useState('all');
  const [projectFilter, setProjectFilter] = useState('all');

  // Modals selected state
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // FAQ state
  const [activeFaq, setActiveFaq] = useState(null);

  // Project Cost Estimator State
  const [selectedServices, setSelectedServices] = useState([1]); // Default ERP selected
  const [scale, setScale] = useState('smb'); // startup, smb, enterprise
  const [speed, setSpeed] = useState('standard'); // standard, express

  // Contact form state
  const [formData, setFormData] = useState({ name: '', email: '', company: '', sector: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formSubmitError, setFormSubmitError] = useState('');

  // Apply Theme Mode (Dark/Light)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

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

  // Scale multiplier (Targeting SMB, Enterprise and Factory scale budgets)
  let scaleMult = 1.0;
  let scaleWeeksMult = 1.0;
  if (scale === 'smb') {
    scaleMult = 1.8;
    scaleWeeksMult = 1.3;
  } else if (scale === 'enterprise') {
    scaleMult = 3.0;
    scaleWeeksMult = 1.8;
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
      const sections = ['hero', 'about', 'services', 'process', 'projects', 'pricing', 'estimator', 'timeline', 'faq', 'contact'];
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

  // Push quote parameters to form fields (in USD)
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
* ${t.estimationCostInput} $${estimation.cost.toLocaleString('en-US')} USD
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
    if (!formData.name.trim()) errors.name = lang === 'tr' ? 'Ad ve soyad alanı boş bırakılamaz' : 'Name field cannot be empty';
    if (!formData.email.trim()) {
      errors.email = lang === 'tr' ? 'E-posta alanı boş bırakılamaz' : 'Email field cannot be empty';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = lang === 'tr' ? 'Geçerli bir e-posta adresi girin' : 'Enter a valid email address';
    }
    if (!formData.company.trim()) errors.company = lang === 'tr' ? 'Şirket adı alanı boş bırakılamaz' : 'Company name cannot be empty';
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

      // Clear form
      setFormData({ name: '', email: '', company: '', sector: '', message: '' });
      
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

  // Action to select service in estimator and scroll down smoothly
  const handleSelectServiceAndScroll = (id) => {
    if (!selectedServices.includes(id)) {
      setSelectedServices(prev => [...prev, id]);
    }
    const estimatorSection = document.getElementById('estimator');
    if (estimatorSection) {
      window.scrollTo({
        top: estimatorSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Filtered services list
  const filteredServices = serviceFilter === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === serviceFilter);

  // Filtered projects list
  const filteredProjects = projectFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === projectFilter);

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
            <a href="#services" className={activeSection === 'services' ? 'active' : ''}>{lang === 'tr' ? 'Hizmetlerimiz' : 'Services'}</a>
            <a href="#technologies" className={activeSection === 'technologies' ? 'active' : ''}>{lang === 'tr' ? 'Teknolojiler' : 'Technologies'}</a>
            <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>{lang === 'tr' ? 'Başarı Hikayeleri' : 'Case Studies'}</a>
            <a href="#estimator" className={activeSection === 'estimator' ? 'active' : ''}>Bütçe</a>
            <a href="#timeline" className={activeSection === 'timeline' ? 'active' : ''}>{t.navTimeline}</a>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>{t.navContact}</a>
          </nav>
          
          <div className="navbar-controls">
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
          {/* Left Column: Business Value, CTAs, Trust & Reference badges */}
          <div className="hero-text animate-slide-up">
            <div className="status-badge hero-trust-badge">
              <span className="pulse-dot"></span> {t.statusBadge}
            </div>
            
            <h1 className="hero-title">
              <span className="gradient-text">{t.heroTitle}</span>
            </h1>
            
            <p className="hero-description">
              {t.heroDescription}
            </p>
            
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary glow-button">
                {t.heroAction1}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#projects" className="btn btn-secondary">
                {t.heroAction2}
              </a>
            </div>

            {/* Trust Signals (Güven Unsurları) */}
            <div className="hero-trust-elements">
              <span className="trust-element-tag">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {lang === 'tr' ? '24/7 SLA Desteği' : '24/7 SLA Support'}
              </span>
              <span className="trust-element-tag">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {lang === 'tr' ? 'ISO Güvenlik Mimarisi' : 'ISO Security Architecture'}
              </span>
              <span className="trust-element-tag">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {lang === 'tr' ? 'KVKK / GDPR Uyumlu' : 'KVKK / GDPR Compliant'}
              </span>
            </div>

            {/* Reference Indicators (Referans Göstergeleri) */}
            <div className="hero-industry-references">
              <span className="ref-label">{lang === 'tr' ? 'Hedef Sektörler:' : 'Target Industries:'}</span>
              <div className="ref-badges">
                <span className="ref-badge">{lang === 'tr' ? 'Tekstil & Konfeksiyon' : 'Textile & Apparel'}</span>
                <span className="ref-badge">{lang === 'tr' ? 'Üretim & Fabrikalar' : 'Manufacturing'}</span>
                <span className="ref-badge">{lang === 'tr' ? 'Toptan & Lojistik' : 'Wholesale & Logistics'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Executive Dashboard Mockup (İstatistik alanları) */}
          <div className="hero-visual animate-scale-up">
            <div className="hero-dashboard-mockup glass-card">
              <div className="dashboard-header">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="dashboard-title">Karadas ERP - Operations Hub</span>
              </div>
              
              <div className="dashboard-body">
                {/* Stats Grid inside the mockup */}
                <div className="dashboard-stats-grid">
                  <div className="db-stat-card">
                    <span className="db-stat-lbl">{lang === 'tr' ? 'Verimlilik Artışı' : 'Process Efficiency'}</span>
                    <span className="db-stat-val">+38%</span>
                    <span className="db-stat-sub">{lang === 'tr' ? 'Süreç Hızlandırma' : 'Fulfillment Speed'}</span>
                  </div>
                  <div className="db-stat-card">
                    <span className="db-stat-lbl">{lang === 'tr' ? 'Hata Payı Oranı' : 'Operations Quality'}</span>
                    <span className="db-stat-val">0.0%</span>
                    <span className="db-stat-sub">{lang === 'tr' ? 'Sıfır Hata Hedefi' : 'Zero-Error Standard'}</span>
                  </div>
                  <div className="db-stat-card full-width">
                    <span className="db-stat-lbl">{lang === 'tr' ? 'Sistem SLA Güvencesi' : 'System Availability SLA'}</span>
                    <span className="db-stat-val" style={{ color: '#10b981' }}>99.99%</span>
                    <span className="db-stat-sub">{lang === 'tr' ? 'Kesintisiz Çalışma Süresi' : 'Uptime SLA Guarantee'}</span>
                  </div>
                </div>

                {/* Workflow Simulation List */}
                <div className="db-workflow-list">
                  <div className="workflow-item">
                    <div className="wf-status active"></div>
                    <div className="wf-details">
                      <span className="wf-name">{lang === 'tr' ? 'Üretim Akış Takibi' : 'Production Tracking'}</span>
                      <span className="wf-desc">{lang === 'tr' ? 'Aktif Entegrasyon' : 'Real-time Sync Active'}</span>
                    </div>
                  </div>
                  <div className="workflow-item">
                    <div className="wf-status success"></div>
                    <div className="wf-details">
                      <span className="wf-name">{lang === 'tr' ? 'RFID Depo Envanter Eşleşmesi' : 'RFID Inventory Sync'}</span>
                      <span className="wf-desc">{lang === 'tr' ? 'Tüm Depolar Eşleşti' : 'Warehouse Audit OK'}</span>
                    </div>
                  </div>
                </div>
              </div>
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
            <h3>{lang === 'tr' ? 'Neden Akın Karadaş?' : 'Why Akın Karadaş?'}</h3>
            <p className="about-bio">
              {t.aboutBio}
            </p>
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-number">8+</span>
                <span className="stat-label">{t.statExperience}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">40M+ TL</span>
                <span className="stat-label">{t.statProjects}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">%99.9</span>
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
                      <span>ERP & CRM Architecture Integration</span>
                      <span>98%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="skill-label">
                      <span>Warehouse Logistics & Supply Chain Automation</span>
                      <span>95%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="skill-label">
                      <span>Enterprise Web & B2B Solutions</span>
                      <span>98%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="skill-label">
                      <span>High-Availability Cloud Systems & Security SLA</span>
                      <span>99.9%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{ width: '99%' }}></div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="education-tab animate-fade-in">
                  <div className="edu-item">
                    <h4>{lang === 'tr' ? '1. Süreç Analizi & Kapsam Tasarımı' : '1. Workflow Audit & Scope Design'}</h4>
                    <p className="edu-meta">{lang === 'tr' ? 'İlk Adım' : 'First Step'}</p>
                    <p className="edu-desc">
                      {lang === 'tr' 
                        ? 'İşletmenizi ziyaret edip mevcut operasyonlarınızı, darboğazları ve veri akışını analiz ederek kurumsal ihtiyaçlarınızı belirliyoruz.'
                        : 'We audit your physical site and operational processes, mapping bottlenecks to design a tailor-made system scope.'}
                    </p>
                  </div>
                  <div className="edu-item">
                    <h4>{lang === 'tr' ? '2. Entegre Mimari & Güvenli Canlıya Geçiş' : '2. Integrated Architecture & Launch'}</h4>
                    <p className="edu-meta">{lang === 'tr' ? 'Uygulama' : 'Deployment'}</p>
                    <p className="edu-desc">
                      {lang === 'tr'
                        ? 'Kopuk yazılımlar yerine tüm departmanların entegre çalıştığı, siber güvenlik denetimleri yapılmış, bulut yedeklemeli mimariler kuruyoruz.'
                        : 'We develop robust and unified systems backed by cloud redundancy, cyber audits, and high reliability standards.'}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'tools' && (
                <div className="tools-tab animate-fade-in">
                  <div className="tools-grid">
                    <span className="tool-badge">{lang === 'tr' ? 'Tekstil & Konfeksiyon Fabrikaları' : 'Textile & Apparel Factories'}</span>
                    <span className="tool-badge">{lang === 'tr' ? 'Endüstriyel Üretim Tesisleri' : 'Industrial Manufacturing'}</span>
                    <span className="tool-badge">{lang === 'tr' ? 'Toptan Ticaret & Dağıtım Ağları' : 'Wholesale & Distribution'}</span>
                    <span className="tool-badge">{lang === 'tr' ? 'Lojistik & Depo Operasyonları' : 'Logistics & Warehousing'}</span>
                    <span className="tool-badge">{lang === 'tr' ? 'B2B & Kurumsal Bayi Kanalları' : 'B2B & Dealer Operations'}</span>
                    <span className="tool-badge">{lang === 'tr' ? 'Özel Süreç Entegrasyonu Arayanlar' : 'Custom Process Integrations'}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Why Work With Me Trust Grid */}
        <div className="why-us-grid" style={{ marginTop: '50px' }}>
          <h3 className="sub-section-title" style={{ textAlign: 'center', marginBottom: '30px', fontSize: '20px', fontWeight: '700' }}>
            {lang === 'tr' ? 'Neden Akın Karadaş Danışmanlığı?' : 'Why Work With Akın Karadaş?'}
          </h3>
          <div className="why-us-cards">
            <div className="why-us-card glass-card">
              <div className="why-us-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h4>{lang === 'tr' ? 'Sektörel Operasyonel Uzmanlık' : 'Industrial Domain Expertise'}</h4>
              <p>{lang === 'tr' ? 'Tekstil ve üretim tesislerinin zemin işleyişine, stok barkod/RFID mantığına ve KPI takibine doğrudan hakimiz.' : 'We possess direct ground-level understanding of factory workflows, RFID/barcode inventory systems, and manufacturing KPIs.'}</p>
            </div>

            <div className="why-us-card glass-card">
              <div className="why-us-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                  <line x1="6" y1="6" x2="6.01" y2="6" />
                  <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
              </div>
              <h4>{lang === 'tr' ? 'Sıfır Kesinti Taahhüdü' : 'Zero-Downtime Migration'}</h4>
              <p>{lang === 'tr' ? 'Veri göçü ve sistem entegrasyonu süreçlerini fabrika üretim hatlarını durdurmadan, vardiyaları aksatmadan yönetiyoruz.' : 'We perform critical database migrations and system syncs off-peak to prevent factory production line halts.'}</p>
            </div>

            <div className="why-us-card glass-card">
              <div className="why-us-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4>{lang === 'tr' ? 'SLA Uptime & Performans Garantisi' : 'SLA Uptime Guarantee'}</h4>
              <p>{lang === 'tr' ? 'Sistemlerimizin sürekliliğini ve hata durumlarında acil müdahale sürelerini yasal SLA sözleşmeleriyle garanti ediyoruz.' : 'We back our system availability and emergency response turnaround times with binding service level agreements (SLAs).'}</p>
            </div>

            <div className="why-us-card glass-card">
              <div className="why-us-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h4>{lang === 'tr' ? 'Şeffaf Bütçe & Sürprizsiz Maliyet' : 'Transparent Pricing & Planning'}</h4>
              <p>{lang === 'tr' ? 'Gizli maliyetler barındırmayan, iş paketlerine dayalı bütçelendirmelerle mali risklerinizi sıfıra indiriyoruz.' : 'We eliminate capital expenditure risks with predefined project milestones and zero hidden vendor costs.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <div className="section-header">
          <span className="section-tag">{lang === 'tr' ? 'Çözümlerimiz' : 'Our Solutions'}</span>
          <h2 className="section-title">{lang === 'tr' ? 'Dijital Dönüşüm Modülleri & Hizmetler' : 'Digital Transformation Modules & Services'}</h2>
          <p className="section-subtitle">{lang === 'tr' ? 'İşletmenizin operasyonel verimliliğini artıran entegre kurumsal yazılım hizmetleri.' : 'Integrated enterprise software services engineered to optimize your business operations.'}</p>
        </div>

        {/* Filter Controls for Services */}
        <div className="project-filters">
          <button className={serviceFilter === 'all' ? 'filter-btn active' : 'filter-btn'} onClick={() => setServiceFilter('all')}>
            {lang === 'tr' ? 'Tüm Çözümler' : 'All Solutions'}
          </button>
          <button className={serviceFilter === 'systems' ? 'filter-btn active' : 'filter-btn'} onClick={() => setServiceFilter('systems')}>
            {lang === 'tr' ? 'ERP & Sistemler' : 'ERP & Systems'}
          </button>
          <button className={serviceFilter === 'web' ? 'filter-btn active' : 'filter-btn'} onClick={() => setServiceFilter('web')}>
            {lang === 'tr' ? 'B2B & Web Platformları' : 'B2B & Web'}
          </button>
          <button className={serviceFilter === 'custom' ? 'filter-btn active' : 'filter-btn'} onClick={() => setServiceFilter('custom')}>
            {lang === 'tr' ? 'Süreç Otomasyonu & Yapay Zeka' : 'Automation & AI'}
          </button>
          <button className={serviceFilter === 'cloud' ? 'filter-btn active' : 'filter-btn'} onClick={() => setServiceFilter('cloud')}>
            {lang === 'tr' ? 'API Entegrasyonları' : 'API Integrations'}
          </button>
          <button className={serviceFilter === 'support' ? 'filter-btn active' : 'filter-btn'} onClick={() => setServiceFilter('support')}>
            {lang === 'tr' ? 'Bakım & Destek SLA' : 'Maintenance & SLA'}
          </button>
        </div>

        {/* Services Grid */}
        <div className="projects-grid">
          {filteredServices.map((service) => (
            <div key={service.id} className="project-card glass-card animate-scale-up">
              <div className="project-image-wrapper">
                <img src={service.image} alt={lang === 'tr' ? service.title_tr : service.title_en} />
                <div className="project-image-overlay">
                  <button className="btn btn-detail" onClick={() => handleSelectServiceAndScroll(service.id)}>
                    {lang === 'tr' ? 'Bütçe Planlayıcıda Seç' : 'Add to Budget Planner'}
                  </button>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category-badge">{service.category.toUpperCase()}</span>
                <h3>{lang === 'tr' ? service.title_tr : service.title_en}</h3>
                <p className="project-desc">{lang === 'tr' ? service.description_tr : service.description_en}</p>
                
                <div className="service-details-preview">
                  <div className="service-detail-item">
                    <span className="detail-label problem-label">
                      <span className="detail-dot problem-dot"></span>
                      {lang === 'tr' ? 'İş Problemi:' : 'Business Problem:'}
                    </span>
                    <p className="detail-text">{lang === 'tr' ? service.problem_tr : service.problem_en}</p>
                  </div>
                  <div className="service-detail-item">
                    <span className="detail-label solution-label">
                      <span className="detail-dot solution-dot"></span>
                      {lang === 'tr' ? 'Sağlanan Çözüm:' : 'Solution Provided:'}
                    </span>
                    <p className="detail-text">{lang === 'tr' ? service.solution_tr : service.solution_en}</p>
                  </div>
                  <div className="service-detail-item">
                    <span className="detail-label benefit-label">
                      <span className="detail-dot benefit-dot"></span>
                      {lang === 'tr' ? 'İşletmeye Faydası:' : 'Business Benefit:'}
                    </span>
                    <p className="detail-text">{lang === 'tr' ? service.benefit_tr : service.benefit_en}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="section technologies-section">
        <div className="section-header">
          <span className="section-tag">{lang === 'tr' ? 'Teknolojik Güç' : 'Technological Stack'}</span>
          <h2 className="section-title">{lang === 'tr' ? 'İş Değeri Odaklı Teknolojiler' : 'Value-Driven Enterprise Technologies'}</h2>
          <p className="section-subtitle">
            {lang === 'tr' 
              ? 'Yazılım dillerinin ötesinde, işletmenize operasyonel hız, kayıpsız veri ve finansal denetim sağlayan altyapılar.' 
              : 'Beyond programming jargon: operational capabilities built to secure data, accelerate throughput, and ensure auditability.'}
          </p>
        </div>

        <div className="tech-cards-grid">
          {TECH_CATEGORIES.map((category) => (
            <div 
              key={category.id} 
              className={`tech-card glass-card ${category.highlight ? 'highlight-card' : ''}`}
            >
              {category.highlight && (
                <div className="highlight-badge">
                  {lang === 'tr' ? 'Kurumsal Odak' : 'Enterprise Focus'}
                </div>
              )}
              <h3>{lang === 'tr' ? category.title_tr : category.title_en}</h3>
              <p className="tech-category-desc">
                {lang === 'tr' ? category.description_tr : category.description_en}
              </p>
              <ul className="tech-items-list">
                {category.items.map((item, idx) => (
                  <li key={idx} className="tech-item-row">
                    <div className="tech-item-bullet-wrapper">
                      <span className="tech-item-bullet"></span>
                      <strong className="tech-item-name">{lang === 'tr' ? item.name_tr : item.name_en}</strong>
                    </div>
                    <span className="tech-item-desc">{lang === 'tr' ? item.desc_tr : item.desc_en}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology / Working & Delivery Process Section */}
      <section id="process" className="section process-section">
        <div className="section-header">
          <span className="section-tag">{lang === 'tr' ? 'Metodoloji' : 'Methodology'}</span>
          <h2 className="section-title">{lang === 'tr' ? 'Uçtan Uca Çalışma ve Teslim Süreci' : 'End-to-End Delivery Workflow'}</h2>
          <p className="section-subtitle">
            {lang === 'tr' 
              ? 'Süreç analizinden siber güvenlik denetimlerine, sistemlerimizi sıfır hata ve tam şeffaflıkla devreye alıyoruz.' 
              : 'From process audit to cybersecurity pen-testing, we deploy our systems with zero-error standards.'}
          </p>
        </div>

        <div className="process-flow-container">
          <h3 className="process-sub-title">{lang === 'tr' ? '1. Uygulama ve Çalışma Adımları' : '1. Working & Integration Steps'}</h3>
          <div className="process-steps-grid">
            <div className="process-step-card glass-card">
              <div className="step-num">01</div>
              <h4>{lang === 'tr' ? 'Keşif ve Saha Analizi' : 'Audit & Discovery'}</h4>
              <p>{lang === 'tr' ? 'İşletmenizi ziyaret edip departmanların işleyişini, fiziksel darboğazları ve veri akışını yerinde analiz ediyoruz.' : 'We visit your facility to map physical queues, spreadsheet dependencies, and operational bottleneck points.'}</p>
            </div>
            <div className="process-step-card glass-card">
              <div className="step-num">02</div>
              <h4>{lang === 'tr' ? 'Mimari ve Kapsam Tasarımı' : 'System Design'}</h4>
              <p>{lang === 'tr' ? 'Veritabanı şemalarını, API entegrasyon köprülerini ve donanım konumlandırmalarını kapsayan proje şartnamesini hazırlarız.' : 'We draft system layout blueprints, API integration maps, and hardware scopes to establish a contract scope.'}</p>
            </div>
            <div className="process-step-card glass-card">
              <div className="step-num">03</div>
              <h4>{lang === 'tr' ? 'Geliştirme ve Test Fazı' : 'Development & Test'}</h4>
              <p>{lang === 'tr' ? 'Modülleri güvenli bir test ortamında geliştiriyor, veritabanı senkronizasyonlarını ve veri göçü testlerini tamamlıyoruz.' : 'We write modules in sandbox environments and run simulated database migrations to ensure full ledger validation.'}</p>
            </div>
            <div className="process-step-card glass-card">
              <div className="step-num">04</div>
              <h4>{lang === 'tr' ? 'Güvenli Canlıya Geçiş' : 'Secure Launch'}</h4>
              <p>{lang === 'tr' ? 'Siber sızma testlerini gerçekleştirip, personelinize uygulamalı tablet/terminal eğitimleri vererek sistemi canlıya alıyoruz.' : 'We execute network penetration checks, run on-site worker tablet drills, and switch the system live.'}</p>
            </div>
          </div>
        </div>

        <div className="delivery-handover-container" style={{ marginTop: '50px' }}>
          <h3 className="process-sub-title">{lang === 'tr' ? '2. Proje Tesliminde Ne Alırsınız?' : '2. What is Delivered at Project Sign-Off?'}</h3>
          <div className="handover-grid">
            <div className="handover-item glass-card">
              <div className="handover-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div className="handover-details">
                <h4>{lang === 'tr' ? 'Çalışan Canlı Sistem & Bulut Altyapısı' : 'Operating Cloud System & SLA'}</h4>
                <p>{lang === 'tr' ? 'AWS veya Google Cloud üzerinde kurulu, tüm güvenlik ve yedekleme sistemleri aktif çalışan mimari.' : 'Full production infrastructure deployed on AWS or Google Cloud, configured with automated backups.'}</p>
              </div>
            </div>

            <div className="handover-item glass-card">
              <div className="handover-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div className="handover-details">
                <h4>{lang === 'tr' ? 'Kaynak Kod Mülkiyeti & Telif Devri' : 'Source Code Ownership & Telif Devri'}</h4>
                <p>{lang === 'tr' ? 'Geliştirilen yazılımların tüm kaynak kodları ve mülkiyet hakları resmi sözleşmeyle tamamen size devredilir.' : 'Full system source codes and IP ownership are legally transferred to your corporation with zero vendor lock-in.'}</p>
              </div>
            </div>

            <div className="handover-item glass-card">
              <div className="handover-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div className="handover-details">
                <h4>{lang === 'tr' ? 'API & Teknik Mimari Dokümantasyonu' : 'Technical & API Manuals'}</h4>
                <p>{lang === 'tr' ? 'Veritabanı diyagramları, API uç noktası dökümanları ve acil durum kurtarma prosedürleri kılavuzu.' : 'Full database schemas, API endpoint integration maps, and disaster recovery action guides.'}</p>
              </div>
            </div>

            <div className="handover-item glass-card">
              <div className="handover-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div className="handover-details">
                <h4>{lang === 'tr' ? 'Personel Saha Eğitimleri & Kılavuzlar' : 'Worker On-site Drills & User Guides'}</h4>
                <p>{lang === 'tr' ? 'Fabrika ve depo personeli için hazırlanmış basit görsel kullanım kılavuzları ve uygulamalı eğitim oturumları.' : 'Hands-on training sessions and illustrated tablet/handheld guides for floor operators.'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Case Studies Section */}
      <section id="projects" className="section projects-section">
        <div className="section-header">
          <span className="section-tag">{lang === 'tr' ? 'Başarı Hikayeleri' : 'Case Studies'}</span>
          <h2 className="section-title">{lang === 'tr' ? 'Gerçekleşen Dijital Dönüşüm Vakaları' : 'Enterprise Success Stories'}</h2>
          <p className="section-subtitle">{lang === 'tr' ? 'Farklı sektörlerdeki kurumsal işletmeler için tasarladığımız sistemler ve elde ettikleri somut iş sonuçları.' : 'Digital transformation projects and concrete business results delivered to various enterprise industries.'}</p>
        </div>

        {/* Filter Controls for Projects */}
        <div className="project-filters">
          <button className={projectFilter === 'all' ? 'filter-btn active' : 'filter-btn'} onClick={() => setProjectFilter('all')}>
            {lang === 'tr' ? 'Tüm Projeler' : 'All Projects'}
          </button>
          <button className={projectFilter === 'textile' ? 'filter-btn active' : 'filter-btn'} onClick={() => setProjectFilter('textile')}>
            {lang === 'tr' ? 'Tekstil & Depo' : 'Textile & WMS'}
          </button>
          <button className={projectFilter === 'systems' ? 'filter-btn active' : 'filter-btn'} onClick={() => setProjectFilter('systems')}>
            {lang === 'tr' ? 'Kurumsal ERP' : 'Enterprise ERP'}
          </button>
          <button className={projectFilter === 'web' ? 'filter-btn active' : 'filter-btn'} onClick={() => setProjectFilter('web')}>
            {lang === 'tr' ? 'B2B Bayi Portalı' : 'B2B & API'}
          </button>
          <button className={projectFilter === 'ai' ? 'filter-btn active' : 'filter-btn'} onClick={() => setProjectFilter('ai')}>
            {lang === 'tr' ? 'Yapay Zeka (AI)' : 'Artificial Intelligence'}
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card animate-scale-up">
              <div className="project-image-wrapper">
                <img src={project.image} alt={lang === 'tr' ? project.title_tr : project.title_en} />
                <div className="project-image-overlay">
                  <button className="btn btn-detail" onClick={() => setSelectedProject(project)}>
                    {lang === 'tr' ? 'Vaka Analizini İncele' : 'View Case Study'}
                  </button>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category-badge">{project.category.toUpperCase()}</span>
                <span className="project-client-badge" style={{ float: 'right', display: 'inline-block' }}>
                  {lang === 'tr' ? project.client_tr : project.client_en}
                </span>
                <h3>{lang === 'tr' ? project.title_tr : project.title_en}</h3>
                <p className="project-desc" style={{ marginBottom: '14px' }}>{lang === 'tr' ? project.summary_tr : project.summary_en}</p>
                
                <div className="project-results-preview" style={{ marginTop: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '12px' }}>
                  <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#10b981', display: 'block', marginBottom: '4px', letterSpacing: '0.05em' }}>
                    {lang === 'tr' ? 'Elde Edilen Sonuç / ROI:' : 'ROI Achieved:'}
                  </span>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.4' }}>
                    {lang === 'tr' ? project.results_tr.split('. ')[0] + '.' : project.results_en.split('. ')[0] + '.'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section pricing-section">
        <div className="section-header">
          <span className="section-tag">{lang === 'tr' ? 'Bütçe Kılavuzu' : 'Budget Guide'}</span>
          <h2 className="section-title">{lang === 'tr' ? 'Şeffaf Yatırım Paketleri' : 'Transparent Investment Tiers'}</h2>
          <p className="section-subtitle">
            {lang === 'tr' 
              ? 'İşletmenizin ölçeğine ve dijitalleşme hedeflerine uygun, gizli maliyet barındırmayan fiyatlandırma modelleri.' 
              : 'Pricing tiers aligned with your business scale and digital objectives, with zero hidden fees.'}
          </p>
        </div>

        <div className="pricing-grid">
          {/* Launch Card */}
          <div className="pricing-card glass-card animate-scale-up">
            <div className="pricing-card-header">
              <span className="pricing-badge">Launch</span>
              <h3>{lang === 'tr' ? 'Kurumsal Web Platformu' : 'Corporate Web Platform'}</h3>
              <p className="pricing-target-desc">{lang === 'tr' ? 'Dijital vitrinini kurmak isteyen KOBİ\'ler için' : 'For SMBs launching their digital corporate presence'}</p>
              <div className="pricing-price-area">
                <span className="price-range">40.000 TL - 80.000 TL</span>
                <span className="price-period">{lang === 'tr' ? '/ proje bütçesi' : '/ project budget'}</span>
              </div>
            </div>
            
            <div className="pricing-card-body">
              <div className="pricing-highlights">
                <div className="highlight-item">
                  <span className="highlight-label">{lang === 'tr' ? 'Destek Süresi:' : 'Support SLA:'}</span>
                  <span className="highlight-value">{lang === 'tr' ? '3 Ay SLA Desteği' : '3 Months SLA Support'}</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">{lang === 'tr' ? 'Geliştirme Süreci:' : 'Dev Workflow:'}</span>
                  <span className="highlight-value">{lang === 'tr' ? '2-3 Hafta Yayına Geçiş' : '2-3 Weeks Live Deployment'}</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">{lang === 'tr' ? 'Entegrasyonlar:' : 'Integrations:'}</span>
                  <span className="highlight-value">{lang === 'tr' ? 'Temel API Entegrasyonları' : 'Basic API Sync'}</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">{lang === 'tr' ? 'Güvenlik:' : 'Security:'}</span>
                  <span className="highlight-value">{lang === 'tr' ? 'SSL & Temel Güvenlik Duvarı' : 'SSL & Standard WAF'}</span>
                </div>
              </div>

              <ul className="pricing-features-list">
                <li>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {lang === 'tr' ? 'Özel Arayüz Tasarımı' : 'Custom UI Design'}
                </li>
                <li>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {lang === 'tr' ? 'Mobil Uyumlu Responsive Mimari' : 'Mobile Responsive Layout'}
                </li>
                <li>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {lang === 'tr' ? 'Temel SEO Yapılandırması' : 'Basic SEO Optimization'}
                </li>
              </ul>
            </div>

            <div className="pricing-card-footer">
              <a href="#contact" className="btn btn-secondary pricing-action-btn">
                {lang === 'tr' ? 'Launch Projesi Başlat' : 'Start Launch Project'}
              </a>
            </div>
          </div>

          {/* Growth Card */}
          <div className="pricing-card pricing-card-featured glass-card animate-scale-up">
            <div className="featured-ribbon">{lang === 'tr' ? 'EN ÇOK SEÇİLEN' : 'MOST POPULAR'}</div>
            <div className="pricing-card-header">
              <span className="pricing-badge badge-featured">Growth</span>
              <h3>{lang === 'tr' ? 'Kurumsal Web + Yönetim Paneli' : 'Corporate Web + Panel'}</h3>
              <p className="pricing-target-desc">{lang === 'tr' ? 'Süreçlerini dijital panelden yönetmek isteyen üreticiler için' : 'For manufacturers seeking remote administration panels'}</p>
              <div className="pricing-price-area">
                <span className="price-range">80.000 TL - 150.000 TL</span>
                <span className="price-period">{lang === 'tr' ? '/ proje bütçesi' : '/ project budget'}</span>
              </div>
            </div>

            <div className="pricing-card-body">
              <div className="pricing-highlights">
                <div className="highlight-item">
                  <span className="highlight-label">{lang === 'tr' ? 'Destek Süresi:' : 'Support SLA:'}</span>
                  <span className="highlight-value">{lang === 'tr' ? '6 Ay SLA Desteği' : '6 Months SLA Support'}</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">{lang === 'tr' ? 'Geliştirme Süreci:' : 'Dev Workflow:'}</span>
                  <span className="highlight-value">{lang === 'tr' ? '4-6 Hafta Entegrasyon' : '4-6 Weeks Delivery'}</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">{lang === 'tr' ? 'Entegrasyonlar:' : 'Integrations:'}</span>
                  <span className="highlight-value">{lang === 'tr' ? 'ERP/CRM & Muhasebe Senkronu' : 'ERP/CRM & Ledger Sync'}</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">{lang === 'tr' ? 'Güvenlik:' : 'Security:'}</span>
                  <span className="highlight-value">{lang === 'tr' ? 'Gelişmiş WAF & KVKK Uyum' : 'Advanced WAF & GDPR Compliant'}</span>
                </div>
              </div>

              <ul className="pricing-features-list">
                <li>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {lang === 'tr' ? 'Özelleştirilmiş Yönetim Paneli' : 'Custom Management Panel'}
                </li>
                <li>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {lang === 'tr' ? 'Gelişmiş Veri Filtreleme ve Raporlama' : 'Advanced Filtering & Reporting'}
                </li>
                <li>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {lang === 'tr' ? 'Çift Yönlü Veri Entegrasyon Altyapısı' : 'Two-Way Data Sync Architecture'}
                </li>
              </ul>
            </div>

            <div className="pricing-card-footer">
              <a href="#contact" className="btn btn-primary pricing-action-btn glow-button">
                {lang === 'tr' ? 'Growth Projesi Başlat' : 'Start Growth Project'}
              </a>
            </div>
          </div>

          {/* Enterprise Card */}
          <div className="pricing-card glass-card animate-scale-up">
            <div className="pricing-card-header">
              <span className="pricing-badge">Enterprise</span>
              <h3>{lang === 'tr' ? 'Özel Yazılım, ERP, CRM & Üretim Takip' : 'Custom software, ERP, CRM & WMS'}</h3>
              <p className="pricing-target-desc">{lang === 'tr' ? 'Uçtan uca dijital dönüşüm hedefleyen sanayi ve tekstil holdingleri için' : 'For large industrial holdings demanding custom ecosystems'}</p>
              <div className="pricing-price-area">
                <span className="price-range text-quote">{lang === 'tr' ? 'TEKLİF USULÜ' : 'CUSTOM QUOTE'}</span>
                <span className="price-period">{lang === 'tr' ? 'Kapsam bazlı planlama' : 'Based on audit requirements'}</span>
              </div>
            </div>

            <div className="pricing-card-body">
              <div className="pricing-highlights">
                <div className="highlight-item">
                  <span className="highlight-label">{lang === 'tr' ? 'Destek Süresi:' : 'Support SLA:'}</span>
                  <span className="highlight-value">{lang === 'tr' ? '12 Ay SLA & 7/24 Kesintisiz Destek' : '12 Months SLA & 24/7 Dedicated Support'}</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">{lang === 'tr' ? 'Geliştirme Süreci:' : 'Dev Workflow:'}</span>
                  <span className="highlight-value">{lang === 'tr' ? 'Saha Denetimi & Faz Entegrasyonu' : 'Site Audit & Phased Deployment'}</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">{lang === 'tr' ? 'Entegrasyonlar:' : 'Integrations:'}</span>
                  <span className="highlight-value">{lang === 'tr' ? 'RFID, Barkod, Logo/SAP & Çoklu API' : 'RFID, Logo/SAP & Unlimited APIs'}</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-label">{lang === 'tr' ? 'Güvenlik:' : 'Security:'}</span>
                  <span className="highlight-value">{lang === 'tr' ? 'ISO Denetimi, Sızma Testi, Bulut Yedekleme' : 'ISO Compliance, Pentest, Backup'}</span>
                </div>
              </div>

              <ul className="pricing-features-list">
                <li>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {lang === 'tr' ? 'Fabrika ve Depo Saha Süreç Analizi' : 'Factory & Floor Site Process Auditing'}
                </li>
                <li>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {lang === 'tr' ? 'Özel İş Akışı ve Rol Yetkilendirme' : 'Custom Workflows & Role Permissions'}
                </li>
                <li>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {lang === 'tr' ? 'Sınırsız Ölçeklenebilir Mikroservis Mimari' : 'Unlimited Scalable Microservices'}
                </li>
              </ul>
            </div>

            <div className="pricing-card-footer">
              <a href="#contact" className="btn btn-secondary pricing-action-btn">
                {lang === 'tr' ? 'Teklif & Kapsam Analizi Talep Et' : 'Request Enterprise Audit'}
              </a>
            </div>
          </div>
        </div>

        {/* Support & Maintenance Policy Banner */}
        <div className="support-policy-container glass-card" style={{ marginTop: '50px' }}>
          <div className="support-policy-header">
            <span className="live-pill" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '2px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>SLA DESTEK</span>
            <h3 style={{ fontSize: '20px', fontWeight: '700', margin: '10px 0 6px' }}>{lang === 'tr' ? 'Destek ve SLA Bakım Politikamız' : 'Our Support & SLA Maintenance Policy'}</h3>
          </div>
          <p className="support-policy-intro" style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.5' }}>
            {lang === 'tr' 
              ? 'Yazılımlarımızın canlıya geçmesinden sonra operasyonunuzun kesintisiz sürmesi için kurumsal SLA seviyesinde resmi güvence veriyoruz.' 
              : 'We provide enterprise-level SLA support after systems launch to guarantee operational continuity.'}
          </p>
          <div className="support-policy-grid">
            <div className="support-policy-item">
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>{lang === 'tr' ? 'Acil Müdahale SLA (Incident SLA)' : 'Emergency Incident SLA'}</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.4' }}>{lang === 'tr' ? 'Kritik sistem duruşları veya envanter eşleşme hatalarında 1 saat içinde müdahale garantisi veriyoruz.' : 'We guarantee emergency response and engineering assignment within 1 hour for high-priority stalls.'}</p>
            </div>
            <div className="support-policy-item">
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>{lang === 'tr' ? 'Düzenli Yedekleme & Felaket Kurtarma' : 'Daily Backups & Recovery'}</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.4' }}>{lang === 'tr' ? 'Günlük otomatik bulut yedeklemeleri ve sistem kurtarma (Disaster Recovery) testleri gerçekleştiriyoruz.' : 'We configure daily automated DB backups and run disaster recovery drills to prevent data loss.'}</p>
            </div>
            <div className="support-policy-item">
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>{lang === 'tr' ? 'Periyodik Güvenlik Yama Yönetimi' : 'Monthly Security Patches'}</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.4' }}>{lang === 'tr' ? 'Her ay sunucularınızı güvenlik açıklarına karşı tarıyor, işletim sistemi ve API yamalarını uyguluyoruz.' : 'We execute vulnerability sweeps and apply software dependencies and API patches monthly.'}</p>
            </div>
            <div className="support-policy-item">
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>{lang === 'tr' ? 'Ölçeklenebilir Modül Güncellemeleri' : 'Upgrades & Scalability'}</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.4' }}>{lang === 'tr' ? 'İşletmenizin büyümesine bağlı olarak yeni depo lokasyonları veya API\'leri sisteme kesintisiz entegre ediyoruz.' : 'We build systems to be modular, enabling seamless additions of new warehouses or API links as you scale.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Estimator Section */}
      <section id="estimator" className="section estimator-section">
        <div className="hero-glow-1" style={{ top: '30%', right: '10%' }}></div>
        <div className="section-header">
          <span className="section-tag">Yatırım Planlama</span>
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
                    <span className="checkbox-price">~${service.baseCost.toLocaleString('en-US')} USD</span>
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
                    <span>{t.estimatorScaleSMB} (1.8x)</span>
                  </label>
                  <label className={scale === 'enterprise' ? 'radio-card active' : 'radio-card'}>
                    <input type="radio" name="scale" checked={scale === 'enterprise'} onChange={() => setScale('enterprise')} />
                    <span>{t.estimatorScaleEnterprise} (3.0x)</span>
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
                <span className="metric-value">${estimation.cost.toLocaleString('en-US')} <span className="currency">USD</span></span>
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
                <p className="modal-subtitle">{lang === 'tr' ? selectedService.description_tr : selectedService.description_en}</p>
                
                <div className="modal-details-grid">
                  <div className="modal-detail-card problem-card">
                    <div className="modal-detail-header">
                      <svg className="modal-detail-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                        <line x1="12" y1="9" x2="12" y2="13"/>
                        <line x1="12" y1="17" x2="12.01" y2="17"/>
                      </svg>
                      <h3>{lang === 'tr' ? 'İş Problemi' : 'Business Problem'}</h3>
                    </div>
                    <p>{lang === 'tr' ? selectedService.problem_tr : selectedService.problem_en}</p>
                  </div>

                  <div className="modal-detail-card solution-card">
                    <div className="modal-detail-header">
                      <svg className="modal-detail-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                      <h3>{lang === 'tr' ? 'Sağlanan Çözüm' : 'Solution Provided'}</h3>
                    </div>
                    <p>{lang === 'tr' ? selectedService.solution_tr : selectedService.solution_en}</p>
                  </div>

                  <div className="modal-detail-card benefit-card">
                    <div className="modal-detail-header">
                      <svg className="modal-detail-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                      <h3>{lang === 'tr' ? 'İşletmeye Sağlanan Fayda' : 'Business Benefit'}</h3>
                    </div>
                    <p>{lang === 'tr' ? selectedService.benefit_tr : selectedService.benefit_en}</p>
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

      {/* Project Case Study Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content project-modal-content glass-card animate-scale-up" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)} aria-label="Close">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="modal-body project-modal-body">
              <div className="project-modal-header">
                <img src={selectedProject.image} alt={lang === 'tr' ? selectedProject.title_tr : selectedProject.title_en} className="project-modal-image" />
                <div className="project-modal-title-area">
                  <span className="project-category-badge">{selectedProject.category.toUpperCase()}</span>
                  <span className="project-client-badge">
                    {lang === 'tr' ? selectedProject.client_tr : selectedProject.client_en}
                  </span>
                  <h2>{lang === 'tr' ? selectedProject.title_tr : selectedProject.title_en}</h2>
                  <p className="project-modal-summary">{lang === 'tr' ? selectedProject.summary_tr : selectedProject.summary_en}</p>
                </div>
              </div>
              
              <div className="project-case-study-container">
                {/* 1. Müşteri Problemi */}
                <div className="case-study-section problem-section">
                  <div className="section-title-wrapper">
                    <span className="section-number">01</span>
                    <h3>{lang === 'tr' ? 'Müşteri Problemi & Darboğazlar' : 'Client Problem & Bottlenecks'}</h3>
                  </div>
                  <div className="section-body">
                    <p>{lang === 'tr' ? selectedProject.problem_tr : selectedProject.problem_en}</p>
                  </div>
                </div>

                {/* 2. Analiz Süreci */}
                <div className="case-study-section analysis-section">
                  <div className="section-title-wrapper">
                    <span className="section-number">02</span>
                    <h3>{lang === 'tr' ? 'Saha Analiz Süreci' : 'Field Analysis Process'}</h3>
                  </div>
                  <div className="section-body">
                    <p>{lang === 'tr' ? selectedProject.analysis_tr : selectedProject.analysis_en}</p>
                  </div>
                </div>

                {/* 3. Çözüm Tasarımı */}
                <div className="case-study-section design-section">
                  <div className="section-title-wrapper">
                    <span className="section-number">03</span>
                    <h3>{lang === 'tr' ? 'Çözüm ve Sistem Tasarımı' : 'Solution & System Design'}</h3>
                  </div>
                  <div className="section-body">
                    <p>{lang === 'tr' ? selectedProject.design_tr : selectedProject.design_en}</p>
                  </div>
                </div>

                {/* 4. Kullanılan Teknolojiler */}
                <div className="case-study-section tech-section">
                  <div className="section-title-wrapper">
                    <span className="section-number">04</span>
                    <h3>{lang === 'tr' ? 'Kullanılan Teknolojiler & Mimari' : 'Technologies & Architecture'}</h3>
                  </div>
                  <div className="section-body">
                    <div className="case-tech-badges">
                      {(lang === 'tr' ? selectedProject.tech_tr : selectedProject.tech_en).split(', ').map((tech, idx) => (
                        <span key={idx} className="case-tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 5. Uygulama Süreci */}
                <div className="case-study-section implementation-section">
                  <div className="section-title-wrapper">
                    <span className="section-number">05</span>
                    <h3>{lang === 'tr' ? 'Uygulama ve Canlıya Geçiş' : 'Implementation & Deployment'}</h3>
                  </div>
                  <div className="section-body">
                    <p>{lang === 'tr' ? selectedProject.implementation_tr : selectedProject.implementation_en}</p>
                  </div>
                </div>

                {/* 6. Elde Edilen Sonuçlar */}
                <div className="case-study-section results-section">
                  <div className="section-title-wrapper">
                    <span className="section-number">06</span>
                    <h3>{lang === 'tr' ? 'Elde Edilen Sonuçlar & ROI' : 'Results Obtained & ROI'}</h3>
                  </div>
                  <div className="section-body">
                    <p>{lang === 'tr' ? selectedProject.results_tr : selectedProject.results_en}</p>
                  </div>
                </div>
              </div>

              <div className="modal-actions" style={{ padding: '0 24px 24px', justifyContent: 'flex-end' }}>
                <button className="btn btn-primary" onClick={() => { setSelectedProject(null); handleExportEstimationToForm(); }}>
                  {lang === 'tr' ? 'Benzer Bir Çözüm Talep Edin' : 'Request a Similar Solution'}
                </button>
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
            <h3>{lang === 'tr' ? 'Kurucu & Baş Teknoloji Danışmanı' : 'Founder & Principal Technology Advisor'}</h3>
            <h4 className="company">Karadaş Teknoloji Danışmanlığı</h4>
            <p>
              {lang === 'tr'
                ? 'Üretim tesisleri, tekstil fabrikaları ve büyük ölçekli toptancılar için dijitalleşme yol haritaları hazırlamak, özel ERP/CRM entegrasyonlarını ve RFID depo otomasyonlarını yönetmek.'
                : 'Drafting digital transformation roadmaps, orchestrating enterprise ERP/CRM modules, and delivering RFID-powered WMS automation for textile plants and logistics groups.'}
            </p>
          </div>

          <div className="timeline-item right glass-card">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2021 - 2024</div>
            <h3>{lang === 'tr' ? 'Kıdemli Kurumsal Çözümler Mimarı' : 'Senior Enterprise Solutions Architect'}</h3>
            <h4 className="company">TechNova Systems</h4>
            <p>
              {lang === 'tr'
                ? 'Büyük ölçekli B2B/B2C bayi ağları ve e-ticaret altyapılarının tasarımı, Stripe/iyzico ödeme orkestrasyonu ve ERP veri senkronizasyonlarının kurulması.'
                : 'Architecting wholesale B2B platform layouts, payment processor integrations (Stripe, iyzico), and scheduling database clustering syncs.'}
            </p>
          </div>

          <div className="timeline-item left glass-card">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2018 - 2021</div>
            <h3>{lang === 'tr' ? 'Sistem Entegrasyon Uzmanı' : 'System Integration Specialist'}</h3>
            <h4 className="company">WebCloud Enterprise</h4>
            <p>
              {lang === 'tr'
                ? 'Linux tabanlı bulut altyapı yönetimi, ağ güvenliği denetimleri, WAF sıkılaştırma ve KVKK/GDPR uyumlu veri saklama sistemlerinin devreye alınması.'
                : 'Managing Linux cloud server grids, network hardening audits, configuring WAF firewalls, and deployment of KVKK/GDPR-compliant DB masks.'}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section faq-section">
        <div className="section-header">
          <span className="section-tag">{lang === 'tr' ? 'Sık Sorulan Sorular' : 'FAQ'}</span>
          <h2 className="section-title">{lang === 'tr' ? 'Kafanıza Takılan Sorular' : 'Frequently Asked Questions'}</h2>
          <p className="section-subtitle">
            {lang === 'tr' 
              ? 'Kurumsal dijital dönüşüm süreçlerimiz, SLA garantilerimiz ve güvenlik standartlarımız hakkında merak edilenler.' 
              : 'Everything you need to know about our enterprise delivery workflows, SLA guarantees, and security compliance.'}
          </p>
        </div>

        <div className="faq-container">
          {FAQ_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className={activeFaq === item.id ? 'faq-item active glass-card' : 'faq-item glass-card'}
              onClick={() => setActiveFaq(prev => prev === item.id ? null : item.id)}
            >
              <div className="faq-question">
                <h4>{lang === 'tr' ? item.q_tr : item.q_en}</h4>
                <span className="faq-toggle-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                    {activeFaq === item.id ? (
                      <line x1="5" y1="12" x2="19" y2="12" />
                    ) : (
                      <>
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </>
                    )}
                  </svg>
                </span>
              </div>
              <div className="faq-answer">
                <p>{lang === 'tr' ? item.a_tr : item.a_en}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section & Client Testimonials */}
      <section id="contact" className="section contact-section">
        <div className="section-header">
          <span className="section-tag">{t.contactHeaderTag}</span>
          <h2 className="section-title">{t.contactHeaderTitle}</h2>
          <p className="section-subtitle">{t.contactHeaderSubtitle}</p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-container glass-card">
            <h3>{lang === 'tr' ? 'Analiz ve Talep Formu' : 'Audit Request Form'}</h3>
            
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
                <label htmlFor="company">{lang === 'tr' ? 'Şirket Adı' : 'Company Name'}</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  value={formData.company} 
                  onChange={handleInputChange} 
                  className={formErrors.company ? 'form-input error' : 'form-input'}
                  placeholder={lang === 'tr' ? 'Örn. Karadaş Tekstil A.Ş.' : 'e.g. Acme Corp'}
                />
                {formErrors.company && <span className="error-text">{formErrors.company}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="sector">{lang === 'tr' ? 'Faaliyet Gösterilen Sektör' : 'Industry / Sector'}</label>
                <input 
                  type="text" 
                  id="sector" 
                  name="sector" 
                  value={formData.sector} 
                  onChange={handleInputChange} 
                  className="form-input"
                  placeholder={lang === 'tr' ? 'Örn. Tekstil / Üretim' : 'e.g. Manufacturing / Wholesale'}
                />
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

          {/* Client Testimonials (Case Studies) */}
          <div className="message-board-container glass-card">
            <div className="board-header">
              <h3>{lang === 'tr' ? 'Müşteri Başarı Hikayeleri' : 'Client Success Stories'}</h3>
              <span className="live-pill" style={{ color: 'var(--primary)', background: 'var(--primary-glow)' }}>
                {lang === 'tr' ? 'Referanslar' : 'Testimonials'}
              </span>
            </div>
            <p className="board-info">
              {lang === 'tr' 
                ? 'İş süreçlerini dijitalleştirdiğimiz kurumsal iş ortaklarımızın gerçek başarı metrikleri.' 
                : 'Real operational metrics delivered to our valued enterprise partners.'}
            </p>
            <div className="messages-list">
              <div className="board-message-item">
                <div className="msg-header">
                  <span className="msg-author">Hakan Yılmaz</span>
                  <span className="msg-time">{lang === 'tr' ? 'Yılmaz Tekstil, CEO' : 'Yilmaz Textile, CEO'}</span>
                </div>
                <p className="msg-text">
                  {lang === 'tr' 
                    ? 'Akın Bey ile depo kontrol ve stok otomasyonumuzu baştan kurduk. RFID entegrasyonu sayesinde tekstil siparişlerindeki sevkiyat hatalarımız sıfıra indi. Operasyonel maliyetlerimizde %20 tasarruf sağladık.' 
                    : 'We completely rewrote our WMS inventory with Akin. Thanks to RFID integrations, our apparel shipping errors dropped to absolute zero. We achieved a 20% drop in overall logistics costs.'}
                </p>
              </div>
              <div className="board-message-item">
                <div className="msg-header">
                  <span className="msg-author">Elif Demirci</span>
                  <span className="msg-time">{lang === 'tr' ? 'Demirci Metal, Genel Müdür' : 'Demirci Metal, Managing Director'}</span>
                </div>
                <p className="msg-text">
                  {lang === 'tr' 
                    ? 'Fabrikamızın tüm operasyonel birimlerini tek bir bulut tabanlı ERP altında topladık. Kopuk veri akışı bitti, tüm raporları anlık görebiliyoruz. Bütçemizin tam karşılığını aldık, kurumsal güvenimiz tam.' 
                    : 'Consolidated our factory divisions under a single cloud ERP. No more fragmented reports; we track logistics instantly. Fully worth the capital expenditure, highly recommended technology partner.'}
                </p>
              </div>
              <div className="board-message-item">
                <div className="msg-header">
                  <span className="msg-author">Kemal Kaya</span>
                  <span className="msg-time">{lang === 'tr' ? 'Kaya Toptancılık, Operasyon Lideri' : 'Kaya Wholesale, Head of Ops'}</span>
                </div>
                <p className="msg-text">
                  {lang === 'tr' 
                    ? 'Bayi yönetim (B2B) e-ticaret platformumuz ve ERP senkronizasyonu sayesinde tahsilat sürelerimiz yarı yarıya azaldı. Güvenlik standartları ve SLA desteği mükemmel seviyede.' 
                    : 'Thanks to the custom B2B storefront and automated ERP ledger syncing, our invoice collections cycle dropped by 50%. The security posture and SLA uptime are top-notch.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Akın Karadaş. {lang === 'tr' ? 'Tüm Hakları Saklıdır.' : 'All Rights Reserved.'}</p>
      </footer>
    </>
  );
}

export default App;
