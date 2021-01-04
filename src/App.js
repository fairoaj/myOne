import React from "react";
import logo from "./logo.svg";

import HomePage from "./HomePage/HomePage";
import "antd/dist/antd.css";
import Navigation from "./Navigate/Navigate";
import "bootstrap/dist/css/bootstrap.css";

import firebase from "./ConfigeFile/Configue";
import Register from "./RgisterPage/Register";
import { useState } from "react";
import { useEffect } from "react";

// firebase.firestore().collection("BusData").add({
//   Owner: "raja",
//   BusName: "Raja Travele",
// });

function App() {
  // const [busdata, setbusdata] = useState([]);

  // useEffect(() => {
  //   firebase
  //     .database()
  //     .ref("BusData")
  //     .on("value", (snapshot) => {
  //       // const newbusdata = snapshot.docs.map((doc) => ({
  //       //   id: doc.id,
  //       //   ...doc.data(),
  //       // }));

  //       console.log(Object.values(snapshot.toJSON()));
  //       setbusdata(Object.values(snapshot.toJSON()));

  //       //setbusdata(snapshot.toJSON());
  //     });
  // }, []);

  return (
    <div className="App">
      {/* <div>
        {busdata.map((item) => (
          <p>{item.name}</p>
        ))}
      </div>

      <h2>Well come to bus booking</h2>
      <Register /> */}

      <Navigation />
    </div>
  );
}

export default App;
