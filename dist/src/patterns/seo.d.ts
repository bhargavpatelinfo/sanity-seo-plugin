declare const seo: {
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
};
export default seo;
