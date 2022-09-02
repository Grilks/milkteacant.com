import { h } from 'preact';
import style from './dropdown.module.scss';

export type DropdownItems = {
  link: string;
  title: string;
};

export const Dropdown = ({ title, items }: { title: string; items: DropdownItems[] }) => (
  <label class={style.dropdown}>
    <div>{title}</div>
    <input type="checkbox" />
    <ul class="dd-menu">
      {items.map((item) => (
        <li key={item.link}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  </label>
);

export default Dropdown;
