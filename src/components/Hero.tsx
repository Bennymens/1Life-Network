"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import styles from "./Hero.module.css";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const imageSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.to(eyebrowRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
      })
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
      }, "-=0.8")
      .to(dotRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      }, "-=0.6")
      .to(imageSectionRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.5,
      }, "-=1");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={containerRef}>
      <div className={styles.coordinates}>
        5.6037° N &bull; 0.1870° W
      </div>
      
      <div className={styles.textSection}>
        <div className={styles.eyebrow} ref={eyebrowRef} style={{ transform: "translateY(10px)" }}>
          Storytellers &mdash; Culture &mdash; Voice
        </div>
        <h1 className={styles.title} ref={titleRef} style={{ transform: "translateY(20px)" }}>
          We turn <span>unknown</span> artists<br />
          into <span>visible</span> ones.
        </h1>
        <p className={styles.lead}>
          1Life Network is a media platform built to discover talent, shape the presentation, and push the work into real visibility.
        </p>
        <div className={styles.heroActions}>
          <Link href="/submit" className={styles.btnPrimary}>Submit Your Music</Link>
          <Link href="/sessions" className={styles.btnSecondary}>See The Work</Link>
        </div>
        <div className={styles.dot} ref={dotRef} style={{ transform: "scale(0)" }} />
      </div>

      <div className={styles.heroStrip}>
        <div className={styles.heroChip}>
          <div className={styles.chipKey}>Discover</div>
          <div className={styles.chipVal}>Find artists with real presence.</div>
        </div>
        <div className={styles.heroChip}>
          <div className={styles.chipKey}>Build</div>
          <div className={styles.chipVal}>Sharpen the sound and image.</div>
        </div>
        <div className={styles.heroChip}>
          <div className={styles.chipKey}>Expose</div>
          <div className={styles.chipVal}>Move the work into public view.</div>
        </div>
      </div>

      <div className={styles.imageSection} ref={imageSectionRef} style={{ transform: "translateY(50px)" }}>
        <Image 
          src="/images/IMG_3526 (1).JPG" 
          alt="1Life Network Cinematic View" 
          fill 
          className={styles.heroImage}
          priority
          quality={100}
          unoptimized={true}
        />
        <div className={styles.overlay} />
        <div className={styles.heroNote}>
          <div className={styles.heroNoteLabel}>1Life Sessions</div>
          <div className={styles.heroNoteTitle}>A sharper room for artists who should not stay unseen.</div>
        </div>
      </div>
    </section>
  );
}
