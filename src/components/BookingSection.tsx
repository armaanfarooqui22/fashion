import { useState, useEffect, type FormEvent } from 'react';
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Copy,
  Check,
  MessageCircle,
  Phone,
} from 'lucide-react';
import {
  BUDGET_RANGE_OPTIONS,
  SHOOT_TYPE_OPTIONS,
  STUDIO_CONTACT,
} from '../data/studioData';

export interface BookingPrefill {
  shootType?: string;
  budgetRange?: string;
  note?: string;
  timestamp?: number;
}

interface BookingSectionProps {
  prefill: BookingPrefill | null;
}

interface FormState {
  name: string;
  phone: string;
  shootType: string;
  preferredDate: string;
  budgetRange: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  shootType?: string;
  preferredDate?: string;
  budgetRange?: string;
}

function getTodayDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function BookingSection({ prefill }: BookingSectionProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    shootType: SHOOT_TYPE_OPTIONS[0],
    preferredDate: '',
    budgetRange: BUDGET_RANGE_OPTIONS[1],
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!prefill) return;
    setSubmitted(false);
    setForm((prev) => ({
      ...prev,
      shootType: prefill.shootType || prev.shootType,
      budgetRange: prefill.budgetRange || prev.budgetRange,
      message: prefill.note ? prefill.note : prev.message,
    }));
  }, [prefill]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.';
    }

    const digitsOnly = form.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10 || digitsOnly.length > 13) {
      nextErrors.phone = 'Enter a valid 10-digit Indian phone or WhatsApp number.';
    }

    if (!form.shootType) {
      nextErrors.shootType = 'Select a shoot type.';
    }

    if (!form.preferredDate) {
      nextErrors.preferredDate = 'Pick your preferred shoot date.';
    }

    if (!form.budgetRange) {
      nextErrors.budgetRange = 'Choose an estimated budget range.';
    }

    return nextErrors;
  };

  const buildWhatsAppText = (): string => {
    const lines = [
      `Hi Fashion Studio! I'd like to book a shoot.`,
      ``,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Shoot Type: ${form.shootType}`,
      `Preferred Date: ${form.preferredDate}`,
      `Budget Range: ${form.budgetRange}`,
      form.message.trim() ? `Brief / Notes: ${form.message.trim()}` : null,
    ].filter((line): line is string => line !== null);

    return lines.join('\n');
  };

  const whatsappUrl = `${STUDIO_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(
    buildWhatsAppText()
  )}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(buildWhatsAppText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({
      name: '',
      phone: '',
      shootType: SHOOT_TYPE_OPTIONS[0],
      preferredDate: '',
      budgetRange: BUDGET_RANGE_OPTIONS[1],
      message: '',
    });
    setErrors({});
  };

  const minDate = getTodayDateString();

  return (
    <section
      id="booking"
      className="py-20 sm:py-24 lg:py-28 bg-[#111111] text-white"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Editorial Pitch Rail */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#FF4D3D] mb-2">
              Reserve Your Slot
            </p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.9] text-white uppercase">
              Lock In Your
              <br />
              Shoot Date.
            </h2>

            <p className="mt-6 text-sm sm:text-base text-white/75 leading-relaxed max-w-md">
              Share your brief below. Your inquiry formats directly into a WhatsApp message to our
              booking desk so we can confirm studio availability and send a quote within 2 hours.
            </p>

            <div className="mt-10 pt-8 border-t border-white/15 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-white/50">
                  Direct Booking Line
                </p>
                <a
                  href={STUDIO_CONTACT.phoneHref}
                  className="mt-1.5 inline-flex items-center gap-2 font-display text-3xl tracking-wider text-white hover:text-[#FF4D3D] transition-colors tabular-nums"
                >
                  <Phone className="w-5 h-5 text-[#FF4D3D]" aria-hidden="true" />
                  <span>{STUDIO_CONTACT.phoneDisplay}</span>
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-white/50">
                  Studio Location &amp; Hours
                </p>
                <p className="mt-1 text-sm text-white/85">
                  {STUDIO_CONTACT.addressLine1}, {STUDIO_CONTACT.addressLine2}
                </p>
                <p className="mt-0.5 text-sm text-white/60">{STUDIO_CONTACT.hours}</p>
              </div>
            </div>
          </div>

          {/* Right Form / Success Card */}
          <div className="lg:col-span-7 bg-white text-[#111111] p-6 sm:p-10">
            {submitted ? (
              <div role="status" aria-live="polite" className="py-4">
                <div className="flex items-center gap-3 text-[#111111]">
                  <CheckCircle2 className="w-7 h-7 text-[#FF4D3D] shrink-0" aria-hidden="true" />
                  <h3 className="font-display text-4xl uppercase tracking-wide leading-none">
                    Booking Brief Ready
                  </h3>
                </div>

                <p className="mt-3 text-sm sm:text-base text-[#111111]/75 leading-relaxed">
                  Thanks, <span className="font-semibold text-[#111111]">{form.name}</span>. Tap
                  below to send your pre-filled shoot brief straight to our WhatsApp desk at{' '}
                  <span className="font-semibold tabular-nums">{STUDIO_CONTACT.phoneDisplay}</span>.
                </p>

                {/* Summary Box */}
                <dl className="mt-6 p-5 bg-[#F7F7F6] border border-[#111111]/10 divide-y divide-[#111111]/10 text-sm">
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#111111]/60">Shoot Type</dt>
                    <dd className="font-semibold text-right">{form.shootType}</dd>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#111111]/60">Preferred Date</dt>
                    <dd className="font-semibold text-right tabular-nums">{form.preferredDate}</dd>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#111111]/60">Budget Range</dt>
                    <dd className="font-semibold text-right">{form.budgetRange}</dd>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#111111]/60">Contact Phone</dt>
                    <dd className="font-semibold text-right tabular-nums">{form.phone}</dd>
                  </div>
                </dl>

                {/* Direct WhatsApp Send CTA */}
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold bg-[#FF4D3D] hover:bg-[#111111] text-white transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>Send on WhatsApp ({STUDIO_CONTACT.phoneDisplay})</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-5 text-sm font-semibold border border-[#111111]/25 text-[#111111] hover:border-[#111111] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[#FF4D3D]" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" aria-hidden="true" />
                        <span>Copy Brief</span>
                      </>
                    )}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-5 text-xs font-medium text-[#111111]/60 hover:text-[#111111] underline underline-offset-4 cursor-pointer"
                >
                  Edit details or submit another shoot inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#111111] mb-2"
                    >
                      Full Name <span className="text-[#FF4D3D]">*</span>
                    </label>
                    <input
                      id="booking-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="e.g., Priya Sharma"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'booking-name-error' : undefined}
                      className={`w-full px-4 py-3 text-sm bg-[#F7F7F6] border text-[#111111] placeholder:text-[#111111]/40 focus:outline-none focus:bg-white transition-colors ${
                        errors.name
                          ? 'border-[#DC2626]'
                          : 'border-[#111111]/15 focus:border-[#111111]'
                      }`}
                    />
                    {errors.name && (
                      <p
                        id="booking-name-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#DC2626]"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#111111] mb-2"
                    >
                      Phone / WhatsApp <span className="text-[#FF4D3D]">*</span>
                    </label>
                    <input
                      id="booking-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      placeholder="+91 98XXX XXXXX"
                      value={form.phone}
                      onChange={(e) => {
                        setForm({ ...form, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'booking-phone-error' : undefined}
                      className={`w-full px-4 py-3 text-sm bg-[#F7F7F6] border text-[#111111] placeholder:text-[#111111]/40 focus:outline-none focus:bg-white transition-colors tabular-nums ${
                        errors.phone
                          ? 'border-[#DC2626]'
                          : 'border-[#111111]/15 focus:border-[#111111]'
                      }`}
                    />
                    {errors.phone && (
                      <p
                        id="booking-phone-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#DC2626]"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Shoot Type */}
                  <div>
                    <label
                      htmlFor="booking-shoot-type"
                      className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#111111] mb-2"
                    >
                      Shoot Type <span className="text-[#FF4D3D]">*</span>
                    </label>
                    <select
                      id="booking-shoot-type"
                      name="shootType"
                      value={form.shootType}
                      onChange={(e) => {
                        setForm({ ...form, shootType: e.target.value });
                        if (errors.shootType) setErrors({ ...errors, shootType: undefined });
                      }}
                      className="w-full px-4 py-3 text-sm bg-[#F7F7F6] border border-[#111111]/15 text-[#111111] focus:outline-none focus:bg-white focus:border-[#111111] transition-colors"
                    >
                      {SHOOT_TYPE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#111111] mb-2"
                    >
                      Preferred Date <span className="text-[#FF4D3D]">*</span>
                    </label>
                    <input
                      id="booking-date"
                      name="preferredDate"
                      type="date"
                      min={minDate}
                      required
                      value={form.preferredDate}
                      onChange={(e) => {
                        setForm({ ...form, preferredDate: e.target.value });
                        if (errors.preferredDate)
                          setErrors({ ...errors, preferredDate: undefined });
                      }}
                      aria-invalid={Boolean(errors.preferredDate)}
                      aria-describedby={errors.preferredDate ? 'booking-date-error' : undefined}
                      className={`w-full px-4 py-3 text-sm bg-[#F7F7F6] border text-[#111111] focus:outline-none focus:bg-white transition-colors tabular-nums ${
                        errors.preferredDate
                          ? 'border-[#DC2626]'
                          : 'border-[#111111]/15 focus:border-[#111111]'
                      }`}
                    />
                    {errors.preferredDate && (
                      <p
                        id="booking-date-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#DC2626]"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.preferredDate}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label
                    htmlFor="booking-budget"
                    className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#111111] mb-2"
                  >
                    Budget Range <span className="text-[#FF4D3D]">*</span>
                  </label>
                  <select
                    id="booking-budget"
                    name="budgetRange"
                    value={form.budgetRange}
                    onChange={(e) => setForm({ ...form, budgetRange: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-[#F7F7F6] border border-[#111111]/15 text-[#111111] focus:outline-none focus:bg-white focus:border-[#111111] transition-colors"
                  >
                    {BUDGET_RANGE_OPTIONS.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="booking-message"
                    className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#111111] mb-2"
                  >
                    Shoot Brief / Notes
                  </label>
                  <textarea
                    id="booking-message"
                    name="message"
                    rows={3}
                    placeholder="Number of looks/products, references, makeup or styling requirements..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-[#F7F7F6] border border-[#111111]/15 text-[#111111] placeholder:text-[#111111]/40 focus:outline-none focus:bg-white focus:border-[#111111] transition-colors resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-sm font-semibold text-white bg-[#FF4D3D] hover:bg-[#111111] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D3D]"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Prepare WhatsApp Booking Inquiry</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <p className="text-xs text-[#111111]/55 text-center">
                  Sends directly to Fashion Studio WhatsApp ({STUDIO_CONTACT.phoneDisplay}). No
                  advance payment required to inquire.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
