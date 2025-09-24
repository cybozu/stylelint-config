import cybozuEslintConfigNodePrettier from '@cybozu/eslint-config/flat/presets/node-prettier.js';

export default [
  {
    ignores: ["test/fixtures"]
  },
  ...cybozuEslintConfigNodePrettier
]
