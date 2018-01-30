/**
 * Contains the configuration for the Errors, as defined in the ESLint documentation.
 *
 * @link http://eslint.org/docs/rules/#possible-errors
 * @type {Object}
 */
module.exports = {
  rules: {
    // Disallow assignment operators in conditional expressions.
    'no-cond-assign': ['error', 'always'],

    // Disallow the use of `console`.
    'no-console': 'error',

    // Disallow constant expressions in conditions.
    'no-constant-condition': 'error',

    // Disallow control characters in regular expressions.
    'no-control-regex': 'error',

    // Disallow the use of `debugger`.
    'no-debugger': 'error',

    // Disallow duplicate arguments in `function` definitions.
    'no-dupe-args': 'error',

    // Disallow duplicate keys in object literals.
    'no-dupe-keys': 'error',

    // Disallow duplicate case labels.
    'no-duplicate-case': 'error',

    // Disallow empty character classes in regular expressions.
    'no-empty-character-class': 'error',

    // Disallow empty block statements.
    'no-empty': 'error',

    // Disallow reassigning exceptions in `catch` clauses.
    'no-ex-assign': 'error',

    // Disallow unnecessary boolean casts.
    'no-extra-boolean-cast': 'off',

    // Disallow unnecessary parentheses.
    'no-extra-parens': ['error', 'functions'],

    // Disallow unnecessary semicolons.
    'no-extra-semi': 'error',

    // Disallow reassigning `function` declarations.
    'no-func-assign': 'error',

    // Disallow variable or `function` declarations in nested blocks.
    'no-inner-declarations': 'error',

    // Disallow invalid regular expression strings in `RegExp` constructors.
    'no-invalid-regexp': 'error',

    // Disallow irregular whitespace outside of strings and comments.
    'no-irregular-whitespace': 'error',

    // Disallow calling global object properties as functions.
    'no-obj-calls': 'error',

    // Disallow multiple spaces in regular expressions.
    'no-regex-spaces': 'error',

    // Disallow sparse arrays.
    'no-sparse-arrays': 'error',

    // Disallow confusing multiline expressions.
    'no-unexpected-multiline': 'off',

    // Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements.
    'no-unreachable': 'error',

    // Disallow negating the left operand of relational operators.
    'no-unsafe-negation': 'error',

    // Require calls to `isNaN()` when checking for `NaN`.
    'use-isnan': 'error',

    // Enforce valid JSDoc comments.
    'valid-jsdoc': 'off',

    // Enforce comparing `typeof` expressions against valid strings.
    'valid-typeof': 'error'
  }
};
