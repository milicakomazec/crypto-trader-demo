import "./FavoritesPage.scss"

import React from "react"

import Layout from "../../components/Layout"
import Table from "../../components/Table"

const FavoritesPage = () => {
  const tblHeaders = ["Name", "DESC", "ID"]
  const data = [
    {
      name: "Milica",
      desc: "title one dhsjhfhs",
      id: "6",
    },
    {
      name: "Boskoo",
      desc: "bokskoodf fj",
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

export default FavoritesPage
