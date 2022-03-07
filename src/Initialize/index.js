import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import Routes from '../routes';
import 'firebase/auth';
import SignIn from '../views/SignIn';

function Initialize() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0],
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);
  return (
    <div className="App">
      {user ? (
        <>
          <Routes />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default Initialize;
