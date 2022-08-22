/* eslint-disable react/no-danger */
import { h } from 'preact';
import { IData, IPage } from '@/modules/shared/model/page.model';
import { Html } from '@/modules/shared/components';

interface IProperties extends IData {
  title: string;
  content: string;
  cssPath: string;
  jsPath: string;
}

function Page(this: IPage, { siteMeta, title = '', content, cssPath, jsPath }: IProperties) {
  const pageTitle = [siteMeta.pageTitle, title].filter((item) => !!item).join(' - ');
  const pageCss = this.getAssetContents(['layouts/default.11ty.css', cssPath]);

  return (
    <Html title={pageTitle} inlineCss={pageCss} jsPath={jsPath}>
      {content}
    </Html>
  );
}

module.exports = Page;
