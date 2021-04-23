import React from 'react';
import { GestureResponderEvent,Image,StyleProp,TextStyle,TouchableOpacity,View } from 'react-native';
import {
  Layout,
  Input,
  useStyleSheet,
  Icon
} from '@ui-kitten/components';

import themedStyles from './Styles';

export interface Props {
  placeholder: string | any;
  value: string | any;
  onChange: any;
  style: StyleProp<TextStyle>;
}

const SearchBar: React.FC<Props> = (props) => {
  const styles = useStyleSheet(themedStyles)

  return (
    <Layout style={styles.container}>
    <Icon name="search" fill={'#BDBDBD'} style={styles.iconAccount} />
    <Input
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChange}
      style={props.style}
    />
    </Layout>
  );
};

export default SearchBar;
