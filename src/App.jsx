
import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
 <header className="navbar">
  <div className="logo">
    <span>✈</span>
    <div>
      <strong>Anjali Tours</strong>
      <small>Travel • Explore • Enjoy</small>
    </div>
  </div>

  <nav className={menuOpen ? 'nav-open' : ''}>
    <a href="#home" onClick={() => setMenuOpen(false)}>
      Home
    </a>

    <a href="#tours" onClick={() => setMenuOpen(false)}>
      Tours
    </a>

    <a href="#about" onClick={() => setMenuOpen(false)}>
      About Us
    </a>

    <a href="#contact" onClick={() => setMenuOpen(false)}>
      Contact
    </a>
  </nav>

  <div className="navbar-actions">
    <button
      className="menu-btn"
      onClick={() => setMenuOpen(!menuOpen)}
      type="button"
    >
      ☰
    </button>

    <a className="book-btn" href="#booking">
      Book Now
    </a>
  </div>
</header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="tag">🌍 Explore the world with us</span>

            <h1>
              Your Journey,
              <br />
              <span>Our Responsibility.</span>
            </h1>

            <p>
              Discover beautiful destinations, unforgettable experiences
              and carefully planned tours with Anjali Tours.
            </p>

            <div className="hero-buttons">
              <a href="#tours" className="primary-btn">
                Explore Tours →
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Us
              </a>
            </div>

            <div className="trust">
              <div>
                <strong>10+</strong>
                <span>Years Experience</span>
              </div>

              <div>
                <strong>5K+</strong>
                <span>Happy Travellers</span>
              </div>

              <div>
                <strong>50+</strong>
                <span>Tour Options</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-card">
              <div className="mountains">🏔️</div>
              <div className="travel-plane">✈️</div>

              <div className="image-text">
                <small>DISCOVER</small>
                <h3>Beautiful India</h3>
              </div>
            </div>
          </div>
        </section>

        {/* TOURS */}
        <section className="tours section" id="tours">
  <div className="section-heading">
    <span>OUR SERVICES</span>
    <h2>Travel made simple</h2>
    <p>
      Everything you need for a comfortable and memorable journey.
    </p>
  </div>

  <div className="tour-grid">
    <article className="tour-card">
      <div className="tour-icon">✈️</div>

      <div className="tour-body">
        <span>PLAN YOUR JOURNEY</span>
        <h3>Custom Tour Packages</h3>

        <p>
          Get a tour planned around your destination, budget and travel
          preferences.
        </p>

        <div className="tour-bottom">
          <strong>Custom Plan</strong>
          <a href="#contact">Enquire Now →</a>
        </div>
      </div>
    </article>

    <article className="tour-card">
      <div className="tour-icon">🚌</div>

      <div className="tour-body">
        <span>TRAVEL TOGETHER</span>
        <h3>Family & Group Tours</h3>

        <p>
          Comfortable and memorable trips for families, friends and groups.
        </p>

        <div className="tour-bottom">
          <strong>Group Plan</strong>
          <a href="#contact">Enquire Now →</a>
        </div>
      </div>
    </article>

    <article className="tour-card">
      <div className="tour-icon">🏨</div>

      <div className="tour-body">
        <span>STAY COMFORTABLY</span>
        <h3>Hotel & Travel Booking</h3>

        <p>
          Find comfortable stays and travel arrangements for a hassle-free
          journey.
        </p>

        <div className="tour-bottom">
          <strong>Best Options</strong>
          <a href="#contact">Enquire Now →</a>
        </div>
      </div>
    </article>

    <article className="tour-card">
      <div className="tour-icon">🚗</div>

      <div className="tour-body">
        <span>TRAVEL ANYWHERE</span>
        <h3>Local & Outstation Trips</h3>

        <p>
          Plan local and outstation journeys with convenient travel options.
        </p>

        <div className="tour-bottom">
          <strong>Flexible Plan</strong>
          <a href="#contact">Enquire Now →</a>
        </div>
      </div>
    </article>
  
</div>
</section>

{/* ABOUT */}
<section className="about section" id="about">
  <div className="about-box">

    <div className="about-icon">
      ✈️
    </div>

    <div>
      <span>ABOUT ANJALI TOURS</span>

      <h2>Travel with confidence. Explore with us.</h2>

      <p>
        At Anjali Tours, we believe every journey should be comfortable,
        memorable and stress-free. We help you plan your trips with
        reliable travel options, comfortable stays and personalized
        tour packages.
      </p>

      <div className="features">
        <div>✓ Personalized Tour Planning</div>
        <div>✓ Comfortable Travel</div>
        <div>✓ Family & Group Tours</div>
        <div>✓ Trusted Service</div>
      </div>
    </div>

  </div>
</section>
{/* BOOKING / ENQUIRY */}
<section className="booking section" id="booking">
  <div className="section-heading">
    <span>PLAN YOUR TRIP</span>
    <h2>Send us your travel enquiry</h2>
    <p>
      Fill in your details and we will contact you to plan your perfect trip.
    </p>
  </div>

  <div className="booking-box">
    <form
      onSubmit={(e) => {
        e.preventDefault()

        const form = e.target

        const name = form.name.value
        const phone = form.phone.value
        const destination = form.destination.value
        const travellers = form.travellers.value
        const date = form.date.value
        const message = form.message.value

         const whatsappMessage = encodeURIComponent(
  `Hello Anjali Tours,

I want to enquire about a tour.

Name: ${name}
Mobile: ${phone}
Destination: ${destination}
Travellers: ${travellers}
Travel Date: ${date}
Message: ${message}`
)

        window.open(
          `https://api.whatsapp.com/send?phone=919960231991&text=${whatsappMessage}`,
          "_blank"
        )
      }}
    >

      <div className="form-grid">

        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter mobile number"
            required
          />
        </div>

        <div className="form-group">
          <label>Destination</label>
          <input
            type="text"
            name="destination"
            placeholder="e.g. Manali, Kashmir"
            required
          />
        </div>

        <div className="form-group">
          <label>Number of Travellers</label>
          <input
            type="number"
            name="travellers"
            placeholder="e.g. 4"
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label>Travel Date</label>
          <input
            type="date"
            name="date"
            required
          />
        </div>

        <div className="form-group full-width">
          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Tell us about your trip..."
          ></textarea>
        </div>

      </div>

      <button type="submit" className="enquiry-btn">
        💬 Send Enquiry on WhatsApp
      </button>

    </form>
  </div>
</section>
 {/* CONTACT */}
<section className="contact section" id="contact">
  <div className="contact-box">
    <span>READY FOR YOUR NEXT ADVENTURE?</span>

    <h2>Let's plan your dream trip.</h2>

    <p>
      Tell us where you want to go and we'll help you plan the
      perfect journey.
    </p>

    <div className="contact-buttons">
      <a href="tel:+919960231991" className="primary-btn">
        📞 Call Us Now
      </a>

      <a
        href="https://api.whatsapp.com/send?phone=919960231991&text=Hello%20Anjali%20Tours%2C%20mala%20tour%20baddal%20mahiti%20havi%20aahe."
        className="whatsapp-btn"
        target="_blank"
        rel="noreferrer"
      >
        💬 WhatsApp Us
      </a>
    </div>
  </div>
</section>

{/* FOOTER */}
<footer className="footer">
  <div className="footer-brand">
    <strong>✈ Anjali Tours</strong>
    <p>Travel • Explore • Enjoy</p>
  </div>

  <div className="footer-links">
    <a href="#home">Home</a>
    <a href="#tours">Tours</a>
    <a href="#about">About Us</a>
    <a href="#booking">Book Now</a>
    <a href="#contact">Contact</a>
  </div>

  <div className="footer-contact">
    <a href="tel:+919960231991">📞 +91 99602 31991</a>

    <a
      href="https://api.whatsapp.com/send?phone=919960231991"
      target="_blank"
      rel="noreferrer"
    >
      💬 WhatsApp
    </a>
  </div>

  <div className="footer-bottom">
    <p>© 2026 Anjali Tours. All rights reserved.</p>
    <span>Made with ❤️ for travellers</span>
  </div>
</footer>
</main>
</div>
  )
}

export default App