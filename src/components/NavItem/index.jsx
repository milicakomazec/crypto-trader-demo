import "./NavItem.scss"

import React from "react"
import { useMediaQuery } from "react-responsive"

const NavItem = ({ title, img }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 480px)",
  })
  return (
    <div className="nav-item">
      <img src={`../../media/${img}`} alt="" className="nav-icon" />
      {!isMobile && <div className="nav-title">{title}</div>}
    </div>
  )
}
export default NavItem
