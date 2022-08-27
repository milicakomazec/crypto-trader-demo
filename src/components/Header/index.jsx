import "./Header.scss"

import React from "react"

import LoginBtn from "../LoginBtn"
import NavBar from "../NavBar"

const Header = () => {
  return (
    <div className="header-container">
      <NavBar />
      <LoginBtn />
    </div>
  )
}

export default Header
