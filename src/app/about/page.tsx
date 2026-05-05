import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <Navbar />
      
      <header className={styles.hero}>
        <div className="eyebrow">The Agency</div>
        <h1 className={styles.title}>Defining <br /> African <br /> Excellence.</h1>
      </header>

      <section className={styles.grid}>
        <div className={styles.textBlock}>
          <h2>The Ecosystem Built for Impact.</h2>
          <p>
            1Life Network is more than an agency. We are a culture and talent engine 
            founded in Accra with a singular mission: to build globally competitive 
            African creative output through systems, standards, and execution.
          </p>
          <p>
            We believe that talent alone is not enough. Talent needs a system to 
            thrive, to be discovered, and to be monetized on a global scale. We 
            provide the infrastructure, the production quality, and the strategic 
            distribution that African creativity deserves.
          </p>
        </div>
        <div className={styles.imagePlaceholder} />
      </section>

      <section className={styles.visionSection}>
        <div className="eyebrow">Our Vision</div>
        <h2>Talent Needs A System.</h2>
        
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <h3>Systems First</h3>
            <p>
              We prioritize the structure and the process. In a creative world 
              often defined by chaos, we bring the rigor of production and the 
              consistency of distribution.
            </p>
          </div>
          <div className={styles.valueCard}>
            <h3>Global Standards</h3>
            <p>
              Our output is not judged against local competition. We build for 
              global adjacency, ensuring that our artists can stand next to 
              the best in the world.
            </p>
          </div>
          <div className={styles.valueCard}>
            <h3>Cultural Integrity</h3>
            <p>
              We are rooted in Accra, Ghana. Every project we touch is an 
              authentic expression of African culture, framed for a global 
              audience.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>04</div>
            <div className={styles.statLabel}>System Pillars</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>HQ</div>
            <div className={styles.statLabel}>Based in Accra</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Creative Control</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>∞</div>
            <div className={styles.statLabel}>Global Reach</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="eyebrow">The Next Step</div>
        <h2>Join the Ecosystem.</h2>
        <p>
          Whether you are a creative visionary looking for a system or a brand 
          looking to partner with African excellence, the engine is running.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <a href="/submit" className="btn-main">Submit Talent</a>
          <a href="/submit" className="btn-ghost">Become a Partner</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
