"use client";

import Link from "next/link";
import { Search, Globe, Menu, User } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header} role="banner">
      {/* לוגו (בֵּלוֹ) */}
      <Link href="/" className={styles.logo} aria-label="Airbnb">
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className={styles.belo}
          focusable="false"
        >
          <path
            d="M16.04 23.7c-1.47 0-2.66-1.2-2.66-2.67 0-1.46 1.19-2.66 2.66-2.66s2.66 1.2 2.66 2.66-1.19 2.67-2.66 2.67Zm6.38 1.77c2.18-1.63 3.6-3.71 3.6-6.53 0-3.23-2.2-6.37-6.52-11.86-.7-.91-1.6-1.51-2.56-1.51s-1.86.6-2.55 1.51C9.08 12.56 6.9 15.7 6.9 18.94c0 2.81 1.42 4.89 3.6 6.53 1.49 1.12 3.28 1.83 5.54 1.83s4.06-.71 5.54-1.83Zm-5.54-18c.27 0 .6.2.92.62 4.02 5.28 5.98 8.22 5.98 10.85 0 1.88-.84 3.33-2.5 4.58-1.16.87-2.64 1.41-4.4 1.41s-3.24-.54-4.4-1.41c-1.66-1.25-2.5-2.7-2.5-4.58 0-2.63 1.96-5.57 5.98-10.85.32-.42.65-.62.92-.62Z"
            fill="currentColor"
          />
        </svg>
        <span className={styles.brand}>airbnb</span>
      </Link>

      {/* שורת חיפוש בסגנון Airbnb */}
      <div className={styles.searchPill} role="search" aria-label="חיפוש">
        <button className={styles.segment} aria-label="יעד">
          בכל מקום
        </button>
        <span className={styles.dot} aria-hidden="true">•</span>
        <button className={styles.segment} aria-label="תאריכים">
          כל זמן
        </button>
        <span className={styles.dot} aria-hidden="true">•</span>
        <button className={styles.segmentMuted} aria-label="אורחים">
          הוסיפו אורחים
        </button>
        <button className={styles.searchBtn} aria-label="חיפוש">
          <Search size={16} />
        </button>
      </div>

      {/* צד ימין – ניווט קצר */}
      <nav className={styles.nav} aria-label="ניווט עליון">
        <Link href="#" className={styles.hostLink}>אני רוצה לארח</Link>
        <button className={styles.iconBtn} aria-label="בחירת שפה ומטבע">
          <Globe size={18} />
        </button>

        <button
          className={styles.profileBtn}
          aria-label="תפריט משתמש"
        >
          <Menu size={18} />
          <User size={18} className={styles.userIcon}/>
        </button>
      </nav>
    </header>
  );
}
