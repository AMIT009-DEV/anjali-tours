import './App.css'

function App() {
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

        <nav>
          <a href="#home">Home</a>
          <a href="#destinations">Destinations</a>
          <a href="#tours">Tours</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="book-btn" href="#tours">
          Book Now
        </a>
      </header>

      <main>
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
                <span>Destinations</span>
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

        <section className="destinations section" id="destinations">
          <div className="section-heading">
            <span>TOP DESTINATIONS</span>
            <h2>Places worth discovering</h2>
            <p>Choose your next unforgettable adventure.</p>
          </div>

          <div className="destination-grid">
            <article className="destination-card goa">
              <div>
                <small>BEACH ESCAPE</small>
                <h3>Goa</h3>
                <p>Relax • Beaches • Fun</p>
              </div>
            </article>

            <article className="destination-card manali">
              <div>
                <small>MOUNTAIN ADVENTURE</small>
                <h3>Manali</h3>
                <p>Snow • Mountains • Nature</p>
              </div>
            </article>

            <article className="destination-card kashmir">
              <div>
                <small>PARADISE</small>
                <h3>Kashmir</h3>
                <p>Lakes • Valleys • Beauty</p>
              </div>
            </article>
          </div>
        </section>

        <section className="tours section" id="tours">
          <div className="section-heading">
            <span>POPULAR TOURS</span>
            <h2>Find your perfect trip</h2>
            <p>Handpicked tour packages for every kind of traveller.</p>
          </div>

          <div className="tour-grid">
            <article className="tour-card">
              <div className="tour-icon">🏖️</div>
              <div className="tour-body">
                <span>4 Days / 3 Nights</span>
                <h3>Goa Getaway</h3>
                <p>
                  Enjoy beaches, sunsets, local food and a relaxing holiday.
                </p>
                <div className="tour-bottom">
                  <strong>₹9,999</strong>
                  <a href="#contact">View Tour →</a>
                </div>
              </div>
            </article>

            <article className="tour-card">
              <div className="tour-icon">🏔️</div>
              <div className="tour-body">
                <span>6 Days / 5 Nights</span>
                <h3>Manali Adventure</h3>
                <p>
                  Explore mountains, valleys and the beautiful Himalayan views.
                </p>
                <div className="tour-bottom">
                  <strong>₹14,999</strong>
                  <a href="#contact">View Tour →</a>
                </div>
              </div>
            </article>

            <article className="tour-card">
              <div className="tour-icon">🌄</div>
              <div className="tour-body">
                <span>7 Days / 6 Nights</span>
                <h3>Kashmir Paradise</h3>
                <p>
                  Experience peaceful valleys, lakes and breathtaking scenery.
                </p>
                <div className="tour-bottom">
                  <strong>₹19,999</strong>
                  <a href="#contact">View Tour →</a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="about-box">
            <div className="about-icon">🧭</div>

            <div>
              <span>WHY ANJALI TOURS?</span>
              <h2>We don't just plan trips.<br />We create memories.</h2>
              <p>
                From comfortable stays to memorable experiences, our team
                takes care of every detail so you can simply enjoy your
                journey.
              </p>

              <div className="features">
                <div>✓ Trusted & Reliable</div>
                <div>✓ Best Tour Packages</div>
                <div>✓ Friendly Support</div>
                <div>✓ Hassle-Free Travel</div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-box">
            <span>READY FOR YOUR NEXT ADVENTURE?</span>
            <h2>Let's plan your dream trip.</h2>
            <p>
              Tell us where you want to go and we'll help you plan the perfect
              journey.
            </p>

            <a href="tel:+919999999999" className="primary-btn">
              📞 Call Us Now
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <strong>✈ Anjali Tours</strong>
          <p>Travel • Explore • Enjoy</p>
        </div>

        <p>© 2026 Anjali Tours. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App