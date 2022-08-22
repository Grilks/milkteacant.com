/* eslint-disable react/no-danger */
import { h } from 'preact';
import { IPage, IData } from '../modules/shared/model/page.model';
import style from './home.module.scss';
import { Html } from '@/modules/shared/components';

interface IProperties extends IData {
  title: string;
  content: string;
  cssPath: string;
}

function Page(this: IPage, { content, cssPath }: IProperties) {
  return (
    <Html cssPath={cssPath}>
      <main class={style.page}>
        <div class={style.content}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
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
        </div>
        <img src="/_images/book-cover-3d.png" alt="A paperback version of the book" />
      </main>
    </Html>
  );
}

module.exports = Page;
