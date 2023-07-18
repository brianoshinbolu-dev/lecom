import React, { useState } from "react";
import styles from "./auth.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { Card, Loader } from "../../components"; // import components
import registerImg from "../../assets/register.png"; // resgiter image
import { createUserWithEmailAndPassword } from "firebase/auth"; // import form firebase authetications
import { auth } from "../../firebase/config"; // import auth from the configured file
import { ToastContainer, toast } from "react-toastify"; // import uo use toastify
import "react-toastify/dist/ReactToastify.css"; // import uo use toastify

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    console.log(email, password, cpassword);
    if (password !== cpassword) {
      toast.error("password do not match");
    }
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(true);
        toast.success("Registration Successful...");
        navigate("/login");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}
      <section className={`conatainer ${styles.auth}`}>
        <Card>
          <div className={styles.form}>
            <h2>Register</h2>

            <form onSubmit={registerUser}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={cpassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Register
              </button>
            </form>
            <span className={styles.register}>
              <p>Already have an Account? </p>
              <Link to="/login"> Login</Link>
            </span>
          </div>
        </Card>
        <div className={styles.img}>
          <img src={registerImg} alt="Register Img" width="400" />
        </div>
      </section>
    </>
  );
};

export default Register;
