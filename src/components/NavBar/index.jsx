import "./NavBar.scss"

import React from "react"

import NavItem from "../NavItem"

const NavBar = () => {
  const loggedIn = localStorage.getItem("loggedIn")
  const getNavItems = () => {
    const navigation = [
      {
        title: "Home",
        path: "/",
      },
    ]
    if (loggedIn === "true") {
      navigation.push({
        title: "Favorites",
        path: "/favorites",
      })
    }
    return navigation
  }
  return (
    <div className="nav-container">
      {getNavItems().map(item => {
        return <NavItem title={item.title} path={item.path} key={item.title} />
      })}
    </div>
  )
}

export default NavBar
