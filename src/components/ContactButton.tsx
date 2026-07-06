"use client";

import { useContact } from "./ContactModal";

export default function ContactButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { open } = useContact();
  return (
    <button type="button" className={className} onClick={open}>
      {children}
    </button>
  );
}
