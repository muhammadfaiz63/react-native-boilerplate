import React from 'react';
import {ViewProps} from 'react-native';
import i18n from './i18n';

interface I18nProviderProps extends ViewProps {}

export const I18nContext = React.createContext(i18n);

const I18nProvider: React.FC<I18nProviderProps> = (props) => {
  return (
    <I18nContext.Provider value={i18n}>{props.children}</I18nContext.Provider>
  );
};

export default I18nProvider;
