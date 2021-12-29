# Contributing Guide

Thank you for contributing to `@cybozu/stylelint-config` :tada:

## How to develop

### Set up

```
% npm ci
```

### Adding rules or fixing bugs

You can modify our configs and should add tests for you changes.
We use [Jest's Snapshot Testing](https://jestjs.io/docs/snapshot-testing), so you should update a snapshot in the `__snapshots__` directory.

### Adding a new rule set

You can a new file for the rule set and should add tests for your rule set.

## Release

You can confirm what changes will be released with the `release:dryrun` command.

```
npm run release:dryrun
```

And then, you can release a new version with the following command.

```
npm run release
```

Of cource, you need to have the permission for `@cybozu/stylelint-config`.
