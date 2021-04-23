import React from 'react';
import { GestureResponderEvent,Image,TouchableOpacity,View } from 'react-native';
import {
  TopNavigation,
  Icon,
  useStyleSheet,
  StyleService,
  Layout,
  Text,
} from '@ui-kitten/components';
import { RenderProp } from '@ui-kitten/components/devsupport';
import { useNavigation } from '@react-navigation/native';
import Metrics from "Themes/Metrics";
import Images from "Themes/Images";

import themedStyles from './Styles';

export interface Props {
  title: string | any;
  accessoryRight: boolean | any;
}

const RenderRight: React.FC<{ onPress: ((event: GestureResponderEvent) => void) | undefined; }> = (props) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Layout style={styles.layout}>
    </Layout>
  );
};

const Index: React.FC<Props> = (props) => {
  const styles = useStyleSheet(themedStyles);
  const navigation = useNavigation();

  return (
    <TopNavigation
      title={() => {
        if (props?.title) {
          return (
              <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.container}>
              <Icon name="arrow-back-outline" fill={'white'} style={styles.iconBack} />
              <Text category="h6" style={styles.text}>
                {props.title}
              </Text>
              </TouchableOpacity>
          );
        }
        else {
          return (
            <Layout style={styles.container}>
                <TouchableOpacity style={{backgroundColor:"#fff"}}>
                  <Image style={{ height:Metrics.screenHeight / 10, width: Metrics.screenHeight / 7, marginHorizontal:10, resizeMode:'contain'}} source={Images.logo} />
                </TouchableOpacity>
                <Text category="h6" style={styles.titleTxt}>
                  Mobile App
                </Text>
            </Layout>
          );
        }
      }
      }
      style={styles.root}
      accessoryRight={props.accessoryRight ? () => (
        <RenderRight
        onPress={() =>
          navigation.navigate('App', { screen: 'Scan Kartu' })
        }
      />
      ):undefined}
    />
  );
};

export default Index;
