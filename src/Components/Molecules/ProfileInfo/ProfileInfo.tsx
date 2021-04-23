import React from 'react';
import { GestureResponderEvent,Image,StyleProp,TextStyle,TouchableOpacity,View,Text } from 'react-native';
import {
  Layout,
  Input,
  useStyleSheet,
  Icon
} from '@ui-kitten/components';

import themedStyles from './Styles';

export interface Props {}

const SearchBar: React.FC<Props> = (props) => {
  const styles = useStyleSheet(themedStyles)

  return (
    <Layout style={styles.container}>
    </Layout>
  );
};

export default SearchBar;
