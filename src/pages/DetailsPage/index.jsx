import "./DetailsPage.scss"

import React from "react"

import Layout from "../../components/Layout"
import Table from "../../components/Table"

const DetailsPage = () => {
  const tblHeaders = ["Name", "DESC", "ID"]
  const data = [
    {
      name: "details",
      desc: "details one dhsjhfhs",
      id: "1",
    },
    {
      name: "details",
      desc: "details",
      id: "6",
    },
    {
      name: "John",
      desc: "title three",
      id: "3",
    },
    {
      name: "Ema",
      desc: "title four",
      id: "4",
    },
    {
      name: "Sarah",
      desc: "title five",
      id: "5",
    },
    {
      name: "fff",
      desc: "title six",
      id: "6",
    },
  ]
  return (
    <Layout>
      <Table tblHeaders={tblHeaders} tblData={data} />
    </Layout>
  )
}
export default DetailsPage
