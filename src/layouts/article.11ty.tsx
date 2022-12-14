/* eslint-disable react/no-danger */
import { h } from 'preact';
import { IData, IPage } from '@/types';
import style from './article.module.scss';

interface IProperties extends IData {
  title: string;
  content: string;
  cssPath: string;
}

import { Html } from '@/components';

function Page(this: IPage, { siteMeta, title, content, cssPath }: IProperties) {
  return (
    <Html
      title={`${siteMeta.pageTitle} - ${title}`}
      cssPath={cssPath}
      url={this.page.url}
    >
      <main class={style.content}>
        <article class={style.article} dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </Html>
  );
}

module.exports = Page;
