declare const seo: {
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
};
export default seo;
