const { useState } = React;

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="container">
        <h1 className="logo">Daksh Algo Solutions</h1>
        <nav className={open ? "open" : ""}>
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">&#9776;</button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <h2>Smarter Algorithmic Trading, Automated for You</h2>
        <p>
          Our algorithmic trading solutions help traders design profitable strategies,
          build automated trading bots, and receive real-time stock market trade
          suggestions so you can trade with confidence.
        </p>
        <a href="#contact" className="btn">Get Started Today</a>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section">
      <h3>Algorithmic Trading Services</h3>
      <div className="cards">
        <div className="card">
          <h4>Algo Trading Bots</h4>
          <p>Build & deploy automated trading bots tailored for your strategies across equities, forex, and crypto markets.</p>
        </div>
        <div className="card">
          <h4>Trade Suggestions</h4>
          <p>Receive AI-driven stock market signals and option trading ideas with detailed entry and exit levels.</p>
        </div>
        <div className="card">
          <h4>Custom Trading Applications</h4>
          <p>Design and development of trading dashboards, portfolio trackers, and strategy testing platforms with API integration.</p>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="section">
      <h3>Algo Trading Subscription Plans</h3>
      <div className="pricing-grid">
        <div className="pricing-plan">
          <h4>Monthly Plan</h4>
          <p>Affordable way to access algorithmic trading signals and basic bot features.</p>
          <a href="#contact" className="btn">Learn More</a>
        </div>
        <div className="pricing-plan">
          <h4>Yearly Plan</h4>
          <p>Save more with annual access to advanced analytics and automated trading tools.</p>
          <a href="#contact" className="btn">Learn More</a>
        </div>
        <div className="pricing-plan">
          <h4>Lifetime Plan</h4>
          <p>One-time investment for unlimited algorithmic trading updates and premium support.</p>
          <a href="#contact" className="btn">Learn More</a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h3>Contact Us</h3>
      <div className="cards">
        <div className="card">
          <p>Email: info@dakshalgo.com</p>
          <p>Phone: +1-234-567-8901</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Daksh Algo Solutions</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
