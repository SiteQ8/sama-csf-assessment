# SAMA CSF Assessment Tool | أداة تقييم إطار الأمن السيبراني للبنك المركزي السعودي

<div dir="rtl">

## نظرة عامة

أداة تعليمية تفاعلية لتقييم مدى الامتثال لإطار الأمن السيبراني للبنك المركزي السعودي (SAMA CSF). تم تصميم هذه الأداة لأغراض التعلم والتطوير الشخصي في مجال الأمن السيبراني.

</div>

## Overview

An interactive educational tool for assessing compliance with the Saudi Central Bank (SAMA) Cybersecurity Framework. This tool is designed for learning purposes and personal development in cybersecurity.

---

## 🎯 Features | المميزات

### English
- **Comprehensive SAMA CSF Assessment**: Evaluate your organization across all 4 domains and 6 maturity levels
- **Bilingual Interface**: Full support for Arabic (RTL) and English (LTR)
- **Framework Mapping**: See how SAMA CSF aligns with ISO 27001, NIST CSF 2.0, CIS Controls v8.1, PCI-DSS, and NCA
- **Interactive Dashboard**: Visual results with radar charts, bar graphs, and maturity indicators
- **Gap Analysis**: Identify controls below Level 3 and get actionable recommendations
- **Export Reports**: Generate PDF reports with executive summary and action plans
- **Offline-First**: Works entirely in browser with localStorage persistence
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

<div dir="rtl">

### العربية
- **تقييم شامل لإطار SAMA CSF**: قيّم مؤسستك عبر 4 مجالات و6 مستويات نضج
- **واجهة ثنائية اللغة**: دعم كامل للعربية والإنجليزية
- **ربط الأطر**: اطلع على توافق SAMA CSF مع ISO 27001 وNIST CSF وCIS Controls وPCI-DSS وNCA
- **لوحة تحكم تفاعلية**: نتائج مرئية مع مخططات رادار وأعمدة ومؤشرات النضج
- **تحليل الفجوات**: حدد الضوابط دون المستوى 3 واحصل على توصيات قابلة للتنفيذ
- **تصدير التقارير**: أنشئ تقارير PDF مع ملخص تنفيذي وخطط عمل
- **العمل دون اتصال**: تعمل بالكامل في المتصفح مع التخزين المحلي
- **تصميم متجاوب**: محسّن للحواسيب المكتبية والأجهزة اللوحية والهواتف

</div>

---

## 📋 SAMA CSF Framework Structure

The SAMA Cybersecurity Framework consists of:

- **4 Core Domains**
  1. Cybersecurity Leadership and Governance (قيادة وحوكمة الأمن السيبراني)
  2. Cybersecurity Risk Management and Compliance (إدارة المخاطر والامتثال)
  3. Cybersecurity Operations and Technology (عمليات وتقنية الأمن السيبراني)
  4. Third-Party Cybersecurity (أمن الأطراف الخارجية)

- **6 Maturity Levels**
  - Level 0: Non-Existent (غير موجود)
  - Level 1: Ad-hoc (عشوائي)
  - Level 2: Repeatable but Informal (قابل للتكرار لكن غير رسمي)
  - Level 3: Structured and Formalized (منظم ورسمي) ⭐ **Minimum Required**
  - Level 4: Managed and Measurable (مُدار وقابل للقياس)
  - Level 5: Adaptive (متكيف)

- **29 Control Objectives**
- **114 Sub-Controls**

---

## 🚀 Getting Started | البدء

### Deployment on GitHub Pages

1. Fork this repository
2. Go to Settings → Pages
3. Select source: `main` branch and `/docs` folder
4. Your site will be published at `https://[username].github.io/sama-csf-assessment/`

### Local Development

```bash
# Clone the repository
git clone https://github.com/[your-username]/sama-csf-assessment.git

# Navigate to the project
cd sama-csf-assessment

# Open in browser (no build required - pure HTML/CSS/JS)
open docs/index.html
```

---

## 🎓 Educational Purpose | الغرض التعليمي

<div dir="rtl">

### تنبيه مهم
هذه الأداة مصممة **لأغراض تعليمية فقط** وتهدف إلى:
- تعلم متطلبات إطار SAMA CSF
- فهم مستويات النضج المطلوبة
- استكشاف التوافق بين أطر العمل المختلفة
- التطوير الشخصي في مجال الأمن السيبراني

**ملاحظة**: هذه الأداة ليست بديلاً عن التقييم الرسمي أو المشورة المهنية. للامتثال الرسمي، يُرجى استشارة خبراء معتمدين.

</div>

### Important Notice

This tool is designed for **educational purposes only** and aims to:
- Learn SAMA CSF requirements
- Understand required maturity levels
- Explore alignment between different frameworks
- Personal development in cybersecurity

**Note**: This tool is not a substitute for official assessment or professional advice. For formal compliance, please consult certified experts.

---

## 🔗 Related Frameworks

This tool demonstrates how SAMA CSF maps to international frameworks:

| Framework | Version | Relevance |
|-----------|---------|-----------|
| **ISO 27001** | 2022 | Information Security Management |
| **NIST CSF** | 2.0 | Cybersecurity Risk Management |
| **CIS Controls** | v8.1 | Practical Security Safeguards |
| **PCI-DSS** | v4.0.1 | Payment Card Security (required for cardholder data) |
| **NCA ECC** | Latest | Saudi Critical Infrastructure Controls |

---

## 📚 Resources | المصادر

### Official SAMA Documentation
- [SAMA Cybersecurity Framework (PDF)](https://www.sama.gov.sa/en-US/Laws/Pages/CyberSecurityFramework.aspx)
- [SAMA Cyber Threat Intelligence Principles](https://www.sama.gov.sa)

### Related Frameworks
- [ISO/IEC 27001:2022](https://www.iso.org/standard/27001)
- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework)
- [CIS Controls v8.1](https://www.cisecurity.org/controls)
- [PCI-DSS v4.0.1](https://www.pcisecuritystandards.org)
- [NCA - National Cybersecurity Authority](https://nca.gov.sa)

---

## 🛠️ Technical Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Charts**: Chart.js
- **PDF Export**: jsPDF
- **Storage**: Browser localStorage
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Lucide Icons / Heroicons
- **Fonts**: Cairo (Arabic), Inter (English)

---

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🤝 Contributing

Contributions are welcome! This is an educational project aimed at helping the cybersecurity community learn SAMA CSF.

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Areas for Contribution
- Additional assessment questions
- Improved framework mappings
- Translation improvements
- UI/UX enhancements
- Bug fixes
- Documentation

---

## 📄 License

MIT License - feel free to use this for educational purposes.

---

## 👨‍💻 Author

Created by a cybersecurity professional from Kuwait for educational purposes and personal development in cybersecurity.

**Purpose**: Learning SAMA CSF requirements for professional growth in the field of cybersecurity.

---

## ⚠️ Disclaimer

<div dir="rtl">

### إخلاء المسؤولية
- هذه الأداة غير رسمية وليست معتمدة من البنك المركزي السعودي (SAMA)
- النتائج استرشادية فقط ولا تمثل امتثالاً رسمياً
- للتقييم الرسمي، يرجى الرجوع إلى الوثائق الرسمية لـ SAMA
- المعلومات المخزنة تبقى في متصفحك فقط ولا ترسل لأي خادم

</div>

### Disclaimer
- This tool is unofficial and not endorsed by the Saudi Central Bank (SAMA)
- Results are for guidance only and do not represent official compliance
- For official assessment, please refer to SAMA's official documentation
- All data is stored locally in your browser and never sent to any server

---

## 📞 Support

For questions or issues:
- Open an issue on GitHub
- Check the documentation
- Review official SAMA resources

---

## 🌟 Acknowledgments

- Saudi Central Bank (SAMA) for the Cybersecurity Framework
- National Cybersecurity Authority (NCA) for complementary controls
- The global cybersecurity community for frameworks like ISO 27001, NIST CSF, and CIS Controls

---

**Version**: 1.0.0  
**Last Updated**: November 2025

---

<div dir="rtl" align="center">

### صُنع بـ ❤️ للمجتمع السيبراني في السعودية والخليج

**Made with ❤️ for the Saudi & GCC Cybersecurity Community**

</div>
