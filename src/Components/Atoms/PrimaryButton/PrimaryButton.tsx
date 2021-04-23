import React from 'react';
import { GestureResponderEvent, Image, StyleProp, TextStyle, TouchableOpacity, View, Text } from 'react-native';
import {
  Layout,
  Input,
  useStyleSheet,
  Icon
} from '@ui-kitten/components';

import themedStyles from './Styles';
import { Primary, White } from "Themes/Colors"

export interface Props {
  text: string | any;
  onPress: any;
  style: StyleProp<TextStyle>;
  disabled: boolean;
  icon: string | any;
  type: string | any;
  valueLeft: any;
  valueRight: any;
}

const PrimaryButton: React.FC<Props> = (props) => {
  const styles = useStyleSheet(themedStyles)
  const {onPress, text, disabled, icon, type, valueLeft, valueRight} = props

  return (
    <View style={{backgroundColor: '#F3F3F3', marginHorizontal: 15,marginBottom:10}}>
        <TouchableOpacity disabled={disabled} style={{...styles.touchStyle}} onPress={onPress}>
          {
            type === "space-between" ?
            <View style={{flex:1,flexDirection:"row",justifyContent:type,marginTop:10}}>
              <View>
                {valueLeft}
              </View>
              <View>
                {valueRight}
              </View>
            </View>:
            <View style={{flex:1,flexDirection:"row",justifyContent:type,alignItems:"center"}}>
            {icon ? <Icon name={icon} fill={'white'} style={styles.iconAccount} /> : null}
            <Text style={styles.buttonText}>{text}</Text>
            </View>
          }
        </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
