import styles from "./Sessions.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Sessions() {
  const formats = [
    { title: "Live Performances", type: "Visual Album", image: "/images/live.jpeg" },
    { title: "DJ Live Sessions", type: "Mix Series", image: "/images/Dj.jpeg" },
    { title: "Acoustic Sessions", type: "Stripped Down" },
    { title: "Band Sessions", type: "Full Ensemble", image: "/images/band.jpeg" },
    { title: "Freestyle / Cypher", type: "Lyrical Focus" },
    { title: "Special Collabs", type: "Cross-Culture" },
  ];

  return (
    <section id="sessions" className={styles.sessions}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <div className="eyebrow">Flagship Platform</div>
            <h2 className={styles.title}>1Life Sessions</h2>
          </div>
          <Link href="https://youtube.com/@1lifenetworktv" target="_blank" className="btn-ghost">
            Subscribe on YouTube
          </Link>
        </div>

        <div className={styles.grid}>
          {formats.map((format, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardBg}>
                {format.image && (
                  <Image
                    src={format.image}
                    alt={format.title}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                )}
              </div>
              <div className={styles.cardOverlay}>
                <div className={styles.cardContent}>
                  <p>{format.type}</p>
                  <h3>{format.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p>
            Experience the sound of the new Africa. Every session is a 
            meticulously produced window into the future of global culture.
          </p>
          <div className={styles.btnGroup}>
            <Link href="https://youtube.com/@1lifenetworktv" target="_blank" className="btn-main">
              Watch on YouTube
            </Link>
            <Link href="/sessions" className="btn-ghost">
              Explore All Sessions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
