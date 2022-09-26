import { h } from 'preact';
import { Dropdown } from '@/components';
import buySettings from '@/data/buy-links.json';
import style from './buy-links.module.scss';

export const BuyLink = ({
  title,
  link,
  description,
}: {
  title: string;
  link: string;
  description?: string;
}) => (
  <a href={link} target="_blank" rel="nofollow noreferrer">
    <h4>{title}</h4>
    <p>{description}</p>
  </a>
);

export const BuyLinks = ({ props }: { props?: string[] }) => {
  if (props?.[0] === 'large') {
    return (
      <div class={style['buy-large']}>
        <h2>Buy Online</h2>
        <h3>{buySettings['au-title']}</h3>
        {buySettings.au.map((properties) => (
          <BuyLink {...properties} key={properties.link} />
        ))}
        <h3>{buySettings['uk-title']}</h3>
        {buySettings.uk.map((properties) => (
          <BuyLink {...properties} key={properties.link} />
        ))}
        <h3>{buySettings['us-title']}</h3>
        {buySettings.us.map((properties) => (
          <BuyLink {...properties} key={properties.link} />
        ))}
      </div>
    );
  }

  return (
    <div class={style.buy}>
      <Dropdown title={buySettings['au-title']} items={buySettings.au} />
      <Dropdown title={buySettings['uk-title']} items={buySettings.uk} />
      <Dropdown title={buySettings['us-title']} items={buySettings.us} />
    </div>
  );
};

export default BuyLinks;
