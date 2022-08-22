/* eslint-disable react/no-danger */
import { h } from 'preact';
import { IPage, IData } from '@/types';
import style from './home.module.scss';
import { Html } from '@/components';

interface IProperties extends IData {
  title: string;
  content: string;
  cssPath: string;
}

function Page(this: IPage, { content, cssPath, jsPath }: IProperties) {
  return (
    <Html cssPath={cssPath} jsPath={jsPath}>
      <main class={style.page}>
        <div class={style.content}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <img src="/_images/book-cover-3d.png" alt="A paperback version of the book" />
      </main>
    </Html>
  );
}

module.exports = Page;
