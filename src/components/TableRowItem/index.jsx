import "./TableRowItem.scss"

import React from "react"

const TableRowItem = ({ onClick, value, clickable }) => {
  return (
    <td>
      <span className={clickable && "clickable"} role="button" onClick={onClick}>
        {value}
      </span>
    </td>
  )
}

export default TableRowItem
