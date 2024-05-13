
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCzppev8QvDkbX8yscyoiSgY5hMROPPO78",
  authDomain: "portfolio-708b2.firebaseapp.com",
  databaseURL: "https://portfolio-708b2-default-rtdb.firebaseio.com",
  projectId: "portfolio-708b2",
  storageBucket: "portfolio-708b2.appspot.com",
  messagingSenderId: "1097896249577",
  appId: "1:1097896249577:web:ea536212a1ff42d8c40878"
};

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export default firebaseConfig;