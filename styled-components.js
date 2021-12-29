module.exports = {
  extends: [
    './index.js',
    'stylelint-config-styled-components'
  ],
  customSyntax: '@stylelint/postcss-css-in-js',
  rules: {
    // These rules have problems with styled-components
    'function-url-quotes': null,
    'function-whitespace-after': null,
    'value-keyword-case': null, // https://github.com/stylelint/stylelint/issues/4953
  }
};
