import { h } from 'preact';
import style from './buy-links.module.scss';

export const BuyLinks = () => (
  <div class={style.buy}>
    <label class={style.dropdown}>
      <div>Buy Now (AU)</div>
      <input type="checkbox" class="dd-input" id="test" />
      <ul class="dd-menu">
        <li>
          <a
            href="https://www.dymocks.com.au/book/milk-tea-cant-by-alan-forsyth-9781398443822"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dymocks (Paperback)
          </a>
        </li>
        <li>
          <a
            href="https://www.amazon.com.au/Milk-Tea-Cant-Alan-Forsyth/dp/1398443824/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1662015868&sr=8-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amazon (Paperback)
          </a>
        </li>
        <li>
          <a
            href="https://www.amazon.com.au/Milk-Tea-Cant-Alan-Forsyth-ebook/dp/B0BCH8648H/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1662015868&sr=8-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amazon (Kindle)
          </a>
        </li>
      </ul>
    </label>
    <label class={style.dropdown}>
      <div>Buy Now (UK)</div>
      <input type="checkbox" class="dd-input" id="test" />
      <ul class="dd-menu">
        <li>
          <a
            href="https://www.amazon.co.uk/Milk-Tea-Cant-Alan-Forsyth/dp/1398443824/ref=sr_1_1?keywords=Milk+Tea+Can%27t+Alan+Forsyth&qid=1661134226&sr=8-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amazon (Paperback)
          </a>
        </li>
        <li>
          <a
            href="https://www.amazon.co.uk/Milk-Tea-Cant-Alan-Forsyth-ebook/dp/B0BCH8648H/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1661134226&sr=8-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amazon (Kindle)
          </a>
        </li>
        <li>
          <a
            href="https://www.austinmacauley.com/book/milk-tea-cant"
            target="_blank"
            rel="noopener noreferrer"
          >
            Austin Macauley (Paperback / ePub)
          </a>
        </li>
        <li>
          <a
            href="https://www.waterstones.com/book/milk-tea-cant/alan-forsyth/9781398443822"
            target="_blank"
            rel="noopener noreferrer"
          >
            Waterstones (Paperback)
          </a>
        </li>
      </ul>
    </label>
    <label class={style.dropdown}>
      <div>Buy Now (US)</div>
      <input type="checkbox" class="dd-input" id="test" />
      <ul class="dd-menu">
        <li>
          <a
            href="https://www.amazon.com/Milk-Tea-Cant-Alan-Forsyth/dp/1398443824/ref=sr_1_1?keywords=Milk+Tea+Can%27t+Alan+Forsyth&qid=1661134226&sr=8-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amazon (Paperback)
          </a>
        </li>
        <li>
          <a
            href="https://www.amazon.com/Milk-Tea-Cant-Alan-Forsyth-ebook/dp/B0BCH8648H/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1661134226&sr=8-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amazon (Kindle)
          </a>
        </li>
        <li>
          <a
            href="https://www.barnesandnoble.com/w/milk-tea-cant-alan-forsyth/1142049510?ean=9781398443822"
            target="_blank"
            rel="noopener noreferrer"
          >
            Barnes and Noble (Paperback)
          </a>
        </li>
      </ul>
    </label>
  </div>
);

export default BuyLinks;
