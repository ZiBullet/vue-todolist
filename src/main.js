import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/scss/main.scss"
import { languages } from '@/i18n'
import { createI18n } from "vue-i18n"

const localStorageLang = localStorage.lang;
const i18n = createI18n({
    legacy: true,
    locale: localStorageLang || 'ru',
    messages: languages
})

createApp(App).use(i18n).mount('#app')
