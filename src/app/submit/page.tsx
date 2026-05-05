import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubmissionForm from "@/components/SubmissionForm";
import styles from "./submit.module.css";

export default function SubmitPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div>
            <div className={styles.sectionHead}>
              <span className={styles.eyebrow}>1Life Global Class</span>
              <h1>Selected. Tested. Presented.</h1>
              <p>
                This is not open exposure. This is a selective annual filter for artists
                who can already perform, already carry identity, and are ready to be
                presented at a global standard.
              </p>
            </div>

            <div className={styles.meta}>
              <span className={styles.pill}>Live performance mandatory</span>
              <span className={styles.pill}>Only 5–8 artists selected</span>
              <span className={styles.pill}>No lip-syncing</span>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <strong>5–8</strong>
                <span>artists selected annually</span>
              </div>
              <div className={styles.stat}>
                <strong>1</strong>
                <span>signature 1Life Session</span>
              </div>
              <div className={styles.stat}>
                <strong>10+</strong>
                <span>content assets per artist</span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h3>What selected artists receive</h3>
            <ul>
              <li>Signature 1Life Session production</li>
              <li>Professional audio and visual output</li>
              <li>Short-form content ecosystem</li>
              <li>PR and media positioning</li>
              <li>Brand, image, and stage refinement</li>
            </ul>
            <div className={styles.note} style={{ marginTop: "22px" }}>
              <p>
                <strong>Important:</strong> Exposure without readiness is noise. If you
                are selected, the expectation is discipline, professionalism, and
                performance under pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Apply + Criteria */}
      <section className={styles.section}>
        <div className={`${styles.container} ${styles.grid}`}>
          <div className={styles.card}>
            <div className={styles.sectionHead} style={{ marginBottom: "18px" }}>
              <span className={styles.eyebrow}>Why apply</span>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}>
                Because being seen is not enough.
              </h2>
              <p>
                1Life is built to test whether your talent can stand without noise,
                excuses, or distraction.
              </p>
            </div>
            <ul>
              <li>Your performance gets presented in a controlled environment.</li>
              <li>Your output is shaped for serious audience and industry attention.</li>
              <li>Your name becomes attached to a selective system, not random visibility.</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.sectionHead} style={{ marginBottom: "18px" }}>
              <span className={styles.eyebrow}>Selection criteria</span>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}>What we score.</h2>
            </div>
            <div className={styles.requirements}>
              <div className={styles.item}>
                <strong>Talent</strong>
                Vocal ability, musicality, and live performance quality.
              </div>
              <div className={styles.item}>
                <strong>Presence</strong>
                Camera confidence, charisma, and identity.
              </div>
              <div className={styles.item}>
                <strong>Originality</strong>
                Sound, style, and distinctiveness.
              </div>
              <div className={styles.item}>
                <strong>Readiness</strong>
                Professionalism, discipline, and work ethic signals.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Process</span>
            <h2>How selection works.</h2>
            <p>The process is strict by design. Rejection is part of the standard.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.num}>01</div>
                <div>
                  <h4>Submit your application</h4>
                  <p>
                    Complete the form below with accurate links, a live performance
                    video, and a short statement on why you should be considered.
                  </p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.num}>02</div>
                <div>
                  <h4>Initial screening</h4>
                  <p>
                    Weak live performance, poor quality, no originality, or weak
                    presence leads to immediate rejection.
                  </p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.num}>03</div>
                <div>
                  <h4>Shortlist review</h4>
                  <p>
                    Selected entries move into internal review, potential callbacks,
                    and a deeper scoring process.
                  </p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.num}>04</div>
                <div>
                  <h4>Final selection</h4>
                  <p>
                    Only a small number of artists are chosen for the class. Not
                    everyone makes it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className={styles.section}>
        <div className={`${styles.container} ${styles.grid}`}>
          <div className={styles.card}>
            <div className={styles.sectionHead} style={{ marginBottom: "18px" }}>
              <span className={styles.eyebrow}>Application form</span>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}>
                Apply to 1Life Global Class.
              </h2>
              <p>Make sure you provide accurate information and valid links.</p>
            </div>

            <SubmissionForm />
          </div>

          <div className={styles.card}>
            <h3>Review Notes</h3>
            <ul>
              <li>Every entry goes into a structured scoring sheet.</li>
              <li>Immediate disqualifiers are filtered first.</li>
              <li>Only shortlist candidates will be contacted.</li>
            </ul>

            <div className={styles.note} style={{ marginTop: "22px" }}>
              <p>
                <strong>Heads Up:</strong> Ensure your live video clearly showcases
                your abilities. A strong raw performance is better than a highly
                edited music video.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
