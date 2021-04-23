import React from 'react';
import {NavigationParams, NavigationScreenProp} from 'react-navigation';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import { Header } from "Components/Organisms/index"
import { Layout, useStyleSheet } from '@ui-kitten/components';
import themedStyles from './Styles';
import {SearchBar} from 'Components/Molecules/index';
import MenuList from "./Fragments/MenuList"
import TrendTransaction from "./Fragments/TrendTransaction"
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
      <Layout style={styles.container}>
      <SearchBar placeholder={"Cari Menu"} style={styles.searchBox} value={null} onChange={()=>console.log("test")}/>
      </Layout>
    </View>
  );
};

export default Index;
