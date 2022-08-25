import { h } from 'preact';
import { pageTitle } from '@/data/siteMeta';
import type { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { Page } from '@/layouts/home.11ty';

const PagePreview = ({ entry, widgetFor }: PreviewTemplateComponentProps) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <Page
        content={entry.getIn(['data', 'body'])}
        title={entry.getIn(['data', 'title'])}
        summary="Dummy"
        cssPath={entry.getIn(['data', 'cssPath'])}
        siteMeta={{ pageTitle }}
      />
    );
  }

  return <div>Loading...</div>;
};

export default PagePreview;
