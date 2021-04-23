import React from 'react';

import {Card, Text, Icon, useTheme} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

interface SuccessProps {}

const Success: React.FunctionComponent<SuccessProps> = () => {
  const theme = useTheme();
  return (
    <Card style={styles.card}>
      <Icon
        name="checkmark-circle"
        style={styles.icon}
        fill={theme['color-success-default']}
      />
      <Text>Success</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60,
  },
});

export default Success;
