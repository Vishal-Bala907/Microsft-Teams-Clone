import React, { useRef, useState } from "react";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth, storage, db } from "../../firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import Spinner from "../Public/Spinner.jsx";

export default function Signup() {
  const username = useRef("");
  const password = useRef("");
  const conPass = useRef("");
  const email = useRef("");
  const number = useRef("");
  const imageInput = useRef(null);
  const navigate = useNavigate();
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(false);

  // function fireBase(email, password) {

  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert("clecked");

    if (
      username.current.value !== "" &&
      (password.current.value !== "") & (email.current.value !== "") &&
      number.current.value !== "" &&
      password.current.value !== ""
    ) {
      if (password.current.value !== conPass.current.value) {
        alert("Please enter the same password ");
      } else if (password.current.value.length <= 5) {
        alert("Please enter a  password with atleast 6 characters ");
      } else {
        try {
          setLoading(true);
          let displayName = username.current.value;
          let Email = email.current.value;
          let Password = password.current.value;
          let Number = number.current.value;
          const imageFile = imageInput.current.files[0];

          const formData = new FormData();
          formData.append("username", displayName);
          formData.append("password", Password);
          formData.append("email", Email);
          formData.append("number", Number);
          formData.append("image", imageFile); // Append the image file to the FormData
          // TODO *********************************************************************************************
          //TODO Firebase Login  VERY VERY IMPORTANT
          // TODO *********************************************************************************************
          try {
            const res = await createUserWithEmailAndPassword(
              auth,
              Email,
              Password
            );

            //Create a unique image name
            const date = new Date().getTime();
            // Create a reference to 'mountains.jpg'
            const storageRef = ref(storage, `${displayName + date}`);
            // Upload the file and metadata
            //  const uploadTask = uploadBytesResumable(storageRef, imageFile);
            try {
              // Upload the image file
              const snapshot = await uploadBytesResumable(
                storageRef,
                imageFile
              );

              // Get the download URL of the uploaded file
              const downloadURL = await getDownloadURL(snapshot.ref);

              // Update the user profile
              console.log("updating profile");
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
              });

              // Create a document in the 'users' collection
              console.log("creating doc");
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                Email,
                photoURL: downloadURL,
              });

              // Create a document in the 'userChats' collection
              console.log("creating chat doc");
              await setDoc(doc(db, "userChats", res.user.uid), {
                // Add data for user chats if needed
              });
              setLoading(false);
              // Display success message or perform additional actions
              alert("User resistration successfully.");
            } catch (error) {
              // Handle errors
              console.error("Error:", error);
            }

            try {
              const fetchData = await fetch("http://localhost:3000/signup", {
                method: "POST",
                body: formData,
              });
              if (!fetchData.ok) {
                const dataRes = await fetchData.json();
                console.log(dataRes.data.message); // Accessing the message from the data object
                alert(dataRes.data.message);
                throw new Error("Network response was not ok");
              }
              const dataRes = await fetchData.json();
              console.log(dataRes);
              navigate("/login"); // Replace "/success" with the desired route
            } catch (error) {
              console.error("Error:", error);
            }
            /*         uploadTask.on(
              (error) => {
                setError(true);
                alert("error");
                console.log(error);
              },
              () => {
                getDownloadURL(uploadTask.snapshot.ref).then(
                  async (downloadURL) => {
                    await updateProfile(res.user, {
                      displayName,
                      photoURL: downloadURL,
                    });
                    try {
                      await addDoc(collection(db, "users"), {
                        uid: res.user.uid,
                        displayName,
                        Email,
                        imageurl: downloadURL,
                      });
                      // await addDoc(collection(db, "userChats"));
                      // console.log("Document written with ID: ", docRef.id);
                    } catch (err) {}

                    const fetchData = await fetch(
                      "http://localhost:3000/signup",
                      {
                        method: "POST",
                        body: formData,
                      }
                    );
                    if (!fetchData.ok) {
                      const dataRes = await fetchData.json();
                      console.log(dataRes.data.message); // Accessing the message from the data object
                      alert(dataRes.data.message);
                      throw new Error("Network response was not ok");
                    }
                    const dataRes = await fetchData.json();
                    console.log(dataRes);
                  }
                );
              }
            ); */

            console.log(res.json());
          } catch (err) {
            setError(true);
          }

          navigate("/login"); // Replace "/success" with the desired route
        } catch (error) {
          console.error("Error:", error);
        }
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
            type="text"
            name="username"
            id="username"
            placeholder="Enter your Username"
            ref={username}
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
          <input
            className={styles.input}
            type="password"
            // name="password"
            id="conpassword"
            placeholder="Confirm password"
            ref={conPass}
          />
        </div>

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
            type="text"
            name="number"
            id="number"
            placeholder="Enter your number"
            ref={number}
          />
        </div>
        <div>
          <input
            name="image"
            type="file"
            accept="image/*"
            ref={imageInput}
            onChange={(e) => console.log(e.target.files[0])}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
          or{" "}
          <Link to="/login" className={styles.Link}>
            Login
          </Link>
        </div>
      </form>
      {loading && <Spinner />}
    </div>
  );
}
