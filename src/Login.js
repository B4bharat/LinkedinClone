import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// import { auth } from './firebase';
import { login } from './features/userSlice';

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import './Login.css';

const Login = () => {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const loginToApp = (e) => {
    e.preventDefault();
  };
  const register = () => {
    if(!name) {
      return alert('Please enter a full name');
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then((userAuth) => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoUrl: profilePic
      })
      .then(() => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: profilePic,
        }))
      })
    })
    .catch(err => alert(err.message));
  };

  return (
    <div className="login">
      <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />

      <form>
        <input type="text" placeholder="Full name (required if registering)" value={name} onChange={(e) => { setName(e.target.value) }} />

        <input type="text" placeholder="Profile pic URL (optional)" value={profilePic} onChange={(e) => { setProfilePic(e.target.value)}}/>

        <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />

        <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value)}}/>

        <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login