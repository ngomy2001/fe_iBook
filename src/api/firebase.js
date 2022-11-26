// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from '@firebase/storage';
import axios from 'axios';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAnXiFhI6AsjyA7bj8YSrpkfqaqVq3iOy0',
  authDomain: 'finalproject-afaa4.firebaseapp.com',
  projectId: 'finalproject-afaa4',
  storageBucket: 'finalproject-afaa4.appspot.com',
  messagingSenderId: '57723213631',
  appId: '1:57723213631:web:6cf9137e106cca5c20a58a',
};

const getTokenSample = async (sampleName) => {
  try {
    const url = `https://firebasestorage.googleapis.com/v0/b/finalproject-afaa4.appspot.com/o/bookSamples%2F${sampleName}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {}
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseStorage = getStorage(app);
export { firebaseStorage, getTokenSample };
