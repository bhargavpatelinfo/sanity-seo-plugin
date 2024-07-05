import { Image } from 'sanity';

export type Seo = {
  type: string;
  metaTitle?: string;
  metaDescription?: string;
  additionalMetaTags?: Array<{
    type?: string;
    metaAttributes?: Array<{
      type?: string;
      attributeKey?: string;
      attributeType?: string;
      attributeValueImage?: Image;
      attributeValueString?: string;
    }>;
  }>;
  openGraph?: {
    title?: string;
    image?: Image;
    description?: string;
  };
  twitter?: {
    handle?: string;
    site?: string;
    cardType?: string;
  };
};
