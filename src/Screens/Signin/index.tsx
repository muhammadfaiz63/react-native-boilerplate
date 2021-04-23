import React from 'react';
import {NavigationParams, NavigationScreenProp} from 'react-navigation';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import { Header } from "Components/Organisms/index"
import { Layout, useStyleSheet } from '@ui-kitten/components';
import themedStyles from './Styles';
import {SearchBar} from 'Components/Molecules/index';
import { useNavigation } from '@react-navigation/native';

export interface Props {
  navigation: NavigationScreenProp<any, NavigationParams>;
}

const Index: React.FC<Props> = () => {
  const styles = useStyleSheet(themedStyles);
  const navigation = useNavigation();
  
  return (
    <View style={styles.root}>
      <Header title={false} accessoryRight={true} />
    </View>
  );
};

export default Index;
