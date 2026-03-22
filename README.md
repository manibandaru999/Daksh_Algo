# Daksh Algo Solutions — Website

> **Ultra-professional algorithmic trading website** for Daksh Algo Solutions, built with HTML, CSS, and JavaScript. Covers algo trading bots, live trade signals, custom platforms, and a full member signals dashboard with login/signup.

---

---

## 📁 Project Structure

```
Daksh_Algo/
│
├── index.html          → Home page
├── about.html          → About Us page
├── services.html       → Services page
├── pricing.html        → Pricing & Plans page
├── signals.html        → Signals Login + Member Dashboard
├── contact.html        → Contact page
│
├── styles.css          → Master stylesheet (all pages share this)
│
├── modern-template/    → Older React prototype (kept for reference)
│   ├── index.html
│   ├── app.js
│   └── styles.css
│
└── README.md           → This file
```

---

## 📄 Pages Overview

### 1. `index.html` — Home Page
The main landing page. First impression for every visitor.

**Sections included:**
- **Navbar** — Fixed, blurred, responsive. Shows Login + Get Started buttons. Collapses to hamburger on mobile.
- **Hero** — Full-screen dark hero with candlestick chart background, animated badge ("Live Signals Active · NSE & BSE Markets"), gradient heading, sub-description, CTA buttons, and 4 key stats (5+ Years, 500+ Traders, 78% Accuracy, 24/7 Uptime).
- **Live Ticker Bar** — Auto-scrolling live market ticker with NIFTY, BANKNIFTY, RELIANCE, TCS, INFY, HDFC BANK, ICICI BANK, WIPRO prices and change percentages (up/down colored).
- **Services Overview** — 6 glassmorphism cards: Algo Trading Bots, Live Trade Signals, Custom Trading Platforms, Strategy Backtesting, Options Strategy Builder, Risk Management Tools.
- **Stats + Why It Works** — 4-column animated stats bar (78% accuracy, 500+ subscribers, 5+ years, ₹0 hidden charges) alongside a sample signal preview widget and monthly bot performance bar chart.
- **Pricing Preview** — 3 plan cards: Monthly (₹2,999), Yearly ₹24,999 (featured/highlighted), Lifetime ₹59,999 with feature lists on each.
- **CTA Banner** — "Ready to Automate Your Trading Edge?" with dual action buttons.
- **Footer** — Brand info, social links, 4-column links grid (Pages, Services, Contact), copyright.

---

### 2. `about.html` — About Us
Company background and values page.

**Sections included:**
- **Page Hero** — Dark hero header with label, title, and subtitle.
- **Who We Are** — Two-column layout: image (trading screens) with a "5+ Years" floating badge on the left; company story text on the right with tech tags (NSE & BSE, Zerodha API, Python, Machine Learning, Options Trading, Quantitative Research).
- **Why Choose Us** — 6-card grid: Deep Market Expertise, Rigorous Backtesting, Low-Latency Execution, Built-in Risk Controls, Responsive Support, Continuous Improvement.
- **Our Values** — Two-column: left side lists 3 core values (Data Over Intuition, Radical Transparency, Long-Term Thinking); right side shows a live strategy performance breakdown with bar indicators for 4 strategies.
- **CTA Section** — "Ready to Trade With an Edge?" with buttons linking to Contact and Services.
- **Footer** — Consistent sitewide footer.

---

### 3. `services.html` — Services
Detailed breakdown of every service offered.

**Sections included:**
- **Page Hero** — "Algorithmic Trading Services" header.
- **6 Service Detail Cards** — Alternating image/text layout (image left, text right, then reversed):
  1. **Algo Trading Bots** — Zerodha/Upstox/Angel One API, intraday/swing bots, real-time P&L, risk limits.
  2. **Live Trade Signals** — NSE/BSE scans, WhatsApp/Telegram delivery, 78%+ accuracy, weekly analysis report.
  3. **Strategy Backtesting** — 5+ years tick data, out-of-sample testing, CAGR/drawdown/Sharpe metrics, PDF report.
  4. **Options Strategy Builder** — Visual drag-and-drop builder, Greeks monitoring (Delta, Theta, Vega), weekly expiry optimization.
  5. **Custom Trading Platforms** — Real-time data feeds, custom charts/screeners, multi-broker aggregation, mobile-responsive.
  6. **Risk Management Tools** — Exposure monitoring, daily loss auto-cutoff kill switch, correlation matrix, daily risk reports.
- **4-Step Delivery Process** — Discovery Call → Strategy Design → Backtesting & QA → Live Deployment.
- **CTA Card** — "Have a Trading Idea? Let's Make It Real." with contact link.
- **Footer**.

---

### 4. `pricing.html` — Pricing
Subscription plans with detailed feature comparison.

**Sections included:**
- **Page Hero** — "Simple, Honest Pricing" header.
- **Billing Toggle** — Monthly / Annual buttons. Clicking Annual applies a 30% discount across all plan prices dynamically using JavaScript.
- **3 Pricing Cards:**
  - **Monthly Starter — ₹2,999/mo** — 7 features listed with checkmarks.
  - **Yearly Pro — ₹24,999/yr** — Featured card (rotated "Most Popular" ribbon), 9 features, styled with teal accent border.
  - **Lifetime Access — ₹59,999 once** — 9 features including custom bot dev, dedicated account manager, white-label option.
- **Feature Comparison Table** — Full 10-row × 3-plan table covering every feature with ✓ or — for each plan.
- **FAQ Cards** — 6 common questions: coding knowledge required, supported brokers, refund policy, plan upgrades, signal safety for beginners, signal delivery method.
- **CTA Section** — "Still Have Questions?" with contact link.
- **Footer**.

---

### 5. `signals.html` — Signals Login & Member Dashboard
The most feature-rich page. Shows a login/signup gate, then reveals a full member dashboard after authentication.

#### Auth Section (shown when logged out)
- **Daksh Algo logo + "Member Signals Portal"** heading.
- **Sign In / Create Account tab switcher.**
- **Login Form** — Email + password inputs, Forgot Password link, Sign In button, error message display.
- **Demo Account Button** — "Try Demo Account (No Login Needed)" — lets anyone explore the dashboard instantly.
- **Signup Form** (separate tab) — First name, last name, email, phone, plan selector (Monthly/Yearly/Lifetime), password, terms & risk disclaimer checkbox.

#### Dashboard Section (shown after login/signup/demo)
- **Personalized greeting** — "Good afternoon, [Name] 👋" with current date, market status, and plan badge.
- **Risk Disclaimer Notice** — Yellow warning banner about algo signals not being financial advice.
- **4 KPI Cards** — Today's Signals (7), Week Hit Rate (81%), NIFTY Today (+1.24%), Active Bots (3).
- **5 Dashboard Tabs:**

  | Tab | Contents |
  |-----|----------|
  | 📡 Live Signals | 6 signal cards (NIFTY, BANKNIFTY, RELIANCE, TCS, HDFCBANK, INFY) with Entry/SL/Target levels and accuracy bars. Filter buttons: All, BUY, SELL, Intraday, Positional. |
  | 📋 Signal History | Table of last 8 trades with Symbol, Type (BUY/SELL badge), Entry, Exit, P&L (colored green/red), and WIN/LOSS result badge. |
  | 🤖 My Bots | 2 running bots (NIFTY Scalper v2, BankNifty Options Bot) each with Trades Today, Win Rate, P&L, Configure + Pause buttons. Plus a dashed "Add a New Bot" card. |
  | 👁️ Watchlist | Table of 5 stocks (NIFTY, BANKNIFTY, RELIANCE, TCS, HDFC BANK) with LTP, Change (colored), Volume, and Signal badge. |
  | 📈 Performance | Monthly P&L bar chart (6 months), Strategy breakdown with progress bars, Summary row (142 signals, 81% win rate, 1:2.4 R:R, -6.2% max drawdown). |

- **Sign Out** — Navbar button and dashboard button both return user to login screen cleanly.

---

### 6. `contact.html` — Contact
Contact page with information and form.

**Sections included:**
- **Page Hero** — "Let's Talk Trading" header.
- **Two-Column Layout:**
  - **Left — Contact Info:** Email (mani.moneymagnet@gmail.com), Phone (+91-9154196999), Location (Manikonda, Hyderabad), Support Hours (Mon–Sat 9am–7pm IST). Plus a "Book a Free 30-Min Call" card and social link buttons.
  - **Right — Contact Form:** Name, Email, Phone, Topic dropdown (Signals, Bot Dev, Custom Platform, Backtesting, Options, Demo, Other), Budget dropdown, Message textarea, consent checkbox, Submit button with loading state and success confirmation.
- **3 Quick Answer Cards** — Reply time, refund policy, broker login safety.
- **Footer**.

---

## 🎨 Design System (`styles.css`)

The master stylesheet defines the entire visual identity. Key design tokens:

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#030712` | Page background |
| `--color-surface` | `#0d1117` | Section alt background |
| `--color-surface-2` | `#161b27` | Card backgrounds |
| `--color-accent` | `#00d4aa` | Primary teal — CTAs, highlights |
| `--color-accent-2` | `#3b82f6` | Blue — entry prices, secondary accents |
| `--color-accent-3` | `#8b5cf6` | Purple — tertiary accents |
| `--color-success` | `#10b981` | BUY signals, profits, wins |
| `--color-danger` | `#ef4444` | SELL signals, losses, stops |
| `--color-warning` | `#f59e0b` | HOLD signals, disclaimers |
| `--text-primary` | `#f0f6fc` | Main text |
| `--text-secondary` | `#8b949e` | Secondary/descriptive text |
| `--text-muted` | `#484f58` | Labels, captions, timestamps |

### Gradients
- **Brand:** `135deg, #00d4aa → #3b82f6 → #8b5cf6` — used on hero title, gradient text, and accent elements
- **Card:** Subtle `rgba(255,255,255,0.04 → 0.01)` — glassmorphism base
- **Hero overlay:** Radial teal + blue glows on dark background

### Typography
- **Space Grotesk** — Headings, brand name, numbers (financial data)
- **Inter** — All body text, labels, descriptions

### Animations
- **`.fade-up`** — Elements fade in and slide up when scrolled into view (IntersectionObserver)
- **`.delay-1` → `.delay-4`** — Staggered animation delays (0.1s–0.4s)
- **Ticker scroll** — CSS `@keyframes ticker-scroll` continuously scrolls market data
- **`.dot` pulse** — Breathing animation on the "live" signal indicator badge

---

## 🔗 Navigation Map

All pages are connected via the shared navbar. Every link works correctly:

```
Home ──────────────────────────────────────────┐
  ├── About ──────────────────────────────────┐ │
  ├── Services ──────────────────────────────┐│ │
  ├── Pricing ──────────────────────────────┐││ │
  ├── Signals (Login → Dashboard) ─────────┐│││ │
  └── Contact ──────────────────────────────┘┘┘ │
                                                 │
Footer (all pages) ─── links back to all above ──┘
```

All CTA buttons (Get Started, View Live Signals, Book a Free Call, etc.) link to the correct target pages.

---

## ⚡ JavaScript Features

| Feature | File | What it does |
|---------|------|--------------|
| Navbar scroll effect | All pages | Adds `.scrolled` class on `window.scrollY > 40` for darkened nav |
| Mobile menu toggle | All pages | Toggles `.open` class on `#navLinks` for mobile hamburger |
| Scroll animations | All pages | `IntersectionObserver` triggers `.visible` class adding `.fade-up` effect |
| Billing toggle | `pricing.html` | Swaps plan prices between monthly/annual on button click |
| Login / Signup | `signals.html` | Validates forms, switches auth tabs, calls `showDashboard()` |
| Demo login | `signals.html` | Instantly shows dashboard without any credentials |
| Logout | `signals.html` | Resets dashboard, returns to auth screen |
| Dashboard tabs | `signals.html` | Switches between 5 tab panels (Live, History, Bots, Watchlist, Performance) |
| Signal filters | `signals.html` | Shows/hides signal cards by `data-type` attribute (buy/sell/intraday/positional) |
| History table | `signals.html` | Dynamically renders trade history rows via JavaScript array |
| Contact form | `contact.html` | Simulates submit with 1.2s loading state, then shows success message |

---

## 📱 Responsive Design

The site is fully responsive across all screen sizes:

| Breakpoint | Layout changes |
|------------|---------------|
| `> 900px` | Full navbar, multi-column layouts |
| `≤ 900px` | Hamburger menu, single-column about/contact/service cards, pricing cards unstacked |
| `≤ 600px` | Single-column footer, stacked hero buttons, hidden nav start button |

---

## 🚀 How to Run Locally

No build tools required — pure HTML/CSS/JS.

1. Open **File Explorer** and navigate to `Desktop → Daksh_Algo`
2. Double-click **`index.html`** to open in your browser
3. Navigate between pages using the navbar links

Or right-click → Open with → your preferred browser.

For live server (recommended for development):
```
npx serve .
```
Then visit `http://localhost:3000`

---

## 🚀 Deployment

> **Not yet deployed.** The site is currently in development and will be launched once it's fully ready.

When ready to deploy, upload all files (except the `modern-template/` folder) to your web hosting server via FTP, cPanel File Manager, or your preferred hosting dashboard.

Files to deploy:
```
index.html
about.html
services.html
pricing.html
signals.html
contact.html
styles.css
```

---

## 📞 Contact Information

| Detail | Value |
|--------|-------|
| Email | mani.moneymagnet@gmail.com |
| Phone / WhatsApp | +91-9154196999 |
| Location | Manikonda, Hyderabad, Telangana, India |
| Support Hours | Mon–Sat, 9:00 AM – 7:00 PM IST |

---

## 📝 Notes for Future Development

- **Backend / Auth:** The login system is currently frontend-only (simulated). To go live with real authentication, connect to a backend (Node.js, Firebase, Supabase, etc.) and replace the `handleLogin()` / `handleSignup()` functions in `signals.html`.
- **Real Signals:** The signal cards are mock data. Replace with real API calls from your signal engine API when the backend is ready.
- **Contact Form:** The form is frontend-only. To actually receive messages, integrate with EmailJS, Formspree, or a backend endpoint.
- **Broker APIs:** The bot section links to contact — implement real Zerodha Kite/Upstox API integration when backend is ready.
- **WhatsApp Integration:** Add a WhatsApp chat button (e.g. via wa.me link) for quick client support access.

---

*© 2025 Daksh Algo Solutions. Built in Hyderabad 🇮🇳*

