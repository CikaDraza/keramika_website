import ContactForm from '../../components/ContactForm';
import useMediaQuery from '../../components/useMediaQuery';

export default function Contact() {
  const match = useMediaQuery('(max-width: 768px)');

  return (
    <section className="contact-section">
      <div className="wrapper">
        <div className="contact-section__title">
          <h1>Kontaktirajte nas</h1>
          <p>ZAKAŽITE KONSULTACIJE</p>
        </div>
        <div className="contact-section__content">
          <div className="contact-section__form">
            <ContactForm match={match} />
          </div>
        </div>
      </div>
    </section>
  )
}
