import React from 'react';

import {Card, Text, Icon, useTheme} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

interface ErrorProps {}

const Error: React.FunctionComponent<ErrorProps> = () => {
  const theme = useTheme();
  return (
    <Card style={styles.card}>
      <Icon
        name="alert-circle"
        style={styles.icon}
        fill={theme['color-danger-default']}
      />
      <Text style={styles.text}>Error</Text>
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
  text: {
    textAlign: 'center',
  },
});

export default Error;
