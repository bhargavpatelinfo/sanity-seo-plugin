export declare namespace env {
    let browser: boolean;
    let es2021: boolean;
}
export declare let plugins: string[];
declare let _extends: string[];
export { _extends as extends };
export declare let parser: string;
export declare namespace parserOptions {
    namespace ecmaFeatures {
        let jsx: boolean;
    }
    let ecmaVersion: number;
    let sourceType: string;
    let project: string;
}
export declare let rules: {
    'import/no-extraneous-dependencies': (string | {
        devDependencies: boolean;
        optionalDependencies: boolean;
        peerDependencies: boolean;
    })[];
    'react/prop-types': string;
    'react/require-default-props': string;
    'no-underscore-dangle': string;
    'react/function-component-definition': (number | {
        namedComponents: string[];
        unnamedComponents: string;
    })[];
    'no-unused-vars': string;
    'react/jsx-props-no-spreading': string;
    'prettier/prettier': (string | {
        printWidth: number;
        endOfLine: string;
    })[];
};
