/* eslint-disable react/no-danger */
import { h } from 'preact';
import { IPage, IData } from '@/types';
import styleHome from './home.module.scss';
import styleVideo from './video-list.module.scss';
import { Play } from '@/icons';
import { Html } from '@/components';

interface IProperties extends IData {
  title: string;
  content: string;
  cssPath: string;
  summary: string;
}

function Page(
  this: IPage,
  { content, cssPath, jsPath, summary, collections: { videos } }: IProperties
) {
  return (
    <Html cssPath={cssPath} jsPath={jsPath} summary={summary} url={this.page.url}>
      <main class={styleHome.page}>
        <div dangerouslySetInnerHTML={{ __html: content }} class={styleHome.content} />
        <section class={styleVideo.videos}>
          {videos.map(({ url, data: { title, summary } }) => (
            <a key={url} href={url} class={styleVideo.video}>
              <Play className={styleVideo.play} />
              <div>
                <h2>{title}</h2>
                <p>{summary}</p>
              </div>
            </a>
          ))}
        </section>
      </main>
    </Html>
  );
}

module.exports = Page;
