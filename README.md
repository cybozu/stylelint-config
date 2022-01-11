# @cybozu/stylelint-config

[![npm version](https://badge.fury.io/js/%40cybozu%2Fstylelint-config.svg)](https://badge.fury.io/js/%40cybozu%2Fstylelint-config)
[![](https://github.com/cybozu/stylelint-config/workflows/test/badge.svg)](https://github.com/cybozu/stylelint-config/actions?workflow=test)

A shareable [stylelint](https://stylelint.io/) config for Cybozu.

## What is this?

This is a stylelint rule set for Cybozu.
The purpose of `@cybozu/stylelint-config` are following

- Share CSS coding practices in Cybozu
- Easy to set up and free you from dealing with updates of stylelint and its plugins.

**This is intented to use with [Prettier](https://prettier.io/).

## The benefits to adapt this rule

You don't need to deal with updating stylelint and its plugins on your own.
We'll manage the updates and provide CHANGELOG that you need to care about so that you can update it easily.

## Severity

We have `Error` an `Warning` as its severity.

### Error

This is a rule you must fix because the code might not follow our practices.

### Warning

This is a rule you should fix because the code style might not be preferable for us.

## Version policy

1.  We update a major version if changes might cause new errors.
1.  We update a minor version if changes might cause new warnings.
1.  We update a patch version if changes don't cause any new errors and warings.

## How to use

Install `stylelint` and `@cybozu/stylelint-config` and put it into your `.stylelintrc`

```
% npm install --save-dev stylelint @cybozu/stylelint-config
```

- `.stylelintrc`

```js
{
  extends: "@cybozu/stylelint-config"
}
```

You can override the rules as you want.

```js
{
  extends: "@cybozu/stylelint-config",
  rules: {
    'string-quotes': 'single',
  }
}
```

## Support rule set

- `@cybozu/stylelint-config`
  - This is a rule set based on [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard)
- `@cybozu/stylelint-config/styled-components`
  - This is a rule for anyone who uses [`styled-components`](https://styled-components.com/)

## Limitations

This config doesn't support IE11, so this would suggest CSS syntaxes are incompatible with IE11.
