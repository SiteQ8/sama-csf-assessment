# Security Policy

## Supported Versions

| Version | Supported |
| ------- | --------- |
| 2.0.x   | ✅ Yes    |

## Reporting a Vulnerability

1. **DO NOT** open a public GitHub issue
2. Email: **Site@hotmail.com**
3. Subject: `[SAMA CSF Security] Brief description`

### Response Timeline
- **Acknowledgment**: 48 hours
- **Status update**: 7 days
- **Resolution**: 30 days for critical issues

### Scope

**In scope:** XSS vulnerabilities in the assessment UI, localStorage data exposure, malicious PDF generation, dependency vulnerabilities in Chart.js/jsPDF.

**Out of scope:** SAMA framework content accuracy (refer to SAMA), browser-specific localStorage limitations, issues requiring physical device access.

## Data Privacy

This tool stores all data in browser localStorage. No data is ever transmitted to external servers. Users should be aware that localStorage data can be accessed by other scripts on the same origin.
