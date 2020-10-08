import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXmXoSksoU9R07VtzrmqJiJqJFcYspTAg",
  authDomain: "bus-booking-app-de78b.firebaseapp.com",
  databaseURL: "https://bus-booking-app-de78b.firebaseio.com",
  projectId: "bus-booking-app-de78b",
  storageBucket: "bus-booking-app-de78b.appspot.com",
  messagingSenderId: "398164688297",
  appId: "1:398164688297:web:eb9087517c93bb1d6558b8",
};

export default firebase.initializeApp(firebaseConfig);
