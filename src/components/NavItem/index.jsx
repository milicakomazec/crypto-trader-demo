import "./NavItem.scss"

import React from "react"
import { useMediaQuery } from "react-responsive"
import { useMatch, useNavigate, useResolvedPath } from "react-router"

const NavItem = ({ title, img, path }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 480px)",
  })

  const navigate = useNavigate()

  const resolvedPath = useResolvedPath(path)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  // const className = window.location.pathname === path ? "nav-item active" : "nav-item"
  return (
    <div
      className={isActive ? "nav-item active" : "nav-item"}
      role="button"
      onClick={() => navigate(path)}
    >
      <img src={`../../media/${img}`} alt={`${title}`} className="nav-icon" />
      {!isMobile && <div className="nav-title">{title}</div>}
    </div>
  )
}
export default NavItem
