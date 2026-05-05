"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <div className={styles.logoMain}><span>1</span>LIFE</div>
          <div className={styles.logoSub}>NETWORK</div>
        </Link>
      </div>

      <div className={styles.navLinks}>
        <Link href="/" className={pathname === "/" ? styles.active : ""}>Home</Link>
        <Link href="/sessions" className={pathname === "/sessions" ? styles.active : ""}>Watch</Link>
        <Link href="/artists" className={pathname === "/artists" ? styles.active : ""}>Artists</Link>
        <Link href="/submit" className={pathname === "/submit" ? styles.active : ""}>Apply</Link>
        <Link href="/partners" className={pathname === "/partners" ? styles.active : ""}>Partner</Link>
        <Link href="/about" className={pathname === "/about" ? styles.active : ""}>About</Link>
        <Link href="/submit">Contact</Link>
      </div>

      <div className={styles.navActions}>
        <Link href="https://www.youtube.com/@1LifeNetworkTV" target="_blank" className={styles.btnChannel}>
          Channel
        </Link>
        <Link href="/sessions" className={styles.btnWatch}>
          Watch Now
        </Link>
      </div>

      <button className={`${styles.hamburger} ${isOpen ? styles.open : ""}`} onClick={toggleMenu} aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </button>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <Link href="/" onClick={toggleMenu} className={pathname === "/" ? styles.active : ""}>Home</Link>
        <Link href="/sessions" onClick={toggleMenu} className={pathname === "/sessions" ? styles.active : ""}>Watch</Link>
        <Link href="/artists" onClick={toggleMenu} className={pathname === "/artists" ? styles.active : ""}>Artists</Link>
        <Link href="/submit" onClick={toggleMenu} className={pathname === "/submit" ? styles.active : ""}>Apply</Link>
        <Link href="/partners" onClick={toggleMenu} className={pathname === "/partners" ? styles.active : ""}>Partner</Link>
        <Link href="/about" onClick={toggleMenu} className={pathname === "/about" ? styles.active : ""}>About</Link>
        <Link href="/submit" onClick={toggleMenu}>Contact</Link>
      </div>
    </nav>
  );
}

