import React from "react";
import { useState } from "react";
import firebase from "../ConfigeFile/Configue";

export default function Register() {
  const [onwername, setownername] = useState("");
  const [busname, setbusname] = useState("");

  function onSubmit(e) {
    //e.prevenDefault();

    firebase
      .database()
      .ref("BusData/" + onwername)
      .set(
        {
          id: onwername,
          name: busname,
        },
        (e) => {
          if (!e) {
            setownername("");
            setbusname("");
            console.log("Saved");
          } else {
            console.log(e);
          }
        }
      );
  }

  return (
    <div>
      <form>
        <label htmlFor="">Onwer name</label>
        <input
          type="text"
          value={onwername}
          onChange={(e) => setownername(e.target.value)}
        />
        <label htmlFor="">Bus name</label>
        <input
          type="text"
          value={busname}
          onChange={(e) => setbusname(e.target.value)}
        />
        <button onClick={(e) => onSubmit(e)}>Submit</button>
      </form>
    </div>
  );
}
