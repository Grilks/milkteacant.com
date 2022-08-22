/* eslint-disable react/no-danger */
import { h } from 'preact';
import { IData, IPage } from '@/modules/shared/model/page.model';
import style from './article.module.scss';

interface IProperties extends IData {
  title: string;
  content: string;
  cssPath: string;
}

import { Html } from '@/modules/shared/components';

function Page(this: IPage, { siteMeta, title, content, cssPath }: IProperties) {
  return (
    <Html title={`${siteMeta.pageTitle} - ${title}`} cssPath={cssPath}>
      <main class={style.content}>
        <article class={style.article} dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </Html>
  );
}

module.exports = Page;
