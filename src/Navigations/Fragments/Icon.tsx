import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, IconProps} from '@ui-kitten/components';

interface Props extends IconProps {
  name: string;
}

const IconBottomBar: React.FC<Props> = (props) => {
  return <Icon style={styles.icon} fill={props.color} {...props} />;
};

export const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});

export default IconBottomBar;
