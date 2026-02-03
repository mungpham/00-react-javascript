
export default function HomePage() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Application</h1>
        <p className="subtitle">Build amazing things with React and Node.js</p>
      </header>

      <main className="home-main">
        <section className="features">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>React Frontend</h3>
              <p>Modern, responsive UI built with React</p>
            </div>
            <div className="feature-card">
              <h3>Node.js Backend</h3>
              <p>Powerful backend API with Node.js</p>
            </div>
            <div className="feature-card">
              <h3>JWT Authentication</h3>
              <p>Secure authentication with JWT tokens</p>
            </div>
          </div>
        </section>

        <section className="cta">
          <h2>Get Started</h2>
          <p>Start building your full-stack application today</p>
          <button className="cta-button">Learn More</button>
        </section>
      </main>

      <footer className="home-footer">
        <p>&copy; 2024 Your Application. All rights reserved.</p>
      </footer>
    </div>
  );
}
