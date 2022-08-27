import "./LoginBtn.scss"

import React from "react"

const LoginBtn = () => {
  return (
    <div className="login-container">
      <img src="../../../media/login.png" alt="login icon" className="login-icon" />
      <button className="login-btn" type="button">
        Login
      </button>
    </div>
  )
}

export default LoginBtn
