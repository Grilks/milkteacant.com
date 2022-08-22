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
      <main class={style.content} dangerouslySetInnerHTML={{ __html: content }} />
    </Html>
  );
}

module.exports = Page;
