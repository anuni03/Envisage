import React from "react";
export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (
    <div>
      <div id="map"></div>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <h1>User Details</h1>
          <div>
            Name<h1>{userData.fname}</h1>
            Email <h1>{userData.email}</h1>
            <br />
            <button onClick={logOut} className="btn btn-primary">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}