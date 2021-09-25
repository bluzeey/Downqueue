import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDlszAPcnDUy3cLwUJHx6LRKCHiRcsJs8Y",
  authDomain: "downqueue-8b11d.firebaseapp.com",
  projectId: "downqueue-8b11d",
  storageBucket: "downqueue-8b11d.appspot.com",
  messagingSenderId: "132972018277",
  appId: "1:132972018277:web:259247bff30f5b5806a48c"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };