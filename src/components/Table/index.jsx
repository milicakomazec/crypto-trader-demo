import "./Table.scss"

import React from "react"

const Table = ({ tblHeaders, tblData }) => {
  return (
    <div className="tbl-container">
      <table className="tbl">
        <thead>
          <tr>
            {tblHeaders.map((tblHeader, index) => (
              <th key={index}>{tblHeader}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tblData.map((row, index) => {
            return <tr key={index}>{row.rowItems.map(item => item)}</tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
