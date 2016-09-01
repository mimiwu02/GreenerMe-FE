import firebase from 'firebase';
import { browserHistory } from 'react-router';



const config= {
    apiKey: "AIzaSyBxV9GN_N-QjF9NqMULFAHD9Y_mX9KUPgo",
    authDomain: "greenerme-99b95.firebaseapp.com",
    databaseURL: "https://greenerme-99b95.firebaseio.com",
    storageBucket: "greenerme-99b95.appspot.com",
  };
  firebase.initializeApp(config);

const firebaseUtils = {
    signUp: (email, pass, data) => {
        console.log("signing up...", email, pass);
        console.info("data", data);
        firebase.auth().createUserWithEmailAndPassword(email, pass).catch(err => {
            if (err) {
                console.error(err.code, err.message)
            }
        }).then(res => {
                console.log("helper", res);
                firebase.database().ref("users/" + res.uid).set({
                    uid: res.uid,
                    name: data.name,
                    zip: data.zip

                })
                window.localStorage.setItem("uid", res.uid);
                console.info(window.localStorage.getItem("uid"));
                window.localStorage.setItem("display", data.userName);
                console.info(window.localStorage.getItem("displayName"));
            }
        )
    },
    logIn: (email, pass) => {
        console.log("loggging in...", email, pass);
        firebase.auth().signInWithEmailAndPassword(email, pass).catch(err => {
            // Handle Errors here.
            if (err) {
                console.error(err.code, err.message)
            }
        }).then(res => {
                console.log("logged in...", res);
                window.localStorage.setItem("uid", res.uid);
                console.info(window.localStorage.getItem("uid"));
            }
        );
    },

    checkUser: function(uid) {
      firebase.auth().onAuthStateChanged(function(uid){
        if (uid) {
          return true
        } else {
          alert("You're not signed in!")
          const path = `/log-in`
          return browserHistory.push(path)
        }
      });
    },

    logOut: () => {
        console.log("logging out...");
        firebase.auth().signOut().then(() => {
            console.log("successfully logged out");
        }, function (error) {
            console.error("error: ", error)
        }).then(res => {
            console.log(res);
            window.localStorage.setItem("uid", "");
            console.info("logged out!!", window.localStorage.getItem("uid"));
        });
    },
    // firebase for user management
    getCurrentUser: (uid) => {
      const fetchSettings = {method: 'GET'};
        return fetch(`https://greenerme-99b95.firebaseio.com/users/${uid}.json`, fetchSettings)
        .then(res => res.json())
       },

    updateCurrentUser: (uid, data) => {
      const fetchSettings = {method: 'PATCH', body: JSON.stringify(data)};
        return fetch(`https://greenerme-99b95.firebaseio.com/users/${uid}.json`, fetchSettings)
        .then(res => res.json())
       },
};

export default firebaseUtils;
