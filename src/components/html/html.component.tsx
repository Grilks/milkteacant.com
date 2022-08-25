/* eslint-disable react/no-danger */
import { h, Fragment, ComponentChildren } from 'preact';
import style from './html.module.scss';
import favicon from '@/styles/images/favicon.png';

export const Html = ({
  title = `Milk Tea Can't by Alan Forsyth`,
  summary,
  inlineCss,
  cssPath,
  jsPath,
  children,
}: {
  title?: string;
  summary?: string;
  inlineCss?: string;
  cssPath?: string;
  jsPath?: string;
  children: ComponentChildren;
}) => {
  const scripts = ['vendor.js', jsPath];

  return (
    <html lang="en" class={style.html}>
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="icon" type="image/png" href={favicon} />
        <meta name="description" content={summary} />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
        {jsPath && (
          <Fragment>
            {scripts.map((script) => (
              <link key={script} rel="preload" as="script" href={`/assets/${script}`} />
            ))}
          </Fragment>
        )}
        {inlineCss && <style dangerouslySetInnerHTML={{ __html: inlineCss }} />}
        {cssPath && <link rel="stylesheet" href={`/assets/${cssPath}`} />}
      </head>
      <body class={style.body}>
        {children}
        {jsPath && (
          <Fragment>
            {scripts.map((script) => (
              <script key={script} src={`/assets/${script}`} defer={true} />
            ))}
          </Fragment>
        )}
      </body>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.netlifyIdentity&&window.netlifyIdentity.on("init",a=>{a||window.netlifyIdentity.on("login",()=>{document.location.href="/admin/"})})`,
        }}
      />
    </html>
  );
};
