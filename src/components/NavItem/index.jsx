import "./NavItem.scss"

import React from "react"
import { useMediaQuery } from "react-responsive"
import { useNavigate } from "react-router"

const NavItem = ({ title, img, path }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 480px)",
  })

  const navigate = useNavigate()

  return (
    <div className={`nav-item ${title}`} role="button" onClick={() => navigate(path)}>
      <img src={`../../media/${img}`} alt={`${title}`} className="nav-icon" />
      {!isMobile && <div className="nav-title">{title}</div>}
    </div>
  )
}
export default NavItem
