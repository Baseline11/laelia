/**
 * Contains the configuration for the Best Practices, as defined in the ESLint documentation.
 *
 * @link http://eslint.org/docs/rules/#best-practices
 * @type {Object}
 */
module.exports = {
  rules: {
    // Enforce getter and setter pairs in objects.
    'accessor-pairs': 'off',

    // Enforce `return` statements in callbacks of array methods.
    'array-callback-return': 'error',

    // Enforce the use of variables within the scope they are defined.
    'block-scoped-var': 'error',

    // Enforce a maximum cyclomatic complexity allowed in a program.
    complexity: ['off', 11],

    // Require `return` statements to either always or never specify values.
    'consistent-return': 'error',

    // Enforce consistent brace style for all control statements.
    curly: ['error', 'multi-line'],

    // Require `default` cases in `switch` statements.
    'default-case': 'error',

    // Enforce consistent newlines before and after dots.
    'dot-location': 'off',

    // Enforce dot notation whenever possible.
    'dot-notation': ['error', {allowKeywords: true}],

    // Require the use of `===` and `!==`.
    eqeqeq: 'error',

    // Require `for-in` loops to include an `if` statement.
    'guard-for-in': 'error',

    // Disallow the use of `alert`, `confirm`, and `prompt`.
    'no-alert': 'error',

    // Disallow the use of `arguments.caller` or `arguments.callee`.
    'no-caller': 'error',

    // Disallow lexical declarations in case clauses.
    'no-case-declarations': 'error',

    // Disallow division operators explicitly at the beginning of regular expressions.
    'no-div-regex': 'off',

    // Disallow else `blocks` after `return` statements in `if` statements.
    'no-else-return': 'error',

    // Disallow `null` comparisons without type-checking operators.
    'no-eq-null': 'off',

    // Disallow the use of `eval()`.
    'no-eval': 'error',

    // Disallow extending native types.
    'no-extend-native': 'error',

    // Disallow unnecessary calls to `.bind()`.
    'no-extra-bind': 'error',

    // Disallow unnecessary labels.
    'no-extra-label': 'error',

    // Disallow fallthrough of case statements.
    'no-fallthrough': 'error',

    // Disallow leading or trailing decimal points in numeric literals.
    'no-floating-decimal': 'error',

    // Disallow assignments to native objects or read-only global variables.
    'no-global-assign': 'error',

    // Disallow shorthand type conversions.
    'no-implicit-coercion': 'off',

    // Disallow variable and `function` declarations in the global scope.
    'no-implicit-globals': 'off',

    // Disallow the use of `eval()`-like methods.
    'no-implied-eval': 'error',

    // Disallow `this` keywords outside of classes or class-like objects.
    'no-invalid-this': 'off',

    // Disallow the use of the `__iterator__` property.
    'no-iterator': 'error',

    // Disallow labeled statements.
    'no-labels': ['error', {allowLoop: false, allowSwitch: false}],

    // Disallow unnecessary nested blocks.
    'no-lone-blocks': 'error',

    // Disallow `function` declarations and expressions inside loop statements.
    'no-loop-func': 'error',

    // Disallow multiple spaces.
    'no-multi-spaces': 'error',

    // Disallow multiline strings.
    'no-multi-str': 'error',

    // Disallow `new` operators with the `Function` object.
    'no-new-func': 'error',

    // Disallow `new` operators with the `String`, `Number`, and `Boolean` objects.
    'no-new-wrappers': 'error',

    // Disallow `new` operators outside of assignments or comparisons.
    'no-new': 'error',

    // Disallow octal escape sequences in string literals.
    'no-octal-escape': 'error',

    // Disallow octal literals.
    'no-octal': 'error',

    // Disallow reassigning `function` parameters.
    'no-param-reassign': ['error', {props: true}],

    // Disallow the use of the `__proto__` property.
    'no-proto': 'error',

    // Disallow variable redeclaration.
    'no-redeclare': 'error',

    // Disallow assignment operators in `return` statements.
    'no-return-assign': 'error',

    // Disallow `javascript:` urls.
    'no-script-url': 'error',

    // Disallow assignments where both sides are exactly the same.
    'no-self-assign': 'error',

    // Disallow comparisons where both sides are exactly the same.
    'no-self-compare': 'error',

    // Disallow comma operators.
    'no-sequences': 'error',

    // Disallow throwing literals as exceptions.
    'no-throw-literal': 'error',

    // Disallow unmodified loop conditions.
    'no-unmodified-loop-condition': 'off',

    // Disallow unused expressions.
    'no-unused-expressions': 'error',

    // Disallow unused labels.
    'no-unused-labels': 'error',

    // Disallow unnecessary calls to `.call()` and `.apply()`.
    'no-useless-call': 'off',

    // Disallow void operators.
    'no-void': 'off',

    // Disallow specified warning terms in comments.
    'no-warning-comments': ['off', {terms: ['todo', 'fixme', 'xxx'], location: 'start'}],

    // Disallow with statements.
    'no-with': 'error',

    // Enforce the consistent use of the radix argument when using `parseInt()`.
    radix: 'error',

    // Require `var` declarations be placed at the top of their containing scope.
    'vars-on-top': 'error',

    // Require parentheses around immediate `function` invocations.
    'wrap-iife': ['error', 'outside'],

    // Require or disallow `Yoda` conditions.
    yoda: 'error'
  }
};
