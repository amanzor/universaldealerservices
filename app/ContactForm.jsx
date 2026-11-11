'use client';

import { useState } from 'react';

/*
 * Walkthrough request form. Submissions are relayed by FormSubmit to the
 * Universal Insurance Brokers lead inbox. The endpoint uses FormSubmit's alias
 * for that inbox (same as universalinsurancebroker.com) so the address isn't
 * exposed in the page source. FormSubmit activates each site origin once: the
 * first submission from https://universaldealerservices.com/ sends an
 * "Activate Form" email to the inbox, and nothing is delivered until it's clicked.
 */
const ENDPOINT = 'https://formsubmit.co/ajax/3ea7d91b3d49291649f4b8e7afaed142';

const field =
  'w-full rounded-sm border border-white/15 bg-navy-900 px-4 py-3 text-paper placeholder:text-paper/40 focus:border-cyan-brand focus:outline-none focus:ring-1 focus:ring-cyan-brand';
const label = 'mb-1 block text-sm font-medium text-paper/80';

export default function ContactForm({ lang, strings: f }) {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data._honey) return; // bot
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Name: data.name,
          Title: data.title,
          Dealership: data.dealership,
          Phone: data.phone,
          Email: data.email,
          Rooftops: data.rooftops,
          Message: data.message,
          Language: f.languageTag,
          Source: lang === 'es' ? 'universaldealerservices.com/es/' : 'universaldealerservices.com',
          _subject: `Dealer walkthrough request${lang === 'es' ? ' (Spanish)' : ''} — ${data.dealership || data.name}`,
          _replyto: data.email,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const json = await res.json().catch(() => null);
      if (res.ok && (json?.success === true || json?.success === 'true')) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="mx-auto mt-10 max-w-2xl rounded-sm bg-navy-800 p-8 text-left ring-1 ring-cyan-brand/40">
        <p className="font-display text-2xl font-bold text-white">{f.sentTitle}</p>
        <p className="mt-2 text-paper/75">{f.sentBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-10 grid max-w-2xl gap-5 text-left sm:grid-cols-2">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div>
        <label htmlFor="name" className={label}>{f.name}</label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="title" className={label}>{f.title}</label>
        <input id="title" name="title" placeholder={f.titlePlaceholder} autoComplete="organization-title" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="dealership" className={label}>{f.dealership}</label>
        <input id="dealership" name="dealership" required autoComplete="organization" className={field} />
      </div>
      <div>
        <label htmlFor="phone" className={label}>{f.phone}</label>
        <input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} />
      </div>
      <div>
        <label htmlFor="email" className={label}>{f.email}</label>
        <input id="email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="rooftops" className={label}>{f.rooftops}</label>
        <select id="rooftops" name="rooftops" className={field} defaultValue="1">
          <option value="1">1</option>
          <option value="2–5">2–5</option>
          <option value="6–15">6–15</option>
          <option value="16+">16+</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={label}>{f.message}</label>
        <textarea id="message" name="message" rows={4} className={field} />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full rounded-sm bg-cyan-brand px-7 py-3 font-semibold text-navy-950 transition hover:bg-white disabled:opacity-60"
        >
          {status === 'sending' ? f.sending : f.submit}
        </button>
        {status === 'error' && (
          <p role="alert" className="mt-3 text-sm text-amber-rent">
            {f.error}
          </p>
        )}
      </div>
    </form>
  );
}
