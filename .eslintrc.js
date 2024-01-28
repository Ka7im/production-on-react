module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:i18next/recommended",
    "plugin:storybook/recommended"
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ["**/src/**/*.test.{ts,tsx}"],
      rules: {
          'i18next/no-literal-string': 'off'
      },
    },
  ],
  parserOptions: {
    sourceType: "script",
  },
  plugins: ["react", "i18next"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    "@typescript-eslint/naming-convention": "warn",
    "i18next/no-literal-string": [
      "error",
      { markupOnly: true, ignoreAttribute: ["data-testid", "to"] },
    ],
    "@typescript-eslint/no-floating-promises": "warn",
  },
  globals: {
    __IS_DEV__: true,
  },
};

