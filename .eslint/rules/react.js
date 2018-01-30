/**
 * Contains the configuration for the React rules.
 *
 * @link https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
 * @type {Object}
 */
module.exports = {
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // Prevent missing `displayName` in a React component definition.
    'react/display-name': ['off', {ignoreTranspilerName: false}],

    // Forbid certain propTypes.
    'react/forbid-prop-types': ['off', {
      forbid: ['any', 'array', 'object']
    }],

    // Enforce boolean attributes notation in JSX.
    'react/jsx-boolean-value': ['error', 'never'],

    // Validate closing bracket location in JSX.
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

    // Enforce or disallow spaces inside of curly braces in JSX attributes.
    'react/jsx-curly-spacing': ['off', 'never', {
      allowMultiline: true
    }],

    // Enforce event handler naming conventions in JSX.
    'react/jsx-handler-names': ['off', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on'
    }],

    // Validate props indentation in JSX.
    'react/jsx-indent-props': ['error', 2],

    // Validate JSX has key prop when in array or iterator.
    'react/jsx-key': 'off',

    // Limit maximum of props on a single line in JSX.
    'react/jsx-max-props-per-line': ['off', {maximum: 1}],

    // Prevent usage of `.bind()` and arrow functions in JSX props.
    'react/jsx-no-bind': ['error', {
      ignoreRefs: false,
      allowArrowFunctions: false,
      allowBind: false
    }],

    // Prevent duplicate props in JSX.
    'react/jsx-no-duplicate-props': ['off', {ignoreCase: false}],

    // Prevent usage of unwrapped JSX strings.
    'react/jsx-no-literals': 'off',

    // Disallow undeclared variables in JSX.
    'react/jsx-no-undef': 'error',

    // Enforce PascalCase for user-defined JSX components.
    'react/jsx-pascal-case': 'off',

    // Validates whitespace in and around the JSX opening and closing brackets..
    'react/jsx-tag-spacing': [2, {}],

    // Prevent variables used in JSX to be incorrectly marked as unused.
    'react/jsx-uses-vars': 'error',

    // Prevent missing parentheses around multilines JSX.
    'react/jsx-wrap-multilines': ['error', {
      declaration: true,
      assignment: true,
      return: true
    }],

    // Enforce propTypes declarations alphabetical sorting.
    'react/sort-prop-types': ['off', {
      ignoreCase: false,
      callbacksLast: false
    }],

    // Enforce props alphabetical sorting.
    'react/jsx-sort-props': ['off', {
      ignoreCase: false,
      callbacksLast: false
    }],

    // Prevent React to be incorrectly marked as unused.
    'react/jsx-uses-react': 'error',

    // Prevent usage of dangerous JSX properties.
    'react/no-danger': 'off',

    // Prevent usage of deprecated methods.
    'react/no-deprecated': 'error',

    // Prevent usage of `setState` in `componentDidMount`.
    'react/no-did-mount-set-state': 'error',

    // Prevent usage of `setState` in `componentDidUpdate`.
    'react/no-did-update-set-state': 'error',

    // Prevent direct mutation of `this.state`.
    'react/no-direct-mutation-state': 'off',

    // Prevent usage of `isMounted`.
    'react/no-is-mounted': 'error',

    // Prevent multiple component definition per file.
    'react/no-multi-comp': ['error', {ignoreStateless: true}],

    // Prevent usage of `setState`.
    'react/no-set-state': 'off',

    // Prevent using string references in ref attribute.
    'react/no-string-refs': 'error',

    // Prevent usage of unknown DOM property.
    'react/no-unknown-property': 'error',

    // Enforce ES5 or ES6 class for React Components.
    'react/prefer-es6-class': ['error', 'always'],

    // Enforce stateless React Components to be written as a pure function.
    'react/prefer-stateless-function': ['error', {ignorePureComponents: true}],

    // Prevent missing props validation in a React component definition.
    'react/prop-types': ['error', {
      ignore: [],
      customValidators: []
    }],

    // Prevent missing `React` when using JSX.
    'react/react-in-jsx-scope': 'error',

    // Prevent extra closing tags for components without children.
    'react/self-closing-comp': 'error',

    // Enforce component methods order.
    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render'
      ]
    }]
  }
};
