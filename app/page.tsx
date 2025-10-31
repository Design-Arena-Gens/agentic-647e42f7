import Link from "next/link";

const stats = [
  { value: "2.4x", label: "Average conversion lift after launch" },
  { value: "41k", label: "Design hours saved across teams" },
  { value: "97%", label: "Clients reporting elevated brand perception" }
];

const gallery = [
  {
    title: "Immersive storytelling layouts",
    subtitle: "Crafted for modern product teams",
    className: "gallery-card large",
    background:
      "linear-gradient(135deg, rgba(20, 26, 47, 0.2), rgba(20, 26, 47, 0.7)), url('https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80')"
  },
  {
    title: "Responsive interactions",
    subtitle: "Effortless across any device",
    className: "gallery-card",
    background:
      "linear-gradient(135deg, rgba(20, 26, 47, 0.2), rgba(20, 26, 47, 0.7)), url('https://images.unsplash.com/photo-1618005198919-d3d4b5a92eee?auto=format&fit=crop&w=1200&q=80')"
  },
  {
    title: "Signature gradients",
    subtitle: "Tailored palettes & micro-glow",
    className: "gallery-card",
    background:
      "linear-gradient(135deg, rgba(20, 26, 47, 0.2), rgba(20, 26, 47, 0.68)), url('https://images.unsplash.com/photo-1526481280695-3c46917e1d84?auto=format&fit=crop&w=1200&q=80')"
  }
];

const testimonials = [
  {
    quote:
      "Lumosphere reimagined our presence with a cinematic flow that captivates on every scroll. The conversion uptick blew past our projections.",
    author: "Avery Holt",
    role: "Head of Growth, Nova Labs",
    initials: "AH"
  },
  {
    quote:
      "It feels alive. Microinteractions, lighting, depth—every detail is tuned. Our customers keep mentioning the experience in demo calls.",
    author: "Maya Chen",
    role: "VP Product, Pulsewave",
    initials: "MC"
  },
  {
    quote:
      "From moodboard to launch in weeks. Their team translated our brand into something aspirational and magnetic.",
    author: "Daniel Rivera",
    role: "Founder, Waveform",
    initials: "DR"
  }
];

export default function Home() {
  return (
    <div>
      <div className="grid-pattern" />
      <header className="container" style={{ padding: "32px 0 0" }}>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "18px"
          }}
        >
          <Link
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontSize: "14px"
            }}
          >
            <span
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, rgba(140, 124, 240, 0.85), rgba(73, 224, 193, 0.6))",
                display: "grid",
                placeItems: "center",
                color: "#05060c",
                fontWeight: 800
              }}
            >
              L
            </span>
            Lumosphere
          </Link>
          <div style={{ display: "flex", gap: "22px", alignItems: "center", fontSize: "15px" }}>
            <Link href="#experience">Experience</Link>
            <Link href="#craft">Craft</Link>
            <Link href="#praise">Stories</Link>
            <Link href="#contact" className="soft-button secondary">
              Request access
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container">
          <span className="badge">Launch experiences that feel alive</span>
          <h1>
            Illuminate your digital presence with immersive, high-converting storytelling.
          </h1>
          <p>
            Lumosphere blends brand artistry with refined interaction design, crafting landing
            experiences that feel cinematic, human, and impossibly polished. We help ambitious teams
            launch interfaces that spark instant resonance and long-term devotion.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
            <button className="soft-button">
              Start your transformation
              <span aria-hidden="true">↗</span>
            </button>
            <button className="soft-button secondary">View our playbook</button>
          </div>
          <div className="hero-visual">
            <div className="hero-card frosted-card">
              <strong style={{ color: "var(--color-accent-secondary)" }}>Signature Flow</strong>
              <h3>Sequenced scenes choreographed for emotion</h3>
              <p>
                Each scroll breathes. Narrative arcs guide your audience through desire, proof, and
                conversion with effortless precision.
              </p>
            </div>
            <div className="hero-card frosted-card">
              <strong style={{ color: "var(--color-accent)" }}>Immersive depth</strong>
              <h3>Light, shadow, and motion working in harmony</h3>
              <p>
                Dynamic gradients, soft glows, and dimensional layers deliver a tangible sense of
                craft without compromising clarity.
              </p>
            </div>
            <div className="hero-card frosted-card">
              <strong style={{ color: "#f281a1" }}>Conversion science</strong>
              <h3>Behavioral insights infused in every detail</h3>
              <p>
                Our experiences balance emotional resonance with data-backed architecture optimized
                for lasting performance.
              </p>
            </div>
          </div>
          <div className="stats" id="experience">
            {stats.map((stat) => (
              <div className="stat" key={stat.value}>
                <h4>{stat.value}</h4>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="split-section" id="craft">
          <div className="container split-grid">
            <div style={{ position: "relative" }}>
              <div className="frosted-card" style={{ padding: "36px", borderRadius: "26px" }}>
                <div className="floating-orb one" />
                <div className="floating-orb two" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px"
                  }}
                >
                  <div>
                    <strong style={{ color: "var(--color-accent-secondary)", fontSize: 14 }}>
                      Crafted Journey
                    </strong>
                    <h3
                      style={{
                        fontSize: "32px",
                        margin: "16px 0 12px",
                        lineHeight: 1.4,
                        letterSpacing: "-0.02em"
                      }}
                    >
                      We orchestrate every moment to feel intentional and alive.
                    </h3>
                    <p style={{ color: "var(--color-muted)", lineHeight: 1.7, fontSize: "16px" }}>
                      From hero choreography to final call-to-action, every section is tuned with
                      mindful pacing. Transitions, parallax, and narrative cues keep curiosity
                      kindled while maintaining momentum.
                    </p>
                  </div>
                  <div className="pill-group">
                    {["Experience Strategy", "Design Systems", "Microinteraction Design", "Motion Treatments", "Conversion Architecture"].map((item) => (
                      <span className="pill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="split-content">
                <h2>
                  The Lumosphere method merges cinematic design with measurable performance.
                </h2>
                <p>
                  We partner with visionary brands to craft experiences that radiate ambition. Our
                  multi-disciplinary team blends story-driven art direction with UX precision,
                  ensuring every movement feels meaningful and every metric trends forward.
                </p>
                <div className="gallery">
                  {gallery.map((item) => (
                    <div
                      key={item.title}
                      className={`${item.className} frosted-card`}
                      style={{ backgroundImage: item.background }}
                    >
                      <strong>{item.title}</strong>
                      <span>{item.subtitle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials" id="praise">
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 64px" }}>
              <span className="badge">Loved by bold teams everywhere</span>
              <h2 style={{ fontSize: "48px", marginTop: 24, marginBottom: 18, lineHeight: 1.2 }}>
                Stories from partners who trust Lumosphere to elevate their launches.
              </h2>
              <p style={{ color: "var(--color-muted)", lineHeight: 1.8 }}>
                We design with empathy, with purpose, and with a relentless focus on the moments
                that make your customers lean in, smile, and say yes.
              </p>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <div className="testimonial-card" key={item.author}>
                  <p>“{item.quote}”</p>
                  <div className="testimonial-author">
                    <span className="testimonial-avatar">{item.initials}</span>
                    <div>
                      <strong>{item.author}</strong>
                      <div style={{ color: "var(--color-muted)", fontSize: "14px" }}>{item.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="container">
            <div className="cta-card frosted-card">
              <div className="floating-orb one" />
              <div className="floating-orb three" />
              <h2>Ready to launch a landing experience that radiates ambition?</h2>
              <p>
                Tell us about your product and your boldest aspirations. We will craft a bespoke
                launch plan that bridges your vision with an unforgettable first impression.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
                <button className="soft-button">
                  Book a discovery call
                  <span aria-hidden="true">✶</span>
                </button>
                <button className="soft-button secondary">Explore partnership guide</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
          <Link href="#" style={{ fontWeight: 700, letterSpacing: "0.12em" }}>
            Lumosphere
          </Link>
          <span>Made with intention in every pixel. © {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
