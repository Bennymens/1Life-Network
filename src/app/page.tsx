import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sessions from "@/components/Sessions";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.container}>
      <Navbar />
      <Hero />

      {/* Red Band */}
      <div className={styles.band}>
        <div className={styles.bandInner}>
          <span>1Life Network</span>
          <span>Talent Discovery</span>
          <span>Creative Production</span>
          <span>Audience Exposure</span>
          <span>1Life Sessions</span>
        </div>
      </div>

      {/* About Section — What We Do */}
      <section id="about" className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <div>
              <div className={styles.eyebrow}>What We Do</div>
              <h2 className={styles.sectionTitle}>We operate like a pipeline, not a page.</h2>
            </div>
            <p className={styles.sectionSub}>
              The model is simple. Find talent. Build the work properly. Create visible proof. Push it into places where people pay attention.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.panel}>
              <h3>Talent Discovery</h3>
              <p>We look for artists with real identity, real energy, and work that deserves more than being ignored online.</p>
            </div>
            <div className={styles.panel}>
              <h3>Creative Production</h3>
              <p>We shape raw potential into stronger output through sessions, visuals, positioning, and controlled presentation.</p>
            </div>
            <div className={styles.panel}>
              <h3>Audience Exposure</h3>
              <p>We move artists from obscurity into visibility using content, distribution, and real cultural positioning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Truth */}
      <section className={styles.truth}>
        <div className={styles.wrap}>
          <div className={styles.truthBox}>
            <div className={styles.eyebrow}>Truth</div>
            <p className={styles.truthQuote}>Most artists are not untalented. They are unseen.</p>
            <span className={styles.truthSub}>That is the gap 1Life is supposed to close.</span>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <div>
              <div className={styles.eyebrow}>Process</div>
              <h2 className={styles.sectionTitle}>One path. No confusion.</h2>
            </div>
            <p className={styles.sectionSub}>
              This should be obvious immediately. If the path is unclear, the brand loses force.
            </p>
          </div>

          <div className={styles.process}>
            <div className={styles.panel}>
              <div className={styles.stepNo}>1</div>
              <h3>Submit</h3>
              <p>Artists enter through one clear access point.</p>
            </div>
            <div className={styles.panel}>
              <div className={styles.stepNo}>2</div>
              <h3>Review</h3>
              <p>The strongest work is shortlisted based on identity, potential, and connection.</p>
            </div>
            <div className={styles.panel}>
              <div className={styles.stepNo}>3</div>
              <h3>Produce</h3>
              <p>Selected artists move into visuals, sessions, and serious output.</p>
            </div>
            <div className={styles.panel}>
              <div className={styles.stepNo}>4</div>
              <h3>Launch</h3>
              <p>The work is pushed with proof, not noise.</p>
            </div>
          </div>
        </div>
      </section>

      <Sessions />

      {/* Proof / Quote */}
      <section id="proof" className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <div>
              <div className={styles.eyebrow}>Proof</div>
              <h2 className={styles.sectionTitle}>The brand has to show receipts.</h2>
            </div>
            <p className={styles.sectionSub}>
              Performance-led content that makes artists visible. Real sessions, real artists, real outcomes.
            </p>
          </div>

          <div className={styles.quoteCard}>
            <p className={styles.quoteText}>Talent is everywhere. Exposure is not. We fix that.</p>
            <span className={styles.quoteAttr}>1Life Network</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="submit" className={styles.ctaSection}>
        <div className={styles.wrap}>
          <div className={styles.ctaBox}>
            <div>
              <div className={styles.eyebrow}>Entry Point</div>
              <h2 className={styles.sectionTitle} style={{ marginBottom: "10px" }}>Ready to enter the system?</h2>
              <p className={styles.sectionSub}>
                Submit your music, portfolio, or creative work. One destination. No clutter.
              </p>
            </div>
            <Link href="/submit" className={styles.btnCta}>Submit Now</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
