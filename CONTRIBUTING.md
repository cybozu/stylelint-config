# Contributing Guide

Thank you for contributing to `@cybozu/stylelint-config` :tada:

## How to develop

### Set up

```sh
pnpm install
```

### Adding rules or fixing bugs

You can modify our configs and should add tests for you changes.
We use [Jest's Snapshot Testing](https://jestjs.io/docs/snapshot-testing), so you should update a snapshot in the `__snapshots__` directory.

### Adding a new rule set

You can a new file for the rule set and should add tests for your rule set.
