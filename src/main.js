import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/compat/app";
import Notifications from '@kyvg/vue3-notification'
import messagePlugin from "@/plugins/message";
import messages from "@/utils/messages";
import "./registerServiceWorker";
import "firebase/compat/auth";
import "firebase/compat/database";

import vfmPlugin from 'vue-final-modal'

const firebaseConfig = {
    apiKey: "AIzaSyATHFqKq_eh5UTgkC199GdLzucurLlsOuQ",
    authDomain: "car-brother.firebaseapp.com",
    projectId: "car-brother",
    storageBucket: "car-brother.appspot.com",
    messagingSenderId: "465737599281",
    appId: "1:465737599281:web:9b57393ec0404201d88810",
    measurementId: "G-9WCHQB8LPW",
    databaseURL: "https://car-brother-default-rtdb.europe-west1.firebasedatabase.app"
};

let app;

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
            .use(store)
            .use(router)
            .use(Notifications)
            .use(vfmPlugin)
            .use(messagePlugin, messages)
            .mount("#app");
    }
})

