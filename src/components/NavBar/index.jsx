import "./NavBar.scss"

import React from "react"

import NavItem from "../NavItem"

const NavBar = () => {
  const items = [
    {
      title: "Home",
    },
    {
      title: "Favorites",
    },
    {
      title: "Details",
    },
    {
      title: "Login",
    },
  ]
  return (
    <div className="nav-container">
      {items.map(item => (
        <NavItem title={item.title} />
      ))}
    </div>
  )
}

export default NavBar
