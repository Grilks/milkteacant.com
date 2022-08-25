import { h, ComponentChildren } from 'preact';

import style from './subtitle.module.scss';

export const Subtitle = ({ children }: { children?: ComponentChildren }) => (
  <div class={style.subtitle}>{children}</div>
);

export default Subtitle;
