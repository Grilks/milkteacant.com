/* eslint-disable react/no-danger */
import { h } from 'preact';
import { IPage, IData } from '@/types';
import style from './home.module.scss';
import { Html } from '@/components';

interface IProperties extends IData {
  title: string;
  content: string;
  cssPath: string;
  summary: string;
}

function Page(this: IPage, { content, cssPath, jsPath, summary }: IProperties) {
  return (
    <Html cssPath={cssPath} jsPath={jsPath} summary={summary} url={this.page.url}>
      <main class={style.page}>
        <div dangerouslySetInnerHTML={{ __html: content }} class={style.content} />
      </main>
    </Html>
  );
}

//TODO: Add a footer for "show next video"

module.exports = Page;
