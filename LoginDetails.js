import React, {useState, useEffect} from "react";
//import axios from "axios";
import { Link } from "react-router-dom";


const LoginDetails = () => {
  
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));

  const userNotLogin = () => (
    <>
      <h2>It seem's like you are not login</h2>
      <h3>
        If you have an account, then please Login
      </h3>
      <h3>
        Don't have an account, then please Register
      </h3>
    </>
  );

  return (
    <div className="container py-4">
      <div style={{ marginTop: "100px" }}>
        {isLoginTrue && isLoginTrue.userLogin ? (
          <h2>Successfully Logged in</h2>
        ) : (
          <>{userNotLogin()}</>
        )}

        <Link className="btn btn-primary mt-3" to="/Login">
          Log Out
        </Link>
      </div>
    </div>  
  );
};

export default LoginDetails;