import { contactLinks } from "../content";

function ContactIcon({ label }: { label: string }) {
  switch (label.toLowerCase()) {
    case "email":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 5.75A1.75 1.75 0 0 1 4.75 4h14.5A1.75 1.75 0 0 1 21 5.75v12.5A1.75 1.75 0 0 1 19.25 20H4.75A1.75 1.75 0 0 1 3 18.25ZM4.5 6.3v.2l7.05 5.54a.75.75 0 0 0 .9 0L19.5 6.5v-.2a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25Zm15 2.1-6.12 4.8a2.25 2.25 0 0 1-2.76 0L4.5 8.4v9.85c0 .14.11.25.25.25h14.5a.25.25 0 0 0 .25-.25Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.94 8.5H3.56V20h3.38ZM5.25 3A2.03 2.03 0 1 0 5.3 7.06 2.03 2.03 0 0 0 5.25 3m14.19 9.85c0-3.45-1.84-5.05-4.3-5.05a3.72 3.72 0 0 0-3.35 1.85V8.5H8.41c.05.76 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.67.13-.91a2.22 2.22 0 0 1 2.08-1.48c1.47 0 2.06 1.12 2.06 2.76V20h3.38Z" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
        </svg>
      );
    default:
      return null;
  }
}

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
            <div className="contact-card-header">
              <span className="contact-icon">
                <ContactIcon label={contact.label} />
              </span>
              <p className="contact-label">{contact.label}</p>
            </div>
            <p className="contact-value">{contact.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
