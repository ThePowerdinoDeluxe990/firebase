import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore,
    collection ,
    addDoc,
    getDocs,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeS8IsZbb7S_zyLd8dwWpVKGKBGVL9x-E",
  authDomain: "fir-javascript-crud-96271.firebaseapp.com",
  projectId: "fir-javascript-crud-96271",
  storageBucket: "fir-javascript-crud-96271.appspot.com",
  messagingSenderId: "599184272203",
  appId: "1:599184272203:web:c9b0b476f05fc8080e96ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db= getFirestore()

export const saveTask = (title,description) =>
    addDoc(collection(db,"tasks"),{title,description})

export const getTasks = ()=>  getDocs(collection(db, 'tasks'))

export const onGetTasks = (callback)=> onSnapshot(collection(db,'tasks'),callback)
