module.exports = {
  extends: ["./index.js", "stylelint-config-styled-components"],
  customSyntax: "postcss-styled-syntax",
  rules: {
    // These rules have problems with styled-components
    // This rule cannot recognize template literals with line feeds properly.
    // Error
    // background-image: url(${toStaticUrl(
    //   '/img/foo.png'
    // )});
    // OK
    // background-image: url(${toStaticUrl('/img/foo.png')});
    "function-url-quotes": null,
    // This rule cannot recognize CSS functions in template literals
    // Error
    // transform: ${({ rotate }) => `rotate(${rotate}deg)`};
    // OK
    // transform: ${({ rotate }) => `rotate(${rotate}deg) `};
    "function-whitespace-after": null,
    "value-keyword-case": null, // https://github.com/stylelint/stylelint/issues/4953
  },
};
