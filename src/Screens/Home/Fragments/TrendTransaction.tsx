import React from 'react';
import {NavigationParams, NavigationScreenProp} from 'react-navigation';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import { Layout, useStyleSheet } from '@ui-kitten/components';
import themedStyles from '../Styles';
import { useNavigation } from '@react-navigation/native';
import Images from "Themes/Images"
import { Primary, White } from 'Themes/Colors';
import Metrics from 'Themes/Metrics';

export interface Props {}

const TrendTransaction: React.FC<Props> = () => {
  const styles = useStyleSheet(themedStyles);
  const navigation = useNavigation();
  
  return (
    <>
        <View style={styles.containerTrend}>
            <Text style={{fontFamily: 'Montserrat-Bold', color: 'grey', marginBottom: 10}}>Trend Belanja</Text>
            <View style={{flex: 1, flexDirection:'row'}}>
                <TouchableOpacity style={{...styles.filterBtn,backgroundColor:Primary}}>
                    <Text style={{...styles.fontMenu,color:"#fff"}}>Perhari</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.filterBtn,backgroundColor:"transparent"}}>
                    <Text style={{...styles.fontMenu,color:Primary}}>Perminggu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.filterBtn,backgroundColor:"transparent"}}>
                    <Text style={{...styles.fontMenu,color:Primary}}>Perbulan</Text>
                </TouchableOpacity>
            </View>
            <Text style={{textAlign:'center', marginVertical: Metrics.screenHeight / 6}}>Bar Chart</Text>
        </View>
    </>
  );
};

export default TrendTransaction;
