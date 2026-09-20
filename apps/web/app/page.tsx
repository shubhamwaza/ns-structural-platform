const services = [
  "Structural Design",
  "Structural Audit",
  "Structural Repairs & Restoration",
  "Finite Element Analysis",
  "Failure Analysis",
  "Project Management Consultancy",
  "Water & Electricity",
  "Land Development Consultancy",
];

const projects = [
  {
    title: "OLEFIN II",
    client: "Dow Chemical",
    location: "Kuwait",
    type: "Industrial",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=85",
  },
  {
    title: "Goregaon Film City",
    client: "Project experience",
    location: "Mumbai, India",
    type: "Development",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",
  },
  {
    title: "Sahara Amby Valley Lake City",
    client: "Project experience",
    location: "India",
    type: "Large-scale development",
    image:
      "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1800&q=85",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a
          href="/"
          className="brand"
          aria-label="NS Structural Consultants home"
        >
          <img
            src="/ns-logo.png"
            alt="NS Structural Consultants"
            className="brand-logo"
          />
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#intelligence">Tender Intelligence</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}

      <section className="hero">
        <div className="hero-frame">
          <div className="hero-copy">
            <p className="eyebrow">Civil & Structural Engineering</p>

            <h1>
              Engineering expertise for complex built environments.
            </h1>

            <p className="hero-description">
              Civil and structural engineering consultancy across building,
              infrastructure, water, energy and industrial projects.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#expertise">
                Explore our expertise
              </a>

              <a className="button button-secondary" href="#contact">
                Discuss a project
              </a>
            </div>
          </div>

          <div className="hero-media">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=90"
              alt="Architectural and engineering project drawings"
            />

            <div className="hero-media-label">
              <span>Engineering consultancy</span>
              <span>India · Europe · Middle East · Africa</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}

      <section id="expertise" className="section">
        <div className="section-introduction">
          <div>
            <p className="eyebrow">Expertise</p>

            <h2>
              Engineering capability built around the project.
            </h2>
          </div>

          <p>
            Technical consultancy spanning structural engineering, analysis,
            assessment, restoration, project management and land development.
          </p>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <a href="#contact" className="service-row" key={service}>
              <span className="service-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{service}</h3>

              <span className="service-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* PROJECT EXPERIENCE */}

      <section id="projects" className="section projects-section">
        <div className="section-introduction">
          <div>
            <p className="eyebrow">Project experience</p>

            <h2>
              Engineering work across demanding environments.
            </h2>
          </div>

          <p>
            Selected project experience demonstrating the breadth of NS
            Structural Consultants&apos; engineering work.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <a href="#contact" className="project-image">
                <img src={project.image} alt={project.title} />
              </a>

              <div className="project-information">
                <div>
                  <span className="project-type">{project.type}</span>

                  <h3>{project.title}</h3>

                  <p>{project.client}</p>
                </div>

                <div className="project-location">
                  <span>Location</span>
                  <strong>{project.location}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TENDER INTELLIGENCE */}

      <section id="intelligence" className="intelligence-section">
        <div className="intelligence-inner">
          <div>
            <p className="eyebrow eyebrow-light">
              Digital capability
            </p>

            <h2>
              From opportunity discovery to engineering delivery.
            </h2>
          </div>

          <div className="intelligence-content">
            <p>
              We are developing a Tender Intelligence platform designed to
              help businesses discover relevant opportunities, understand
              requirements and connect them with engineering capability.
            </p>

            <div className="intelligence-flow">
              <span>Discover</span>
              <span>Understand</span>
              <span>Match</span>
              <span>Connect</span>
              <span>Execute</span>
            </div>

            <a className="text-link" href="#contact">
              Discuss the platform ↗
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <div className="contact-introduction">
            <p className="eyebrow">Contact</p>

            <h2>Let&apos;s discuss the project.</h2>

            <p className="contact-description">
              Tell us about your project, engineering requirement or technical
              challenge. Our team can help determine the right technical
              approach.
            </p>

            <div className="contact-details">
              <a href="tel:+919619252020">
                <span>Phone</span>
                <strong>+91 9619252020</strong>
              </a>

              <address>
                <span>Office</span>
                <strong>
                  22 Ajit Shopping Centre
                  <br />
                  Nr. Teen Petrol Pump, LBS Road
                  <br />
                  Thane W – 400602
                </strong>
              </address>
            </div>
          </div>

          <div className="contact-form-wrap">
            <div className="contact-form-heading">
              <span>Project enquiry</span>

              <p>Share a few details and we&apos;ll get back to you.</p>
            </div>

            <form className="contact-form">
              <div className="form-field">
                <label htmlFor="name">Full name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="email">Email address</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="phone">Phone number</label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="project">
                  Project / requirement
                </label>

                <input
                  id="project"
                  name="project"
                  type="text"
                  placeholder="What do you need help with?"
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project"
                />
              </div>

              <button type="submit" className="button button-primary">
                Send enquiry ↗
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="site-footer">
        <div className="footer-brand">
          <img
            src="/ns-logo.png"
            alt="NS Structural Consultants"
            className="footer-logo"
          />

          <p>Civil and structural engineering consultancy.</p>
        </div>

        <p className="footer-copyright">
          © {new Date().getFullYear()} NS Structural Consultants
        </p>
      </footer>
    </main>
  );
}