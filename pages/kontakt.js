import Head from 'next/head';
import Contact from "../src/layout/Contact/";

export default function ContactPage() {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex, nofollow"/>
        <meta name="description" content="Kontaktirajte nas i zakazite na vreme radove jer sve je teze naći i doći do pravog majstora" />
        <title>Kontakt | Keramika Živojinov</title>
      </Head>
      <main className="contact-page">
        <Contact />
      </main>
    </div>
  )
}
