import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./artists.module.css";
import Link from "next/link";

export default function ArtistsPage() {
  return (
    <main className={styles.container}>
      <Navbar />

      <header className={styles.hero}>
        <div className={styles.eyebrow}>The Talent</div>
        <h1 className={styles.title}>Global Legends<br />In the Making.</h1>
        <p className={styles.subtitle}>
          We don&apos;t just manage artists; we build legacies. Our discovery engine is
          constantly scouting for the next generation of African creative excellence.
        </p>
      </header>

      <section className={styles.contentSection}>
        <div className={styles.inner}>
          <h2>How We Develop Artists</h2>
          <p>
            Every artist who enters the 1Life system goes through a structured pipeline
            designed to refine raw talent into globally competitive output.
          </p>
          <div className={styles.grid}>
            <div className={styles.card}>
              <strong>Discovery</strong>
              <span>We scout through submissions, live sessions, and referrals. If you have it, we will find you.</span>
            </div>
            <div className={styles.card}>
              <strong>Development</strong>
              <span>Sound engineering, visual identity, brand positioning, and content production — all under one roof.</span>
            </div>
            <div className={styles.card}>
              <strong>Distribution</strong>
              <span>Global media placement, platform strategy, and audience building through the 1Life Network ecosystem.</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.inner}>
          <h2>What We Look For</h2>
          <p>
            Standards are non-negotiable. We seek artists who match the intensity
            of the system we have built.
          </p>
          <div className={styles.grid}>
            <div className={styles.card}>
              <strong>Originality</strong>
              <span>A distinct sound and identity that cannot be replicated. Copycats need not apply.</span>
            </div>
            <div className={styles.card}>
              <strong>Work Ethic</strong>
              <span>Talent without discipline is wasted potential. We invest in those who show up consistently.</span>
            </div>
            <div className={styles.card}>
              <strong>Global Mindset</strong>
              <span>Rooted in Africa, but thinking globally. Your vision must extend beyond borders.</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Think You Have What It Takes?</h2>
        <p>Submit your portfolio and let the work speak for itself.</p>
        <Link href="/submit" className={styles.btnMain}>Apply Now</Link>
      </section>

      <Footer />
    </main>
  );
}
