import I18n from 'i18n-js';

import * as RNLocalize from 'react-native-localize';

import en_US from './locales/en_US';
import id_ID from './locales/id_ID';

const locales = RNLocalize.getLocales();

const poolLocale = ['en-US', 'id-ID'];

if (Array.isArray(locales)) {
  let locale = locales[0].languageTag;
  locale = poolLocale.includes(locale) ? locale : 'en-US';
  I18n.locale = locale;
}

I18n.fallbacks = true;
I18n.translations = {
  'en-US': en_US,
  'id-ID': id_ID,
};

export default I18n;
