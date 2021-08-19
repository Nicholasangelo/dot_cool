module.exports = {
    root: true,
    extends: ['@react-native-community', 'eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['prettier', 'react'],
    rules: {
        'prettier/prettier': 'error',
        'react/no-unescaped-entities': 0,
        'jsx-quotes': 0,
        'curly': 0,
    },
};