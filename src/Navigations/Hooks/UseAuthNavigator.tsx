import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

export default function useAuthNavigator() {
  const navigation = useNavigation();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    SplashScreen.hide();
    navigation.navigate('Tab', {
      screen: 'Home',
    });
  }, [navigation]);

  return { done: "OK" };
}
