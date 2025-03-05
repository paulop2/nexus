import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section */}
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Break Through Procrastination
              <span className={styles.highlight}>with Nexus</span>
            </h1>
            <p className={styles.subtitle}>
              Transform overwhelming tasks into achievable 2-minute actions using AI-powered graph organization
            </p>
            <div className={styles.ctas}>
              <a href="/signup" className={styles.primaryCta}>
                <span>Start Free - It Takes 2 Minutes</span>
                <svg className={styles.arrowIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/task-graph-visual.png"
                alt="Task graph visualization preview"
                width={600}
                height={400}
                className={styles.heroImage}
              />
              <div className={styles.imageBg}></div>
            </div>
          </div>
        </header>

        {/* Key Features Grid */}
        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Key Features</h2>
          <div className={styles.features}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>AI-Powered Breakdown</h3>
              <p>DeepSeek AI transforms vague tasks into immediate actions</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3>Smart Prioritization</h3>
              <p>Graph algorithms surface high-impact tasks first</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🕸️</div>
              <h3>Visual Task Mapping</h3>
              <p>See how small actions connect to big picture goals</p>
            </div>
          </div>
        </section>

        {/* Visual Demo Section */}
        <section className={styles.demo}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>From Overwhelming to Actionable</h2>
            <div className={styles.demoContent}>
              <div className={styles.demoText}>
                <p>Watch how Nexus transforms complex projects into manageable steps, creating a clear path forward for even your most challenging goals.</p>
              </div>
              <div className={styles.demoVisual}>
                <Image
                  src="/task-graph-visual.png"
                  alt="Task graph visualization"
                  width={800}
                  height={400}
                  className={styles.graphImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className={styles.workflow}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Your Productivity Engine</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNumber}>1</span>
                  <h3>Add Task</h3>
                </div>
                <p>&quot;Write research paper&quot; becomes 15 micro-actions</p>
              </div>
              <div className={styles.stepConnector}></div>
              <div className={styles.step}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNumber}>2</span>
                  <h3>AI Analyzes</h3>
                </div>
                <p>DeepSeek identifies key dependencies and steps</p>
              </div>
              <div className={styles.stepConnector}></div>
              <div className={styles.step}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNumber}>3</span>
                  <h3>Take Action</h3>
                </div>
                <p>Complete 2-minute tasks that unlock next steps</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalCta}>
          <div className={styles.ctaContent}>
            <h2>Stop Planning, Start Doing</h2>
            <p className={styles.ctaSub}>
              Join the waitlist for early access
            </p>
            <div className={styles.ctas}>
              <a href="/signup" className={styles.primaryCta}>
                <span>Claim Early Access</span>
                <svg className={styles.arrowIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBranding}>
            <h3 className={styles.footerLogo}>Nexus</h3>
            <p className={styles.footerTagline}>
              Task Management System
            </p>
          </div>
          <div className={styles.footerLinks}>
            <a href="/about">About</a>
            <a href="/privacy">Privacy</a>
            <a href="/github">GitHub</a>
          </div>
          <p className={styles.copyright}>
            © 2024 Nexus Project. Open source under MIT License
          </p>
        </div>
      </footer>
    </div>
  );
}