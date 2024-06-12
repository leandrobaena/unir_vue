import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-blue/theme.css';

const app = createApp(App)
app.use(PrimeVue);
app.mount('#app')
