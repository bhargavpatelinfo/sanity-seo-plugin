/// <reference types="react" />
declare const _default: {
    name: string;
    title: string;
    type: string;
    fields: ({
        name: string;
        title: string;
        type: string;
        components?: undefined;
    } | {
        name: string;
        title: string;
        type: string;
        components: {
            input: (props: import("sanity").StringInputProps<import("sanity").StringSchemaType>) => import("react").JSX.Element;
        };
    })[];
};
export default _default;
