# ARIA — Product Requirements Document (PRD) & Design Specification

**Product Name:** ARIA (Autonomous Real-time Intelligence Analyst)  
**Classification:** Enterprise SOC Tier-1/Tier-2 Autonomous SecOps Operations Platform  
**Document Status:** Approved & Baseline Reference  
**Design System:** Autonomous Operations Console (Dark `#131316` / Light `#fafafa` dual architecture)  
**Target Form Factor:** Desktop (1440px+ optimized, 100vh viewport lock)

---

## 1. Executive Summary & Vision

Modern Security Operations Centers (SOCs) are overwhelmed by alert fatigue: tier-1 analysts spend up to 70% of their time manually correlating indicators of compromise (IOCs), mapping MITRE ATT&CK techniques, and cross-referencing internal runbooks. 

**ARIA (Autonomous Real-time Intelligence Analyst)** is a high-conviction, autonomous security intelligence platform engineered for mission-critical SOC environments. Acting as an always-on Tier-1 AI analyst, ARIA continuously ingests telemetry from disparate SIEM/EDR pipelines (Splunk, CrowdStrike Falcon, Sentinel, QRadar), performs sub-8-second autonomous triage via Retrieval-Augmented Generation (RAG) and reasoning models, and surfaces deterministic verdicts: **Escalate**, **Monitor**, or **Auto-Resolve**.

---

## 2. Core Personas & User Journeys

### 2.1 Personas
1. **Tier-1 SOC Analyst ("First Responder"):**
   - *Goal:* Rapidly clear pending triage queues, review AI reasoning paths, and execute containment or escalations with single-key shortcuts (`J/K` navigation, `Enter` to commit).
   - *Pain Point:* Context switching between threat feeds, virus scanners, EDR logs, and ticketing consoles.
2. **Tier-2 / Tier-3 Incident Response Lead ("Investigator"):**
   - *Goal:* Verify autonomous decisions, inspect high-fidelity RAG evidence chains, and orchestrate deep-dive incident response playbooks.
   - *Pain Point:* Low-confidence escalations with insufficient evidentiary trails.
3. **SOC Manager / Director of SecOps ("Operations Lead"):**
   - *Goal:* Monitor macro SOC health, track autonomous resolution rates (target >70%), Mean Time to Respond (MTTR), and incoming attack vectors.

### 2.2 Core User Flow
```
[ Telemetry Ingestion ] (1.4 TB/h via Splunk, Sentinel, EDR)
          │
          ▼
[ Autonomous Engine / RAG ] (MITRE TTP mapping, IOC extraction, Runbook cross-ref)
          │
          ├─────────────────────────┬─────────────────────────┐
          ▼                         ▼                         ▼
   Score < 55: Auto-Resolve   55 ≤ Score < 80: Monitor   Score ≥ 80: Escalate
   (Logged to Dashboard)      (Flagged for Review)       (Enters Tier-1 Live Queue)
                                                              │
                                                              ▼
                                                    [ Live Triage Console ]
                                                    - Analyst reviews evidence
                                                    - Single-action escalation
```

---

## 3. Product Scope & Screen Architecture

The platform comprises three core functional surfaces rendered across both high-contrast Dark and low-glare Light themes:

| Screen | Core Purpose | Key Components |
|---|---|---|
| **1. Authentication (Login)** | Zero-trust entry gate | Centered minimalist card (400px), AES-256 encryption badge, direct redirect to Dashboard, standalone theme toggle |
| **2. Command Center Dashboard** | Macro SOC health & queue overview | Metric stats row (Total Alerts, Critical Unresolved, Auto-Resolved %, Avg Triage Time), Incoming Alerts queue (8 visible rows), Severity Donut Distribution, Active MITRE Chips, Recent Verdicts audit trail |
| **3. Live Triage Console** | Real-time incident adjudication workspace | Left: 56px alert queue with live pulse, severity pills, keyboard hints (`J/K`). Right: Incident verdict banner, risk gauge (0-100), MITRE techniques, extracted IOCs with 1-click clipboard, RAG evidence cards, AI reasoning narrative, prioritized investigation checklist (`[P1]`, `[P2]`), and sticky action bar (`Generate Report`, `Escalate to Tier-2`). |

---

## 4. Component & Design System Specifications

ARIA adopts a quiet, dense, and precision-engineered tool aesthetic inspired by Linear, Stripe, and Vercel. Interfaces avoid excessive gradients, shadows, or decorative glow effects in favor of clean 1px borders, strict typography scales, and structural hierarchy.

### 4.1 Theme Token Reference

| Semantic Token | Dark Mode (`#131316`) | Light Mode (`#fafafa`) | Purpose |
|---|---|---|---|
| **Canvas Background** | `#131316` / `#18181b` | `#fafafa` | Base viewport background |
| **Surface / Card** | `#1b1b1e` / `#27272a` | `#ffffff` | Primary panel and card containers |
| **Elevated / Recessed** | `#242427` / `#3f3f46` | `#f4f4f5` | Hover states, code blocks, chip containers, inputs |
| **Border** | `rgba(255, 255, 255, 0.08)` | `rgba(0, 0, 0, 0.08)` | 1px clean separation lines |
| **Text Primary** | `#ffffff` / `#f4f4f5` | `#18181b` | Headings, primary metrics, active values |
| **Text Secondary** | `#a1a1aa` | `#52525b` | Form labels, navigation tabs, section headers |
| **Text Muted** | `#71717a` | `#71717a` | Monospace timestamps, incident IDs, subtext |
| **Accent Primary (Blue)** | `#3b82f6` | `#2563eb` | Primary actions, branding, selected indicators |
| **Critical Accent (Red)** | `#ef4444` | `#dc2626` | Score 80+, Critical severity, Escalations |
| **Warning Accent (Amber)**| `#f59e0b` | `#d97706` | Score 55-79, High severity, Monitor state |
| **Success Accent (Green)**| `#10b981` | `#16a34a` | Score <55, Low severity, Auto-Resolved, Status live |
| **Metric Accent (Purple)** | `#8b5cf6` | `#7c3aed` | Average Triage Time stat indicator |

### 4.2 Reusable Atomic Components

1. **TopNav Chrome (52px sticky):**
   - Brand logo mark (`ARIA`) + 16px shield/terminal glyph.
   - Global routing tabs: `Dashboard`, `Alerts`, `Threat Intel`, `Analytics`, `Settings`.
   - Utility rail: Live UTC clock (`HH:mm:ss UTC`), Theme Toggle (`32×32px`, Lucide Sun/Moon with tooltip), Notification Bell, Analyst Avatar.
2. **SeverityBadge:**
   - 10–12% opacity background tint with high-contrast colored text (`CRITICAL` in Red, `HIGH` in Amber, `MEDIUM` in Blue, `LOW` in Green).
   - 3px solid border-left accent on parent container rows.
3. **VerdictBanner:**
   - Visual priority anchor at the top of the detail panel. Displays Incident ID, ingestion timestamp, escalation status, and action trigger.
4. **EvidenceCard (RAG Engine):**
   - White / Dark elevated card featuring 3px left severity accent, source tag (`MITRE ATT&CK`, `CISA KEV`, `Internal Runbook`), relevance score badge (`score 0.93`), and synthesis summary.
5. **InvestigationChecklist:**
   - Sequenced action steps tagged with priority pills (`[P1]`, `[P2]`, `[P3]`), clickable status checkboxes, and high-readability body copy.

---

## 5. Technical Requirements & Data Contracts

### 5.1 Ingestion & Telemetry Throughput
- Ingestion pipeline must handle sustained **1.4 TB/h** throughput with p99 ingest latency under **500ms**.
- Alert queue automatically deduplicates related telemetry using vector embeddings over a sliding 15-minute window.

### 5.2 Autonomous RAG & Decision Logic
- **Similarity Threshold:** Evidence retrieved via vector search must exceed **0.65 cosine similarity** to be surfaced in the triage view.
- **Reranker Scoring:** Highlights top 2–3 pieces of corroborating intelligence marked `PRIMARY` (score ≥ 0.85) or `SUPPORTING` (score 0.70–0.84).
- **Execution Thresholds:**
  - `Risk Score ≥ 80`: Autonomous Escalate recommendation (Requires Tier-2 intervention).
  - `55 ≤ Risk Score < 80`: Autonomous Monitor recommendation.
  - `Risk Score < 55`: Autonomous auto-containment / auto-resolve.

### 5.3 Keyboard Shortcuts & Ergonomics
- `J` / `K`: Move selection down / up through pending alert queue.
- `Enter`: Commit currently recommended autonomous action (e.g. Escalate to Tier-2 or Generate Report).
- `/`: Focus search / filter input.

---

## 6. Success Metrics & KPIs

| Metric | Target | Measurement Method |
|---|---|---|
| **Autonomous Resolution Rate** | > 70% | Ratio of low/medium benign alerts resolved without human touch |
| **Mean Time to Triage (MTTR)** | < 8 seconds | Telemetry timestamp from ingestion to completed AI verdict |
| **Analyst Escalation Accuracy** | > 98.5% | Validation rate of escalated incidents by Tier-2 engineering |
| **Daily Ingest Capacity** | 30+ TB/day | Enterprise multi-cloud SIEM stream load testing |
