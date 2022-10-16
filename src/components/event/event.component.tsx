import { h, ComponentChildren } from 'preact';

import style from './event.module.scss';

const getVendorName = (url: string) => {
  const name = new URL(url).hostname
    .replace('www.', '')
    .replace('.com', '')
    .replace('.co.uk', '');

  return `${name[0].toUpperCase()}${name.slice(1)}`;
};

export const Event = ({
  props,
  children,
}: {
  props?: string[];
  children?: ComponentChildren;
}) => {
  const [link] = props || [''];
  const buyFrom = getVendorName(link);

  return (
    <div class={style.event}>
      <span>New!</span>
      {children}
      {link && (
        <a
          href={link}
          class={style['event-link']}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get your tickets from {buyFrom}
        </a>
      )}
    </div>
  );
};

export default Event;
