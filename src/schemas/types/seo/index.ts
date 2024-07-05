import { defineType } from 'sanity';

const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'metaDescription',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'additionalMetaTags',
      title: 'Additional Meta Tags',
      type: 'array',
      of: [{ type: 'metaTag' }]
    },
    {
      name: 'openGraph',
      title: 'Open Graph',
      type: 'openGraph'
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'twitter'
    }
  ]
});

export default seo;
