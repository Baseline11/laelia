/**
 * Contains the configuration for the ES6 environment, as defined in the ESLint documentation.
 *
 * @link http://eslint.org/docs/rules/#ecmascript-6
 * @type {Object}
 */
module.exports = {
  env: {
    es6: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    // Require braces around arrow function bodies.
    'arrow-body-style': ['error', 'as-needed'],

    // Require parentheses around arrow function arguments.
    'arrow-parens': 'off',

    // Enforce consistent spacing before and after the arrow in arrow functions.
    'arrow-spacing': ['error', {before: true, after: true}],

    // Require `super()` calls in constructors.
    'constructor-super': 'off',

    // Enforce consistent spacing around `*` operators in generator functions.
    'generator-star-spacing': 'off',

    // Disallow reassigning class members.
    'no-class-assign': 'off',

    // Disallow arrow functions where they could be confused with comparisons.
    'no-confusing-arrow': 'off',

    // Disallow reassigning `const` variables.
    'no-const-assign': 'error',

    // Disallow `new` operators with the `Symbol` object.
    'no-new-symbol': 'error',

    // Disallow specified modules when loaded by `import`.
    'no-restricted-imports': 'off',

    // Disallow `this` / `super` before calling `super()` in constructors.
    'no-this-before-super': 'off',

    // Require `let` or `const` instead of `var`.
    'no-var': 'error',

    // Disallow unnecessary constructors.
    'no-useless-constructor': 'error',

    // Require or disallow method and property shorthand syntax for object literals.
    'object-shorthand': ['error', 'always'],

    // Require arrow functions as callbacks.
    'prefer-arrow-callback': 'error',

    // Require `const` declarations for variables that are never reassigned after declared.
    'prefer-const': 'error',

    // Require spread operators instead of `.apply()`.
    'prefer-spread': 'off',

    // Require rest parameters instead of arguments.
    'prefer-rest-params': 'error',

    // Require template literals instead of string concatenation.
    'prefer-template': 'error',

    // Require generator functions to contain `yield`.
    'require-yield': 'off',

    // Enforce sorted import declarations within modules.
    'sort-imports': 'off',

    // Require or disallow spacing around embedded expressions of template strings.
    'template-curly-spacing': ['error', 'never'],

    // Require or disallow spacing around the `*` in `yield*` expressions.
    'yield-star-spacing': ['error', 'after']
  }
};
