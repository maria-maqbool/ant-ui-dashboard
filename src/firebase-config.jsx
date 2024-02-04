// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCOnlgqPPNt1xDYsyQ6oESBswLIB5baxyA',
  authDomain: 'antd-dashboard-d2fc6.firebaseapp.com',
  projectId: 'antd-dashboard-d2fc6',
  storageBucket: 'antd-dashboard-d2fc6.appspot.com',
  messagingSenderId: '804190088360',
  appId: '1:804190088360:web:1d5fdda6d4f59c69efe69d',
  measurementId: 'G-Q8HD7GB9H5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
