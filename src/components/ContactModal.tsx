"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Dictionary } from "@/i18n/dictionaries";

type ContactDict = Dictionary["contact"];
type Status = "idle" | "sending" | "success" | "error";

const ContactContext = createContext<{ open: () => void } | null>(null);

export function useContact() {
  const ctx = useContext(ContactContext);
  if (!ctx) throw new Error("useContact must be used within ContactProvider");
  return ctx;
}

export function ContactProvider({
  dict,
  children,
}: {
  dict: ContactDict;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <ContactContext.Provider value={{ open }}>
      {children}
      {isOpen && <ContactModal dict={dict} onClose={close} />}
    </ContactContext.Provider>
  );
}

function ContactModal({ dict, onClose }: { dict: ContactDict; onClose: () => void }) {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-3 text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors";
  const labelClass = "font-headline text-label-md text-on-surface";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={dict.title}
    >
      <div
        className="absolute inset-0 bg-on-surface/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full sm:max-w-lg max-h-[92dvh] overflow-y-auto bg-surface-container-lowest rounded-t-2xl sm:rounded-2xl shadow-2xl p-6 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label={dict.close}
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-on-surface-variant hover:bg-on-surface/[0.06] hover:text-on-surface transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">close</span>
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center text-center gap-4 py-10">
            <span
              className="material-symbols-outlined text-[56px] text-tertiary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
            <h2 className="font-headline text-headline-md text-on-surface">
              {dict.successTitle}
            </h2>
            <p className="text-body-md text-on-surface-variant max-w-sm">{dict.successDesc}</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 px-8 py-3 bg-primary text-on-primary rounded-xl font-headline text-label-md hover:bg-primary-container transition-colors"
            >
              {dict.close}
            </button>
          </div>
        ) : (
          <>
            <h2 className="font-headline text-headline-md text-on-surface mb-2 pr-8">
              {dict.title}
            </h2>
            <p className="text-body-sm text-on-surface-variant mb-6">{dict.subtitle}</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Honeypot: hidden from humans, bots fill it and get silently dropped. */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className={labelClass}>
                  {dict.name} <span className="text-error">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoFocus
                  autoComplete="name"
                  placeholder={dict.namePlaceholder}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-phone" className={labelClass}>
                  {dict.phone} <span className="text-error">*</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder={dict.phonePlaceholder}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-company" className={labelClass}>
                  {dict.company}{" "}
                  <span className="font-normal text-on-surface-variant">({dict.optional})</span>
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder={dict.companyPlaceholder}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className={labelClass}>
                  {dict.message}{" "}
                  <span className="font-normal text-on-surface-variant">({dict.optional})</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={3}
                  placeholder={dict.messagePlaceholder}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <p role="alert" className="text-body-sm text-error">
                  {dict.error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 w-full px-8 py-4 bg-primary text-on-primary rounded-xl font-headline text-label-md hover:bg-primary-container transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? dict.submitting : dict.submit}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
