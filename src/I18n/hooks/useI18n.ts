import {useContext} from 'react';

import {I18nContext} from '../I18nProvider';

export default function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('No i18Provider');
  }

  return context;
}
