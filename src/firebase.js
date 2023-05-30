import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCw9ofkdtO8trpxY4vFNl3yVKrv0OwFe-E",
    authDomain: "whatsappclone-ff0eb.firebaseapp.com",
    projectId: "whatsappclone-ff0eb",
    storageBucket: "whatsappclone-ff0eb.appspot.com",
    messagingSenderId: "869363550836",
    appId: "1:869363550836:web:35bbf536a17184c0ff1f21"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider();

export{ auth,provider}
export default db