import "./SingleTableItem.scss"

import React from "react"

const SingleTableItem = ({ fields, onClick }) => {
  return (
    <div className="single-table-item-container" role="button" onClick={onClick}>
      {fields.map((item, index) => {
        return (
          <div key={index} className="field-wrapper">
            <p>{item.name}</p>
            <p>{item.value}</p>
          </div>
        )
      })}
    </div>
  )
}

export default SingleTableItem
