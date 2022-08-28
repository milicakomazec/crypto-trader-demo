import "./LoginBtn.scss"

import React from "react"

const LoginBtn = () => {
  return (
    <div className="login-container">
      <button
        className="login-btn"
        type="button"
        onClick={() => {
          localStorage.setItem("loggedIn", "true")
          window.location.reload()
        }}
      >
        Login
      </button>
    </div>
  )
}

export default LoginBtn
