module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['.'],
        extensions: [
          '.js',
          '.ios.js',
          '.android.js',
          '.ts',
          '.ios.ts',
          '.android.ts',
          '.jsx',
          '.ios.jsx',
          '.android.jsx',
          '.json',
        ],
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
    ],
  ],
};
