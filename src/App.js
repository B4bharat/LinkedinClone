import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import './App.css';

import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';

import { selectUser, logout, login } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        // ...
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoUrl
        }))
      } else {
        // User is signed out
        // ...
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Header />

      {!user ?
        <Login /> : 
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      }
    </div>
  );
}

export default App;
