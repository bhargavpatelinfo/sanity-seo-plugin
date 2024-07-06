import { Image as Image_2 } from 'sanity';
import { Plugin as Plugin_2 } from 'sanity';

export declare type Schema = Seo;

export declare type Seo = {
  type: string;
  nofollowAttributes?: boolean;
  metaTitle?: string;
  metaDescription?: string;
  seoKeywords?: Array<{
    type?: string;
  }>;
  openGraph?: {
    url?: string;
    image?: Image_2;
    title?: string;
    description?: string;
    siteName?: string;
  };
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
  twitter?: {
    cardType?: string;
    creator?: string;
    site?: string;
    handle?: string;
  };
};

export declare const seoMetaFields: Plugin_2<void>;

export {};
