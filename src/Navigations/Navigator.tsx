import {createStackNavigator} from '@react-navigation/stack';
import {createCompatNavigatorFactory} from '@react-navigation/compat';

import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';

const RootStack = createCompatNavigatorFactory(createStackNavigator)(
  {
    Auth: {
      screen: AuthNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },
    Tab: {
      screen: TabNavigator,
      navigationOptions: {
        headerShown: false,
      },
    }
  },
  {
    initialRouteName: 'Auth',
  },
);
export default RootStack;
