import { h } from 'preact';
import style from './buy-links.module.scss';

export const BuyLinks = () => (
  <div class={style.buy}>
    Pre-order Now:
    <a
      href="https://www.amazon.co.uk/Milk-Tea-Cant-Alan-Forsyth/dp/1398443824/ref=sr_1_1?keywords=Milk+Tea+Can%27t+Alan+Forsyth&qid=1661134226&sr=8-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      Amazon UK
    </a>
    <a
      href="https://www.waterstones.com/book/milk-tea-cant/alan-forsyth/9781398443822"
      target="_blank"
      rel="noopener noreferrer"
    >
      Waterstones
    </a>
    <a
      href="https://www.austinmacauley.com/book/milk-tea-cant"
      target="_blank"
      rel="noopener noreferrer"
    >
      Austin Macauley
    </a>
  </div>
);

export default BuyLinks;
