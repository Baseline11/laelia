module.exports = {
  extends: [
    './.eslint/rules/base',
    './.eslint/rules/globals',
    './.eslint/rules/best-practices',
    './.eslint/rules/errors',
    './.eslint/rules/es6',
    './.eslint/rules/node',
    './.eslint/rules/react',
    './.eslint/rules/strict',
    './.eslint/rules/style',
    './.eslint/rules/variables'
  ].map(require.resolve),
  parser: 'babel-eslint',
  plugins: ['babel']
};
