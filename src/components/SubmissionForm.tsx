"use client";

import styles from "./SubmissionForm.module.css";

export default function SubmissionForm() {
  return (
    <form className={styles.form} method="POST" action="https://formspree.io/f/your-form-id">
      <input type="hidden" name="_subject" value="1Life Global Class Submission" />

      <div className={styles.row}>
        <label className={styles.label}>
          Full name
          <input type="text" className={styles.input} name="full_name" placeholder="Your full name" required />
        </label>
        <label className={styles.label}>
          Stage name
          <input type="text" className={styles.input} name="stage_name" placeholder="Your artist name" required />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.label}>
          Email address
          <input type="email" className={styles.input} name="email" placeholder="you@example.com" required />
        </label>
        <label className={styles.label}>
          Phone / WhatsApp
          <input type="text" className={styles.input} name="phone" placeholder="+233..." required />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.label}>
          Location
          <input type="text" className={styles.input} name="location" placeholder="City / Country" required />
        </label>
        <label className={styles.label}>
          Genre
          <select className={styles.select} name="genre" required>
            <option value="">Select genre</option>
            <option>Afrobeats</option>
            <option>Alternative</option>
            <option>R&amp;B</option>
            <option>Hip Hop</option>
            <option>Gospel</option>
            <option>Highlife</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.label}>
          Instagram link
          <input type="url" className={styles.input} name="instagram" placeholder="https://instagram.com/..." />
        </label>
        <label className={styles.label}>
          TikTok / YouTube / Streaming link
          <input type="url" className={styles.input} name="music_link" placeholder="https://..." required />
        </label>
      </div>

      <label className={styles.label}>
        Live performance video link
        <input type="url" className={styles.input} name="live_video" placeholder="Required live performance URL" required />
        <small className={styles.small}>Mandatory. If you cannot perform live, do not apply.</small>
      </label>

      <label className={styles.label}>
        Why should you be selected?
        <textarea className={styles.textarea} name="why_you" placeholder="Be direct. No long story. Why you?" required></textarea>
      </label>

      <label className={styles.label}>
        What have you already released?
        <textarea className={styles.textarea} name="releases" placeholder="List songs, projects, notable performances, or collaborations."></textarea>
      </label>

      <label className={styles.label}>
        Management status
        <select className={styles.select} name="management_status" required>
          <option value="">Select one</option>
          <option>Independent</option>
          <option>Managed</option>
          <option>Signed</option>
        </select>
      </label>

      <label className={styles.check}>
        <input type="checkbox" className={styles.checkbox} name="consent_truth" required />
        <span className={styles.checkText}>I confirm that the information submitted is accurate and that I have the right to share all links and material included in this application.</span>
      </label>

      <label className={styles.check}>
        <input type="checkbox" className={styles.checkbox} name="consent_contact" required />
        <span className={styles.checkText}>I agree to be contacted by 1Life Network regarding this application.</span>
      </label>

      <button className={styles.btnPrimary} type="submit">Submit Application</button>
      <p className={styles.fine}>Form is processed securely via Formspree.</p>
    </form>
  );
}
