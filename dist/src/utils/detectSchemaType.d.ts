import { Schema } from '../types/Types';
declare const detectSchemaType: (schema: Schema) => {
    '@type': string;
    nofollowAttributes: string;
    metaTitle: string;
    metaDescription: string;
    seoKeywords: {
        '@type': string;
    }[];
    openGraph: {
        url: string;
        image: string;
        title: string;
        description: string;
        siteName: string;
    };
    additionalMetaTags: {
        '@type': string;
        metaAttributes: {
            '@type': string;
            attributeKey: string;
            attributeType: string;
            attributeValueImage: string;
            attributeValueString: string;
        }[];
    }[];
    twitter: {
        cardType: string;
        creator: string;
        site: string;
        handle: string;
    };
} | undefined;
export default detectSchemaType;
