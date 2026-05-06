"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./artists.module.css";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const artists = [
  {
    name: "KiKi Celine",
    genre: "Soul / Afro-fusion",
    badge: "Live Session",
    desc: 'Soul / Afro-fusion Artist based in Accra. Known for the hit session "Fragile".',
    thumb: "https://img.youtube.com/vi/33W9U5J_8uY/maxresdefault.jpg",
    link: "https://youtu.be/33W9U5J_8uY",
  },
  {
    name: "Jay Bahd",
    genre: "Asakaa / Drill",
    badge: "Asakaa / Drill",
    desc: "A major voice in the Asakaa movement, defining the sound of Kumasi.",
    thumb: "https://img.youtube.com/vi/VxR9n94COSQ/maxresdefault.jpg",
    link: "https://youtu.be/VxR9n94COSQ",
  },
  {
    name: "Kaesa",
    genre: "Afrobeats",
    badge: "Afrobeats",
    desc: "Rising star with a unique vocal texture and infectious energy.",
    thumb: "https://img.youtube.com/vi/HPPeGGXro10/maxresdefault.jpg",
    link: "https://youtu.be/HPPeGGXro10",
  },
];

const pipeline = [
  {
    num: "01",
    title: "Discovery",
    desc: "We scout through submissions and live flagship sessions. If you have it, we will find you.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
    ),
  },
  {
    num: "02",
    title: "Production",
    desc: "Sound engineering, visual identity, and high-impact content production — all under one roof.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
    ),
  },
  {
    num: "03",
    title: "Exposure",
    desc: "Global media placement and audience building through the 1Life Network ecosystem.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
    ),
  },
];

export default function ArtistsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubRef = useRef<HTMLParagraphElement>(null);
  const heroBtnRef = useRef<HTMLAnchorElement>(null);
  const quickLinksRef = useRef<HTMLElement>(null);
  const artistCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const pipelineCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });
      heroTl
        .fromTo(heroTitleRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.2 })
        .fromTo(heroSubRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, "-=0.7")
        .fromTo(heroBtnRef.current, { opacity: 0, y: 20, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.8 }, "-=0.5");

      // Quick Links stagger
      if (quickLinksRef.current) {
        gsap.fromTo(
          quickLinksRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
            scrollTrigger: { trigger: quickLinksRef.current, start: "top 85%" },
          }
        );
      }

      // Artist cards
      artistCardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 80, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1, duration: 1, delay: i * 0.2, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%" },
          }
        );
      });

      // Pipeline cards
      pipelineCardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, x: -60 },
          {
            opacity: 1, x: 0, duration: 0.9, delay: i * 0.2, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%" },
          }
        );
      });

      // CTA section
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out",
            scrollTrigger: { trigger: ctaRef.current, start: "top 80%" },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className={styles.container} ref={containerRef}>
      <Navbar />

      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>The Talent</div>
          <h1 className={styles.title} ref={heroTitleRef}>Global Legends<br />In the Making.</h1>
          <p className={styles.subtitle} ref={heroSubRef}>
            We don&apos;t just manage artists; we build legacies. Our discovery engine is
            constantly scouting for the next generation of African creative excellence.
          </p>
          <Link href="/submit" className={styles.btnPrimary} ref={heroBtnRef}>Join The Network</Link>
        </div>
      </header>

      <section className={styles.quickLinks} ref={quickLinksRef}>
        <Link href="/sessions" className={styles.quickCard}>
          <div className={styles.icon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <div>
            <strong>Watch Sessions</strong>
            <span>See the latest performances from our artists.</span>
          </div>
        </Link>
        <Link href="/submit" className={styles.quickCard}>
          <div className={styles.icon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"/></svg>
          </div>
          <div>
            <strong>Apply Now</strong>
            <span>Submit your music for review by our team.</span>
          </div>
        </Link>
        <Link href="/partners" className={styles.quickCard}>
          <div className={styles.icon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
          </div>
          <div>
            <strong>Partner</strong>
            <span>Collaborate with our talent and production engine.</span>
          </div>
        </Link>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <div className={styles.eyebrow}>Roster</div>
            <h2>Featured Artists</h2>
          </div>
          <Link href="/sessions" className="btn-ghost">View All &rarr;</Link>
        </div>
        <div className={styles.grid}>
          {artists.map((artist, i) => (
            <div
              key={artist.name}
              className={styles.artistCard}
              style={{ backgroundImage: `linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.95) 100%), url(${artist.thumb})`, backgroundSize: "cover", backgroundPosition: "center" }}
              ref={(el) => { artistCardsRef.current[i] = el; }}
            >
              <div className={styles.artistInfo}>
                <div className={styles.badge}>{artist.badge}</div>
                <strong>{artist.name}</strong>
                <span>{artist.desc}</span>
                <Link href={artist.link} target="_blank" className={styles.btnPrimary}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: "8px" }}><path d="M8 5v14l11-7z"/></svg>
                  Watch Session
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.pipelineSection}>
        <div className={styles.sectionHead}>
          <div>
            <div className={styles.eyebrow}>The System</div>
            <h2>How We Build Artists</h2>
          </div>
        </div>
        <div className={styles.pipelineGrid}>
          {pipeline.map((step, i) => (
            <div
              key={step.num}
              className={styles.pipelineCard}
              ref={(el) => { pipelineCardsRef.current[i] = el; }}
            >
              <div className={styles.pipelineNum}>{step.num}</div>
              <div className={styles.pipelineIcon}>{step.icon}</div>
              <div className={styles.pipelineTitle}>{step.title}</div>
              <div className={styles.pipelineDesc}>{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection} ref={ctaRef}>
        <div className={styles.eyebrow} style={{ justifyContent: "center" }}>Entry Point</div>
        <h2 className={styles.ctaTitle}>Ready to enter<br />the system?</h2>
        <p className={styles.ctaSub}>
          We are always looking for the next generation of creative giants.
          If your work matches our standards, let&apos;s build.
        </p>
        <Link href="/submit" className={styles.ctaBtn}>Apply to Join</Link>
      </section>

      <Footer />
    </main>
  );
}
