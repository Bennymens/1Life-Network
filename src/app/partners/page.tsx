import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./partners.module.css";
import Link from "next/link";

export default function PartnersPage() {
  return (
    <main className={styles.container}>
      <Navbar />

      <header className={styles.hero}>
        <div className={styles.eyebrow}>Collaborate</div>
        <h1 className={styles.title}>Partner with<br />the Engine.</h1>
        <p className={styles.subtitle}>
          From brand integrations to cultural infrastructure projects, we partner
          with those who take African creativity seriously.
        </p>
      </header>

      <section className={styles.contentSection}>
        <div className={styles.inner}>
          <h2>Why Partner with 1Life</h2>
          <p>
            We are building the infrastructure for African creative output at a global
            standard. Partners gain direct access to this ecosystem.
          </p>
          <div className={styles.grid}>
            <div className={styles.card}>
              <strong>Brand Integration</strong>
              <span>Embed your brand into premium content experiences — sessions, documentaries, and live events.</span>
            </div>
            <div className={styles.card}>
              <strong>Cultural Access</strong>
              <span>Direct connection to Africa&apos;s most promising creative talent and emerging cultural movements.</span>
            </div>
            <div className={styles.card}>
              <strong>Global Reach</strong>
              <span>Our content distribution spans YouTube, social platforms, and international media networks.</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.inner}>
          <h2>Partnership Models</h2>
          <p>
            We offer flexible collaboration structures built around shared vision
            and mutual investment.
          </p>
          <div className={styles.grid}>
            <div className={styles.card}>
              <strong>Sponsorship</strong>
              <span>Title or segment sponsorship of 1Life Sessions, events, and digital content series.</span>
            </div>
            <div className={styles.card}>
              <strong>Co-Production</strong>
              <span>Joint creative projects — from music videos to documentaries — leveraging our production engine.</span>
            </div>
            <div className={styles.card}>
              <strong>Infrastructure</strong>
              <span>Long-term partnerships that fund studio builds, artist development programs, and tech platforms.</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Ready to Build Together?</h2>
        <p>Reach out and let&apos;s explore what a partnership looks like.</p>
        <Link href="/submit" className={styles.btnMain}>Get in Touch</Link>
      </section>

      <Footer />
    </main>
  );
}
