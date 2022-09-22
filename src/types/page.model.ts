/* eslint-disable no-unused-vars */
import * as siteMeta from '@/data/site-meta.json';

export interface IPage {
  slug: string;
  url: string;
  page: {
    url: string;
    date: string;
    fileSlug: string;
  };
  getCollectionItem: (page: string) => any;
  getPreviousCollectionItem: (page: string) => any;
  getNextCollectionItem: (page: string) => any;
  getAssetContents: (paths: string[]) => string;
}

export interface IData {
  cssPath?: string;
  jsPath?: string;
  siteMeta: typeof siteMeta;
  collections: {
    videos: {
      url: string;
      data: {
        title: string;
        summary?: string;
      };
    }[];
  };
}
