/**
 * Contains the configuration for the Node and CommonJS environment, as defined in the ESLint documentation.
 *
 * @link http://eslint.org/docs/rules/#nodejs-and-commonjs
 * @type {Object}
 */
module.exports = {
  env: {
    node: true
  },
  rules: {
    // Require `return` statements after callbacks.
    'callback-return': 'off',

    // Require error handling in callbacks.
    'handle-callback-err': 'off',

    // Disallow `require` calls to be mixed with regular variable declarations.
    'no-mixed-requires': ['off', false],

    // Disallow `new` operators with calls to `require`.
    'no-new-require': 'off',

    // Disallow string concatenation with `__dirname` and `__filename`.
    'no-path-concat': 'off',

    // Disallow the use of `process.env`.
    'no-process-env': 'off',

    // Disallow the use of `process.exit()`.
    'no-process-exit': 'off',

    // Disallow specified modules when loaded by `require`.
    'no-restricted-modules': 'off',

    // Disallow synchronous methods.
    'no-sync': 'off'
  }
};
