import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/locales/en.json'

Vue.use(VueI18n)

const dateTimeFormats = {
    'en': {
        short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }
    },
    'ru': {
        short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }
    }
}

const numberFormats = {
    'en': {
        currency: {
            style: 'currency', currency: 'USD'
        }
    },
    'ru': {
        currency: {
            style: 'currency', currency: 'RUB'
        }
    }
}

export const i18n = new VueI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || 'en',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    messages: {en},
    dateTimeFormats,
    numberFormats
})