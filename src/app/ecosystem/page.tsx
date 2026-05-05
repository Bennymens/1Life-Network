import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Ecosystem from "@/components/Ecosystem";
import styles from "./ecosystem.module.css";

export default function EcosystemPage() {
  return (
    <main className={styles.container}>
      <Navbar />
      
      <header className={styles.hero}>
        <div className="eyebrow">The System</div>
        <h1 className={styles.title}>Talent <br /> Needs A <br /> System.</h1>
        <p className={styles.subtitle}>
          We don&apos;t just manage talent. We build the infrastructure required to 
          take African creative output to the global stage.
        </p>
      </header>

      <Ecosystem />

      <section className={styles.details}>
        <div className={styles.inner}>
          <div className={styles.detailBlock}>
            <h2>Why a System?</h2>
            <p>
              In many creative markets across Africa, talent is abundant but the 
              infrastructure is fragmented. Artists often have to be their own 
              managers, producers, distributors, and marketers. This dilution of 
              focus prevents talent from reaching its full potential.
            </p>
            <p>
              1Life Network provides the system that handles everything outside 
              of the creative process, allowing artists to focus on what they do 
              best: creating.
            </p>
          </div>

          <div className={styles.detailBlock}>
            <h2>The Engine Room</h2>
            <p>
              Our production facilities in Accra are designed for high-end 
              output. From the flagship 1Life Sessions to full visual albums, 
              we ensure that the quality of our content meets global standards.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
