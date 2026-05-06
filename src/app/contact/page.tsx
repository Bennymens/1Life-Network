"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./contact.module.css";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className={styles.container}>
      <Navbar />

      <header className={styles.hero}>
        <div className={styles.eyebrow}>Get in Touch</div>
        <h1 className={styles.title}>Let&apos;s Talk.</h1>
        <p className={styles.subtitle}>
          Whether it&apos;s a partnership, media inquiry, or general question —
          reach out and our team will respond within 48 hours.
        </p>
      </header>

      <section className={styles.content}>
        {/* Left: Info Cards */}
        <div className={styles.info}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </div>
            <h3>Email Us</h3>
            <p>For general inquiries and support requests.</p>
            <a href="mailto:hello@1lifenetwork.com" className={styles.infoLink}>hello@1lifenetwork.com</a>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </div>
            <h3>Partnerships</h3>
            <p>For brands, media, and industry collaboration.</p>
            <a href="mailto:partnerships@1lifenetwork.com" className={styles.infoLink}>partnerships@1lifenetwork.com</a>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </div>
            <h3>Location</h3>
            <p>Accra, Ghana — Operating across West Africa and globally.</p>
          </div>

          <div className={styles.infoCard}>
            <h3>Follow Us</h3>
            <div className={styles.socials}>
              <Link href="https://www.youtube.com/@1LifeNetworkTV" target="_blank" className={styles.socialIcon} aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg>
              </Link>
              <Link href="https://instagram.com/1lifenetwork" target="_blank" className={styles.socialIcon} aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
              </Link>
              <Link href="https://x.com/1lifenetwork" target="_blank" className={styles.socialIcon} aria-label="X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Link>
              <Link href="https://tiktok.com/@1life.network" target="_blank" className={styles.socialIcon} aria-label="TikTok">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Send a Message</h2>
          <p className={styles.formSub}>Fill out the form and we&apos;ll get back to you.</p>

          <form className={styles.form} method="POST" action="https://formspree.io/f/your-form-id">
            <input type="hidden" name="_subject" value="1Life Network Contact Form" />

            <div className={styles.row}>
              <label className={styles.label}>
                Full Name
                <input type="text" className={styles.input} name="name" placeholder="Your name" required />
              </label>
              <label className={styles.label}>
                Email
                <input type="email" className={styles.input} name="email" placeholder="you@example.com" required />
              </label>
            </div>

            <label className={styles.label}>
              Subject
              <select className={styles.select} name="subject" required>
                <option value="">Select a topic</option>
                <option>General Inquiry</option>
                <option>Media / Press</option>
                <option>Brand Partnership</option>
                <option>Artist Inquiry</option>
                <option>Event Booking</option>
                <option>Technical Support</option>
                <option>Other</option>
              </select>
            </label>

            <label className={styles.label}>
              Message
              <textarea className={styles.textarea} name="message" placeholder="Tell us what you need..." required></textarea>
            </label>

            <button className={styles.btnSubmit} type="submit">Send Message</button>
            <p className={styles.fine}>Your message is processed securely. We typically respond within 48 hours.</p>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
