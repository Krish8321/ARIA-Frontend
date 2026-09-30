# ARIA Design Tokens

## Dark theme
bg #18181b | surface (cards, nav) #27272a | elevated/hover/input #3f3f46 | recessed #1f1f23
border rgba(255,255,255,0.08)
text primary #fafafa | secondary #a1a1aa | muted #71717a | faint #52525b
blue #3b82f6 | green #22c55e | amber #f59e0b | red #ef4444 | purple #8b5cf6

## Light theme
bg #fafafa | surface (cards, nav) #ffffff | elevated/hover/input/chips #f4f4f5 | recessed #f4f4f5 | bar track #e4e4e7
border rgba(0,0,0,0.08)
text primary #18181b | body #27272a | secondary #52525b | muted #71717a
blue #2563eb | green #16a34a | amber #d97706 | red #dc2626 | purple #7c3aed

## Status tints (both themes)
Pills, verdict banners and badges use the accent color at ~10-12% opacity as the background, with the full accent color as text, and a 1px border at ~20-30% opacity.

## Severity and verdict colors
Critical = red | High = amber | Medium = blue | Low = green
Escalate = red | Monitor = amber | Resolve = green
Risk bar: red above 80, amber above 55, blue otherwise.
Evidence tier badges: PRIMARY = blue tint, SUPPORTING = amber tint.
Priority badges: P1 red, P2 amber, P3 blue, P4 gray.

## Typography
Inter for all UI text. JetBrains Mono (with tabular numerals) only for IDs, IPs, timestamps, scores, MITRE codes and IOCs.
Page title 20px/600 | card title 14px/600 | body 13px, line-height 1.6 | secondary 12px | labels 11px uppercase, letter-spacing 0.06em, muted color
Stat numbers 22px/600 | AI reasoning text 13px, line-height 1.7

## Shape and spacing
4px spacing grid. Page padding 24px | card padding 16-20px | gap between cards 16px | gap between triage sections 24px
Radius: 6px (buttons, inputs, pills, chips), 8px (cards), 12px (login card only), 4px (small chips and badges)
Top nav height 52px | alert rows 56px | severity left border 3px | selected-row indicator 2px blue | stat card top border 2px | verdict banner left border 4px | risk bar height 6px
Borders are always 1px. No shadows on cards. No gradients, glows or glassmorphism.

## Icons
Lucide only, 16px, 1.5px stroke, monochrome (muted gray) unless they carry status meaning. Never inside colored circles or gradient tiles. No emojis.

## Interaction states
Hover = elevated color background | Selected = lighter surface + 2px blue left indicator | Focus = 2px blue ring at 40% opacity
Primary button = solid blue with white text, slightly lighter or darker on hover.