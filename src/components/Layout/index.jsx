import "./Layout.scss"

import React from "react"

import NavBar from "../NavBar"

const Layout = () => {
  return (
    <div className="layout-container">
      <NavBar />
      <div className="layout-content" />
    </div>
  )
}
export default Layout
