import { h } from 'preact';
import style from './contact.module.scss';

export const Contact = () => (
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    class={style.contact}
    action="/contact-success/"
    netlify-honeypot="anti-s"
  >
    <fieldset>
      <input type="text" name="name" placeholder="Your Name*" required />
    </fieldset>
    <fieldset>
      <input type="email" name="email" placeholder="Your Email" />
    </fieldset>
    <fieldset>
      <textarea name="message" placeholder="Message to the author" required />
    </fieldset>
    <fieldset class={style.hidden}>
      Don't fill this out if you're human: <input name="anti-s" />
    </fieldset>
    <p>
      <button type="submit">Send Message</button>
    </p>
  </form>
);

export default Contact;
