import { h } from 'preact';
import { Dropdown } from '@/components';
import buySettings from '@/data/buy-links.json';
import style from './buy-links.module.scss';

export const BuyLinks = () => (
  <div class={style.buy}>
    <Dropdown title={buySettings['au-title']} items={buySettings.au} />
    <Dropdown title={buySettings['uk-title']} items={buySettings.uk} />
    <Dropdown title={buySettings['us-title']} items={buySettings.us} />
  </div>
);

export default BuyLinks;
