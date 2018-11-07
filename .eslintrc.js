module.exports = {
    extends: 'eslint:recommended',

    parserOptions: {
        ecmaVersion: 2018,
    },

    env: {
        commonjs: true,
        es6: true,
        mocha: true,
        node: true,
    },

    rules: {
        'no-console': 'off',
        'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
        'semi': ['warn', 'always'],
        'comma-dangle': ['warn', 'always-multiline'],
        'no-multiple-empty-lines': ['warn', { max: 1 }],
        'strict': ['warn', 'global'],
        'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never' }],
        'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
    }
};
