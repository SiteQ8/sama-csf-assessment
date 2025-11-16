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
      description_ar: 'تحدد مسؤولية القيادة وتوزع الأدوار وتضمن معاملة الأمن السيبراني كأولوية استراتيجية'
    },
    {
      domain_id: 'D2',
      name_en: 'Cybersecurity Risk Management and Compliance',
      name_ar: 'إدارة المخاطر والامتثال السيبراني',
      description_en: 'Identifies and evaluates risks tied to information assets, operations, and third-party exposures',
      description_ar: 'تحدد وتقيّم المخاطر المتعلقة بأصول المعلومات والعمليات والأطراف الخارجية'
    },
    {
      domain_id: 'D3',
      name_en: 'Cybersecurity Operations and Technology',
      name_ar: 'عمليات وتقنية الأمن السيبراني',
      description_en: 'Covers access controls, network monitoring, security architecture, and real-time response mechanisms',
      description_ar: 'تغطي ضوابط الوصول ومراقبة الشبكات وبنية الأمان وآليات الاستجابة الفورية'
    },
    {
      domain_id: 'D4',
      name_en: 'Third-Party Cybersecurity',
      name_ar: 'أمن الأطراف الخارجية',
      description_en: 'Ensures vendors and partners uphold the same cybersecurity standards',
      description_ar: 'تضمن التزام الموردين والشركاء بنفس معايير الأمن السيبراني'
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
    {
      q_id: 'Q1.1',
      domain: 'D1',
      question_en: 'Do you have a documented cybersecurity strategy approved by the board?',
      question_ar: 'هل لديكم استراتيجية أمن سيبراني موثقة ومعتمدة من مجلس الإدارة؟',
      subdomain: '3.1.1 - Cybersecurity Strategy',
      frameworks: ['ISO 27001: A.5.1', 'NIST CSF: GV.OC-01', 'CIS Control 1']
    },
    {
      q_id: 'Q1.2',
      domain: 'D1',
      question_en: 'Do you have a comprehensive cybersecurity policy covering all security aspects?',
      question_ar: 'هل لديكم سياسة أمن سيبراني شاملة تغطي جميع جوانب الأمن؟',
      subdomain: '3.1.2 - Cybersecurity Policy',
      frameworks: ['ISO 27001: A.5.2', 'NIST CSF: GV.PO-01', 'CIS Control 1']
    },
    {
      q_id: 'Q1.3',
      domain: 'D1',
      question_en: 'Is there a cybersecurity committee with clearly defined roles and responsibilities?',
      question_ar: 'هل توجد لجنة أمن سيبراني مع أدوار ومسؤوليات محددة بوضوح؟',
      subdomain: '3.1.3 - Governance Structure',
      frameworks: ['ISO 27001: A.5.3', 'NIST CSF: GV.OC-02', 'CIS Control 1']
    },
    {
      q_id: 'Q1.4',
      domain: 'D1',
      question_en: 'Are all employees regularly trained on cybersecurity?',
      question_ar: 'هل يتم تدريب جميع الموظفين بانتظام على الأمن السيبراني؟',
      subdomain: '3.1.4 - Cybersecurity Awareness',
      frameworks: ['ISO 27001: A.6.3', 'NIST CSF: PR.AT-01', 'CIS Control 14']
    },
    {
      q_id: 'Q2.1',
      domain: 'D2',
      question_en: 'Are cybersecurity risk assessments conducted regularly (at least annually)?',
      question_ar: 'هل تُجرى تقييمات المخاطر السيبرانية بشكل منتظم (على الأقل سنوياً)؟',
      subdomain: '3.2.1 - Risk Assessment',
      frameworks: ['ISO 27001: A.8.2', 'NIST CSF: ID.RA-01', 'CIS Control 18']
    },
    {
      q_id: 'Q2.2',
      domain: 'D2',
      question_en: 'Do you have documented risk treatment plans with implementation tracking?',
      question_ar: 'هل لديكم خطط معالجة المخاطر الموثقة مع تتبع التنفيذ؟',
      subdomain: '3.2.2 - Risk Treatment',
      frameworks: ['ISO 27001: A.8.3', 'NIST CSF: ID.RM-01', 'CIS Control 4']
    },
    {
      q_id: 'Q2.3',
      domain: 'D2',
      question_en: 'Does the organization comply with PCI-DSS (if handling payment card data)?',
      question_ar: 'هل تمتثل المؤسسة لمعايير PCI-DSS (إذا كانت تتعامل مع بيانات بطاقات الدفع)؟',
      subdomain: '3.2.3 - Compliance with Standards',
      frameworks: ['PCI-DSS v4.0.1', 'SAMA 3.2.3', 'CIS Control 15']
    },
    {
      q_id: 'Q2.4',
      domain: 'D2',
      question_en: 'Are cybersecurity effectiveness metrics measured and regularly reported to the board?',
      question_ar: 'هل يتم قياس وتقديم تقارير منتظمة عن فعالية الأمن السيبراني لمجلس الإدارة؟',
      subdomain: '3.2.4 - Metrics and Reporting',
      frameworks: ['ISO 27001: A.18.2', 'NIST CSF: GV.OV-01', 'CIS Control 18']
    },
    {
      q_id: 'Q3.1',
      domain: 'D3',
      question_en: 'Is multi-factor authentication (MFA) implemented for remote access and critical systems?',
      question_ar: 'هل يتم تطبيق المصادقة متعددة العوامل (MFA) للوصول عن بُعد والأنظمة الحساسة؟',
      subdomain: '3.3.5 - Identity and Access Management',
      frameworks: ['ISO 27001: A.9.4.2', 'NIST CSF: PR.AC-07', 'CIS Control 6']
    },
    {
      q_id: 'Q3.2',
      domain: 'D3',
      question_en: 'Do you have a comprehensive and updated inventory of all information assets?',
      question_ar: 'هل لديكم جرد شامل ومحدث لجميع الأصول المعلوماتية؟',
      subdomain: '3.3.6 - Asset Management',
      frameworks: ['ISO 27001: A.8.1', 'NIST CSF: ID.AM-01', 'CIS Control 1']
    },
    {
      q_id: 'Q3.3',
      domain: 'D3',
      question_en: 'Is a SIEM system used for collecting and analyzing security logs?',
      question_ar: 'هل يتم استخدام نظام SIEM لجمع وتحليل سجلات الأمان؟',
      subdomain: '3.3.14 - Event Management',
      frameworks: ['ISO 27001: A.12.4.1', 'NIST CSF: DE.CM-01', 'CIS Control 8']
    },
    {
      q_id: 'Q3.4',
      domain: 'D3',
      question_en: 'Is there a documented and tested incident response plan?',
      question_ar: 'هل توجد خطة موثقة ومختبرة للاستجابة للحوادث السيبرانية؟',
      subdomain: '3.3.13 - Incident Management',
      frameworks: ['ISO 27001: A.16.1', 'NIST CSF: RS.CO-03', 'CIS Control 17']
    },
    {
      q_id: 'Q4.1',
      domain: 'D4',
      question_en: 'Are security assessments conducted for all third-party vendors before contracting?',
      question_ar: 'هل يتم إجراء تقييمات أمنية لجميع الموردين الخارجيين قبل التعاقد؟',
      subdomain: '3.4.1 - Third-Party Risk Assessment',
      frameworks: ['ISO 27001: A.15.1', 'NIST CSF: ID.SC-01', 'CIS Control 15']
    },
    {
      q_id: 'Q4.2',
      domain: 'D4',
      question_en: 'Do contracts with third parties include security requirements and audit clauses?',
      question_ar: 'هل تتضمن العقود مع الأطراف الخارجية متطلبات أمنية وشروط التدقيق؟',
      subdomain: '3.4.2 - Third-Party Contracts',
      frameworks: ['ISO 27001: A.5.19', 'NIST CSF: ID.SC-02', 'CIS Control 15']
    }
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
      <p>${lang === 'ar' ? 'تقييم جميع المجالات الأربعة (14 سؤال)' : 'Assess all four domains (14 questions)'}</p>
    </div>
    ${frameworkData.domains.map(domain => `
      <div class="assessment-option" data-domain="${domain.domain_id}">
        <h3>${lang === 'ar' ? domain.name_ar : domain.name_en}</h3>
        <p>${frameworkData.questions.filter(q => q.domain === domain.domain_id).length} ${lang === 'ar' ? 'أسئلة' : 'questions'}</p>
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
  renderAssessmentPage();
}

function renderQuestion() {
  const questions = appState.assessmentData.currentDomain === 'all' 
    ? frameworkData.questions
    : frameworkData.questions.filter(q => q.domain === appState.assessmentData.currentDomain);
  
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
  
  container.innerHTML = gaps.map(q => {
    const response = responses[q.q_id];
    const domain = frameworkData.domains.find(d => d.domain_id === q.domain);
    return `
      <div class="gap-item">
        <h4>${lang === 'ar' ? q.question_ar : q.question_en}</h4>
        <p><strong>${lang === 'ar' ? 'المجال:' : 'Domain:'}</strong> ${lang === 'ar' ? domain.name_ar : domain.name_en}</p>
        <p><strong>${lang === 'ar' ? 'المستوى الحالي:' : 'Current Level:'}</strong> ${response.maturityLevel} - <strong>${lang === 'ar' ? 'المطلوب:' : 'Required:'}</strong> 3</p>
        <p><strong>${lang === 'ar' ? 'أطر ذات صلة:' : 'Related Frameworks:'}</strong> ${q.frameworks.join(', ')}</p>
      </div>
    `;
  }).join('');
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
  alert(lang === 'ar' ? 'تصدير PDF - قريباً!' : 'PDF Export - Coming Soon!');
}

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
