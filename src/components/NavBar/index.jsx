import "./NavBar.scss"

import React from "react"

import NavItem from "../NavItem"

const NavBar = () => {
  const items = [
    {
      title: "Home",
      img: "home.png",
    },
    {
      title: "Favorites",
      img: "star.png",
    },
    {
      title: "Login",
      img: "login.png",
    },
  ]
  return (
    <div className="nav-container">
      {items.map(item => (
        <NavItem title={item.title} img={item.img} />
      ))}
    </div>
  )
}

export default NavBar
