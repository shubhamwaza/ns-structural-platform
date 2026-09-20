"use client";

import { useState } from "react";

const logoSrc =
  process.env.NODE_ENV === "production"
    ? "/ns-structural-platform/ns-logo.png"
    : "/ns-logo.png";

const services = [
  {
    number: "01",
    title: "Structural Engineering",
    description:
      "Structural design, analysis and engineering solutions for complex buildings and infrastructure.",
  },
  {
    number: "02",
    title: "Civil Engineering",
    description:
      "Civil engineering support covering planning, coordination, infrastructure and site requirements.",
  },
  {
    number: "03",
    title: "Project Consultancy",
    description:
      "Technical consultancy supporting developers, contractors and project teams from concept through execution.",
  },
  {
    number: "04",
    title: "Technical Due Diligence",
    description:
      "Independent technical assessment to support acquisitions, development decisions and project risk management.",
  },
];

const projects = [
  {
    category: "Commercial",
    title: "Integrated Commercial Complex",
    location: "Mumbai, Maharashtra",
    description:
      "Structural engineering and technical consultancy for a large-scale commercial development.",
  },
  {
    category: "Infrastructure",
    title: "Water Infrastructure Rehabilitation",
    location: "Thane, Maharashtra",
    description:
      "Engineering consultancy supporting rehabilitation and structural improvement of existing infrastructure.",
  },
  {
    category: "Residential",
    title: "Multi-Storey Residential Development",
    location: "Navi Mumbai, Maharashtra",
    description:
      "Structural engineering services for a high-density residential development.",
  },
];

const expertise = [
  "Structural design and analysis",
  "Civil engineering consultancy",
  "Industrial and commercial projects",
  "Infrastructure engineering",
  "Technical due diligence",
  "Project and construction consultancy",
];

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="ns-site">
      {/* Header */}
      <header className="site-header">
        <a href="/" className="site-logo" aria-label="NS Structural Consultants">
          <img
            src={logoSrc}
            alt="NS Structural Consultants"
            className="site-logo-image"
          />
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="/tenders/">Tender Intelligence</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero-section">
        <div className="hero-copy">
          <p className="section-kicker">Civil &amp; Structural Engineering</p>

          <h1>
            Engineering
            <br />
            expertise for
            <br />
            complex built
            <br />
            environments.
          </h1>

          <p className="hero-description">
            Civil and structural engineering consultancy across building,
            infrastructure, water, energy and industrial projects.
          </p>

          <div className="hero-actions">
            <a href="#expertise" className="button button-primary">
              Explore our expertise
            </a>

            <a href="#contact" className="button button-secondary">
              Discuss a project
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=85"
            alt="Engineering professional reviewing architectural drawings"
          />

          <div className="hero-image-meta">
            <span>Engineering consultancy</span>
            <span>India · Europe · Middle East · Africa</span>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="section expertise-section">
        <div className="section-intro">
          <div>
            <p className="section-kicker">Expertise</p>

            <h2>
              Engineering capability built
              <br />
              around the project.
            </h2>
          </div>

          <p className="section-intro-copy">
            Technical consultancy spanning structural engineering, analysis,
            civil engineering and project support.
          </p>
        </div>

        <div className="expertise-list">
          {services.map((service) => (
            <article className="expertise-row" key={service.number}>
              <span className="expertise-number">{service.number}</span>

              <div className="expertise-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="expertise-tags">
          {expertise.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      {/* Project Experience */}
      <section id="projects" className="section projects-section">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Project Experience</p>

            <h2>
              Technical thinking
              <br />
              applied to real projects.
            </h2>
          </div>

          <p className="section-heading-copy">
            Selected experience across commercial, residential,
            infrastructure and industrial environments.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <img
                  src={`https://images.unsplash.com/photo-${
                    [
                      "1486406146926-c627a92ad1ab",
                      "1541888946425-d81bb19240f5",
                      "1487958449943-2429e8be8625",
                    ][index]
                  }?auto=format&fit=crop&w=1600&q=85`}
                  alt={project.title}
                />
              </div>

              <div className="project-meta">
                <div>
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                </div>

                <span>{project.location}</span>
              </div>

              <p className="project-description">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Tender Intelligence */}
      <section className="tender-bridge">
        <div className="tender-bridge-content">
          <p className="section-kicker">Tender Intelligence</p>

          <h2>
            Find the opportunities
            <br />
            that fit your capability.
          </h2>

          <p>
            Discover, understand and evaluate engineering opportunities from
            multiple tender sources through one structured intelligence
            platform.
          </p>

          <a href="/tenders/" className="button button-primary">
            Explore Tender Intelligence
          </a>
        </div>

        <div className="tender-bridge-data">
          <div className="tender-data-row">
            <span>Discover</span>
            <strong>Multiple tender sources</strong>
          </div>

          <div className="tender-data-row">
            <span>Understand</span>
            <strong>AI-assisted tender analysis</strong>
          </div>

          <div className="tender-data-row">
            <span>Match</span>
            <strong>Engineering relevance</strong>
          </div>

          <div className="tender-data-row">
            <span>Connect</span>
            <strong>Qualified opportunities</strong>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <div className="contact-intro">
          <p className="section-kicker">Contact</p>

          <h2>Let&apos;s discuss the project.</h2>

          <p>
            Tell us what you are working on and where you need engineering
            support. Our team can help define the right technical approach.
          </p>

          <div className="contact-details">
            <a href="tel:+912200000000">+91 22 0000 0000</a>

            <address>
              NS Structural Consultants
              <br />
              Mumbai, Maharashtra
              <br />
              India
            </address>
          </div>
        </div>

        <div className="contact-form-wrap">
          {submitted ? (
            <div className="form-success">
              <p className="section-kicker">Enquiry received</p>

              <h3>Thank you for getting in touch.</h3>

              <p>
                Your enquiry has been recorded. Our team will get back to you
                shortly.
              </p>

              <button
                type="button"
                className="button button-secondary"
                onClick={() => setSubmitted(false)}
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>
                  <span>Full name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </label>

                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    required
                  />
                </label>

                <label>
                  <span>Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91"
                  />
                </label>

                <label>
                  <span>Project / requirement</span>
                  <input
                    type="text"
                    name="project"
                    placeholder="What do you need help with?"
                  />
                </label>

                <label className="form-full">
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about the project..."
                    required
                  />
                </label>
              </div>

              <button type="submit" className="button button-primary">
                Send enquiry
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-brand">
          <img
            src={logoSrc}
            alt="NS Structural Consultants"
            className="footer-logo"
          />

          <p>
            Civil and structural engineering consultancy for complex built
            environments.
          </p>
        </div>

        <div className="footer-links">
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="/tenders/">Tender Intelligence</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 NS Structural Consultants</span>
          <span>Engineering precision presented with editorial clarity.</span>
        </div>
      </footer>
    </main>
  );
}