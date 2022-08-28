import "./Header.scss"

import React from "react"

import LoginBtn from "../LoginBtn"
import NavBar from "../NavBar"

const Header = () => {
  const loggedIn = localStorage.getItem("loggedIn")
  return (
    <div className="header-container">
      <NavBar />
      {loggedIn === "false" && <LoginBtn />}
    </div>
  )
}

export default Header
