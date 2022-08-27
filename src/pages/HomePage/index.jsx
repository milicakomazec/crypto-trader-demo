import "./HomePage.scss"

import React from "react"

import Layout from "../../components/Layout"
import Table from "../../components/Table"

const HomePage = () => {
  const tblHeaders = ["Name", "Description", "ID"]
  const data = [
    {
      name: "aahua",
      desc: "title one dhsjhfhs",
      id: "1",
    },
    {
      name: "bbb",
      desc: "title two hdasdga",
      id: "2",
    },
    {
      name: "ccc",
      desc: "title three",
      id: "3",
    },
    {
      name: "tddd",
      desc: "title four",
      id: "4",
    },
    {
      name: "eee",
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

export default HomePage