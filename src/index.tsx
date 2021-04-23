import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './Navigations/index';
import { customTheme } from 'Themes/Theme';
import FlashMessage from 'react-native-flash-message';
import { UseAuth } from "./Contexts/index";
import MultiProvider from './Config/MultiProvider';

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...customTheme }}>
      <MultiProvider
        providers={[
          <UseAuth.AuthProvider />
        ]}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
        <FlashMessage position={'bottom'} />
      </MultiProvider>
    </ApplicationProvider>
  </React.Fragment>
);

export default App;
