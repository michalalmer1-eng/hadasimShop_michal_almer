"use client";

import { useState, MouseEvent } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import styles from "./card.module.css";

export interface CardProps {
  image: StaticImageData | string; // תומך גם ב-import סטטי וגם במחרוזת
  title: string;
  description: string;
  price: number;            // מחיר ללילה
  href?: string;            // עמוד פרטים (אופציונלי)
  rating?: number;          // 4.83 (אופציונלי)
  locationLabel?: string;   // "ירושלים, ישראל" (אופציונלי)
  onLikeChange?: (liked: boolean) => void;
}

export default function Card({
  image,
  title,
  description,
  price,
  href,
  rating,
  locationLabel,
  onLikeChange,
}: CardProps) {
  const [liked, setLiked] = useState(false);

  const toggleLike = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setLiked((v) => {
      const next = !v;
      onLikeChange?.(next);
      return next;
    });
  };

  const content = (
    <article className={styles.card} role="group" aria-label={title}>
      <div className={styles.media}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 33vw"
          className={styles.image}
          priority={false}
        />
        <button
          type="button"
          className={`${styles.likeBtn} ${liked ? styles.liked : ""}`}
          aria-pressed={liked}
          aria-label={liked ? "הסר ממועדפים" : "הוסף למועדפים"}
          onClick={toggleLike}
        >
          <Heart size={18} />
        </button>
      </div>

      <div className={styles.info}>
        <div className={styles.rowTop}>
          <h3 className={styles.title} title={title}>{title}</h3>

          {typeof rating === "number" && (
            <div className={styles.rating} aria-label={`דירוג ${rating}`}>
              <Star size={14} className={styles.star} />
              <span>{rating.toFixed(2)}</span>
            </div>
          )}
        </div>

        {locationLabel && (
          <div className={styles.location} title={locationLabel}>
            {locationLabel}
          </div>
        )}

        <p className={styles.description}>{description}</p>

        <div className={styles.priceLine}>
          <span className={styles.priceVal}>
            {new Intl.NumberFormat("he-IL", {
              style: "currency",
              currency: "ILS",
              maximumFractionDigits: 0,
            }).format(price)}
          </span>
          <span className={styles.perNight}> ‏ללילה</span>
        </div>
      </div>
    </article>
  );

  return href ? (
    <Link href={href} className={styles.linkWrap} prefetch>
      {content}
    </Link>
  ) : (
    content
  );
}
