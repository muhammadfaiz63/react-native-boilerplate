import React from 'react';
import {NavigationParams, NavigationScreenProp} from 'react-navigation';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import { Layout, useStyleSheet } from '@ui-kitten/components';
import themedStyles from '../Styles';
import { useNavigation } from '@react-navigation/native';
import Images from "Themes/Images"
import { menuListData } from "../Data"

export interface Props {}

const MenuList: React.FC<Props> = () => {
  const styles = useStyleSheet(themedStyles);
  const navigation = useNavigation();
  
  return (
    <>
        <View style={styles.containerMenu}>
            {
                menuListData.map((item,index)=>(
                    <TouchableOpacity key={index} style={styles.menuBtn}
                    onPress={() => navigation.navigate(item.type, {screen: item.navigate})}>
                        <Image source={item.icon} style={{width:40, height:44, resizeMode:'contain'}}/>
                    </TouchableOpacity>
                ))
            }
        </View>
    </>
  );
};

export default MenuList;
