import { Image as Image_2 } from 'sanity';
import { Plugin as Plugin_2 } from 'sanity';

export declare type Schema = Seo;

export declare type Seo = {
  type: string;
  metaTitle?: string;
  metaDescription?: string;
  additionalMetaTags?: Array<{
    type?: string;
    metaAttributes?: Array<{
      type?: string;
      attributeKey?: string;
      attributeType?: string;
      attributeValueImage?: Image_2;
      attributeValueString?: string;
    }>;
  }>;
  openGraph?: {
    title?: string;
    image?: Image_2;
    description?: string;
  };
  twitter?: {
    handle?: string;
    site?: string;
    cardType?: string;
  };
};

export declare const seoMetaFields: Plugin_2<void>;

export {};
