import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.col}>
            <div className={styles.logo}>
              <Link href="/">
                <span>1</span>LIFE<small>NETWORK</small>
              </Link>
            </div>
            <p className={styles.tagline}>
              Building globally competitive African creative output through 
              systems, standards, and execution.
            </p>
          </div>

          <div className={styles.col}>
            <h4>Platform</h4>
            <ul>
              <li><Link href="/sessions">1Life Sessions</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/ecosystem">The Ecosystem</Link></li>
              <li><Link href="/#services">Our Services</Link></li>
            </ul>
          </div>


          <div className={styles.col}>
            <h4>Connect</h4>
            <ul>
              <li><Link href="https://www.youtube.com/@1LifeNetworkTV" target="_blank">YouTube</Link></li>
              <li><Link href="https://instagram.com/1lifenetwork?igsh=MXBla203aGh2bDQ3eQ==" target="_blank">Instagram</Link></li>
              <li><Link href="https://tiktok.com/@1life.network?_t=ZS-8xwqrtszBOq&_r=1" target="_blank">TikTok</Link></li>
              <li><Link href="https://facebook.com/share/1B5XRjbAxL/?mibextid=wwXIfr" target="_blank">Facebook</Link></li>
              <li><Link href="https://x.com/1lifenetwork?s=21" target="_blank">Twitter / X</Link></li>
            </ul>
          </div>


          <div className={styles.col}>
            <h4>Get Involved</h4>
            <ul>
              <li><Link href="/submit">Submit Talent</Link></li>
              <li><Link href="/partners">Become a Partner</Link></li>
              <li><Link href="/contact">Media Inquiries</Link></li>
              <li><Link href="/contact">Contact Support</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} 1Life Network. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="/privacy" style={{ marginRight: "20px" }}>Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
