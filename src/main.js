import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/base.css'
import { firebase } from '@/firebase/firebase'
import { CKEditor } from '@ckeditor/ckeditor5-vue'
require('firebase/compat/auth')

let app = null

firebase.auth().onAuthStateChanged(() => {
    if(!app){
        createApp(App).use(store).use(router).use( CKEditor ).mount('#app')
    }
})

