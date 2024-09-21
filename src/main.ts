import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

// Make BootstrapVue available throughout your project
// Optionally install the BootstrapVue icon components plugin

createApp(App).mount('#app')
