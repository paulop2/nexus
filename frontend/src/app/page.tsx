import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section */}
        <header className={styles.hero}>
          <h1 className={styles.title}>
            Break Through Procrastination
            <span className={styles.highlight}>with Nexus</span>
          </h1>
          <p className={styles.subtitle}>
            Transform overwhelming tasks into achievable 2-minute actions using AI-powered graph organization
          </p>
          <div className={styles.ctas}>
            <a href="/signup" className={styles.primaryCta}>
              Start Free - It Takes 2 Minutes
            </a>
          </div>
        </header>

        {/* Key Features Grid */}
        <section className={styles.features}>
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
        </section>

        {/* Visual Demo Section */}
        <section className={styles.demo}>
          <h2>From Overwhelming to Actionable</h2>
          <div className={styles.demoVisual}>
            <Image
              src="/task-graph-visual.png"
              alt="Task graph visualization"
              width={800}
              height={400}
              className={styles.graphImage}
            />
          </div>
        </section>

        {/* How It Works */}
        <section className={styles.workflow}>
          <h2>Your Productivity Engine</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <h3>Add Task</h3>
              <p>&quot;Write research paper&quot; becomes 15 micro-actions</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <h3>AI Analyzes</h3>
              <p>DeepSeek identifies key dependencies and steps</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <h3>Take Action</h3>
              <p>Complete 2-minute tasks that unlock next steps</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalCta}>
          <h2>Stop Planning, Start Doing</h2>
          <p className={styles.ctaSub}>
            Join the waitlist for early access
          </p>
          <div className={styles.ctas}>
            <a href="/signup" className={styles.primaryCta}>
              Claim Early Access
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerTagline}>
            Nexus Task Management System
          </p>
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