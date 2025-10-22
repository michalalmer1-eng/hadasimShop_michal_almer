"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Globe, Menu, User } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header} role="banner">
      {/* Logo */}
      <Link href="/" className={styles.logo} aria-label="Hadasim Boutique">
        <Image
          src="/images/products/logo.png"
          alt="Hadasim logo"
          width={120}
          height={40}
          priority
          className={styles.logoImg}
        />
      </Link>

      {/* Search */}
      <div className={styles.searchPill} role="search" aria-label="Search products">
        <button className={styles.segment} aria-label="Filter by category">All products</button>
        <span className={styles.dot} aria-hidden="true">•</span>
        <button className={styles.segment} aria-label="Filter by size">Any size</button>
        <span className={styles.dot} aria-hidden="true">•</span>
        <button className={styles.segmentMuted} aria-label="Filter by price">Any price</button>
        <button className={styles.searchBtn} aria-label="Search">
          <Search size={16} />
        </button>
      </div>

      {/* Right side */}
      <nav className={styles.nav} aria-label="Top navigation">
        <button className={styles.iconBtn} aria-label="Language and currency">
          <Globe size={18} />
        </button>

        <Link href="/account" className={styles.iconBtn} aria-label="Account">
          <User size={18} />
        </Link>

        <Link href="/register" className={styles.signupBtn} aria-label="Sign up">
          Sign up
        </Link>

        <button className={styles.profileBtn} aria-label="Menu">
          <Menu size={18} />
        </button>
      </nav>
    </header>
  );
}
