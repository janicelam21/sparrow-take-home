module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "import/extensions" : "never",
    "react/destructuring-assignment": "off",
    "max-len" : "off",
    "quote-props": "off",
    "quotes": "off",
    "react/no-array-index-key": "off",
    "no-alert": "off",
    "no-console": "off",
    "jsx-a11y/label-has-for": "off"
  },
};