module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier', 'prettier/react'],
  plugins: ['react', 'import', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'global-require': 'off',
    camelcase: 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src'
      }
    }
  }
};
