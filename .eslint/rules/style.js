/**
 * Contains the configuration for the Stylistic issues, as defined in the ESLint documentation.
 *
 * @link http://eslint.org/docs/rules/#stylistic-issues
 * @type {Object}
 */
module.exports = {
  rules: {
    // Enforce consistent spacing inside array brackets.
    'array-bracket-spacing': ['error', 'never'],

    // Enforce consistent brace style for blocks.
    'brace-style': ['error', '1tbs', {allowSingleLine: true}],

    // Enforce camelcase naming convention.
    camelcase: ['error', {properties: 'never'}],

    // Require or disallow trailing commas.
    'comma-dangle': ['error', 'never'],

    // Enforce consistent spacing before and after commas.
    'comma-spacing': ['error', {before: false, after: true}],

    // Enforce consistent comma style.
    'comma-style': ['error', 'last'],

    // Enforce consistent spacing inside computed property brackets.
    'computed-property-spacing': ['error', 'never'],

    // Enforce consistent naming when capturing the current execution context.
    'consistent-this': 'off',

    // Require or disallow newline at the end of files.
    'eol-last': 'error',

    // Require or disallow spacing between function identifiers and their invocations.
    'func-call-spacing': 'error',

    // Require or disallow named `function` expressions.
    'func-names': 'error',

    // enforce the consistent use of either `function` declarations or expressions.
    'func-style': 'off',

    // Disallow specified identifiers.
    'id-blacklist': 'off',

    // Enforce minimum and maximum identifier lengths.
    'id-length': 'off',

    // Require identifiers to match a specified regular expression.
    'id-match': 'off',

    // Enforce consistent indentation.
    indent: ['error', 2, {SwitchCase: 1, VariableDeclarator: 1}],

    // Enforce the consistent use of either double or single quotes in JSX attributes.
    'jsx-quotes': ['error', 'prefer-double'],

    // Enforce consistent spacing between keys and values in object literal properties.
    'key-spacing': ['error', {beforeColon: false, afterColon: true}],

    // Enforce consistent spacing before and after keywords.
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: {after: true},
        throw: {after: true},
        case: {after: true}
      }
    }],

    // Enforce consistent linebreak style.
    'linebreak-style': 'off',

    // Require empty lines around comments.
    'lines-around-comment': 'off',

    // Enforce a maximum depth that blocks can be nested.
    'max-depth': ['off', 4],

    // Enforce a maximum line length.
    'max-len': ['error', 120, 2, {
      ignoreStrings: true,
      ignoreUrls: true,
      ignoreComments: false,
      ignoreTemplateLiterals: true
    }],

    // Enforce a maximum depth that callbacks can be nested.
    'max-nested-callbacks': 'off',

    // Enforce a maximum number of parameters in function definitions.
    'max-params': ['off', 3],

    // Enforce a maximum number of statements allowed in function blocks.
    'max-statements': ['off', 10],

    // Require constructor names to begin with a capital letter.
    'new-cap': ['error', {newIsCap: true}],

    // Require parentheses when invoking a constructor with no arguments.
    'new-parens': 'off',

    // Require or disallow an empty line after variable declarations.
    'newline-after-var': 'off',

    // Require an empty line before `return` statements.
    'newline-before-return': 'off',

    // Require a newline after each call in a method chain.
    'newline-per-chained-call': ['off', {ignoreChainWithDepth: 3}],

    // Disallow `Array` constructors.
    'no-array-constructor': 'error',

    // Disallow bitwise operators.
    'no-bitwise': 'off',

    // Disallow `continue` statements.
    'no-continue': 'off',

    // Disallow inline comments after code.
    'no-inline-comments': 'off',

    // Disallow `if` statements as the only statement in `else` blocks.
    'no-lonely-if': 'off',

    // Disallow mixed spaces and tabs for indentation.
    'no-mixed-spaces-and-tabs': 'error',

    // Disallow multiple empty lines.
    'no-multiple-empty-lines': ['error', {max: 2, maxEOF: 1}],

    // Disallow nested ternary expressions.
    'no-nested-ternary': 'error',

    // Disallow `Object` constructors.
    'no-new-object': 'error',

    // Disallow the unary operators `++` and `--`.
    'no-plusplus': 'off',

    // Disallow ternary operators.
    'no-ternary': 'off',

    // Disallow trailing whitespace at the end of lines.
    'no-trailing-spaces': 'error',

    // Disallow dangling underscores in identifiers.
    'no-underscore-dangle': 'off',

    // Disallow ternary operators when simpler alternatives exist.
    'no-unneeded-ternary': ['error', {defaultAssignment: false}],

    // Disallow whitespace before properties.
    'no-whitespace-before-property': 'error',

    // Enforce consistent spacing inside braces.
    'object-curly-spacing': ['error', 'never'],

    // Require or disallow newlines around variable declarations.
    'one-var-declaration-per-line': ['error', 'always'],

    // Enforce variables to be declared either together or separately in functions.
    'one-var': ['error', 'never'],

    // Require or disallow assignment operator shorthand where possible.
    'operator-assignment': 'off',

    // Enforce consistent linebreak style for operators.
    'operator-linebreak': 'off',

    // Require or disallow padding within blocks.
    'padded-blocks': ['error', 'never'],

    // Require quotes around object literal property names.
    'quote-props': ['error', 'as-needed', {
      keywords: false,
      unnecessary: true,
      numbers: false
    }],

    // Enforce the consistent use of either backticks, double, or single quotes.
    quotes: ['error', 'single', 'avoid-escape'],

    // Enforce consistent spacing before and after semicolons.
    'semi-spacing': ['error', {before: false, after: true}],

    // Require or disallow semicolons instead of ASI.
    semi: ['error', 'always'],

    // Require variables within the same declaration block to be sorted.
    'sort-vars': 'off',

    // Enforce consistent spacing before blocks.
    'space-before-blocks': 'error',

    // Enforce consistent spacing before `function` definition opening parenthesis.
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never'
    }],

    // Enforce consistent spacing inside parentheses.
    'space-in-parens': ['error', 'never'],

    // Require spacing around infix operators.
    'space-infix-ops': 'error',

    // Enforce consistent spacing before or after unary operators.
    'space-unary-ops': 'off',

    // Enforce consistent spacing after the `//` or `/*` in a comment.
    'spaced-comment': ['error', 'always', {
      exceptions: ['-', '+'],
      markers: ['=', '!']
    }],

    // Require parenthesis around regex literals.
    'wrap-regex': 'off'
  }
};
