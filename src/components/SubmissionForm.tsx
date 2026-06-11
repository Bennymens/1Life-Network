"use client";

import { useState } from "react";
import styles from "./SubmissionForm.module.css";

export default function SubmissionForm() {
  const [role, setRole] = useState("");

  return (
    <form className={styles.form} method="POST" action="https://formspree.io/f/your-form-id" encType="multipart/form-data">
      <input type="hidden" name="_subject" value="1Life Network Application Submission" />

      {/* SECTION 01: BASIC DETAILS */}
      <div className={styles.sectionTitle}>
        <span className={styles.sectionEyebrow}>Section 01</span>
        <h3 className={styles.sectionHeading}>Basic Details</h3>
      </div>

      <div className={styles.row}>
        <label className={styles.label}>
          Full Name *
          <input type="text" className={styles.input} name="full_name" placeholder="Your full name" required />
        </label>
        <label className={styles.label}>
          Stage Name / Brand Name
          <input type="text" className={styles.input} name="stage_name" placeholder="e.g. Stage or Studio name" />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.label}>
          Email Address *
          <input type="email" className={styles.input} name="email" placeholder="you@example.com" required />
        </label>
        <label className={styles.label}>
          Phone / WhatsApp Number *
          <input type="text" className={styles.input} name="phone" placeholder="+233..." required />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.label}>
          City / Country *
          <input type="text" className={styles.input} name="location" placeholder="Accra, Ghana" required />
        </label>
        <label className={styles.label}>
          Age *
          <input type="number" className={styles.input} name="age" placeholder="Your age" required min="1" max="120" />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.label}>
          Instagram Handle
          <div className={styles.inputWrapper}>
            <span className={styles.inputPrefix}>@</span>
            <input type="text" className={`${styles.input} ${styles.inputWithPrefix}`} name="instagram" placeholder="instagramhandle" />
          </div>
        </label>
        <label className={styles.label}>
          TikTok Handle
          <div className={styles.inputWrapper}>
            <span className={styles.inputPrefix}>@</span>
            <input type="text" className={`${styles.input} ${styles.inputWithPrefix}`} name="tiktok" placeholder="tiktokhandle" />
          </div>
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.label} style={{ gridColumn: "1 / -1" }}>
          YouTube / Other Platform
          <input type="text" className={styles.input} name="youtube_platform" placeholder="Link to channel, website, or other primary profile" />
        </label>
      </div>

      {/* SECTION 02: YOUR CATEGORY */}
      <div className={styles.sectionTitle}>
        <span className={styles.sectionEyebrow}>Section 02</span>
        <h3 className={styles.sectionHeading}>Your Category</h3>
      </div>

      <div className={styles.row}>
        <label className={styles.label}>
          What best describes you? *
          <select 
            className={styles.select} 
            name="creative_role" 
            value={role} 
            onChange={(e) => setRole(e.target.value)} 
            required
          >
            <option value="">Select one</option>
            <option value="Artist">Artist / Musician</option>
            <option value="Producer">Producer</option>
            <option value="DJ">DJ</option>
            <option value="Director">Director (Video / Art)</option>
            <option value="Photographer">Photographer</option>
            <option value="Editor">Editor</option>
            <option value="Stylist">Stylist</option>
            <option value="Designer">Designer</option>
            <option value="Writer">Writer / Copywriter</option>
            <option value="Creative Strategist">Creative Strategist</option>
            <option value="Other">Other</option>
          </select>
        </label>
        
        <label className={styles.label}>
          Primary Genre / Style
          <input type="text" className={styles.input} name="specialty" placeholder="e.g. Afrobeats, Fashion, Portraiture" />
        </label>
      </div>

      {/* Conditional Other Field */}
      {role === "Other" && (
        <div className={styles.row}>
          <label className={styles.label} style={{ gridColumn: "1 / -1" }}>
            Please specify your role *
            <input type="text" className={styles.input} name="custom_role" placeholder="e.g. Creative Director, Event Producer" required />
          </label>
        </div>
      )}

      {/* SECTION 03: YOUR WORK */}
      <div className={styles.sectionTitle}>
        <span className={styles.sectionEyebrow}>Section 03</span>
        <h3 className={styles.sectionHeading}>Your Work</h3>
      </div>

      <div className={styles.row} style={{ display: "block" }}>
        <label className={styles.label}>
          Share up to 3 links to your best work *
          <textarea 
            className={styles.textarea} 
            name="work_links" 
            placeholder="Spotify, Apple Music, YouTube, Instagram, SoundCloud, TikTok, etc." 
            required
          ></textarea>
          <small className={styles.small} style={{ marginTop: "4px", display: "block" }}>
            Send only your strongest work.
          </small>
        </label>
      </div>

      <div className={styles.row} style={{ marginTop: "12px" }}>
        <label className={styles.label}>
          Upload Photos / Press Images
          <input type="file" name="photos" className={styles.fileInput} multiple accept="image/*" />
        </label>
        <label className={styles.label}>
          Upload Music / Video File
          <input type="file" name="media_file" className={styles.fileInput} accept="audio/*,video/*" />
        </label>
      </div>

      {/* SECTION 04: WHO YOU ARE */}
      <div className={styles.sectionTitle}>
        <span className={styles.sectionEyebrow}>Section 04</span>
        <h3 className={styles.sectionHeading}>Who You Are</h3>
      </div>

      <div className={styles.row} style={{ display: "block" }}>
        <label className={styles.label} style={{ marginBottom: "16px" }}>
          Why should we pay attention to you? *
          <textarea className={styles.textarea} style={{ minHeight: "100px" }} name="why_pay_attention" placeholder="What makes your execution, perspective, or sound unique?" required></textarea>
        </label>
      </div>

      <div className={styles.row} style={{ display: "block" }}>
        <label className={styles.label} style={{ marginBottom: "16px" }}>
          What have you already built on your own? *
          <textarea className={styles.textarea} style={{ minHeight: "100px" }} name="already_built" placeholder="List projects, releases, brand placements, portfolios, or traction you've earned independently." required></textarea>
        </label>
      </div>

      <div className={styles.row} style={{ display: "block" }}>
        <label className={styles.label} style={{ marginBottom: "16px" }}>
          Why is now the right time for you? *
          <textarea className={styles.textarea} style={{ minHeight: "100px" }} name="why_now" placeholder="What is your focus right now and why do you need the 1Life ecosystem at this moment?" required></textarea>
        </label>
      </div>

      <div className={styles.row} style={{ display: "block" }}>
        <label className={styles.label} style={{ marginBottom: "16px" }}>
          Where do you want to be in 3 years? *
          <textarea className={styles.textarea} style={{ minHeight: "100px" }} name="three_years_goal" placeholder="What is the scale of your career or creative business plan?" required></textarea>
        </label>
      </div>

      {/* SECTION 05: WORK ETHIC & READINESS */}
      <div className={styles.sectionTitle}>
        <span className={styles.sectionEyebrow}>Section 05</span>
        <h3 className={styles.sectionHeading}>Work Ethic &amp; Readiness</h3>
      </div>

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
