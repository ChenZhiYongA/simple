/*
 * Copyright(C),sira
 * Author: sira  j2922592097@gmail.com
 * Date: 2022-01-27 09:12:36
 * Version: 0.0.0.1
 * Description: i18n config
*/
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

function loadLocaleMessages () {
  const locales = require.context('../lang', true, /[A-Za-z0-9-_,\s]+\.json$/i) // match language config in '../lang'
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export default new VueI18n({ // i18n config
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
})
