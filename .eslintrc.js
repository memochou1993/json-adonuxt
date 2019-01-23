module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  rules: {
    'arrow-body-style': ['error', 'always'],
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'import/no-unresolved': 'off',
    'no-trailing-spaces': 'off',
    'no-multi-assign': 'off',
    'no-param-reassign': ['error', { props: false }],
    'space-before-function-paren': ['error', { named: 'never' }],
    'strict': 0,
    'prefer-destructuring': ['error', { 'AssignmentExpression': { 'object': true } }],
  },
  globals: {
    use: true,
    describe: true,
    test: true,
    expect: true,
  },
};
