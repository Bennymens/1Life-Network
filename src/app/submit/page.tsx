import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubmissionForm from "@/components/SubmissionForm";
import Image from "next/image";
import styles from "./submit.module.css";

export default function SubmitPage() {
  return (
    <main className={styles.main}>
      {/* Decorative Grid Overlay and Glows */}
      <div className={styles.gridOverlay} />
      <div className={styles.radialGlow} />
      
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div>
            <div className={styles.sectionHead}>
              <span className={styles.eyebrow}>Enter The Ecosystem</span>
              <h1 className={styles.heroTitle}>
                Accra Has <span className={styles.outlineText}>Talent.</span><br />
                1Life is the structure around it.
              </h1>
              <p className={styles.heroLead}>
                1Life Network is a premium talent, media, and culture ecosystem built in Accra for global reach. 
                We discover, develop, produce, distribute, and monetize high-potential creative talent.
              </p>
            </div>

            <div className={styles.meta}>
              <span className={styles.pill}>Collaboration-First Model</span>
              <span className={styles.pill}>Global Quality Standard</span>
              <span className={styles.pill}>Accra-Based, Globally Focused</span>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <strong>11+</strong>
                <span>Creative disciplines</span>
              </div>
              <div className={styles.stat}>
                <strong>1</strong>
                <span>Unified system</span>
              </div>
              <div className={styles.stat}>
                <strong>100%</strong>
                <span>Professional standard</span>
              </div>
            </div>
          </div>

          <div className={styles.heroRightStack}>
            <div className={styles.card}>
              <div className={styles.cardBadge}>Built in Accra</div>
              <h3>What collaborators receive</h3>
              <ul>
                <li>Access to 1Life premium production infrastructure</li>
                <li>Cross-disciplinary project collaboration</li>
                <li>Branding, portfolio, and identity refinement</li>
                <li>PR, distribution, and media positioning</li>
                <li>Direct pipelines to brand partnerships &amp; campaigns</li>
              </ul>
              <div className={styles.note} style={{ marginTop: "22px" }}>
                <p>
                  <strong>The Standard:</strong> Raw ability is a start. Operational
                  discipline, professionalism, and the willingness to collaborate under
                  pressure are what build careers.
                </p>
              </div>
            </div>

            <div className={styles.heroImageCard}>
              <Image
                src="/images/IMG_3543 (1).JPG"
                alt="1Life Network Creative Talent"
                fill
                className={styles.heroCardImage}
                quality={90}
                unoptimized
              />
              <div className={styles.heroImageOverlay} />
              <div className={styles.heroImageLabel}>1Life Ecosystem</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Apply + Criteria */}
      <section className={styles.section}>
        <div className={`${styles.container} ${styles.grid}`}>
          <div className={styles.card}>
            <div className={styles.sectionHead} style={{ marginBottom: "18px" }}>
              <span className={styles.eyebrow}>Why Enter</span>
              <h2 className={styles.sectionHeading}>
                Because talent needs a system.
              </h2>
              <p>
                1Life provides the structure, production, and positioning, so you can 
                focus entirely on the execution of your craft.
              </p>
            </div>
            <ul>
              <li>Your output is shaped and presented in a premium context.</li>
              <li>Your portfolio aligns with elite, like-minded African creators.</li>
              <li>Your creative work gains access to serious commercial and distribution channels.</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.sectionHead} style={{ marginBottom: "18px" }}>
              <span className={styles.eyebrow}>Ecosystem Criteria</span>
              <h2 className={styles.sectionHeading}>What we value.</h2>
            </div>
            <div className={styles.requirements}>
              <div className={styles.item}>
                <strong>Skill &amp; Execution</strong>
                Deep technical ability and taste within your creative field.
              </div>
              <div className={styles.item}>
                <strong>Distinct Identity</strong>
                A clear creative voice, style, or perspective that stands out.
              </div>
              <div className={styles.item}>
                <strong>Discipline &amp; Readiness</strong>
                Reliability, punctuality, and responsiveness in execution.
              </div>
              <div className={styles.item}>
                <strong>Collaborative Mindset</strong>
                Eagerness to work with and elevate other creative specialists.
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
            <h2 className={styles.sectionHeading}>How collaboration works.</h2>
            <p>We filter for readiness. The pipeline is designed for commitment.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.num}>01</div>
                <div>
                  <h4>Submit your details</h4>
                  <p>
                    Fill out the form below. Provide active links to your portfolio, 
                    previous work, or live performance.
                  </p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.num}>02</div>
                <div>
                  <h4>Creative review</h4>
                  <p>
                    We review submissions across all roles, matching talent profiles 
                    with upcoming network projects and content productions.
                  </p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.num}>03</div>
                <div>
                  <h4>Dialogue &amp; alignment</h4>
                  <p>
                    Shortlisted candidates are invited for conversations to map out 
                    specific project alignment, production tests, or session invites.
                  </p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.num}>04</div>
                <div>
                  <h4>Ecosystem entry</h4>
                  <p>
                    Gained access to 1Life Network resources, launching joint content, 
                    partner campaigns, and sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1Live Sessions Section */}
      <section className={styles.sessionsSection}>
        <div className={styles.container}>
          <div className={styles.sessionsInner}>
            <div className={styles.sessionsLeft}>
              <span className={styles.eyebrow}>Flagship Media Property</span>
              <h2 className={styles.sessionsTitle}>1Live Sessions</h2>
            </div>
            <div className={styles.sessionsRight}>
              <p className={styles.sessionsDesc}>
                1Live Sessions is the live-format platform under 1Life Network. It gives talent a serious stage, captures performance with quality, and turns raw creative energy into a polished cultural product.
              </p>
            </div>
          </div>

          <div className={styles.sessionsFormats}>
            <div className={styles.formatCard}>
              <h4>Live Performances</h4>
              <p>Artist-led performances with strong sound and visual presence.</p>
            </div>
            <div className={styles.formatCard}>
              <h4>DJ Live Sessions</h4>
              <p>Curated DJ sets built for culture, movement, and discovery.</p>
            </div>
            <div className={styles.formatCard}>
              <h4>Band Sessions</h4>
              <p>Live instrumentation and performance formats with premium production.</p>
            </div>
            <div className={styles.formatCard}>
              <h4>Acoustic Sessions</h4>
              <p>Stripped-down performances that reveal talent and emotion.</p>
            </div>
            <div className={styles.formatCard}>
              <h4>Cyphers</h4>
              <p>Freestyle, rap, spoken-word, and collaborative performance formats.</p>
            </div>
            <div className={styles.formatCard}>
              <h4>Collaborations</h4>
              <p>Special creative pairings, cultural moments, and branded features.</p>
            </div>
          </div>

          <div className={styles.sessionsFooter}>
            <p>The website explains the platform and its formats. YouTube hosts the full content, releases, and audience growth.</p>
            <a href="https://www.youtube.com/@1LifeNetworkTV" target="_blank" rel="noreferrer" className={styles.btnWatch}>Watch on YouTube</a>
          </div>
        </div>
      </section>

      {/* Services + Partners Section */}
      <section className={styles.section}>
        <div className={`${styles.container} ${styles.grid}`}>

          {/* Services */}
          <div className={styles.proCard}>
            <span className={styles.proCardEyebrow}>Services</span>
            <h2 className={styles.proCardTitle}>Commercial Creative Production.</h2>
            <p className={styles.proCardSub}>For artists, brands, campaigns, events, and cultural projects that need stronger execution.</p>
            <div className={styles.proList}>
              <div className={styles.proItem}>
                <span>Audio Production</span>
                <span className={styles.proDetail}>Recording • Mixing • Mastering</span>
              </div>
              <div className={styles.proItem}>
                <span>Visual Production</span>
                <span className={styles.proDetail}>Video • Photography • Campaigns</span>
              </div>
              <div className={styles.proItem}>
                <span>Live Session Production</span>
                <span className={styles.proDetail}>Format • Sound • Direction</span>
              </div>
              <div className={styles.proItem}>
                <span>Brand Storytelling</span>
                <span className={styles.proDetail}>Concept • Script • Visual World</span>
              </div>
              <div className={styles.proItem}>
                <span>Event Support</span>
                <span className={styles.proDetail}>Programming • Talent • Media</span>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div className={styles.proCard}>
            <span className={styles.proCardEyebrow}>Partners / Sponsors</span>
            <h2 className={styles.proCardTitle}>Partner With Culture In Motion.</h2>
            <p className={styles.proCardSub}>1Life gives brands access to talent, youth culture, live formats, content, and meaningful visibility.</p>
            <div className={styles.proList}>
              <div className={styles.proItem}>
                <span>Brand Partnerships</span>
                <span className={styles.proDetail}>Campaigns • Activations</span>
              </div>
              <div className={styles.proItem}>
                <span>Sponsorship Packages</span>
                <span className={styles.proDetail}>Sessions • Events • Media</span>
              </div>
              <div className={styles.proItem}>
                <span>Talent Collaborations</span>
                <span className={styles.proDetail}>Artists • DJs • Creators</span>
              </div>
              <div className={styles.proItem}>
                <span>Media Projects</span>
                <span className={styles.proDetail}>Films • Shows • Series</span>
              </div>
              <div className={styles.proItem}>
                <span>Institutional Partnerships</span>
                <span className={styles.proDetail}>Culture • Youth • Creative Economy</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Application Form */}
      <section className={styles.section} id="apply-form">
        <div className={`${styles.container} ${styles.formGrid}`}>
          <div className={styles.card}>
            <div className={styles.sectionHead} style={{ marginBottom: "18px" }}>
              <span className={styles.eyebrow}>Application</span>
              <h2 className={styles.sectionHeading}>
                Apply To Collaborate.
              </h2>
              <p>Ensure all portfolio and contact details are fully active.</p>
            </div>

            <SubmissionForm />
          </div>

          <div className={styles.card}>
            <h3>Submission Notes</h3>
            <ul>
              <li>Every profile goes into a cross-disciplinary talent base.</li>
              <li>Portfolios and actual work samples are reviewed first.</li>
              <li>Only shortlisted candidates will receive direct callback contact.</li>
            </ul>

            <div className={styles.note} style={{ marginTop: "22px" }}>
              <p>
                <strong>Important:</strong> Provide links that show your best 
                independent work. We care about execution, clarity, and consistency 
                more than expensive productions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

