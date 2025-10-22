// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // אם את משתמשת גם ב־<img> רגיל זה לא נדרש,
    // אבל ל-<Image> חייבים לאפשר דומיינים חיצוניים:
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.discordapp.net", // הלוגו מהקישור ששלחת
      },
      // הוסיפי כאן את דומיין התמונות של ה"Factory" אם את טוענת ממנו:
      // { protocol: "https", hostname: "cdn.your-factory-domain.com" },
    ],
    formats: ["image/avif", "image/webp"], // אופטימיזציה
    // אם את משתמשת בלוגו SVG עם <Image src="/images/hadasim-logo.svg">:
    // danger: אם את טוענת SVG חיצוני, השאירי false.
    dangerouslyAllowSVG: false,
  },
  reactStrictMode: true,
};

export default nextConfig;
