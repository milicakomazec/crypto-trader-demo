import "./LoginBtn.scss"

import React from "react"
import { useMediaQuery } from "react-responsive"

const LoginBtn = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:600px)",
  })
  return (
    <div className="login-container">
      {!isMobile && (
        <img
          src="../../../media/login.png"
          alt="login icon"
          className="login-icon"
          width="35px"
          height="35px"
        />
      )}
      <button className="login-btn" type="button">
        Login
      </button>
    </div>
  )
}

export default LoginBtn
