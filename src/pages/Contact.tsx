import { contactLinks } from "../content";

function Contact() {
  return (
    <section className="panel">
      <p className="eyebrow">Contact</p>
      <h2>Reach out</h2>
      <p className="lede">
        Open to collaboration and interesting technical work.
      </p>

      <div className="contact-grid">
        {contactLinks.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("mailto") ? undefined : "_blank"}
            rel={contact.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="contact-card"
          >
            <p className="contact-label">{contact.label}</p>
            <p>{contact.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
