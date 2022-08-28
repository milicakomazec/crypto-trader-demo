import "./Table.scss"

import React from "react"
import { useMediaQuery } from "react-responsive"

const Table = ({ tblHeaders, tblData, tblOnClick }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 480px)",
  })
  return (
    <div className="tbl-container">
      {!isMobile && (
        <table className="tbl-wide">
          <thead>
            {tblHeaders.map(tblHeader => (
              <th>{tblHeader}</th>
            ))}
          </thead>
          <tbody>
            {tblData.map(row => (
              <tr>
                <td>
                  <span className="symbol" role="button" onClick={tblOnClick}>
                    {row.name}
                  </span>
                </td>
                <td>{row.desc}</td>
                <td>{row.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {isMobile &&
        tblData.map(el => (
          <table className="tbl-narrow">
            <tr onClick={tblOnClick}>{el.name}</tr>
            <tr>{el.id}</tr>
            <tr>{el.desc}</tr>
          </table>
        ))}
    </div>
  )
}

export default Table
