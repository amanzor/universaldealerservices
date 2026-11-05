'use client';

import { useState } from 'react';
import { contactEmail } from '../lib/site';

// Set NEXT_PUBLIC_FORM_ENDPOINT (e.g. a Formspree, Basin, or Getform URL) in
// Vercel to receive submissions directly. Without it, the form falls back to
// opening the visitor's email app with the request pre-filled.
const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

const field =
  'mt-1 w-full rounded-sm border border-white/15 bg-navy-900 px-3 py-2.5 text-paper placeholder:text-paper/35 focus:border-cyan-brand focus:outline-none';
const labelCls = 'block text-left text-sm font-medium text-paper/80';

export default function ContactForm({ t, lang, subject }) {
  const [status, setStatus] = useState('idle');

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data._gotcha) return; // honeypot

    if (!endpoint) {
      const body = [
        `${t.name}: ${data.name}`,
        `${t.role}: ${data.role}`,
        `${t.dealership}: ${data.dealership}`,
        `${t.rooftops}: ${data.rooftops}`,
        `${t.phone}: ${data.phone}`,
        `${t.email}: ${data.email}`,
        '',
        data.message || '',
      ].join('\n');
      window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      setStatus('mailto');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, _subject: subject, language: lang }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <p role="status" className="rounded-sm bg-navy-800 p-6 text-lg text-white ring-1 ring-cyan-brand/40">
        {t.success}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-sm bg-navy-800 p-6 ring-1 ring-white/10 sm:grid-cols-2">
      <label className={labelCls}>
        {t.name}
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className={labelCls}>
        {t.role}
        <input name="role" placeholder={t.rolePlaceholder} autoComplete="organization-title" className={field} />
      </label>
      <label className={labelCls}>
        {t.dealership}
        <input name="dealership" required autoComplete="organization" className={field} />
      </label>
      <label className={labelCls}>
        {t.rooftops}
        <select name="rooftops" className={field} defaultValue={t.rooftopOptions[0]}>
          {t.rooftopOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
      <label className={labelCls}>
        {t.phone}
        <input name="phone" type="tel" required autoComplete="tel" className={field} />
      </label>
      <label className={labelCls}>
        {t.email}
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className={`${labelCls} sm:col-span-2`}>
        {t.message}
        <textarea name="message" rows={3} className={field} />
      </label>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-sm bg-cyan-brand px-7 py-3 font-semibold text-navy-950 hover:bg-white disabled:opacity-60"
        >
          {status === 'sending' ? t.sending : t.submit}
        </button>
        <p role="status" className="text-left text-sm text-paper/60">
          {status === 'error' && <span className="text-amber-rent">{t.error}</span>}
          {status === 'mailto' && t.mailtoNote}
        </p>
      </div>
    </form>
  );
}
