"use client";

import { useMemo, useState, ChangeEvent, FormEvent } from "react";
import styles from "./RegistrationForm.module.css";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  dob: string; 
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = { fullName: "", phone: "", email: "", dob: "" };

function validateFullName(v: string): string | null {
  const trimmed = v.trim().replace(/\s+/g, " ");
  const parts = trimmed.split(" ").filter(Boolean);

  if (parts.length < 2) return "יש להזין לפחות שני שמות (שם פרטי + שם משפחה).";
  if (parts.some((w) => /^\d/.test(w))) return "אין להתחיל מילה במספר.";
  return null;
}

function validatePhone(v: string): string | null {
  if (!v) return "יש להזין מספר טלפון.";
  if (!/^\d+$/.test(v)) return "טלפון חייב להכיל ספרות בלבד.";
  if (v.length < 7 || v.length > 11) return "מספר טלפון לא נראה תקין.";
  return null;
}

function validateEmail(v: string): string | null {
  if (!v) return "יש להזין אימייל.";
  const re = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
  return re.test(v) ? null : "פורמט אימייל לא תקין (example@domain.com).";
}

function validateDob(v: string): string | null {
  if (!v) return "יש לבחור תאריך לידה.";
  const dob = new Date(v);
  if (Number.isNaN(dob.getTime())) return "תאריך לא תקין.";
  const today = new Date();
  const minAdult = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );
  if (dob > minAdult) return "חייב/ת להיות מעל גיל 18.";
  return null;
}

export default function RegistrationForm() {
  const [data, setData] = useState<FormState>(initial);
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    fullName: false,
    phone: false,
    email: false,
    dob: false,
  });

  const errors: FormErrors = useMemo(
    () => ({
      fullName: validateFullName(data.fullName) || undefined,
      phone: validatePhone(data.phone) || undefined,
      email: validateEmail(data.email) || undefined,
      dob: validateDob(data.dob) || undefined,
    }),
    [data] // השגיאות יתעדכנו בזמן הקלדה
  );

  const isValid = useMemo(
    () => !errors.fullName && !errors.phone && !errors.email && !errors.dob,
    [errors]
  );

  const onChange =
    (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;

      if (field === "phone") value = value.replace(/\D+/g, ""); // שמירה על מספרים בטלפון

      setData((prev) => ({ ...prev, [field]: value }));
    };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTouched({ fullName: true, phone: true, email: true, dob: true });
    if (!isValid) return;
    // שליחת הטופס או שימור נתונים
    alert("הטופס נשלח בהצלחה ✅");
    setData(initial); // אפס את הנתונים אחרי שליחה
    setTouched({ fullName: false, phone: false, email: false, dob: false });
  };

  return (
    <form className={styles.form} dir="rtl" onSubmit={onSubmit} noValidate>
      <h2 className={styles.title}>טופס רישום</h2>

      {/* שם מלא */}
      <div className={styles.field}>
        <label htmlFor="fullName">שם מלא</label>
        <input
          id="fullName"
          type="text"
          value={data.fullName}
          onChange={onChange("fullName")}
          placeholder="לדוגמה: יעל כהן"
          aria-invalid={Boolean(errors.fullName)}
          aria-describedby="fullName-error"
        />
        {errors.fullName && (
          <p className={styles.error} id="fullName-error">
            {errors.fullName}
          </p>
        )}
      </div>

      {/* טלפון */}
      <div className={styles.field}>
        <label htmlFor="phone">טלפון</label>
        <input
          id="phone"
          type="tel"
          value={data.phone}
          onChange={onChange("phone")}
          placeholder="לדוגמה: 0501234567"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby="phone-error"
        />
        {errors.phone && (
          <p className={styles.error} id="phone-error">
            {errors.phone}
          </p>
        )}
      </div>

      {/* אימייל */}
      <div className={styles.field}>
        <label htmlFor="email">אימייל</label>
        <input
          id="email"
          type="email"
          value={data.email}
          onChange={onChange("email")}
          placeholder="example@domain.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby="email-error"
        />
        {errors.email && (
          <p className={styles.error} id="email-error">
            {errors.email}
          </p>
        )}
      </div>

      {/* תאריך לידה */}
      <div className={styles.field}>
        <label htmlFor="dob">תאריך לידה</label>
        <input
          id="dob"
          type="date"
          value={data.dob}
          onChange={onChange("dob")}
          aria-invalid={Boolean(errors.dob)}
          aria-describedby="dob-error"
        />
        {errors.dob && (
          <p className={styles.error} id="dob-error">
            {errors.dob}
          </p>
        )}
      </div>

      <button className={styles.submit} type="submit" disabled={!isValid}>
        שליחה
      </button>
    </form>
  );
}
