import React from 'react';

import {Spinner} from '@ui-kitten/components';

interface LoadingProps {}

const Loading: React.FunctionComponent<LoadingProps> = () => {
  return <Spinner size="giant" status="basic" />;
};

export default Loading;
