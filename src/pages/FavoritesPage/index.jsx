import "./FavoritesPage.scss"

import React from "react"
import { useMediaQuery } from "react-responsive"
import { useNavigate } from "react-router"

import Layout from "../../components/Layout"
import Loading from "../../components/Loading"
import SingleTableItem from "../../components/SingleTableItem"
import Table from "../../components/Table"
import TableRowItem from "../../components/TableRowItem"
import { useSubscribeToSymbols } from "../../utils/hooks"

const FavoritesPage = () => {
  const showMobileTable = useMediaQuery({
    query: "(max-width: 665px)",
  })
  const loggedIn = localStorage.getItem("loggedIn")
  const navigate = useNavigate()

  const parseSymbols = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites"))
    return favorites.map(item => `t${item.toUpperCase()}`)
  }
  if (loggedIn === "false") {
    return <div>You do not have permission to access this page.</div>
  }
  const subscriptionData = useSubscribeToSymbols(
    "ticker",
    parseSymbols(),
    parseSymbols().length > 0,
  )
  const parseBodyData = () => {
    return subscriptionData.data.map(item => {
      return {
        rowItems: [
          <TableRowItem
            key="tbl-rowItem-1"
            value={item.name}
            clickable
            onClick={() => navigate(`/details/${item.name.toLowerCase()}`)}
          />,
          <TableRowItem key="tbl-rowItem-2" value={item.last_price} />,
          <TableRowItem key="tbl-rowItem-3" value={item.daily_change} />,
          <TableRowItem key="tbl-rowItem-4" value={item.daily_change_relative} />,
          <TableRowItem key="tbl-rowItem-5" value={item.high} />,
          <TableRowItem key="tbl-rowItem-6" value={item.low} />,
        ],
      }
    })
  }

  const tblHeaders = [
    "Symbol",
    "Last price",
    "Daily Change",
    "Daily Change Percent",
    "Daily high",
    "Daily low",
  ]

  const getPageBody = () => {
    if (parseSymbols().length > 0) {
      if (showMobileTable) {
        return subscriptionData.data.map(item => {
          return (
            <SingleTableItem
              fields={[
                { name: "Symbol", value: item.name },
                { name: "Last price", value: item.last_price },
                { name: "Daily Change", value: item.daily_change },
                { name: "Daily Change Percent", value: item.daily_change_relative },
                { name: "Daily high", value: item.high },
                { name: "Daily low", value: item.low },
              ]}
            />
          )
        })
      }
      return <Table tblHeaders={tblHeaders} tblData={parseBodyData()} />
    }
    return <div>No favorites.</div>
  }
  return <Layout>{subscriptionData.loading ? <Loading /> : getPageBody()}</Layout>
}

export default FavoritesPage
