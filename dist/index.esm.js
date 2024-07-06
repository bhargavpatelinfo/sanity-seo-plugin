import { useClient, set, defineType, definePlugin } from 'sanity';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { Stack, Text } from '@sanity/ui';
const SEOFeedback = props => {
  const {
    onChange,
    value,
    renderDefault
  } = props;
  const client = useClient({
    apiVersion: "2021-06-07"
  });
  useEffect(() => {
    const fetchData = async () => {
      await client.fetch("*[_type=='homePage'][0]{'title':seo.metaTitle}").then(data => {
        const title = data == null ? void 0 : data.title;
        if (title && !value) {
          onChange(set(title));
        }
      });
    };
    fetchData();
  }, [client, onChange, value]);
  const getWordCount = title => {
    return title.trim().split(/\s+/).length;
  };
  const getTitleFeedback = title => {
    const wordCount = getWordCount(title);
    if (wordCount === 1) {
      return {
        text: "Please add some content.",
        color: "red"
      };
    }
    if (wordCount >= 1 && wordCount <= 2) {
      return {
        text: "The text contains ".concat(wordCount, " words. This is below the recommended minimum of 1 words. Add more content."),
        color: "red"
      };
    }
    if (wordCount >= 3 && wordCount <= 8) {
      return {
        text: "The text contains ".concat(wordCount, " words. This is slightly below the recommended minimum of 8 words. Add more content."),
        color: "orange"
      };
    }
    return {
      text: "The text contains ".concat(wordCount, " words. Good job!"),
      color: "green"
    };
  };
  const {
    text,
    color
  } = getTitleFeedback(value || "");
  return /* @__PURE__ */jsxs(Stack, {
    space: 3,
    children: [renderDefault(props), /* @__PURE__ */jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "7px"
      },
      children: [/* @__PURE__ */jsx("div", {
        style: {
          minWidth: "15px"
        },
        children: /* @__PURE__ */jsx("div", {
          style: {
            width: "10px",
            height: "10px",
            backgroundColor: color,
            borderRadius: "50%"
          }
        })
      }), /* @__PURE__ */jsxs(Text, {
        weight: "bold",
        muted: true,
        size: 14,
        children: ["Text length: ", text]
      })]
    })]
  });
};
const SEODescriptionFeedback = props => {
  const {
    onChange,
    value,
    renderDefault
  } = props;
  const client = useClient({
    apiVersion: "2021-06-07"
  });
  useEffect(() => {
    const fetchData = async () => {
      await client.fetch("*[_type=='homePage'][0]{'description':seo.metaDescription}").then(data => {
        const description = data == null ? void 0 : data.description;
        if (description && !value) {
          onChange(set(description));
        }
      });
    };
    fetchData();
  }, [client, onChange, value]);
  const getWordCount = title => {
    return title.trim().split(/\s+/).length;
  };
  const getTitleFeedback = title => {
    const wordCount = getWordCount(title);
    if (wordCount === 1) {
      return {
        text: "No meta description has been specified. Search engines will display copy from the page instead. Make sure to write one!",
        color: "red"
      };
    }
    if (wordCount <= 20) {
      return {
        text: "The meta description is too short (under ".concat(wordCount, " characters). Up to 60 characters are available. Use the space!"),
        color: "orange"
      };
    }
    return {
      text: "Well done!",
      color: "green"
    };
  };
  const {
    text,
    color
  } = getTitleFeedback(value || "");
  return /* @__PURE__ */jsxs(Stack, {
    space: 3,
    children: [renderDefault(props), /* @__PURE__ */jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "7px"
      },
      children: [/* @__PURE__ */jsx("div", {
        style: {
          minWidth: "15px"
        },
        children: /* @__PURE__ */jsx("div", {
          style: {
            width: "10px",
            height: "10px",
            backgroundColor: color,
            borderRadius: "50%"
          }
        })
      }), /* @__PURE__ */jsxs(Text, {
        weight: "bold",
        muted: true,
        size: 14,
        children: ["Meta description length: ", text]
      })]
    })]
  });
};
const schema = defineType({
  title: "Seo MetaFields",
  name: "seoMetaFields",
  type: "object",
  fields: [{
    name: "nofollowAttributes",
    title: "Index",
    type: "boolean",
    initialValue: false,
    description: "To prevent a URL from being indexed, you'll also need to select the true index on the tag."
  }, {
    name: "metaTitle",
    title: "Title",
    type: "string",
    components: {
      input: SEOFeedback
    }
  }, {
    name: "metaDescription",
    title: "Description",
    type: "string",
    components: {
      input: SEODescriptionFeedback
    }
  }, {
    name: "seoKeywords",
    title: "Keywords",
    type: "array",
    of: [{
      type: "string"
    }]
  }, {
    name: "openGraph",
    title: "Open Graph",
    type: "openGraph"
  }, {
    name: "additionalMetaTags",
    title: "Additional Meta Tags",
    type: "array",
    of: [{
      type: "metaTag"
    }]
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
    name: "url",
    title: "URL",
    type: "string"
  }, {
    name: "image",
    title: "Image",
    type: "image"
  }, {
    name: "title",
    title: "Title",
    type: "string",
    components: {
      input: SEOFeedback
    }
  }, {
    name: "description",
    title: "Description",
    type: "string",
    components: {
      input: SEODescriptionFeedback
    }
  }, {
    name: "siteName",
    title: "Site Name",
    type: "string"
  }]
};
var twitter = {
  name: "twitter",
  title: "Twitter",
  type: "object",
  fields: [{
    name: "cardType",
    title: "CardType",
    type: "string"
  }, {
    name: "creator",
    title: "Creator",
    type: "string"
  }, {
    name: "site",
    title: "Site",
    type: "string"
  }, {
    name: "handle",
    title: "Handle",
    type: "string"
  }]
};
const types = [schema, metaAttribute, metaTag, openGraph, twitter];
const seoMetaFields = definePlugin(() => {
  return {
    name: "sanity-plugin-seo",
    schema: {
      types
    }
  };
});
export { seoMetaFields };
//# sourceMappingURL=index.esm.js.map
