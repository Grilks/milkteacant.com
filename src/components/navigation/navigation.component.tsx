import { h } from 'preact';
import navLinks from '@/data/nav-links.json';
import style from './navigation.module.scss';

export const Navigation = () => (
  <nav class={style.navigation}>
    <ul>
      <li class={style.logo}>
        <a href="/">Milk Tea Can't</a>
      </li>
      {navLinks.links.map(({ link, title, newWindow }) => (
        <li key={link}>
          <a href={link} target={newWindow ? 'blank' : undefined}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
