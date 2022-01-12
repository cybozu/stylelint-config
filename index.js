module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier'
  ],
  rules: {
    // We don't care about the following coding styles.
    'comment-empty-line-before': null,
    'custom-property-empty-line-before': null,
    'rule-empty-line-before': null,
  }
};
