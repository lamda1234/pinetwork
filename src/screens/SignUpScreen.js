import React from "react";

export default function SignUpScreen() {
  return (
    <div>
      <div className="first-section">
        <a href="/">
          <img alt="name" className="title" src="../images/Untitled1.png" />
        </a>
        <p>Download Free Porn Videos & Porn Movies</p>
        <div className="essentials">
          <h4 className="no1">
            <a href="/contact">Contact</a>
          </h4>
          <h4 className="no1">
            <a href="/signin">Sign In</a>
          </h4>
        </div>
      </div>
      <div className="signin-body">
        <div className="form">
          <h1>Create a new account</h1>
          <form>
            <input type="text" placeholder="Enter your name" required></input>
            <input type="email" placeholder="Enter your email" required></input>
            <input type="password" placeholder="Enter your password"></input>
            <input type="password" placeholder="Re-enter your password"></input>
            <button className="signin-btn" type="submit">
              Sign Up
            </button>
            <p className="newUser">
              Already have an account?
              <span>
                <a href="/signin">
                  {/* We gonna come back here */}
                  Sign-In here
                </a>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
