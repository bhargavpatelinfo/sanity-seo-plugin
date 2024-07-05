const seo = {
  '@type': 'seoMetaFields',
  metaTitle: 'string',
  metaDescription: 'string',
  additionalMetaTags: [
    {
      '@type': 'metaTag',
      metaAttributes: [
        {
          '@type': 'metaAttribute',
          attributeKey: 'string',
          attributeType: 'string',
          attributeValueImage: 'image',
          attributeValueString: 'string'
        }
      ]
    }
  ],
  openGraph: {
    title: 'string',
    image: 'image',
    description: 'string'
  },
  twitter: {
    handle: 'string',
    site: 'string',
    cardType: 'string'
  }
};

export default seo;
