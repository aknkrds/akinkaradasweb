import { useState, useEffect } from 'react'
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
    navTimeline: "Çalışma Sürecimiz",
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
    timelineHeaderTag: "Çalışma Süreci",
    timelineHeaderTitle: "Proje Süreciniz Nasıl İlerler?",
    timelineHeaderSubtitle: "Süreç analizinden canlıya almaya kadar, şeffaf ve profesyonel bir teslim akışı.",
    contactHeaderTag: "İş Birliği",
    contactHeaderTitle: "Dijital Dönüşümü Başlatın",
    contactHeaderSubtitle: "İşletmenizin süreçlerini optimize etmek veya bütçe/kapsam analizi almak için ön analiz formu gönderin.",
    contactFormName: "Yetkili Adı Soyadı",
    contactFormEmail: "Kurumsal E-posta Adresi",
    contactFormMsg: "Talep Detayı veya Proje Kapsamı",
    contactFormSubmit: "Ön Analiz Talebi Gönder",
    techHeader: "Kullanılan Kurumsal Teknolojiler",
    projectLink: "Kapsam Detay Talebi",
    statusBadge: "Kurumsal Danışmanlığa Açık",
    visitorBoardLive: "Canlı",
    successMsg: "Talebiniz başarıyla alındı. En kısa sürede kurumsal analiz ekibimiz sizinle iletişime geçecektir."
  },
  en: {
    navAbout: "Enterprise",
    navProjects: "Solutions",
    navTimeline: "Process",
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
    timelineHeaderTag: "Process",
    timelineHeaderTitle: "How Your Project Moves Forward",
    timelineHeaderSubtitle: "A transparent, professional delivery flow from analysis to go-live.",
    contactHeaderTag: "Partnership",
    contactHeaderTitle: "Initiate Digital Transformation",
    contactHeaderSubtitle: "Submit a request to schedule an operational audit meeting or clarify your project scope.",
    contactFormName: "Full Name & Title",
    contactFormEmail: "Corporate Email Address",
    contactFormMsg: "Project Scope or Advisory Details",
    contactFormSubmit: "Request Technical Audit",
    techHeader: "Enterprise Technologies",
    projectLink: "Request Detailed Scope",
    statusBadge: "Available for Consultations",
    successMsg: "Your request has been received. Our advisory team will follow up within 24 hours."
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
    tech_tr: 'RFID donanım entegrasyonu, kurumsal servis mimarisi, yönetim paneli, ilişkisel veri tabanı, bulut senkronizasyonu',
    tech_en: 'RFID hardware integration, enterprise service architecture, management dashboard, relational database, cloud synchronization',
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
    tech_tr: 'Kurumsal arka plan servisleri, yönetim paneli, konteyner tabanlı dağıtım, ilişkisel veri tabanı, yüksek erişilebilirlik mimarisi',
    tech_en: 'Enterprise backend services, management dashboard, container-based deployment, relational database, high-availability architecture',
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
    tech_tr: 'Kurumsal web arayüzü, güvenli API entegrasyon katmanı, ERP senkronizasyon köprüsü, önbellekleme katmanı, ödeme entegrasyonu',
    tech_en: 'Enterprise web interface, secure API integration layer, ERP synchronization bridge, caching layer, payment integration',
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
    tech_tr: 'Veri analiz katmanı, API servisleri, ilişkisel veri depolama, analitik panel, güvenli dağıtım altyapısı',
    tech_en: 'Data analytics layer, API services, relational data storage, analytics dashboard, secure deployment pipeline',
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
    q_tr: 'Lisans ve kullanım hakları nasıl düzenleniyor?',
    q_en: 'How are licensing and usage rights structured?',
    a_tr: 'Teslim edilen yazılım için firmanıza süresiz ve sınırsız ticari kullanım hakkı tanımlanır. Yazılımı operasyonlarınızda lokasyon, kullanıcı veya kullanım senaryosu kısıtı olmaksızın kullanabilirsiniz. Çekirdek altyapı, ortak geliştirme bileşenleri ve kaynak kodları hizmet sağlayıcı tarafından korunur; bu yaklaşım bakım, sürdürülebilirlik, güvenlik güncellemeleri ve teknik destek süreçlerini kurumsal seviyede güvence altına alır.',
    a_en: 'You receive a perpetual, unlimited commercial usage license for the delivered software. You can use it across your operations without restrictions on locations, users, or business scenarios. Core infrastructure, shared development components, and source code are maintained by the service provider; this model secures maintenance, long-term sustainability, security updates, and enterprise-grade support.'
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
    id: 'erp',
    title_tr: 'ERP Sistemleri',
    title_en: 'ERP Systems',
    highlight: true,
    description_tr: 'Departmanları tek bir merkezde birleştirerek veri bütünlüğü, hız ve denetim sağlar.',
    description_en: 'Unifies departments under one system to improve data integrity, speed, and auditability.',
    items: [
      { name_tr: 'Merkezi veri ve raporlama', name_en: 'Centralized data & reporting', desc_tr: 'Tekil doğru veriye dayalı raporlar ve yönetim panelleri.', desc_en: 'Executive dashboards based on a single source of truth.' },
      { name_tr: 'Stok, satın alma, finans', name_en: 'Inventory, procurement, finance', desc_tr: 'Operasyonun tüm kritik noktalarında izlenebilirlik.', desc_en: 'Traceability across critical operational areas.' },
      { name_tr: 'Entegrasyon ve denetim', name_en: 'Integration & auditability', desc_tr: 'Mevcut sistemlerle uyumlu, iz bırakır şekilde çalışan akışlar.', desc_en: 'Traceable flows that integrate with existing systems.' }
    ]
  },
  {
    id: 'crm',
    title_tr: 'CRM Çözümleri',
    title_en: 'CRM Solutions',
    description_tr: 'Satış, teklif ve müşteri süreçlerini standartlaştırır; takip ve dönüşüm oranını artırır.',
    description_en: 'Standardizes sales and customer workflows to improve follow-up and conversion rates.',
    items: [
      { name_tr: 'Teklif ve fırsat yönetimi', name_en: 'Opportunity & quotation management', desc_tr: 'Süreçleri görünür kılar, aksiyonları hızlandırır.', desc_en: 'Makes the pipeline visible and accelerates next actions.' },
      { name_tr: 'Hatırlatmalar ve görev akışı', name_en: 'Tasks & reminders', desc_tr: 'Ekip içi koordinasyonu ve müşteri takibini otomatikleştirir.', desc_en: 'Automates coordination and customer follow-ups.' },
      { name_tr: 'Raporlama ve performans', name_en: 'Reporting & performance', desc_tr: 'Satış metrikleri ve ekip performansı için ölçülebilirlik.', desc_en: 'Measurable sales KPIs and team performance metrics.' }
    ]
  },
  {
    id: 'production',
    title_tr: 'Üretim Takibi',
    title_en: 'Production Tracking',
    description_tr: 'Saha verisini görünür hale getirir; verimlilik ve kaliteyi ölçülebilir kılar.',
    description_en: 'Makes shop-floor data visible and turns productivity and quality into measurable metrics.',
    items: [
      { name_tr: 'Anlık görünürlük', name_en: 'Real-time visibility', desc_tr: 'Hat, istasyon, iş emri ve performans verilerinin takibi.', desc_en: 'Tracking lines, stations, job orders, and performance.' },
      { name_tr: 'Kayıp ve fire kontrolü', name_en: 'Loss & waste control', desc_tr: 'Sapmaları erken yakalayarak maliyetleri düşürür.', desc_en: 'Catches deviations early to reduce costs.' },
      { name_tr: 'Kalite ve izlenebilirlik', name_en: 'Quality & traceability', desc_tr: 'Ürün/parti bazında iz sürme ve kalite kayıtları.', desc_en: 'Batch-level traceability and quality records.' }
    ]
  },
  {
    id: 'operations',
    title_tr: 'Operasyon Yönetimi',
    title_en: 'Operations Management',
    description_tr: 'Depo, sevkiyat ve saha operasyonlarını tek bir akışta yönetilebilir hale getirir.',
    description_en: 'Turns warehouse, shipment, and floor operations into a single manageable flow.',
    items: [
      { name_tr: 'Siparişten sevkiyata akış', name_en: 'Order-to-shipment flow', desc_tr: 'Uçtan uca koordinasyon ve görev dağılımı.', desc_en: 'End-to-end coordination and task allocation.' },
      { name_tr: 'Stok ve hareket doğruluğu', name_en: 'Inventory movement accuracy', desc_tr: 'Sayım, giriş-çıkış ve eşleşme hatalarını azaltır.', desc_en: 'Reduces counting, inbound/outbound, and mismatch errors.' },
      { name_tr: 'Görünür KPI’lar', name_en: 'Visible KPIs', desc_tr: 'Operasyonel performansı raporlar ve iyileştirir.', desc_en: 'Reports and improves operational performance.' }
    ]
  },
  {
    id: 'workflow',
    title_tr: 'İş Akışı Otomasyonu',
    title_en: 'Workflow Automation',
    description_tr: 'Manuel işleri azaltır; onay, bildirim ve veri akışlarını otomatikleştirir.',
    description_en: 'Reduces manual work by automating approvals, notifications, and data flows.',
    items: [
      { name_tr: 'Onay zincirleri', name_en: 'Approval chains', desc_tr: 'Yetkilendirme ve onay süreçlerini standartlaştırır.', desc_en: 'Standardizes authorization and approval processes.' },
      { name_tr: 'Otomatik veri aktarımı', name_en: 'Automated data routing', desc_tr: 'Tekrarlı veri girişlerini azaltır, hataları düşürür.', desc_en: 'Reduces repetitive entry and lowers error rates.' },
      { name_tr: 'Uyarı ve bildirimler', name_en: 'Alerts & notifications', desc_tr: 'Kritik durumlarda ekipleri hızlı aksiyona yönlendirir.', desc_en: 'Drives fast action in critical scenarios.' }
    ]
  },
  {
    id: 'transformation',
    title_tr: 'Dijital Dönüşüm',
    title_en: 'Digital Transformation',
    description_tr: 'Dağınık sistemleri tek mimaride birleştirir; süreçleri ölçülebilir hale getirir.',
    description_en: 'Unifies fragmented systems and makes workflows measurable across the organization.',
    items: [
      { name_tr: 'Entegrasyon odaklı yaklaşım', name_en: 'Integration-first approach', desc_tr: 'Mevcut sistemleri koparmadan entegre eder.', desc_en: 'Integrates without breaking existing systems.' },
      { name_tr: 'Ölçeklenebilir mimari', name_en: 'Scalable architecture', desc_tr: 'Büyüme ve yeni lokasyonlara hazır yapı.', desc_en: 'Ready for growth and new locations.' },
      { name_tr: 'Süreklilik ve güvenlik', name_en: 'Continuity & security', desc_tr: 'Bakım, izleme ve destek süreçleri ile süreklilik.', desc_en: 'Continuity backed by maintenance, monitoring, and support.' }
    ]
  },
  {
    id: 'ai',
    title_tr: 'Yapay Zeka Destekli Süreçler',
    title_en: 'AI-Powered Processes',
    description_tr: 'Tahminleme ve akıllı yönlendirmelerle karar mekanizmalarını hızlandırır.',
    description_en: 'Accelerates decision-making through forecasting and smart routing.',
    items: [
      { name_tr: 'Talep ve stok tahminleme', name_en: 'Demand & inventory forecasting', desc_tr: 'Stok maliyetlerini düşürmeye yardımcı olur.', desc_en: 'Helps reduce inventory costs and stockouts.' },
      { name_tr: 'Akıllı sınıflandırma', name_en: 'Smart classification', desc_tr: 'Talepleri otomatik sınıflandırarak ekipleri yönlendirir.', desc_en: 'Routes requests automatically to the right teams.' },
      { name_tr: 'Karar destek katmanı', name_en: 'Decision support layer', desc_tr: 'Kritik göstergeler için öneri ve uyarı üretir.', desc_en: 'Generates recommendations and alerts for key KPIs.' }
    ]
  }
];

const WHY_US_ADVANTAGES = [
  {
    id: 1,
    icon: 'custom',
    title_tr: 'İşletmeye Özel Çözümler',
    title_en: 'Tailored Business Solutions',
    desc_tr: 'Hazır paketler yerine, işletmenizin süreçlerine ve saha gerçeklerine göre tasarlanmış çözümler.',
    desc_en: 'Custom solutions designed around your real workflows—no generic templates.'
  },
  {
    id: 2,
    icon: 'analysis',
    title_tr: 'Süreç Analizi ile Başlayan Yaklaşım',
    title_en: 'Process-First Approach',
    desc_tr: 'Koddan önce analiz: darboğazları ve veri akışını netleştirir, riski baştan azaltırız.',
    desc_en: 'We start with analysis to reduce risk early and clarify bottlenecks and data flow.'
  },
  {
    id: 3,
    icon: 'support',
    title_tr: 'Uzun Vadeli Teknik Destek',
    title_en: 'Long-Term Support',
    desc_tr: 'Canlı sonrası bakım, izleme ve SLA kapsamlı destek ile operasyon sürekliliğini koruruz.',
    desc_en: 'Post go-live support, maintenance, and SLA-backed continuity.'
  },
  {
    id: 4,
    icon: 'scale',
    title_tr: 'Ölçeklenebilir Yazılım Mimarisi',
    title_en: 'Scalable Architecture',
    desc_tr: 'Yeni lokasyonlar, yeni hatlar ve artan işlem hacmi için büyümeye hazır mimari.',
    desc_en: 'Architecture designed to scale with new sites, lines, and growing transaction volume.'
  },
  {
    id: 5,
    icon: 'domain',
    title_tr: 'ERP ve Operasyon Yönetimi Deneyimi',
    title_en: 'ERP & Operations Expertise',
    desc_tr: 'ERP, depo, sevkiyat ve üretim süreçlerinde uygulama tecrübesine dayalı yaklaşım.',
    desc_en: 'Hands-on experience across ERP, warehouse, shipment, and production workflows.'
  },
  {
    id: 6,
    icon: 'ai',
    title_tr: 'Yapay Zeka Destekli İş Süreçleri',
    title_en: 'AI-Powered Processes',
    desc_tr: 'Tahminleme ve akıllı yönlendirmelerle karar mekanizmalarını hızlandıran katmanlar.',
    desc_en: 'Forecasting and decision-support layers that accelerate operational decisions.'
  },
  {
    id: 7,
    icon: 'contact',
    title_tr: 'Tek Muhatap ile Hızlı İletişim',
    title_en: 'Single Point of Contact',
    desc_tr: 'Kararları hızlandıran net iletişim: ihtiyaç analizi, planlama ve teslim tek çizgide ilerler.',
    desc_en: 'Clear communication and faster decisions with a single accountable contact.'
  },
  {
    id: 8,
    icon: 'pm',
    title_tr: 'Kurumsal Proje Yönetimi',
    title_en: 'Enterprise Project Management',
    desc_tr: 'Aşamaları net, teslimatları ölçülebilir; sürprizsiz ve şeffaf proje yönetimi.',
    desc_en: 'Structured phases, measurable delivery, and transparent project management.'
  }
];

const getWhyUsIcon = (icon) => {
  const commonProps = {
    viewBox: '0 0 24 24',
    width: 24,
    height: 24,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2
  };

  switch (icon) {
    case 'custom':
      return (
        <svg {...commonProps}>
          <path d="M12 2l2.2 4.6L19 8l-3.5 3.4.8 4.8L12 14.8 7.7 16.2l.8-4.8L5 8l4.8-1.4L12 2z" />
        </svg>
      );
    case 'analysis':
      return (
        <svg {...commonProps}>
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
          <path d="M11 8v3l2 1" />
        </svg>
      );
    case 'support':
      return (
        <svg {...commonProps}>
          <path d="M4 12a8 8 0 0 1 16 0" />
          <path d="M4 12v4a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2" />
          <path d="M20 12v4a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2" />
          <path d="M12 19v3" />
        </svg>
      );
    case 'scale':
      return (
        <svg {...commonProps}>
          <path d="M4 20V10" />
          <path d="M10 20V4" />
          <path d="M16 20v-8" />
          <path d="M22 20V8" />
        </svg>
      );
    case 'domain':
      return (
        <svg {...commonProps}>
          <path d="M3 21V8l9-5 9 5v13" />
          <path d="M9 21v-8h6v8" />
        </svg>
      );
    case 'ai':
      return (
        <svg {...commonProps}>
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M4 12H2" />
          <path d="M22 12h-2" />
          <path d="M6 6l-2-2" />
          <path d="M20 20l-2-2" />
          <path d="M18 6l2-2" />
          <path d="M4 20l2-2" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
    case 'contact':
      return (
        <svg {...commonProps}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5 12.8 12.8 0 0 0 2.8.7 2 2 0 0 1 1.7 2.1z" />
        </svg>
      );
    case 'pm':
      return (
        <svg {...commonProps}>
          <path d="M9 12l2 2 4-4" />
          <path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
          <path d="M9 7h6" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      );
  }
};

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

  // Independent filters state
  const [projectFilter, setProjectFilter] = useState('all');

  // Modals selected state
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // FAQ state
  const [activeFaq, setActiveFaq] = useState(null);

  // Contact form state
  const [formData, setFormData] = useState({ name: '', email: '', company: '', sector: '', budget: '', timeline: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formSubmitError, setFormSubmitError] = useState('');

  // Apply Theme Mode (Dark/Light)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Scroll spy to highlight active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'why-us', 'services', 'projects', 'process', 'pricing', 'faq', 'contact'];
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
  
  const startServiceScopeRequest = (service) => {
    const title = lang === 'tr' ? service.title_tr : service.title_en;
    const message = lang === 'tr'
      ? `Merhaba,\n\n"${title}" hizmeti için ön analiz talep ediyorum.\n\n- Mevcut süreç / problem:\n- Hedeflenen çıktı:\n- Entegrasyon ihtiyaçları (ERP, muhasebe, depo vb.):\n- Zaman hedefi:\n\nUygun olduğunuzda dönüş yapabilir misiniz?`
      : `Hello,\n\nI would like to request a pre-analysis for "${title}".\n\n- Current workflow / problem:\n- Desired outcome:\n- Integration needs (ERP, accounting, warehouse, etc.):\n- Target timeline:\n\nCould you get back to me when available?`;

    setFormData(prev => ({ ...prev, message }));
    scrollToContact();
  };

  const startProjectScopeRequest = (project) => {
    const title = lang === 'tr' ? project.title_tr : project.title_en;
    const message = lang === 'tr'
      ? `Merhaba,\n\n"${title}" benzeri bir çözüm için ön analiz talep ediyorum.\n\n- Sektör:\n- Operasyon ölçeği:\n- Mevcut sistemler:\n- Entegrasyon ihtiyaçları:\n\nUygun olduğunuzda dönüş yapabilir misiniz?`
      : `Hello,\n\nI would like to request a pre-analysis for a solution similar to "${title}".\n\n- Industry:\n- Operational scale:\n- Current systems:\n- Integration needs:\n\nCould you get back to me when available?`;

    setFormData(prev => ({ ...prev, message }));
    scrollToContact();
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
      setFormData({ name: '', email: '', company: '', sector: '', budget: '', timeline: '', message: '' });
      
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
            <a href="#why-us" className={activeSection === 'why-us' ? 'active' : ''}>{lang === 'tr' ? 'Neden Biz?' : 'Why Us?'}</a>
            <a href="#services" className={activeSection === 'services' ? 'active' : ''}>{lang === 'tr' ? 'Çözümler' : 'Solutions'}</a>
            <a href="#process" className={activeSection === 'process' ? 'active' : ''}>{lang === 'tr' ? 'Çalışma Süreci' : 'Process'}</a>
            <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>{lang === 'tr' ? 'Vaka Analizleri' : 'Case Studies'}</a>
            <a href="#pricing" className={activeSection === 'pricing' ? 'active' : ''}>{lang === 'tr' ? 'Paketler' : 'Packages'}</a>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>{lang === 'tr' ? 'İletişim' : 'Contact'}</a>
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



      <section id="why-us" className="section why-section">
        <div className="section-header">
          <span className="section-tag">{lang === 'tr' ? 'Neden Biz?' : 'Why Us?'}</span>
          <h2 className="section-title">{lang === 'tr' ? 'Neden Bizimle Çalışmalısınız?' : 'Why Work With Us?'}</h2>
          <p className="section-subtitle">
            {lang === 'tr'
              ? 'Bu proje neden bana yaptırılmalı? Süreç, iletişim ve teslim standardı açısından farkımızı net şekilde ortaya koyuyoruz.'
              : 'Why should you trust us with your project? Here is what makes the delivery reliable and measurable.'}
          </p>
        </div>

        <div className="why-content">
          <div className="why-us-cards">
            {WHY_US_ADVANTAGES.map((item) => (
              <div key={item.id} className="why-us-card glass-card">
                <div className="why-us-icon">
                  {getWhyUsIcon(item.icon)}
                </div>
                <h4>{lang === 'tr' ? item.title_tr : item.title_en}</h4>
                <p>{lang === 'tr' ? item.desc_tr : item.desc_en}</p>
              </div>
            ))}
          </div>

          <div className="why-cta glass-card">
            <div className="why-cta-text">
              <h3>{lang === 'tr' ? 'İlk Adım: Ücretsiz Süreç Analizi' : 'First Step: Free Process Analysis'}</h3>
              <p>
                {lang === 'tr'
                  ? 'İhtiyaçları birlikte netleştirelim. Sürecinizi analiz edelim, kapsamı çıkaralım ve size uygun yol haritasını hazırlayalım.'
                  : 'Let’s clarify your needs. We’ll analyze your workflow and prepare a clear roadmap and scope.'}
              </p>
            </div>
            <a href="#contact" className="btn btn-primary glow-button">
              {lang === 'tr' ? 'Ücretsiz Analiz Talep Et' : 'Request a Free Audit'}
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <div className="section-header">
          <span className="section-tag">{lang === 'tr' ? 'Çözümlerimiz' : 'Our Solutions'}</span>
          <h2 className="section-title">{lang === 'tr' ? 'Dijital Dönüşüm Modülleri & Hizmetler' : 'Digital Transformation Modules & Services'}</h2>
          <p className="section-subtitle">{lang === 'tr' ? 'İşletmenizin operasyonel verimliliğini artıran entegre kurumsal yazılım hizmetleri.' : 'Integrated enterprise software services engineered to optimize your business operations.'}</p>
          <div className="tools-grid">
            {TECH_CATEGORIES.map((item) => (
              <span key={item.id} className="tool-badge">
                {lang === 'tr' ? item.title_tr : item.title_en}
              </span>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="projects-grid">
          {SERVICES.map((service) => (
            <div key={service.id} className="project-card glass-card animate-scale-up">
              <div className="project-image-wrapper">
                <img src={service.image} alt={lang === 'tr' ? service.title_tr : service.title_en} />
                <div className="project-image-overlay">
                  <button className="btn btn-detail" onClick={() => setSelectedService(service)}>
                    {lang === 'tr' ? 'Detayları Gör' : 'View Details'}
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

      {/* Methodology / Working & Delivery Process Section */}
      <section id="process" className="section process-section">
        <div className="section-header">
          <span className="section-tag">{lang === 'tr' ? 'Çalışma Sürecimiz' : 'Our Process'}</span>
          <h2 className="section-title">{lang === 'tr' ? 'Projeniz Nasıl İlerler?' : 'How Your Project Moves Forward'}</h2>
          <p className="section-subtitle">
            {lang === 'tr' 
              ? 'Başından sonuna net adımlar, şeffaf planlama ve kurumsal teslim standartlarıyla ilerleriz.' 
              : 'Clear steps, transparent planning, and enterprise-grade delivery standards.'}
          </p>
        </div>

        <div className="process-flow-container">
          <h3 className="process-sub-title">{lang === 'tr' ? 'Uçtan Uca Teslim Akışı' : 'End-to-End Delivery Flow'}</h3>
          <div className="process-steps-grid">
            <div className="process-step-card glass-card">
              <div className="step-num">01</div>
              <h4>{lang === 'tr' ? 'Analiz ve Keşif' : 'Analysis & Discovery'}</h4>
              <p>{lang === 'tr' ? 'Mevcut süreçleri ve veri akışını inceler, darboğazları tespit eder ve hedef çıktıları netleştiririz.' : 'We review your workflows and data flows, identify bottlenecks, and clarify expected outcomes.'}</p>
            </div>
            <div className="process-step-card glass-card">
              <div className="step-num">02</div>
              <h4>{lang === 'tr' ? 'Süreç Tasarımı' : 'Process Design'}</h4>
              <p>{lang === 'tr' ? 'İş kurallarını, onay akışlarını ve rol yetkilendirmeleri tasarlar; kapsamı dokümante ederiz.' : 'We design business rules, approvals, and permissions, then document the scope.'}</p>
            </div>
            <div className="process-step-card glass-card">
              <div className="step-num">03</div>
              <h4>{lang === 'tr' ? 'Yazılım Geliştirme' : 'Software Development'}</h4>
              <p>{lang === 'tr' ? 'Sprint bazlı geliştirme ile modülleri inşa eder, entegrasyonları kurar ve düzenli demo’larla ilerleriz.' : 'We build modules in sprints, implement integrations, and keep progress visible through regular demos.'}</p>
            </div>
            <div className="process-step-card glass-card">
              <div className="step-num">04</div>
              <h4>{lang === 'tr' ? 'Test ve Kalite Kontrol' : 'Testing & QA'}</h4>
              <p>{lang === 'tr' ? 'Fonksiyonel testler, veri doğrulama, performans kontrolleri ve güvenlik kontrolleri ile kaliteyi garanti ederiz.' : 'We run functional tests, data validation, performance checks, and security reviews to ensure quality.'}</p>
            </div>
            <div className="process-step-card glass-card">
              <div className="step-num">05</div>
              <h4>{lang === 'tr' ? 'Canlıya Alma' : 'Go Live'}</h4>
              <p>{lang === 'tr' ? 'Planlı geçiş ile canlıya alır; veri aktarımı, izleme ve geri dönüş planı ile risksiz devreye alırız.' : 'We go live with a planned rollout, including migration, monitoring, and rollback safety.'}</p>
            </div>
            <div className="process-step-card glass-card">
              <div className="step-num">06</div>
              <h4>{lang === 'tr' ? 'Eğitim ve Destek' : 'Training & Support'}</h4>
              <p>{lang === 'tr' ? 'Ekibinize eğitim verir, kullanım kılavuzlarını paylaşır ve SLA kapsamında uzun vadeli teknik destek sağlarız.' : 'We train your team, provide guides, and deliver long-term technical support under SLA.'}</p>
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
                <p>{lang === 'tr' ? 'Kurumsal bulut altyapısı üzerinde kurulu; güvenlik, yedekleme ve izleme katmanları aktif çalışan canlı mimari.' : 'Production-grade cloud infrastructure with active security, backup, and monitoring layers.'}</p>
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
          <span className="section-tag">{lang === 'tr' ? 'Çözüm Paketleri' : 'Solution Packages'}</span>
          <h2 className="section-title">{lang === 'tr' ? 'İhtiyacınıza Göre Net Paketler' : 'Clear Packages by Need'}</h2>
          <p className="section-subtitle">
            {lang === 'tr' 
              ? 'Paketler fiyat göstermekten çok; kapsam, entegrasyon ihtiyacı ve beklenen iş çıktısı üzerinden konumlanır.' 
              : 'Packages are positioned by scope, integration needs, and expected business outcomes—not by price alone.'}
          </p>
        </div>

        <div className="pricing-grid">
          {/* Launch Card */}
          <div className="pricing-card glass-card animate-scale-up">
            <div className="pricing-card-header">
              <span className="pricing-badge">{lang === 'tr' ? 'Başlangıç' : 'Launch'}</span>
              <h3>{lang === 'tr' ? 'Kurumsal Web Platformu' : 'Corporate Web Platform'}</h3>
              <p className="pricing-target-desc">{lang === 'tr' ? 'Dijital vitrinini kurmak isteyen KOBİ\'ler için' : 'For SMBs launching their digital corporate presence'}</p>
              <div className="pricing-price-area">
                <span className="price-range">{lang === 'tr' ? '40.000 TL’den başlayan' : 'Starting from 40,000 TRY'}</span>
                <span className="price-period">{lang === 'tr' ? 'kapsama göre' : 'depending on scope'}</span>
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
                {lang === 'tr' ? 'Kapsam Görüşmesi Talep Et' : 'Request a Scope Call'}
              </a>
            </div>
          </div>

          {/* Growth Card */}
          <div className="pricing-card pricing-card-featured glass-card animate-scale-up">
            <div className="featured-ribbon">{lang === 'tr' ? 'EN ÇOK SEÇİLEN' : 'MOST POPULAR'}</div>
            <div className="pricing-card-header">
              <span className="pricing-badge badge-featured">{lang === 'tr' ? 'Büyüme' : 'Growth'}</span>
              <h3>{lang === 'tr' ? 'Kurumsal Web + Yönetim Paneli' : 'Corporate Web + Panel'}</h3>
              <p className="pricing-target-desc">{lang === 'tr' ? 'Süreçlerini dijital panelden yönetmek isteyen üreticiler için' : 'For manufacturers seeking remote administration panels'}</p>
              <div className="pricing-price-area">
                <span className="price-range">{lang === 'tr' ? '80.000 TL’den başlayan' : 'Starting from 80,000 TRY'}</span>
                <span className="price-period">{lang === 'tr' ? 'kapsama göre' : 'depending on scope'}</span>
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
                {lang === 'tr' ? 'Kapsam Görüşmesi Talep Et' : 'Request a Scope Call'}
              </a>
            </div>
          </div>

          {/* Enterprise Card */}
          <div className="pricing-card glass-card animate-scale-up">
            <div className="pricing-card-header">
              <span className="pricing-badge">{lang === 'tr' ? 'Kurumsal' : 'Enterprise'}</span>
              <h3>{lang === 'tr' ? 'Özel Yazılım, ERP, CRM & Üretim Takip' : 'Custom software, ERP, CRM & WMS'}</h3>
              <p className="pricing-target-desc">{lang === 'tr' ? 'Uçtan uca dijital dönüşüm hedefleyen sanayi ve tekstil holdingleri için' : 'For large industrial holdings demanding custom ecosystems'}</p>
              <div className="pricing-price-area">
                <span className="price-range text-quote">{lang === 'tr' ? 'Analiz Sonrası Tekliflendirilir' : 'Quoted After Analysis'}</span>
                <span className="price-period">{lang === 'tr' ? 'Saha analizi + kapsam tasarımı sonrası' : 'After audit + scope design'}</span>
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
                  <button className="btn btn-primary" onClick={() => { const svc = selectedService; setSelectedService(null); startServiceScopeRequest(svc); }}>
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
                <button className="btn btn-primary" onClick={() => { const proj = selectedProject; setSelectedProject(null); startProjectScopeRequest(proj); }}>
                  {lang === 'tr' ? 'Benzer Bir Çözüm Talep Edin' : 'Request a Similar Solution'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* FAQ Section */}
      <section id="faq" className="section faq-section">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: FAQ_ITEMS.map((item) => ({
                '@type': 'Question',
                name: item.q_tr,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.a_tr
                }
              }))
            })
          }}
        />
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
                <a href="mailto:akin@akinkaradas.com.tr">akin@akinkaradas.com.tr</a>
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
                <label htmlFor="budget">{lang === 'tr' ? 'Bütçe Aralığı (Opsiyonel)' : 'Budget Range (Optional)'}</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="">{lang === 'tr' ? 'Seçiniz' : 'Select'}</option>
                  <option value="250000-500000">{lang === 'tr' ? '₺250.000 – ₺500.000' : '₺250,000 – ₺500,000'}</option>
                  <option value="500000-1000000">{lang === 'tr' ? '₺500.000 – ₺1.000.000' : '₺500,000 – ₺1,000,000'}</option>
                  <option value="1000000-2500000">{lang === 'tr' ? '₺1.000.000 – ₺2.500.000' : '₺1,000,000 – ₺2,500,000'}</option>
                  <option value="2500000+">{lang === 'tr' ? '₺2.500.000+' : '₺2,500,000+'}</option>
                  <option value="not-sure">{lang === 'tr' ? 'Net değil / Analiz sonrası' : 'Not sure / after analysis'}</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="timeline">{lang === 'tr' ? 'Zaman Hedefi (Opsiyonel)' : 'Timeline (Optional)'}</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="">{lang === 'tr' ? 'Seçiniz' : 'Select'}</option>
                  <option value="0-1m">{lang === 'tr' ? '0–1 Ay' : '0–1 Month'}</option>
                  <option value="1-2m">{lang === 'tr' ? '1–2 Ay' : '1–2 Months'}</option>
                  <option value="2-3m">{lang === 'tr' ? '2–3 Ay' : '2–3 Months'}</option>
                  <option value="3-6m">{lang === 'tr' ? '3–6 Ay' : '3–6 Months'}</option>
                  <option value="6m+">{lang === 'tr' ? '6 Ay+' : '6+ Months'}</option>
                </select>
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
        <p>&copy; {new Date().getFullYear()} Akın Karadaş. {lang === 'tr' ? 'Tüm Hakları Saklıdır. v.1.1.0' : 'All Rights Reserved. v.1.1.0'}</p>
      </footer>
    </>
  );
}

export default App;
