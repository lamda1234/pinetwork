import React from "react";

export default function SigninScreen() {
  return (
    <div>
      <div className="first-section">
        <a href="/">
          <img alt="" className="title" src="../images/Untitled1.png" />
        </a>
        <p>Download Free Porn Videos & Porn Movies</p>
        <div className="essentials">
          <h4 className="no1">
            <a href="/contact">Contact</a>
          </h4>
          <h4 className="no1">
            <a href="/signup">Sign Up</a>
          </h4>
        </div>
      </div>
      <div className="signin-body">
        <div className="form">
          <h1>Sign in your account</h1>
          <form>
            <input type="email" placeholder="Enter your email" required></input>
            <input type="password" placeholder="Enter your password"></input>
            <button className="signin-btn" type="submit">
              Sign In
            </button>
            <p className="newUser">
              New user?
              <span>
                <a href="/signup">
                  {/* We gonna come back here */}
                  Sign-Up here
                </a>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
