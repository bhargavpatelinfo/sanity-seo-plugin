import { Schema } from '../types/Types';
declare const detectSchemaType: (schema: Schema) => {
    '@type': string;
    metaTitle: string;
    metaDescription: string;
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
    openGraph: {
        title: string;
        image: string;
        description: string;
    };
    twitter: {
        handle: string;
        site: string;
        cardType: string;
    };
} | undefined;
export default detectSchemaType;
