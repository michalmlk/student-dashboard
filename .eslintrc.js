module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:react/jsx-runtime'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/function-component-definition': 0,
    'arrow-body-style': 0,
    'import/prefer-default-export': 0,
    'react/button-has-type': 0,
    'comma-dangle': 0,
    'react/require-default-props': 0,
    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'linebreak-style': 0,
    'react/jsx-tag-spacing': 0,
    'object-curly-newline': 0,
    'react/jsx-boolean-value': 0,
  },
};
