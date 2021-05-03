import firebase from '../config/firebase'


export function getBus(data) {
    // if(!localStorage.getItem(ACCESS_TOKEN)) {
    //     return Promise.reject("No access token set.");
    // }
    return request({
      url:  databaseURL+ "",
      method: "POST",
      body: JSON.stringify(data),
    });

    
  }