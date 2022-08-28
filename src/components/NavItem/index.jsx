import "./NavItem.scss"

import React from "react"
import { useMatch, useNavigate, useResolvedPath } from "react-router"

const NavItem = ({ title, path }) => {
  const navigate = useNavigate()

  const resolvedPath = useResolvedPath(path)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <div
      className={isActive ? "nav-item active" : "nav-item"}
      role="button"
      onClick={() => navigate(path)}
    >
      <div className="nav-title">{title}</div>
    </div>
  )
}
export default NavItem
