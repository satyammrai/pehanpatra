import { FormEvent, useState } from 'react';
import { Check, Copy, Send } from 'lucide-react';
import { PROFILE } from '../data/portfolio';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setError('Please complete your name, email address, and a brief note.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setError('');
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 border-t border-zinc-200 bg-gradient-to-br from-amber-50/45 via-white to-emerald-50/55"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-800 mb-3">{PROFILE.availability}</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 text-balance">
                Let&apos;s build something practical together.
              </h2>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Looking for help with an ML product, a fast React or Next.js website, or a full-stack application? Reach out anytime.
              </p>

              <div className="mt-8">
                <div className="text-xs font-medium text-zinc-500 mb-1.5">Direct Email</div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="font-display text-lg font-semibold text-zinc-950 hover:text-emerald-700 transition-colors underline underline-offset-4 decoration-zinc-300"
                  >
                    {PROFILE.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 bg-zinc-100 hover:bg-emerald-50 hover:text-emerald-900 rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-emerald-700"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-500" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-zinc-200">
              <div className="text-xs font-medium text-zinc-500 mb-3">Connect</div>
              <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-zinc-700">
                {PROFILE.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="hover:text-emerald-700 hover:underline underline-offset-4 transition-colors whitespace-nowrap"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              {submitted ? (
                <div className="py-10 text-center max-w-md mx-auto">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-600 text-white mb-4">
                    <Check className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-zinc-950">
                    Thank you, {name.trim()}.
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base text-zinc-600 leading-relaxed">
                    Your message is saved. You can also connect directly on LinkedIn or reach me at{' '}
                    <span className="font-medium text-zinc-900">{PROFILE.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 px-5 py-2.5 text-sm font-medium text-zinc-800 bg-white border border-zinc-200 hover:border-emerald-600/40 rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-zinc-900 mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 text-sm text-zinc-950 bg-[#FAFBF9] border border-zinc-200 rounded-lg placeholder:text-zinc-400 focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-600/15 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-zinc-900 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 text-sm text-zinc-950 bg-[#FAFBF9] border border-zinc-200 rounded-lg placeholder:text-zinc-400 focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-600/15 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-zinc-900 mb-1.5">
                      Project Overview
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me a bit about your website, app, or ML project..."
                      className="w-full px-3.5 py-2.5 text-sm text-zinc-950 bg-[#FAFBF9] border border-zinc-200 rounded-lg placeholder:text-zinc-400 focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-600/15 transition-colors resize-y"
                    />
                  </div>

                  {error && (
                    <p role="alert" className="text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-lg px-3.5 py-2.5">
                      {error}
                    </p>
                  )}

                  <div className="flex items-center justify-between gap-4 pt-1">
                    <span className="text-xs text-zinc-500">Usually responds within 24 hours.</span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-emerald-700 to-teal-600 hover:from-emerald-800 hover:to-teal-700 rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
