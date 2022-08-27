import "./Layout.scss"

import React from "react"

import Header from "../Header"

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="layout-content">{children}</div>
    </div>
  )
}
export default Layout
