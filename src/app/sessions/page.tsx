import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./sessions.module.css";
import Link from "next/link";
import fs from "fs";
import path from "path";
import type { VideosData } from "@/data/types";

function getVideos(): VideosData {
  const filePath = path.join(process.cwd(), "src", "data", "videos.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

export const dynamic = "force-dynamic";

export default function SessionsPage() {
  const ytChannel = "https://www.youtube.com/@1LifeNetworkTV";
  const data = getVideos();

  return (
    <main className={styles.container}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="eyebrow">1Life Network Hub</div>
        <h1>The Future of African <br />Entertainment.</h1>
        <p>
          The digital headquarters for 1Life Network. Discover, watch, and
          join the movement that is defining the global African creative system.
        </p>
      </section>

      {/* Featured Sessions */}
      <section id="featured" className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <div className="eyebrow">Flagship Platform</div>
            <h2 className={styles.sectionTitle}>Featured Sessions</h2>
          </div>
          <Link href={ytChannel} target="_blank" className="btn-ghost">View Channel &rarr;</Link>
        </div>

        <div className={styles.grid}>
          {data.sessions.map((video) => (
            <Link key={video.id} href={`https://youtu.be/${video.youtubeId}`} target="_blank" className={styles.mediaCard}>
              <div className={styles.thumb} style={{ backgroundImage: `url(https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className={styles.artistName}>{video.artist}</div>
                <div className={styles.playBtn}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className="eyebrow" style={{ fontSize: '10px' }}>{video.category}</div>
                <h4>{video.title}</h4>
                <p>{video.description}</p>
                <span className={styles.cardAction}>Watch on YouTube</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Interviews */}
      <section id="interviews" className={styles.section} style={{ borderTop: 'none', paddingTop: '0' }}>
        <div className={styles.sectionHeader}>
          <div>
            <div className="eyebrow">The Conversation</div>
            <h2 className={styles.sectionTitle}>Featured Interviews</h2>
          </div>
          <Link href={ytChannel} target="_blank" className="btn-ghost">Watch More &rarr;</Link>
        </div>

        <div className={styles.grid}>
          {data.interviews.map((video) => (
            <Link key={video.id} href={`https://youtu.be/${video.youtubeId}`} target="_blank" className={styles.mediaCard}>
              <div className={styles.thumb} style={{ backgroundImage: `url(https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className={styles.artistName}>{video.artist}</div>
                <div className={styles.playBtn}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className="eyebrow" style={{ fontSize: '10px' }}>{video.category}</div>
                <h4>{video.title}</h4>
                <p>{video.description}</p>
                <span className={styles.cardAction}>Watch on YouTube</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Emerging Artists */}
      <section className={styles.section} style={{ background: '#050505' }}>
        <div className={styles.sectionHeader}>
          <div>
            <div className="eyebrow">The Talent</div>
            <h2 className={styles.sectionTitle}>Emerging Artists</h2>
          </div>
          <Link href="/submit" className="btn-ghost">Apply &rarr;</Link>
        </div>

        <div className={styles.grid}>
          {/* Card 1: Discovery */}
          <div className={styles.mediaCard}>
            <div className={styles.cardBody}>
              <div className="eyebrow" style={{ fontSize: '10px' }}>Discovery</div>
              <h4>Structured artist intake</h4>
              <p>Join the ecosystem through our data-driven scouting and controlled intake process.</p>
              <Link href="/submit" className={styles.cardAction}>Apply</Link>
            </div>
          </div>

          {/* Card 2: Development */}
          <div className={styles.mediaCard}>
            <div className={styles.cardBody}>
              <div className="eyebrow" style={{ fontSize: '10px' }}>Development</div>
              <h4>Production, sessions, media visibility</h4>
              <p>We refine the sound and visual storytelling of our artists through our world-class engine.</p>
              <Link href="/ecosystem" className={styles.cardAction}>How it works</Link>
            </div>
          </div>

          {/* Card 3: Proof */}
          <div className={styles.mediaCard}>
            <div className={styles.cardBody}>
              <div className="eyebrow" style={{ fontSize: '10px' }}>Proof</div>
              <h4>Public performance and brand credibility</h4>
              <p>Watch our talent stand out on global stages and local flagship sessions.</p>
              <Link href="#featured" className={styles.cardAction}>Watch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Moves */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <div className="eyebrow">The Timeline</div>
            <h2 className={styles.sectionTitle}>Upcoming Moves</h2>
          </div>
          <Link href="/submit" className="btn-ghost">Partner &rarr;</Link>
        </div>

        <div className={styles.grid}>
          {/* Card 1: Artist Intake */}
          <div className={styles.mediaCard}>
            <div className={styles.cardBody}>
              <div className="eyebrow" style={{ fontSize: '10px' }}>Artist Intake</div>
              <h4>Residency and submission pathway</h4>
              <p>New session blocks opening for emerging talent. Secure your spot in the engine room.</p>
              <Link href="/submit" className={styles.cardAction}>Submit</Link>
            </div>
          </div>

          {/* Card 2: Brand Partnerships */}
          <div className={styles.mediaCard}>
            <div className={styles.cardBody}>
              <div className="eyebrow" style={{ fontSize: '10px' }}>Brand Partnerships</div>
              <h4>Content-backed sponsorship opportunity</h4>
              <p>Authentic cultural engagement through high-impact session integrations and media placements.</p>
              <Link href="/submit" className={styles.cardAction}>Inquire</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
