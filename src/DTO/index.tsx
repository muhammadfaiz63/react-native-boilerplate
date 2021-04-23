import React from 'react';
import {StyleSheet,Text,View , Image} from 'react-native';
import {Layout} from '@ui-kitten/components';
import Images from "Themes/Images"

interface TransitionProps {}

const Transition: React.FunctionComponent<TransitionProps> = () => {
  return (
    <Layout style={{...styles.layout, ...styles.logo}} level="1">
        <Image source={Images.logo}/>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
  },
  form: {
    justifyContent: 'flex-start',
    flex: 1,
  },
});

export default Transition;
