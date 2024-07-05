'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var sanity = require('sanity');
const schema = sanity.defineType({
  title: "Seo MetaFields",
  name: "seoMetaFields",
  type: "object",
  fields: [{
    name: "metaTitle",
    title: "Title",
    type: "string"
  }, {
    name: "metaDescription",
    title: "Description",
    type: "string"
  }, {
    name: "additionalMetaTags",
    title: "Additional Meta Tags",
    type: "array",
    of: [{
      type: "metaTag"
    }]
  }, {
    name: "openGraph",
    title: "Open Graph",
    type: "openGraph"
  }, {
    name: "twitter",
    title: "Twitter",
    type: "twitter"
  }]
});
var metaAttribute = {
  name: "metaAttribute",
  title: "Meta Attribute",
  type: "object",
  fields: [{
    name: "attributeKey",
    title: "Key",
    type: "string"
  }, {
    name: "attributeType",
    title: "type",
    type: "string",
    options: {
      list: ["string", "image"],
      layout: "radio",
      direction: "horizontal"
    },
    initialValue: "image"
  }, {
    name: "attributeValueImage",
    title: "Value",
    type: "image",
    hidden: _ref => {
      let {
        parent
      } = _ref;
      return (parent == null ? void 0 : parent.attributeType) !== "image";
    }
  }, {
    name: "attributeValueString",
    title: "Value",
    type: "string",
    hidden: _ref2 => {
      let {
        parent
      } = _ref2;
      return (parent == null ? void 0 : parent.attributeType) !== "string";
    }
  }],
  preview: {
    select: {
      title: "attributeKey"
    },
    prepare(_ref3) {
      let {
        title
      } = _ref3;
      return {
        title
      };
    }
  }
};
var metaTag = {
  name: "metaTag",
  title: "Meta tag",
  type: "object",
  fields: [{
    name: "metaAttributes",
    title: "Meta Attributes",
    type: "array",
    of: [{
      type: "metaAttribute"
    }]
  }],
  preview: {
    select: {
      title: "attributeName",
      metaTags: "metaAttributes"
    },
    prepare(_ref4) {
      let {
        metaTags
      } = _ref4;
      var _a, _b;
      return {
        title: metaTags && ((_a = metaTags[0]) == null ? void 0 : _a.attributeValueString) ? (_b = metaTags[0]) == null ? void 0 : _b.attributeValueString : "Meta Tag"
      };
    }
  }
};
var openGraph = {
  name: "openGraph",
  title: "Open Graph",
  type: "object",
  fields: [{
    name: "title",
    title: "Title",
    type: "string"
  }, {
    name: "image",
    title: "Image",
    type: "image"
  }, {
    name: "description",
    title: "Description",
    type: "string"
  }]
};
var twitter = {
  name: "twitter",
  title: "Twitter",
  type: "object",
  fields: [{
    name: "handle",
    title: "Handle",
    type: "string"
  }, {
    name: "site",
    title: "Site",
    type: "string"
  }, {
    name: "cardType",
    title: "CardType",
    type: "string"
  }]
};
const types = [schema, metaAttribute, metaTag, openGraph, twitter];
const seoMetaFields = sanity.definePlugin(() => {
  return {
    name: "sanity-plugin-seo",
    schema: {
      types
    }
  };
});
exports.seoMetaFields = seoMetaFields;
//# sourceMappingURL=index.js.map
