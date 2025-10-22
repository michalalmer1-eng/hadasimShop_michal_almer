"use client";

import { useState, MouseEvent } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import styles from "./card.module.css";

export interface CardProps {
  image: StaticImageData | string; // supports both static import and string path
  title: string;
  description: string;
  price: number;            // product price
  href?: string;            // product details page (optional)
  inv: {                    // inventory per branch
    hifa: number;           // Haifa
    tlv: number;            // Tel Aviv
    eilat: number;          // Eilat
  };
  onLikeChange?: (liked: boolean) => void;
}

export default function Card({
  image,
  title,
  description,
  price,
  href,
  inv,
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

  const totalStock = (inv?.hifa ?? 0) + (inv?.tlv ?? 0) + (inv?.eilat ?? 0);

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
          aria-label={liked ? "Remove from favorites" : "Add to favorites"}
          onClick={toggleLike}
        >
          <Heart size={18} />
        </button>
      </div>

      <div className={styles.info}>
        <div className={styles.rowTop}>
          <h3 className={styles.title} title={title}>{title}</h3>
          {Number.isFinite(totalStock) && (
            <div
              className={styles.stockBadge ?? ""}
              aria-label={`Stock: total ${totalStock}`}
              title={`Total stock: ${totalStock}`}
              style={{ fontSize: 12, opacity: 0.8 }}
            >
              {totalStock} in stock
            </div>
          )}
        </div>

        {/* Inventory per branch */}
        <div
          className={styles.inventory ?? ""}
          aria-label={`Inventory per branch`}
          style={{ display: "flex", gap: 12, fontSize: 12, opacity: 0.9 }}
        >
          <span title="Haifa">Haifa: {inv?.hifa ?? 0}</span>
          <span title="Tel Aviv">Tel Aviv: {inv?.tlv ?? 0}</span>
          <span title="Eilat">Eilat: {inv?.eilat ?? 0}</span>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.priceLine}>
          <span className={styles.priceVal}>
            {new Intl.NumberFormat("he-IL", {
              style: "currency",
              currency: "ILS",
              maximumFractionDigits: 0,
            }).format(price)}
          </span>
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
