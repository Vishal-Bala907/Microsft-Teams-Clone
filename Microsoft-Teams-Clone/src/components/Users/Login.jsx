import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
import { useSelector, useDispatch } from "react-redux";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import Spinner from "../Public/Spinner.jsx";
import { auth } from "../../firebase";
import {
  setauthenticatedUser,
  setProfile,
  logout,
} from "../../Redux Store/NavBar Slices/LoginAndImages.js";

export default function Login() {
  const password = useRef("");
  const email = useRef("");
  const navigate = useNavigate();
  const authenticatedUser = useSelector(
    (state) => state.login.authenticatedUser
  );
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.current.value !== "" && email.current.value !== "") {
      // try {
      let Email = email.current.value;
      let Password = password.current.value;
      try {
        setLoading(true);
        await signInWithEmailAndPassword(auth, Email, Password);
        // dispatch(setauthenticatedUser(true));
        // dispatch(setProfile());
        const unsub = onAuthStateChanged(auth, (user) => {
          // alert("authen");
          // state.profile = user;
          console.log(user);
          sessionStorage.setItem("profile", JSON.stringify(user));
          // dispatch(setProfile());
        });
        setLoading(false);
        navigate("/calling");
      } catch (err) {
        alert("Invalid username or password");
        console.log(err);
      }
    } else {
      alert("Please Enter all the required fields");
    }
  };
  return (
    <div className={styles.main}>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            className={styles.input}
            type="email"
            name="enmai"
            id="enmai"
            placeholder="Enter your email"
            ref={email}
          />
        </div>

        <div>
          <input
            className={styles.input}
            type="password"
            name="password"
            id="password"
            placeholder="Create a password"
            ref={password}
          />
        </div>
        <div>
          <button type="submit">Login</button>
          or{" "}
          <Link to="/signup" className={styles.Link}>
            Signup
          </Link>
        </div>
      </form>
      {loading && <Spinner />}
    </div>
  );
}
