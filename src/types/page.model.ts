/* eslint-disable no-unused-vars */
import * as siteMeta from '@/data/siteMeta';

export interface IPage {
  slug: string;
  url: string;
  getCollectionItem: (page: string) => any;
  getPreviousCollectionItem: (page: string) => any;
  getNextCollectionItem: (page: string) => any;
  getAssetContents: (paths: string[]) => string;
}

export interface IData {
  cssPath?: string;
  jsPath?: string;
  siteMeta: typeof siteMeta;
}
