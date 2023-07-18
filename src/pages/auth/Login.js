import React, { useState } from "react";
import styles from "./auth.module.scss";
import loginImg from "../../assets/login.png";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/Card";
import {signInWithPopup} from "firebase/auth";

const Login = () => {
  return (
    <section className={`conatainer ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt="login" width="400" />
      </div>

      <Card>
        <div className={styles.form}>
          <h2>Login 2</h2>

          <form>
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button className="--btn --btn-primary --btn-block">Login</button>
            <div className={styles.links}>
              <Link to="/reset">Reset password</Link>
            </div>
            <p>-- or --</p>
          </form>
          <button className="--btn --btn-danger --btn-block">
            <FaGoogle />
            Login With Google
          </button>
          <span className={styles.register}>
            <p>Dont have an Account?</p>
            <Link to="/register">
              <strong>Register</strong>
            </Link>
          </span>
        </div>
      </Card>
    </section>
  );
};

export default Login;
