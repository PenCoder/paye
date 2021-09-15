// import * as firebase from 'firebase';
// import '@firebase/auth';
// import "@firebase/firestore";
import {
    FIREBASE_API_KEY,
    FIREBASE_DB_URI,
    FIREBASE_AUTHDOMAIN,
    FIREBASE_APP_ID,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_SENDING_ID,
    FIREBASE_MEASUREMENT_ID,
} from 'react-native-dotenv';

const config = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTHDOMAIN,
    databaseURL: FIREBASE_DB_URI,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_SENDING_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID
}

// if (!firebase.apps.length) {
//     firebase.initializeApp(config);
// }

// export { firebase };