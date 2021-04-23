module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          Screens: './src/Screens',
          Services: './src/Services',
          Contexts: './src/Contexts',
          Themes: './src/Themes',
          Config: './src/Config',
          Components: './src/Components',
          Atoms: './src/Components/Atoms',
          Molecules: './src/Components/Molecules',
          Organisms: './src/Components/Organisms',
          Utils: './src/Utils',
        },
      },
    },
  },
};
