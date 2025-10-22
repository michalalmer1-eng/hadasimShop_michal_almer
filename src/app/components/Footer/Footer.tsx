"use client";

import { useRef } from "react";
import styles from "./Footer.module.css";
import RegistrationForm from "@/app/components/RegistrationForm/RegistrationForm";

export default function Footer() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <footer className={styles.footer} dir="rtl">
      <div className={styles.inner}>
        <span className={styles.copy}>© {new Date().getFullYear()} אתר הדמיה</span>
        <button className={styles.cta} onClick={open} aria-haspopup="dialog" aria-controls="contact-dialog">
          צור קשר
        </button>
      </div>

      <dialog id="contact-dialog" className={styles.dialog} ref={dialogRef}>
        <button className={styles.close} onClick={close} aria-label="סגור">×</button>
        <div className={styles.dialogContent}>
          <h3 className={styles.dialogTitle}>צור קשר</h3>
          <RegistrationForm />
        </div>
      </dialog>
    </footer>
  );
}
