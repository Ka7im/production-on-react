module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:i18next/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                project: 'tsconfig.eslint.json',
                tsconfigRootDir: __dirname,
                sourceType: 'module',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'i18next'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-misused-promises': [
            'error',
            {
                checksVoidReturn: {
                    attributes: false,
                },
            },
        ],
        '@typescript-eslint/naming-convention': 'warn',
        '@typescript-eslint/strict-boolean-expressions': 'warn',
        'i18next/no-literal-string': ['error', { markupOnly: true }],
        '@typescript-eslint/no-floating-promises': 'warn'
    },
};
