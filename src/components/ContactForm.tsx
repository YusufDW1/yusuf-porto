'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} id="contact-form">
      <div className={styles.field}>
        <label className={styles.label} htmlFor="contact-name">
          NAME
        </label>
        <input
          className={styles.input}
          type="text"
          id="contact-name"
          name="name"
          placeholder="Your name..."
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="contact-email">
          EMAIL
        </label>
        <input
          className={styles.input}
          type="email"
          id="contact-email"
          name="email"
          placeholder="your@email.com..."
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="contact-message">
          MESSAGE
        </label>
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          id="contact-message"
          name="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />
      </div>

      <button
        type="submit"
        className={`pixel-btn ${styles.submitBtn}`}
        disabled={submitted}
      >
        {submitted ? '► MESSAGE SENT!' : '► SEND MESSAGE'}
      </button>
    </form>
  );
}
