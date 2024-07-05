declare const types: (import("sanity").SchemaTypeDefinition | {
    name: string;
    title: string;
    type: string;
    fields: {
        name: string;
        title: string;
        type: string;
    }[];
})[];
export default types;
