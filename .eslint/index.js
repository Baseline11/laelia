module.exports = {
  extends: [
    './rules/base',
    './rules/globals',
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/node',
    './rules/react',
    './rules/strict',
    './rules/style',
    './rules/variables'
  ].map(require.resolve),
  parser: 'babel-eslint',
  plugins: ['babel']
};
