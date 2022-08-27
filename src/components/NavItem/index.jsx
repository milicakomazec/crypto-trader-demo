import "./NavItem.scss"

import React from "react"

const NavItem = ({ title, img }) => {
  return (
    <div className="nav-item">
      <img src={`../../media/${img}`} alt="" className="nav-icon" />
      {title}
    </div>
  )
}
export default NavItem
