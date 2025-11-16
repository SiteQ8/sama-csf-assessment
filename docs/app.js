// Application State
const appState = {
  currentLang: 'ar',
  currentTheme: 'light',
  currentPage: 'home',
  assessmentData: {
    organizationName: '',
    assessmentDate: new Date().toISOString(),
    currentDomain: null,
    currentQuestionIndex: 0,
    responses: {},
    scores: {}
  }
};

// Framework Data
const frameworkData = {
  maturityLevels: [
    {
      level: 0,
      name_en: 'Non-Existent',
      name_ar: 'غير موجود',
      description_en: 'No documentation or awareness of cybersecurity controls',
      description_ar: 'لا توجد وثائق أو وعي بضوابط الأمن السيبراني',
      color: '#dc2626'
    },
    {
      level: 1,
      name_en: 'Ad-hoc',
      name_ar: 'عشوائي',
      description_en: 'Controls exist but are inconsistent and poorly defined',
      description_ar: 'الضوابط موجودة لكنها غير متسقة وضعيفة التعريف',
      color: '#ea580c'
    },
    {
      level: 2,
      name_en: 'Repeatable but Informal',
      name_ar: 'قابل للتكرار لكن غير رسمي',
      description_en: 'Controls are repeatable but lack formal documentation',
      description_ar: 'الضوابط قابلة للتكرار لكن تفتقر للتوثيق الرسمي',
      color: '#d97706'
    },
    {
      level: 3,
      name_en: 'Structured and Formalized',
      name_ar: 'منظم ورسمي',
      description_en: 'Controls are defined, approved, documented, and monitored (MINIMUM REQUIRED)',
      description_ar: 'الضوابط محددة ومعتمدة وموثقة ومراقبة (الحد الأدنى المطلوب)',
      color: '#059669'
    },
    {
      level: 4,
      name_en: 'Managed and Measurable',
      name_ar: 'مُدار وقابل للقياس',
      description_en: 'Controls are measured and periodically evaluated',
      description_ar: 'الضوابط تُقاس وتُقيّم بشكل دوري',
      color: '#0891b2'
    },
    {
      level: 5,
      name_en: 'Adaptive',
      name_ar: 'متكيف',
      description_en: 'Continuous improvement with enterprise-wide integration',
      description_ar: 'تحسين مستمر مع التكامل على مستوى المؤسسة',
      color: '#7c3aed'
    }
  ],
  domains: [
    {
      domain_id: 'D1',
      name_en: 'Cybersecurity Leadership and Governance',
      name_ar: 'قيادة وحوكمة الأمن السيبراني',
      description_en: 'Establishes leadership responsibility, assigns roles, and ensures cybersecurity is treated as strategic priority',
      description_ar: 'تحدد مسؤولية القيادة وتوزع الأدوار وتضمن معاملة الأمن السيبراني كأولوية استراتيجية',
      questionCount: 15
    },
    {
      domain_id: 'D2',
      name_en: 'Cybersecurity Risk Management and Compliance',
      name_ar: 'إدارة المخاطر والامتثال السيبراني',
      description_en: 'Identifies and evaluates risks tied to information assets, operations, and third-party exposures',
      description_ar: 'تحدد وتقيّم المخاطر المتعلقة بأصول المعلومات والعمليات والأطراف الخارجية',
      questionCount: 15
    },
    {
      domain_id: 'D3',
      name_en: 'Cybersecurity Operations and Technology',
      name_ar: 'عمليات وتقنية الأمن السيبراني',
      description_en: 'Covers access controls, network monitoring, security architecture, and real-time response mechanisms',
      description_ar: 'تغطي ضوابط الوصول ومراقبة الشبكات وبنية الأمان وآليات الاستجابة الفورية',
      questionCount: 20
    },
    {
      domain_id: 'D4',
      name_en: 'Third-Party Cybersecurity',
      name_ar: 'أمن الأطراف الخارجية',
      description_en: 'Ensures vendors and partners uphold the same cybersecurity standards',
      description_ar: 'تضمن التزام الموردين والشركاء بنفس معايير الأمن السيبراني',
      questionCount: 8
    }
  ],
  relatedFrameworks: [
    {
      id: 'iso27001',
      name: 'ISO/IEC 27001:2022',
      description_en: 'International standard for information security management',
      description_ar: 'المعيار الدولي لإدارة أمن المعلومات',
      alignment: 'SAMA CSF draws from ISO 27001 controls'
    },
    {
      id: 'nist_csf',
      name: 'NIST Cybersecurity Framework 2.0',
      description_en: 'US framework for managing cybersecurity risks',
      description_ar: 'إطار عمل أمريكي لإدارة مخاطر الأمن السيبراني',
      alignment: 'Similar structure with Govern, Identify, Protect, Detect, Respond, Recover'
    },
    {
      id: 'cis_controls',
      name: 'CIS Controls v8.1',
      description_en: '18 prioritized safeguards against cyber attacks',
      description_ar: '18 ضمانة ذات أولوية ضد الهجمات السيبرانية',
      alignment: 'Practical implementation guidance for SAMA controls'
    },
    {
      id: 'pci_dss',
      name: 'PCI-DSS v4.0.1',
      description_en: 'Payment card data security standard',
      description_ar: 'معيار أمن بيانات بطاقات الدفع',
      alignment: 'Mandatory for cardholder data handling (SAMA 3.2.3)'
    },
    {
      id: 'nca_ecc',
      name: 'NCA Essential Cybersecurity Controls',
      description_en: 'Saudi National Cybersecurity Authority controls',
      description_ar: 'ضوابط الهيئة الوطنية للأمن السيبراني',
      alignment: 'Complementary to SAMA for critical infrastructure'
    }
  ],
  questions: [
    {q_id: 'Q1.1', domain: 'D1', subdomain: '3.1.1 - Cybersecurity Strategy', question_ar: 'هل لديكم استراتيجية أمن سيبراني موثقة وموافق عليها من مجلس الإدارة مع أهداف واضحة؟', question_en: 'Is there a documented cybersecurity strategy approved by the board with clear objectives?', frameworks: ['ISO 27001: A.5.1', 'NIST CSF: GV.OC-01', 'CIS Control 1']},
    {q_id: 'Q1.2', domain: 'D1', subdomain: '3.1.1 - Cybersecurity Strategy', question_ar: 'هل يتم مراجعة استراتيجية الأمن السيبراني بشكل دوري (على الأقل سنوياً) لضمان توافقها مع التهديدات الحالية؟', question_en: 'Is the cybersecurity strategy reviewed periodically (at least annually) to ensure alignment with current threats?', frameworks: ['ISO 27001: A.5.1', 'NIST CSF: GV.OC-02']},
    {q_id: 'Q1.3', domain: 'D1', subdomain: '3.1.2 - Cybersecurity Policy', question_ar: 'هل توجد سياسة أمن سيبراني شاملة موثقة رسمياً وموزعة على جميع الموظفين مع تتبع الإقرار؟', question_en: 'Is there a comprehensive cybersecurity policy formally documented and distributed to all employees with acknowledgment tracking?', frameworks: ['ISO 27001: A.5.2', 'NIST CSF: GV.PO-01', 'CIS Control 1']},
    {q_id: 'Q1.4', domain: 'D1', subdomain: '3.1.2 - Cybersecurity Policy', question_ar: 'هل السياسة تتضمن متطلبات محددة للمصادقة والتشفير والحماية من الأخطار؟', question_en: 'Does the policy include specific requirements for authentication, encryption, and threat protection?', frameworks: ['ISO 27001: A.5.2', 'CIS Control 3, 6']},
    {q_id: 'Q1.5', domain: 'D1', subdomain: '3.1.2 - Cybersecurity Policy', question_ar: 'هل هناك عملية محددة لمعالجة استثناءات السياسة مع موافقات وتوثيق؟', question_en: 'Is there a defined process for policy exceptions with approvals and documentation?', frameworks: ['ISO 27001: A.5.2']},
    {q_id: 'Q1.6', domain: 'D1', subdomain: '3.1.3 - Governance Structure', question_ar: 'هل توجد لجنة أمن سيبراني رسمية مع ميثاق واضح وأدوار ومسؤوليات محددة؟', question_en: 'Is there a formal cybersecurity committee with clear charter and defined roles and responsibilities?', frameworks: ['ISO 27001: A.5.3', 'NIST CSF: GV.OC-02', 'CIS Control 1']},
    {q_id: 'Q1.7', domain: 'D1', subdomain: '3.1.3 - Governance Structure', question_ar: 'هل هناك مسؤول أمن سيبراني (CISO) مستقل يرفع تقاريره مباشرة لمجلس الإدارة أو الإدارة العليا؟', question_en: 'Is there an independent CISO (or equivalent) reporting directly to the board or senior management?', frameworks: ['ISO 27001: A.5.3', 'NIST CSF: GV.OC-02']},
    {q_id: 'Q1.8', domain: 'D1', subdomain: '3.1.3 - Governance Structure', question_ar: 'هل اللجنة تجتمع بشكل منتظم (شهري/ربع سنوي) وتوثق قراراتها وتقدم تقارير للإدارة العليا؟', question_en: 'Does the committee meet regularly (monthly/quarterly) and document decisions and report to senior management?', frameworks: ['ISO 27001: A.5.3']},
    {q_id: 'Q1.9', domain: 'D1', subdomain: '3.1.4 - Cybersecurity Awareness', question_ar: 'هل يوجد برنامج تدريب أمن سيبراني سنوي إلزامي لجميع الموظفين مع تتبع الحضور والتقييم؟', question_en: 'Is there a mandatory annual cybersecurity training program for all employees with attendance and assessment tracking?', frameworks: ['ISO 27001: A.6.3', 'NIST CSF: PR.AT-01', 'CIS Control 14']},
    {q_id: 'Q1.10', domain: 'D1', subdomain: '3.1.4 - Cybersecurity Awareness', question_ar: 'هل يوجد تدريب متخصص بناءً على الأدوار (مثل تدريب إضافي للأشخاص ذوي الامتيازات)؟', question_en: 'Is there role-based specialized training (e.g., additional training for privileged users)?', frameworks: ['ISO 27001: A.6.3', 'CIS Control 14']},
    {q_id: 'Q1.11', domain: 'D1', subdomain: '3.1.4 - Cybersecurity Awareness', question_ar: 'هل يتم إجراء محاكاة تصيد احتيالي دوري لقياس الوعي والاستجابة للتهديدات؟', question_en: 'Are periodic phishing simulations conducted to measure awareness and response to threats?', frameworks: ['ISO 27001: A.6.3', 'CIS Control 14']},
    {q_id: 'Q1.12', domain: 'D1', subdomain: '3.1.4 - Cybersecurity Awareness', question_ar: 'هل يتم تقييس فعالية البرامج التدريبية من خلال الاختبارات والمؤشرات؟', question_en: 'Is training effectiveness measured through assessments and metrics?', frameworks: ['ISO 27001: A.6.3', 'NIST CSF: GV.OV-01']},
    {q_id: 'Q1.13', domain: 'D1', subdomain: '3.1.4 - Cybersecurity Awareness', question_ar: 'هل توجد حملات توعية مستمرة حول الأمن السيبراني والتهديدات الناشئة؟', question_en: 'Are there ongoing awareness campaigns about cybersecurity and emerging threats?', frameworks: ['CIS Control 14']},
    {q_id: 'Q1.14', domain: 'D1', subdomain: '3.1.1 - Cybersecurity Strategy', question_ar: 'هل يتم توصيل استراتيجية الأمن السيبراني بوضوح إلى جميع المستويات الإدارية والتشغيلية؟', question_en: 'Is the cybersecurity strategy clearly communicated to all management and operational levels?', frameworks: ['NIST CSF: GV.OC-01']},
    {q_id: 'Q1.15', domain: 'D1', subdomain: '3.1.3 - Governance Structure', question_ar: 'هل توجد مسؤوليات واضحة لكل وحدة عمل فيما يتعلق بتنفيذ الضوابط الأمنية؟', question_en: 'Are there clear responsibilities for each business unit regarding security control implementation?', frameworks: ['ISO 27001: A.5.3']},
    {q_id: 'Q2.1', domain: 'D2', subdomain: '3.2.1 - Risk Assessment', question_ar: 'هل تجري تقييمات شاملة للمخاطر السيبرانية بشكل منتظم (على الأقل سنوياً) مع منهجية موثقة؟', question_en: 'Are comprehensive cybersecurity risk assessments conducted regularly (at least annually) with documented methodology?', frameworks: ['ISO 27001: A.8.2', 'NIST CSF: ID.RA-01', 'CIS Control 18']},
    {q_id: 'Q2.2', domain: 'D2', subdomain: '3.2.1 - Risk Assessment', question_ar: 'هل التقييم يغطي تحديد الأصول والتهديدات والثغرات بشكل منهجي؟', question_en: 'Does the assessment systematically identify assets, threats, and vulnerabilities?', frameworks: ['ISO 27001: A.8.2', 'NIST CSF: ID.RA-01']},
    {q_id: 'Q2.3', domain: 'D2', subdomain: '3.2.1 - Risk Assessment', question_ar: 'هل يتم تقييم احتمالية الأثر والاحتمالية لكل مخاطر مع تصنيفها وأولويتها؟', question_en: 'Are likelihood and impact assessed for each risk with classification and prioritization?', frameworks: ['ISO 27001: A.8.2']},
    {q_id: 'Q2.4', domain: 'D2', subdomain: '3.2.1 - Risk Assessment', question_ar: 'هل نتائج التقييم توثق رسمياً وتقدم للإدارة العليا ومجلس الإدارة؟', question_en: 'Are assessment results formally documented and presented to management and board?', frameworks: ['NIST CSF: ID.RA-02']},
    {q_id: 'Q2.5', domain: 'D2', subdomain: '3.2.2 - Risk Treatment', question_ar: 'هل توجد خطط معالجة للمخاطر مع إجراءات محددة والمسؤول والجدول الزمني؟', question_en: 'Are there documented risk treatment plans with defined actions, owners, and timelines?', frameworks: ['ISO 27001: A.8.3', 'NIST CSF: ID.RM-01']},
    {q_id: 'Q2.6', domain: 'D2', subdomain: '3.2.2 - Risk Treatment', question_ar: 'هل يتم تتبع تنفيذ خطط المعالجة مع قياس التقدم والتحديث الدوري؟', question_en: 'Is implementation of treatment plans tracked with progress measurement and periodic updates?', frameworks: ['ISO 27001: A.8.3', 'NIST CSF: ID.RM-02']},
    {q_id: 'Q2.7', domain: 'D2', subdomain: '3.2.2 - Risk Treatment', question_ar: 'هل هناك عملية موثقة لقبول المخاطر المتبقية من قبل الإدارة العليا؟', question_en: 'Is there a documented process for accepting residual risk by senior management?', frameworks: ['ISO 27001: A.8.3']},
    {q_id: 'Q2.8', domain: 'D2', subdomain: '3.2.3 - Compliance with Standards', question_ar: 'هل يتم تقييم الامتثال لـ PCI-DSS سنوياً (إذا كانت المؤسسة تتعامل ببيانات بطاقات الدفع)؟', question_en: 'Is PCI-DSS compliance assessed annually (if handling cardholder data)?', frameworks: ['PCI-DSS v4.0.1', 'SAMA 3.2.3']},
    {q_id: 'Q2.9', domain: 'D2', subdomain: '3.2.3 - Compliance with Standards', question_ar: 'هل تتوافق المؤسسة مع متطلبات SWIFT CSP (إذا كانت مستخدمة للـ SWIFT)؟', question_en: 'Is the organization compliant with SWIFT Customer Security Requirements (if SWIFT user)?', frameworks: ['SWIFT CSP', 'SAMA 3.2.3']},
    {q_id: 'Q2.10', domain: 'D2', subdomain: '3.2.3 - Compliance with Standards', question_ar: 'هل يتم تطبيق معايير NCA للعمليات الحساسة والبنية التحتية الحرجة؟', question_en: 'Are NCA standards applied to critical operations and infrastructure?', frameworks: ['NCA ECC']},
    {q_id: 'Q2.11', domain: 'D2', subdomain: '3.2.4 - Metrics and Reporting', question_ar: 'هل يتم تحديد مؤشرات الأداء الرئيسية (KPIs) لقياس فعالية الأمن السيبراني؟', question_en: 'Are Key Performance Indicators (KPIs) defined to measure cybersecurity effectiveness?', frameworks: ['ISO 27001: A.18.2', 'NIST CSF: GV.OV-01', 'CIS Control 18']},
    {q_id: 'Q2.12', domain: 'D2', subdomain: '3.2.4 - Metrics and Reporting', question_ar: 'هل يتم إعداد تقارير دورية حول الأمن السيبراني لمجلس الإدارة (شهرياً/ربع سنوياً)؟', question_en: 'Are periodic cybersecurity reports prepared for the board (monthly/quarterly)?', frameworks: ['NIST CSF: GV.OV-01']},
    {q_id: 'Q2.13', domain: 'D2', subdomain: '3.2.4 - Metrics and Reporting', question_ar: 'هل التقارير تتضمن تحليل الاتجاهات والمقارنة مع الفترات السابقة والمعايير الصناعية؟', question_en: 'Do reports include trend analysis and comparison with previous periods and industry benchmarks?', frameworks: ['ISO 27001: A.18.2']},
    {q_id: 'Q2.14', domain: 'D2', subdomain: '3.2.4 - Metrics and Reporting', question_ar: 'هل يتم قياس الأثر المالي والعملي للحوادث الأمنية والتحسينات؟', question_en: 'Is the financial and operational impact of security incidents and improvements measured?', frameworks: ['NIST CSF: GV.OV-01']},
    {q_id: 'Q2.15', domain: 'D2', subdomain: '3.2.1 - Risk Assessment', question_ar: 'هل يتم تقييم مخاطر الأطراف الخارجية والسحابة والموارد الموزعة؟', question_en: 'Are risks from third parties, cloud, and distributed resources assessed?', frameworks: ['ISO 27001: A.8.2', 'NIST CSF: ID.RA-01']},
    {q_id: 'Q3.1', domain: 'D3', subdomain: '3.3.5 - IAM', question_ar: 'هل يتم تطبيق المصادقة متعددة العوامل (MFA) لجميع الوصول عن بُعد والحسابات الممتازة؟', question_en: 'Is multi-factor authentication (MFA) implemented for all remote access and privileged accounts?', frameworks: ['ISO 27001: A.9.4.2', 'NIST CSF: PR.AC-07', 'CIS Control 5, 6']},
    {q_id: 'Q3.2', domain: 'D3', subdomain: '3.3.5 - IAM', question_ar: 'هل يتم استخدام نظام إدارة الوصول المركزي مع تطبيق مبدأ الحد الأدنى من الامتيازات؟', question_en: 'Is centralized access management used with least privilege principle implementation?', frameworks: ['ISO 27001: A.9', 'NIST CSF: PR.AC-01']},
    {q_id: 'Q3.3', domain: 'D3', subdomain: '3.3.5 - IAM', question_ar: 'هل توجد عملية منظمة للموافقة على الوصول والإبلاغ عنه والإلغاء الموثق؟', question_en: 'Is there a formal process for access approval, logging, and documented removal?', frameworks: ['ISO 27001: A.9.2']},
    {q_id: 'Q3.4', domain: 'D3', subdomain: '3.3.5 - IAM', question_ar: 'هل يتم مراجعة أذونات الوصول دورياً (ربع سنوياً على الأقل) والإبلاغ عن الشذوذ؟', question_en: 'Are access privileges reviewed periodically (at least quarterly) with anomaly reporting?', frameworks: ['ISO 27001: A.9.4', 'CIS Control 6']},
    {q_id: 'Q3.5', domain: 'D3', subdomain: '3.3.5 - IAM', question_ar: 'هل يتم استخدام نظام إدارة الوصول المميز (PAM) لحماية الحسابات عالية الخطورة؟', question_en: 'Is Privileged Access Management (PAM) used to protect high-risk accounts?', frameworks: ['CIS Control 5, 6']},
    {q_id: 'Q3.6', domain: 'D3', subdomain: '3.3.6 - Asset Management', question_ar: 'هل يوجد جرد شامل ومحدث لجميع الأصول المعلوماتية (أجهزة، برامج، بيانات، خدمات سحابية)؟', question_en: 'Is there a comprehensive and updated inventory of all information assets (hardware, software, data, cloud services)?', frameworks: ['ISO 27001: A.8.1', 'NIST CSF: ID.AM-01', 'CIS Control 1']},
    {q_id: 'Q3.7', domain: 'D3', subdomain: '3.3.6 - Asset Management', question_ar: 'هل يتم تصنيف الأصول بناءً على مستوى الحساسية والأهمية التشغيلية؟', question_en: 'Are assets classified based on sensitivity level and operational importance?', frameworks: ['ISO 27001: A.8.1', 'CIS Control 1']},
    {q_id: 'Q3.8', domain: 'D3', subdomain: '3.3.6 - Asset Management', question_ar: 'هل يتم تخصيص المالك لكل أصل مع مسؤولية محددة للحماية والصيانة؟', question_en: 'Is an owner assigned for each asset with clear responsibility for protection and maintenance?', frameworks: ['ISO 27001: A.8.1']},
    {q_id: 'Q3.9', domain: 'D3', subdomain: '3.3.7 - Change Management', question_ar: 'هل توجد عملية رسمية لإدارة التغييرات مع طلب وموافقة وتقييم التأثير؟', question_en: 'Is there a formal change management process with requests, approvals, and impact assessment?', frameworks: ['ISO 27001: A.8.32', 'NIST CSF: PR.IP-01', 'CIS Control 3']},
    {q_id: 'Q3.10', domain: 'D3', subdomain: '3.3.7 - Change Management', question_ar: 'هل يتم اختبار التغييرات في بيئة غير إنتاجية قبل التطبيق على الإنتاج؟', question_en: 'Are changes tested in non-production environment before applying to production?', frameworks: ['ISO 27001: A.8.32']},
    {q_id: 'Q3.11', domain: 'D3', subdomain: '3.3.7 - Change Management', question_ar: 'هل هناك عملية محددة للتغييرات الطارئة مع موافقات مختصرة والتوثيق؟', question_en: 'Is there a defined process for emergency changes with expedited approvals and documentation?', frameworks: ['ISO 27001: A.8.32']},
    {q_id: 'Q3.12', domain: 'D3', subdomain: '3.3.8 - Infrastructure', question_ar: 'هل يتم تجزئة الشبكة بشكل منطقي (DMZ، شبكات داخلية، شبكات حساسة) مع جدران حماية بينها؟', question_en: 'Is the network segmented logically (DMZ, internal networks, sensitive networks) with firewalls between them?', frameworks: ['ISO 27001: A.13', 'NIST CSF: PR.AC-05', 'CIS Control 11']},
    {q_id: 'Q3.13', domain: 'D3', subdomain: '3.3.8 - Infrastructure', question_ar: 'هل يتم تطبيق حماية من البرمجيات الخبيثة على جميع الأنظمة مع تحديثات دورية؟', question_en: 'Is malware protection applied to all systems with periodic updates?', frameworks: ['ISO 27001: A.12.2', 'NIST CSF: PR.PT-01', 'CIS Control 13']},
    {q_id: 'Q3.14', domain: 'D3', subdomain: '3.3.8 - Infrastructure', question_ar: 'هل يتم تطبيق تصريحات الوصول (Firewall rules) وتوثيقها ومراجعتها دورياً؟', question_en: 'Are firewall rules documented, applied, and reviewed periodically?', frameworks: ['ISO 27001: A.13.1', 'CIS Control 11']},
    {q_id: 'Q3.15', domain: 'D3', subdomain: '3.3.14 - Event Management', question_ar: 'هل يتم استخدام نظام SIEM لجمع وتحليل سجلات الأمان من جميع الأنظمة الحرجة؟', question_en: 'Is a SIEM system used for collecting and analyzing security logs from critical systems?', frameworks: ['ISO 27001: A.12.4.1', 'NIST CSF: DE.CM-01', 'CIS Control 8']},
    {q_id: 'Q3.16', domain: 'D3', subdomain: '3.3.14 - Event Management', question_ar: 'هل يتم الاحتفاظ بسجلات الأمان لمدة لا تقل عن سنة واحدة مع إمكانية الوصول السريع؟', question_en: 'Are security logs retained for at least one year with quick access capability?', frameworks: ['ISO 27001: A.12.4.1']},
    {q_id: 'Q3.17', domain: 'D3', subdomain: '3.3.13 - Incident Management', question_ar: 'هل توجد خطة موثقة للاستجابة للحوادث الأمنية مع تعريفات واضحة ومستويات التصعيد؟', question_en: 'Is there a documented incident response plan with clear definitions and escalation levels?', frameworks: ['ISO 27001: A.16.1', 'NIST CSF: RS.CO-03', 'CIS Control 17']},
    {q_id: 'Q3.18', domain: 'D3', subdomain: '3.3.13 - Incident Management', question_ar: 'هل يتم اختبار خطة الاستجابة سنوياً من خلال محاكاة أو اختبار حقيقي؟', question_en: 'Is the incident response plan tested annually through simulations or real testing?', frameworks: ['ISO 27001: A.16.1']},
    {q_id: 'Q3.19', domain: 'D3', subdomain: '3.3.13 - Incident Management', question_ar: 'هل يتم توثيق جميع الحوادث الأمنية مع تتبع الإجراءات والنتائج؟', question_en: 'Are all security incidents documented with action tracking and outcomes?', frameworks: ['ISO 27001: A.16.1']},
    {q_id: 'Q3.20', domain: 'D3', subdomain: '3.3.13 - Incident Management', question_ar: 'هل يتم عقد اجتماعات الدروس المستفادة بعد كل حادث لتحسين الاستجابة؟', question_en: 'Are lessons learned meetings held after each incident to improve response procedures?', frameworks: ['ISO 27001: A.16.1']},
    {q_id: 'Q4.1', domain: 'D4', subdomain: '3.4.1 - Third-Party Assessment', question_ar: 'هل يتم تقييم أمني شامل لجميع الموردين الخارجيين الحرجين قبل التعاقد معهم؟', question_en: 'Are comprehensive security assessments conducted for all critical external vendors before contracting?', frameworks: ['ISO 27001: A.15.1', 'NIST CSF: ID.SC-01', 'CIS Control 15']},
    {q_id: 'Q4.2', domain: 'D4', subdomain: '3.4.1 - Third-Party Assessment', question_ar: 'هل يتم مراجعة شهادات الأمان (ISO 27001، SOC 2) لدى الموردين؟', question_en: 'Are security certifications (ISO 27001, SOC 2) reviewed for vendors?', frameworks: ['ISO 27001: A.15.1']},
    {q_id: 'Q4.3', domain: 'D4', subdomain: '3.4.2 - Contracts', question_ar: 'هل تتضمن العقود مع الموردين متطلبات أمنية محددة واتفاقيات مستوى الخدمة؟', question_en: 'Do contracts with vendors include specific security requirements and SLAs?', frameworks: ['ISO 27001: A.5.19', 'NIST CSF: ID.SC-02', 'CIS Control 15']},
    {q_id: 'Q4.4', domain: 'D4', subdomain: '3.4.2 - Contracts', question_ar: 'هل تتضمن العقود حق التدقيق والإبلاغ عن الحوادث خلال 24 ساعة؟', question_en: 'Do contracts include audit rights and incident notification within 24 hours?', frameworks: ['ISO 27001: A.15.2']},
    {q_id: 'Q4.5', domain: 'D4', subdomain: '3.4.3 - Monitoring', question_ar: 'هل يتم مراقبة أداء الموردين دورياً من خلال تقارير وقياس المؤشرات؟', question_en: 'Is vendor performance monitored periodically through reporting and KPI measurement?', frameworks: ['ISO 27001: A.15.2', 'NIST CSF: ID.SC-04']},
    {q_id: 'Q4.6', domain: 'D4', subdomain: '3.4.3 - Monitoring', question_ar: 'هل يتم إجراء تقييمات أمنية سنوية للموردين الحرجين مع تتبع التحسينات؟', question_en: 'Are annual security assessments conducted for critical vendors with improvement tracking?', frameworks: ['ISO 27001: A.15.2']},
    {q_id: 'Q4.7', domain: 'D4', subdomain: '3.4.4 - Cloud Security', question_ar: 'هل يتم تقييم مزودي الخدمات السحابية بناءً على نموذج المسؤولية المشتركة والحماية؟', question_en: 'Are cloud service providers assessed based on shared responsibility model and protection?', frameworks: ['ISO 27001: A.5.23', 'NIST CSF: PR.DS']},
    {q_id: 'Q4.8', domain: 'D4', subdomain: '3.4.4 - Cloud Security', question_ar: 'هل يتم التحقق من سياسات إقامة البيانات والتشفير لدى موفري الخدمات السحابية؟', question_en: 'Are data residency policies and encryption verified with cloud service providers?', frameworks: ['ISO 27001: A.5.23', 'NIST CSF: PR.DS']}
  ]
};

// Initialize Application
function initApp() {
  setupEventListeners();
  updateLanguage();
  renderHomePage();
}

// Event Listeners
function setupEventListeners() {
  // Language toggle
  document.getElementById('langToggle').addEventListener('click', toggleLanguage);
  
  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  
  // Navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      navigateToPage(page);
    });
  });
  
  // Home page buttons
  document.getElementById('startAssessmentBtn').addEventListener('click', () => navigateToPage('assessment'));
  document.getElementById('learnMoreBtn').addEventListener('click', () => navigateToPage('overview'));
}

// Language Management
function toggleLanguage() {
  appState.currentLang = appState.currentLang === 'ar' ? 'en' : 'ar';
  document.documentElement.lang = appState.currentLang;
  document.documentElement.dir = appState.currentLang === 'ar' ? 'rtl' : 'ltr';
  updateLanguage();
}

function updateLanguage() {
  const lang = appState.currentLang;
  document.querySelectorAll('[data-en][data-ar]').forEach(elem => {
    const text = lang === 'ar' ? elem.getAttribute('data-ar') : elem.getAttribute('data-en');
    if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
      elem.placeholder = text;
    } else {
      elem.textContent = text;
    }
  });
  
  // Update dynamic content based on current page
  if (appState.currentPage === 'home') renderHomePage();
  if (appState.currentPage === 'overview') renderOverviewPage();
  if (appState.currentPage === 'mappings') renderMappingsPage();
}

// Theme Management
function toggleTheme() {
  appState.currentTheme = appState.currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', appState.currentTheme);
  
  const lightIcon = document.querySelector('.theme-icon-light');
  const darkIcon = document.querySelector('.theme-icon-dark');
  
  if (appState.currentTheme === 'dark') {
    lightIcon.style.display = 'none';
    darkIcon.style.display = 'block';
  } else {
    lightIcon.style.display = 'block';
    darkIcon.style.display = 'none';
  }
}

// Navigation
function navigateToPage(pageName) {
  appState.currentPage = pageName;
  
  // Update active states
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  
  const targetPage = document.getElementById(pageName + 'Page');
  const targetLink = document.querySelector(`[data-page="${pageName}"]`);
  
  if (targetPage) targetPage.classList.add('active');
  if (targetLink) targetLink.classList.add('active');
  
  // Render page content
  switch(pageName) {
    case 'home':
      renderHomePage();
      break;
    case 'overview':
      renderOverviewPage();
      break;
    case 'assessment':
      renderAssessmentPage();
      break;
    case 'mappings':
      renderMappingsPage();
      break;
    case 'resources':
      // Static content, no rendering needed
      break;
  }
  
  window.scrollTo(0, 0);
}

// Home Page Rendering
function renderHomePage() {
  const grid = document.getElementById('frameworkGrid');
  if (!grid) return;
  
  const lang = appState.currentLang;
  grid.innerHTML = frameworkData.relatedFrameworks.map(fw => `
    <div class="framework-card">
      <h3>${fw.name}</h3>
      <p>${lang === 'ar' ? fw.description_ar : fw.description_en}</p>
      <span class="framework-badge">${lang === 'ar' ? 'متوافق' : 'Compatible'}</span>
    </div>
  `).join('');
}

// Overview Page Rendering
function renderOverviewPage() {
  renderMaturityPyramid();
  renderDomainsGrid();
}

function renderMaturityPyramid() {
  const pyramid = document.getElementById('maturityPyramid');
  if (!pyramid) return;
  
  const lang = appState.currentLang;
  pyramid.innerHTML = frameworkData.maturityLevels.reverse().map(level => `
    <div class="pyramid-level" style="background-color: ${level.color}22; color: ${level.color}; max-width: ${100 - (level.level * 10)}%;">
      <div class="pyramid-level-number">${lang === 'ar' ? 'المستوى' : 'Level'} ${level.level}</div>
      <div class="pyramid-level-name">${lang === 'ar' ? level.name_ar : level.name_en}</div>
      <div class="pyramid-level-desc">${lang === 'ar' ? level.description_ar : level.description_en}</div>
    </div>
  `).join('');
  frameworkData.maturityLevels.reverse(); // Restore original order
}

function renderDomainsGrid() {
  const grid = document.getElementById('domainsGrid');
  if (!grid) return;
  
  const lang = appState.currentLang;
  grid.innerHTML = frameworkData.domains.map(domain => `
    <div class="domain-card">
      <div class="domain-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      </div>
      <h3>${lang === 'ar' ? domain.name_ar : domain.name_en}</h3>
      <p>${lang === 'ar' ? domain.description_ar : domain.description_en}</p>
    </div>
  `).join('');
}

// Assessment Page Rendering
function renderAssessmentPage() {
  const domainSelection = document.getElementById('domainSelection');
  const questionInterface = document.getElementById('questionInterface');
  
  if (appState.assessmentData.currentDomain === null) {
    domainSelection.style.display = 'block';
    questionInterface.style.display = 'none';
    renderDomainSelection();
  } else {
    domainSelection.style.display = 'none';
    questionInterface.style.display = 'block';
    renderQuestion();
  }
}

function renderDomainSelection() {
  const container = document.getElementById('assessmentOptions');
  if (!container) return;
  
  const lang = appState.currentLang;
  const orgInput = document.getElementById('orgNameInput');
  orgInput.placeholder = lang === 'ar' ? 'مثال: اسم المصرف' : 'Example: Bank Name';
  
  container.innerHTML = `
    <div class="assessment-option full-assessment" data-domain="all">
      <h3>${lang === 'ar' ? 'التقييم الكامل' : 'Full Assessment'}</h3>
      <p>${lang === 'ar' ? 'تقييم جميع المجالات الأربعة (58 سؤال - 15-20 دقيقة)' : 'Assess all four domains (58 questions - 15-20 minutes)'}</p>
    </div>
    <div class="assessment-option" data-domain="quick" style="border-color: var(--color-gold); background: rgba(212, 175, 55, 0.05);">
      <h3>${lang === 'ar' ? 'التقييم السريع' : 'Quick Assessment'}</h3>
      <p>${lang === 'ar' ? 'أسئلة رئيسية فقط (16 سؤال - 10 دقائق)' : 'Key questions only (16 questions - 10 minutes)'}</p>
    </div>
    ${frameworkData.domains.map(domain => `
      <div class="assessment-option" data-domain="${domain.domain_id}">
        <h3>${lang === 'ar' ? domain.name_ar : domain.name_en}</h3>
        <p>${domain.questionCount} ${lang === 'ar' ? 'سؤال' : 'questions'}</p>
      </div>
    `).join('')}
  `;
  
  // Add click handlers
  container.querySelectorAll('.assessment-option').forEach(option => {
    option.addEventListener('click', () => {
      const orgName = document.getElementById('orgNameInput').value;
      appState.assessmentData.organizationName = orgName;
      const domain = option.getAttribute('data-domain');
      startAssessment(domain);
    });
  });
}

function startAssessment(domain) {
  appState.assessmentData.currentDomain = domain;
  appState.assessmentData.currentQuestionIndex = 0;
  appState.assessmentData.responses = {};
  
  // Start timer
  appState.assessmentData.startTime = new Date();
  
  renderAssessmentPage();
}

function renderQuestion() {
  let questions;
  
  if (appState.assessmentData.currentDomain === 'all') {
    questions = frameworkData.questions;
  } else if (appState.assessmentData.currentDomain === 'quick') {
    // Quick assessment: 4 questions per domain (16 total)
    questions = [
      frameworkData.questions[0], frameworkData.questions[2], frameworkData.questions[5], frameworkData.questions[8],  // D1
      frameworkData.questions[15], frameworkData.questions[16], frameworkData.questions[20], frameworkData.questions[23], // D2
      frameworkData.questions[30], frameworkData.questions[31], frameworkData.questions[36], frameworkData.questions[44], // D3
      frameworkData.questions[50], frameworkData.questions[52], frameworkData.questions[54], frameworkData.questions[56]  // D4
    ];
  } else {
    questions = frameworkData.questions.filter(q => q.domain === appState.assessmentData.currentDomain);
  }
  
  const currentIndex = appState.assessmentData.currentQuestionIndex;
  const question = questions[currentIndex];
  
  if (!question) {
    showResults();
    return;
  }
  
  const lang = appState.currentLang;
  const domain = frameworkData.domains.find(d => d.domain_id === question.domain);
  
  // Update progress
  const progress = ((currentIndex + 1) / questions.length) * 100;
  document.getElementById('progressFill').style.width = progress + '%';
  document.getElementById('questionNumber').textContent = `${lang === 'ar' ? 'السؤال' : 'Question'} ${currentIndex + 1} ${lang === 'ar' ? 'من' : 'of'} ${questions.length}`;
  document.getElementById('currentDomain').textContent = lang === 'ar' ? domain.name_ar : domain.name_en;
  
  // Update question
  document.getElementById('questionText').textContent = lang === 'ar' ? question.question_ar : question.question_en;
  document.getElementById('questionSubdomain').textContent = question.subdomain;
  
  // Render maturity selector
  const selector = document.getElementById('maturitySelector');
  selector.innerHTML = frameworkData.maturityLevels.map(level => {
    const saved = appState.assessmentData.responses[question.q_id];
    const checked = saved && saved.maturityLevel === level.level ? 'checked' : '';
    return `
      <div class="maturity-option ${checked ? 'selected' : ''}" data-level="${level.level}">
        <input type="radio" name="maturity" value="${level.level}" ${checked} id="level${level.level}">
        <label for="level${level.level}" class="maturity-option-content">
          <div class="maturity-option-header">
            <span class="maturity-option-level" style="color: ${level.color}">${level.level}</span>
            <span class="maturity-option-name">${lang === 'ar' ? level.name_ar : level.name_en}</span>
          </div>
          <div class="maturity-option-desc">${lang === 'ar' ? level.description_ar : level.description_en}</div>
        </label>
      </div>
    `;
  }).join('');
  
  // Add selection handlers
  selector.querySelectorAll('.maturity-option').forEach(option => {
    option.addEventListener('click', function() {
      selector.querySelectorAll('.maturity-option').forEach(o => o.classList.remove('selected'));
      this.classList.add('selected');
      this.querySelector('input[type="radio"]').checked = true;
    });
  });
  
  // Related frameworks
  document.getElementById('relatedFrameworks').innerHTML = `
    <ul>
      ${question.frameworks.map(fw => `<li>${fw}</li>`).join('')}
    </ul>
  `;
  
  // Navigation buttons
  document.getElementById('prevBtn').disabled = currentIndex === 0;
  document.getElementById('prevBtn').addEventListener('click', () => previousQuestion());
  document.getElementById('nextBtn').addEventListener('click', () => nextQuestion());
  
  // Load saved notes
  const saved = appState.assessmentData.responses[question.q_id];
  document.getElementById('questionNotes').value = saved ? saved.notes || '' : '';
}

function nextQuestion() {
  saveCurrentResponse();
  appState.assessmentData.currentQuestionIndex++;
  renderQuestion();
}

function previousQuestion() {
  saveCurrentResponse();
  appState.assessmentData.currentQuestionIndex--;
  renderQuestion();
}

function saveCurrentResponse() {
  const questions = appState.assessmentData.currentDomain === 'all' 
    ? frameworkData.questions
    : frameworkData.questions.filter(q => q.domain === appState.assessmentData.currentDomain);
  
  const question = questions[appState.assessmentData.currentQuestionIndex];
  const selected = document.querySelector('input[name="maturity"]:checked');
  const notes = document.getElementById('questionNotes').value;
  
  if (selected) {
    appState.assessmentData.responses[question.q_id] = {
      maturityLevel: parseInt(selected.value),
      notes: notes
    };
    autoSaveProgress();
  }
}

function showResults() {
  calculateScores();
  navigateToPage('results');
  renderResults();
}

function calculateScores() {
  const scores = {};
  
  frameworkData.domains.forEach(domain => {
    const domainQuestions = frameworkData.questions.filter(q => q.domain === domain.domain_id);
    const domainResponses = domainQuestions.map(q => appState.assessmentData.responses[q.q_id]).filter(r => r);
    
    if (domainResponses.length > 0) {
      const avg = domainResponses.reduce((sum, r) => sum + r.maturityLevel, 0) / domainResponses.length;
      scores[domain.domain_id] = parseFloat(avg.toFixed(2));
    } else {
      scores[domain.domain_id] = 0;
    }
  });
  
  const allScores = Object.values(scores).filter(s => s > 0);
  scores.overall = allScores.length > 0 ? parseFloat((allScores.reduce((a, b) => a + b, 0) / allScores.length).toFixed(2)) : 0;
  
  appState.assessmentData.scores = scores;
}

function renderResults() {
  const lang = appState.currentLang;
  const scores = appState.assessmentData.scores;
  
  // Overall score
  const overallContainer = document.getElementById('overallScore');
  const overallScore = scores.overall;
  const status = overallScore >= 3 ? 'success' : overallScore >= 2 ? 'warning' : 'danger';
  const statusText = overallScore >= 3 ? 
    (lang === 'ar' ? 'مستوى مقبول' : 'Acceptable Level') :
    (lang === 'ar' ? 'يتطلب تحسين' : 'Needs Improvement');
  const statusColor = overallScore >= 3 ? '#059669' : overallScore >= 2 ? '#d97706' : '#dc2626';
  
  overallContainer.innerHTML = `
    <div class="score-value" style="color: ${statusColor}">${overallScore.toFixed(1)}</div>
    <div class="score-label">${lang === 'ar' ? 'النضج الإجمالي' : 'Overall Maturity'}</div>
    <div class="score-status" style="background-color: ${statusColor}22; color: ${statusColor}; border: 1px solid ${statusColor}44;">
      ${statusText}
    </div>
  `;
  
  // Domain scores
  const domainScoresContainer = document.getElementById('domainScores');
  domainScoresContainer.innerHTML = frameworkData.domains.map(domain => {
    const score = scores[domain.domain_id] || 0;
    const color = score >= 3 ? '#059669' : score >= 2 ? '#d97706' : '#dc2626';
    return `
      <div class="score-card">
        <div class="score-value" style="color: ${color}">${score.toFixed(1)}</div>
        <div class="score-label">${lang === 'ar' ? domain.name_ar : domain.name_en}</div>
      </div>
    `;
  }).join('');
  
  // Radar chart
  renderRadarChart();
  
  // Gap analysis
  renderGapAnalysis();
  
  // Heatmap
  renderHeatmap();
  
  // Export button
  document.getElementById('exportPdfBtn').addEventListener('click', exportToPDF);
  document.getElementById('newAssessmentBtn').addEventListener('click', () => {
    appState.assessmentData.currentDomain = null;
    navigateToPage('assessment');
  });
  document.getElementById('viewMappingsBtn').addEventListener('click', () => navigateToPage('mappings'));
}

function renderRadarChart() {
  const ctx = document.getElementById('radarChart');
  if (!ctx) return;
  
  const lang = appState.currentLang;
  const scores = appState.assessmentData.scores;
  
  if (window.radarChartInstance) {
    window.radarChartInstance.destroy();
  }
  
  window.radarChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: frameworkData.domains.map(d => lang === 'ar' ? d.name_ar : d.name_en),
      datasets: [{
        label: lang === 'ar' ? 'المستوى الحالي' : 'Current Level',
        data: frameworkData.domains.map(d => scores[d.domain_id] || 0),
        backgroundColor: 'rgba(30, 58, 138, 0.2)',
        borderColor: 'rgba(30, 58, 138, 1)',
        pointBackgroundColor: 'rgba(30, 58, 138, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(30, 58, 138, 1)'
      }, {
        label: lang === 'ar' ? 'الحد الأدنى المطلوب' : 'Minimum Required',
        data: [3, 3, 3, 3],
        backgroundColor: 'rgba(5, 150, 105, 0.1)',
        borderColor: 'rgba(5, 150, 105, 1)',
        borderDash: [5, 5],
        pointBackgroundColor: 'rgba(5, 150, 105, 1)',
        pointBorderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
          beginAtZero: true,
          max: 5,
          ticks: {
            stepSize: 1
          }
        }
      },
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

function renderGapAnalysis() {
  const container = document.getElementById('gapList');
  const lang = appState.currentLang;
  const responses = appState.assessmentData.responses;
  
  const gaps = frameworkData.questions.filter(q => {
    const response = responses[q.q_id];
    return response && response.maturityLevel < 3;
  });
  
  if (gaps.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: var(--color-success);">${lang === 'ar' ? 'ممتاز! جميع الضوابط تحقق الحد الأدنى المطلوب' : 'Excellent! All controls meet the minimum requirement'}</p>`;
    return;
  }
  
  // Sort by priority (lowest scores first)
  gaps.sort((a, b) => {
    const scoreA = responses[a.q_id].maturityLevel;
    const scoreB = responses[b.q_id].maturityLevel;
    return scoreA - scoreB;
  });
  
  container.innerHTML = gaps.map(q => {
    const response = responses[q.q_id];
    const domain = frameworkData.domains.find(d => d.domain_id === q.domain);
    const priority = response.maturityLevel === 0 ? 'Critical' : response.maturityLevel === 1 ? 'High' : 'Medium';
    const priorityAr = response.maturityLevel === 0 ? 'حرج' : response.maturityLevel === 1 ? 'عالي' : 'متوسط';
    return `
      <div class="gap-item">
        <h4>${lang === 'ar' ? q.question_ar : q.question_en}</h4>
        <p><strong>${lang === 'ar' ? 'المجال:' : 'Domain:'}</strong> ${lang === 'ar' ? domain.name_ar : domain.name_en} | <strong>${lang === 'ar' ? 'الأولوية:' : 'Priority:'}</strong> ${lang === 'ar' ? priorityAr : priority}</p>
        <p><strong>${lang === 'ar' ? 'المستوى الحالي:' : 'Current Level:'}</strong> ${response.maturityLevel} - <strong>${lang === 'ar' ? 'المطلوب:' : 'Required:'}</strong> 3</p>
        <p><strong>${lang === 'ar' ? 'أطر ذات صلة:' : 'Related Frameworks:'}</strong> ${q.frameworks.join(', ')}</p>
      </div>
    `;
  }).join('');
}

function renderHeatmap() {
  const heatmapContainer = document.createElement('div');
  heatmapContainer.className = 'heatmap-container';
  heatmapContainer.style.cssText = 'margin-top: var(--space-2xl); padding: var(--space-xl); background: var(--color-bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-border);';
  
  const lang = appState.currentLang;
  const responses = appState.assessmentData.responses;
  
  heatmapContainer.innerHTML = `
    <h2 class="section-title">${lang === 'ar' ? 'خريطة النضج التفصيلية' : 'Detailed Maturity Heatmap'}</h2>
    <div id="heatmapGrid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: var(--space-sm);"></div>
  `;
  
  const gapSection = document.getElementById('gapAnalysis');
  gapSection.parentNode.insertBefore(heatmapContainer, gapSection);
  
  const grid = document.getElementById('heatmapGrid');
  frameworkData.questions.forEach(q => {
    const response = responses[q.q_id];
    if (response) {
      const level = response.maturityLevel;
      const color = level === 0 ? '#dc2626' : level === 1 ? '#ea580c' : level === 2 ? '#d97706' : level === 3 ? '#059669' : level === 4 ? '#0891b2' : '#7c3aed';
      
      const cell = document.createElement('div');
      cell.style.cssText = `background-color: ${color}22; border: 2px solid ${color}; border-radius: var(--radius-sm); padding: var(--space-sm); text-align: center; cursor: pointer;`;
      cell.innerHTML = `
        <div style="font-size: 0.75rem; font-weight: 600; color: ${color};">${q.q_id}</div>
        <div style="font-size: 1.25rem; font-weight: 700; color: ${color};">${level}</div>
      `;
      cell.title = `${lang === 'ar' ? q.question_ar : q.question_en}\n${lang === 'ar' ? 'المستوى:' : 'Level:'} ${level}`;
      grid.appendChild(cell);
    }
  });
}

function renderMappingsPage() {
  const lang = appState.currentLang;
  const filter = document.getElementById('frameworkFilter');
  
  // Populate filter
  if (filter && filter.children.length === 1) {
    frameworkData.relatedFrameworks.forEach(fw => {
      const option = document.createElement('option');
      option.value = fw.id;
      option.textContent = fw.name;
      filter.appendChild(option);
    });
    
    filter.addEventListener('change', () => renderMappingTable());
  }
  
  renderMappingTable();
}

function renderMappingTable() {
  const container = document.getElementById('mappingTable');
  const lang = appState.currentLang;
  
  container.innerHTML = `
    <div class="mapping-row header">
      <div>${lang === 'ar' ? 'السؤال' : 'Question'}</div>
      <div>${lang === 'ar' ? 'المجال' : 'Domain'}</div>
      <div>${lang === 'ar' ? 'الأطر ذات الصلة' : 'Related Frameworks'}</div>
    </div>
    ${frameworkData.questions.map(q => {
      const domain = frameworkData.domains.find(d => d.domain_id === q.domain);
      return `
        <div class="mapping-row">
          <div style="font-size: 0.875rem;">${lang === 'ar' ? q.question_ar : q.question_en}</div>
          <div style="font-size: 0.875rem;">${lang === 'ar' ? domain.name_ar : domain.name_en}</div>
          <div style="font-size: 0.875rem;">${q.frameworks.join(', ')}</div>
        </div>
      `;
    }).join('')}
  `;
}

function exportToPDF() {
  const lang = appState.currentLang;
  const { jsPDF } = window.jspdf;
  
  if (!jsPDF) {
    alert(lang === 'ar' ? 'جاري تحميل مكتبة PDF...' : 'Loading PDF library...');
    return;
  }
  
  try {
    const doc = new jsPDF();
    const scores = appState.assessmentData.scores;
    const orgName = appState.assessmentData.organizationName || (lang === 'ar' ? 'غير محدد' : 'Not Specified');
    const date = new Date().toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US');
    
    // Title
    doc.setFontSize(20);
    doc.text(lang === 'ar' ? 'SAMA CSF - ' : 'SAMA CSF Assessment Report', 20, 20);
    
    // Organization
    doc.setFontSize(12);
    doc.text(`${lang === 'ar' ? '\u0627\u0644\u0645\u0624\u0633\u0633\u0629:' : 'Organization:'} ${orgName}`, 20, 35);
    doc.text(`${lang === 'ar' ? '\u0627\u0644\u062a\u0627\u0631\u064a\u062e:' : 'Date:'} ${date}`, 20, 45);
    
    // Overall Score
    doc.setFontSize(16);
    doc.text(`${lang === 'ar' ? '\u0627\u0644\u0646\u0636\u062c \u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a:' : 'Overall Maturity:'} ${scores.overall.toFixed(1)}/5`, 20, 60);
    
    // Domain Scores
    doc.setFontSize(14);
    doc.text(lang === 'ar' ? '\u0646\u062a\u0627\u0626\u062c \u0627\u0644\u0645\u062c\u0627\u0644\u0627\u062a:' : 'Domain Scores:', 20, 75);
    
    let yPos = 90;
    frameworkData.domains.forEach(domain => {
      const score = scores[domain.domain_id] || 0;
      doc.setFontSize(12);
      doc.text(`${lang === 'ar' ? domain.name_ar : domain.name_en}: ${score.toFixed(1)}/5`, 25, yPos);
      yPos += 10;
    });
    
    // Recommendations
    doc.setFontSize(14);
    doc.text(lang === 'ar' ? '\u0627\u0644\u062a\u0648\u0635\u064a\u0627\u062a:' : 'Recommendations:', 20, yPos + 10);
    doc.setFontSize(10);
    doc.text(lang === 'ar' ? '- \u0627\u0644\u062a\u0631\u0643\u064a\u0632 \u0639\u0644\u0649 \u0627\u0644\u0636\u0648\u0627\u0628\u0637 \u0630\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u0648\u0649 \u0627\u0644\u0645\u0646\u062e\u0641\u0636' : '- Focus on low-scoring controls', 25, yPos + 25);
    doc.text(lang === 'ar' ? '- \u062a\u062d\u0642\u064a\u0642 \u0645\u0633\u062a\u0648\u0649 3 \u0643\u062d\u062f \u0623\u062f\u0646\u0649' : '- Achieve Level 3 minimum', 25, yPos + 35);
    
    doc.save(`SAMA_CSF_Assessment_${orgName.replace(/\s+/g, '_')}.pdf`);
  } catch (error) {
    console.error('PDF generation error:', error);
    alert(lang === 'ar' ? '\u062e\u0637\u0623 \u0641\u064a \u0625\u0646\u0634\u0627\u0621 PDF' : 'Error generating PDF');
  }
}

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
