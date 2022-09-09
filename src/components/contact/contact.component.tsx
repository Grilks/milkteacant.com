import { h } from 'preact';
import style from './contact.module.scss';

export const Contact = () => (
  <form name="contact" method="POST" data-netlify="true" class={style.contact}>
    <fieldset>
      <input type="text" name="name" placeholder="Your Name*" required />
    </fieldset>
    <fieldset>
      <input type="email" name="email" placeholder="Your Email" />
    </fieldset>
    <fieldset>
      <textarea name="message" placeholder="Message to the author" required />
    </fieldset>
    <p>
      <button type="submit">Send Message</button>
    </p>
  </form>
);

export default Contact;
