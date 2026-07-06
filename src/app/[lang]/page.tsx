import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/i18n/dictionaries";
import { ContactProvider } from "@/components/ContactModal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <ContactProvider dict={dict.contact}>
      <Header nav={dict.nav} lang={lang} />
      <main className="pt-16 flex-1">
        <Hero dict={dict} />
        <Products dict={dict} />
        <Features dict={dict} />
        <Solutions dict={dict} />
        <Partners dict={dict} />
        <Testimonials dict={dict} />
        <CTA dict={dict} />
      </main>
      <Footer dict={dict} lang={lang} />
    </ContactProvider>
  );
}
