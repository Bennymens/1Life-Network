import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
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
          <h2>About Us</h2>
          <p>
            Welcome to 1Life Network, your one-stop destination for unparalleled entertainment experiences. We are a dynamic and innovative entertainment company that aims to bring your visions to life through our diverse range of services. With a passion for reatened have cared one to leading provider of film production, photography, music production, digital content, live performances, events, and sync opportunities.
          </p>
        </div>
        <div className={styles.imagePlaceholder}>
          <Image 
            src="/images/IMG_3543.JPG"
            alt="About 1Life Network"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            quality={100}
            unoptimized={true}
          />
        </div>
      </section>

      <section className={styles.visionSection}>
        <div className="eyebrow">Our Vision</div>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Redefining Entertainment.</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto 60px', fontSize: '18px', lineHeight: '1.6', color: 'var(--muted)', textAlign: 'center' }}>
          At 1Life Network, we envision a world where entertainment knows no bounds - a realm where imagination thrives and dreams are transformed into reality. We strive to be the catalyst that ignites sparks of creativity, inspiring both our clients and audiences alike. Let's redefine entertainment together.
        </p>
        
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
        <div className="eyebrow">Get In Touch</div>
        <h2>Join the Ecosystem.</h2>
        <p>
          Whether you are a creative visionary looking for a system or a brand 
          looking to partner with African excellence, the engine is running.
        </p>
        <div style={{ marginBottom: '30px', color: 'var(--muted)', fontSize: '18px', lineHeight: '1.6' }}>
          <p>A BG241 ABAYATEYE ST GK-0736-2934</p>
          <a href="mailto:lifeghanaa@gmail.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>lifeghanaa@gmail.com</a>
        </div>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <a href="/submit" className="btn-main">Join The Network</a>
          <a href="/partners" className="btn-ghost">Become a Partner</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
