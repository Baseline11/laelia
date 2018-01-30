/**
 * Contains the configuration for the Variables, as defined in the ESLint documentation.
 *
 * @link http://eslint.org/docs/rules/#variables
 * @type {Object}
 */
module.exports = {
  rules: {
    // Require or disallow initialization in variable declarations.
    'init-declarations': 'off',

    // Disallow `catch` clause parameters from shadowing variables in the outer scope.
    'no-catch-shadow': 'off',

    // Disallow deleting variables.
    'no-delete-var': 'error',

    // Disallow labels that share a name with a variable.
    'no-label-var': 'off',

    // Disallow specified global variables.
    'no-restricted-globals': 'off',

    // Disallow identifiers from shadowing restricted names.
    'no-shadow-restricted-names': 'error',

    // Disallow variable declarations from shadowing variables declared in the outer scope.
    'no-shadow': 'error',

    // Disallow initializing variables to `undefined`.
    'no-undef-init': 'off',

    // Disallow the use of undeclared variables unless mentioned in `/* global */` comments.
    'no-undef': 'error',

    // Disallow the use of `undefined` as an identifier.
    'no-undefined': 'off',

    // Disallow unused variables.
    'no-unused-vars': ['error', {
      vars: 'local',
      args: 'after-used'
    }],

    // Disallow the use of variables before they are defined.
    'no-use-before-define': 'error'
  }
};
