import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
import { getFirestore, serverTimestamp } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAn3FEcs01QXv-rrWV-pfBjb5mFZ2fDrxU",
    authDomain: "image-gallery-909f9.firebaseapp.com",
    projectId: "image-gallery-909f9",
    storageBucket: "image-gallery-909f9.appspot.com",
    messagingSenderId: "478311530516",
    appId: "1:478311530516:web:8a7734cce6a99ec686a701",
    measurementId: "G-NCVXTPV7LM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  const db = getFirestore(app);
  const timestamp = serverTimestamp(); 

  const auth = getAuth(app);

  export { storage, db, timestamp, auth };