export const dashboardStats = [
  { label: 'Total Alerts Today', value: '1,247', color: 'blue' },
  { label: 'Critical Unresolved', value: '23', color: 'red' },
  { label: 'Auto-Resolved by ARIA', value: '892', suffix: '(71.5%)', color: 'green' },
  { label: 'Avg Triage Time', value: '< 8s', color: 'purple' },
];
export const dashboardAlerts = [
  { id: 'ALR-2024-0847', title: 'Lateral Movement: PsExec on DC01', time: '14:32:08', ip: '192.168.1.44', source: 'Splunk', sourceLabel: 'Splunk ES', severity: 'Critical', triage: 'A-001' },
  { id: 'ALR-2024-0846', title: 'Data Exfiltration: 4.2GB to Mega.nz', time: '14:25:33', ip: '192.168.5.103', source: 'QRadar', sourceLabel: 'QRadar', severity: 'Critical', triage: 'A-004' },
  { id: 'ALR-2024-0845', title: 'Brute Force: 847 Failed Logins in 60s', time: '14:29:51', ip: '185.220.101.47', source: 'Sentinel', sourceLabel: 'Sentinel', severity: 'High', triage: 'A-002' },
  { id: 'ALR-2024-0844', title: 'Encoded PowerShell Execution Detected', time: '14:27:14', ip: 'WS-ACCT-021', source: 'Splunk', sourceLabel: 'Splunk ES', severity: 'High', triage: 'A-003' },
  { id: 'ALR-2024-0843', title: 'Anomalous Host Activity — Victus_host', time: '14:22:05', ip: '127.0.0.1', source: 'ARIA ML', sourceLabel: 'ARIA ML', severity: 'High', triage: null },
  { id: 'ALR-2024-0842', title: 'MFA Fatigue: 12 Push Rejections', time: '14:18:47', ip: 'j.chen@corp.com', source: 'Sentinel', sourceLabel: 'Sentinel', severity: 'Medium', triage: 'A-005' },
  { id: 'ALR-2024-0841', title: 'Suspicious DNS: 12.4K NXDomain/min', time: '14:09:12', ip: '192.168.2.88', source: 'Splunk', sourceLabel: 'Splunk ES', severity: 'Low', triage: 'A-006' },
  { id: 'ALR-2024-0840', title: 'Unauthorized USB Device Connected', time: '13:55:20', ip: 'WS-FIN-008', source: 'Sentinel', sourceLabel: 'Sentinel', severity: 'Low', triage: null },
];
export const severityCounts = [{ label: 'Critical', value: 23 }, { label: 'High', value: 31 }, { label: 'Medium', value: 18 }, { label: 'Low', value: 12 }];
export const techniques = ['T1021.002', 'T1059.001', 'T1567.002', 'T1110.001', 'T1621', 'T1027'];
export const recentVerdicts = [
  { name: 'PsExec DC01 Staged Execution', time: '2m ago', risk: 94, type: 'escalate' },
  { name: 'Exfil 4.2GB Mega.nz Session', time: '7m ago', risk: 97, type: 'escalate' },
  { name: '847 SSH Failed Auth Bursts', time: '12m ago', risk: 61, type: 'monitor' },
  { name: 'Auto-Quarantined USB Device', time: '18m ago', risk: 42, type: 'resolve' },
  { name: 'MFA Token Revoked & Reset', time: '24m ago', risk: 18, type: 'resolve' },
];
