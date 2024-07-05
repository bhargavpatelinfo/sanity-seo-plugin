declare const schema: {
    type: "object";
    name: "seoMetaFields";
} & Omit<import("sanity").ObjectDefinition, "preview"> & {
    preview?: import("sanity").PreviewConfig<Record<string, string>, Record<never, any>> | undefined;
};
export default schema;
