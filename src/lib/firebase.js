import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

//import the seed file
import {seedDatabase} from '../seed'


const config = {
    apiKey: "AIzaSyDjmQsc6R9JHMhwAfQcqEbnwiEIDYcb_SU",
    authDomain: "instagram-cloned-1edf2.firebaseapp.com",
    projectId: "instagram-cloned-1edf2",
    storageBucket: "instagram-cloned-1edf2.appspot.com",
    messagingSenderId: "170926671077",
    appId: "1:170926671077:web:e77ee4e1fbaab867c3400c"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//call the seed file ONCE!
// seedDatabase(firebase);

export { firebase, FieldValue };