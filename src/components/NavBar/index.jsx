import "./NavBar.scss"

import React from "react"

import NavItem from "../NavItem"

const NavBar = () => {
  const navigation = [
    {
      title: "Home",
      img: "home.png",
      path: "/",
    },
    {
      title: "Favorites",
      img: "star.png",
      path: "/favorites",
    },
    // {
    //   title: "Login",
    //   img: "login.png",
    // },
  ]
  return (
    <div className="nav-container">
      {navigation.map(item => {
        // if (item.title === "Favorites") {
        //   return null
        // }
        return <NavItem title={item.title} img={item.img} path={item.path} key={item.title} />
      })}
    </div>
  )
}

export default NavBar
