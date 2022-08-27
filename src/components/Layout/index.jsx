import "./Layout.scss"

import React from "react"

import NavBar from "../NavBar"
import Table from "../Table"

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <NavBar />
      <div className="layout-content">{children}</div>
    </div>
  )
}
export default Layout
