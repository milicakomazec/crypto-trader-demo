import "./DetailsPage.scss"

import React, { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import { useParams } from "react-router"

import Layout from "../../components/Layout"
import Loading from "../../components/Loading"
import SingleTableItem from "../../components/SingleTableItem"
import Table from "../../components/Table"
import TableRowItem from "../../components/TableRowItem"

const DetailsPage = () => {
  const showMobileTable = useMediaQuery({
    query: "(max-width: 665px)",
  })
  const [loading, setLoading] = useState(true)
  const [currencyData, setCurrencyData] = useState({})
  const { currency } = useParams()
  useEffect(() => {
    fetch(`/v1/pubticker/${currency}`)
      .then(response => response.json())
      .then(data => {
        setCurrencyData(data)
        setLoading(false)
      })
  }, [])
  const tblHeaders = ["Symbol", "Last price", "Daily high", "Daily low"]

  const parseBodyData = () => {
    return [
      {
        rowItems: [
          <TableRowItem key="tbl-rowItem-1" value={currency.toUpperCase()} />,
          <TableRowItem key="tbl-rowItem-2" value={currencyData.last_price} />,
          <TableRowItem key="tbl-rowItem-3" value={currencyData.high} />,
          <TableRowItem key="tbl-rowItem-4" value={currencyData.low} />,
        ],
      },
    ]
  }
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")))
  const isFavorite = favorites.find(item => item === currency)
  const loggedIn = localStorage.getItem("loggedIn")
  const addToFavorites = () => {
    const currentFavorites = JSON.parse(localStorage.getItem("favorites"))
    const newFavorites = []
    if (currentFavorites) {
      newFavorites.push(...currentFavorites)
    }
    newFavorites.push(currency)
    setFavorites(newFavorites)
    localStorage.setItem("favorites", JSON.stringify(newFavorites))
  }

  const removeFromFavorites = () => {
    const currentFavorites = JSON.parse(localStorage.getItem("favorites"))
    const newFavorites = []
    if (currentFavorites) {
      newFavorites.push(...currentFavorites)
    }
    const filteredFavorites = newFavorites.filter(item => item !== currency)
    setFavorites(filteredFavorites)
    localStorage.setItem("favorites", JSON.stringify(filteredFavorites))
  }

  const getPageBody = () => {
    if (showMobileTable) {
      return (
        <SingleTableItem
          fields={[
            { name: "Symbol", value: currency },
            { name: "Last price", value: currencyData.last_price },
            { name: "Daily high", value: currencyData.high },
            { name: "Daily low", value: currencyData.low },
          ]}
        />
      )
    }
    return <Table tblHeaders={tblHeaders} tblData={parseBodyData()} />
  }

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <>
          {getPageBody()}
          {loggedIn === "true" && (
            <div
              role="button"
              className={isFavorite ? "btn-fav" : "btn-fav add"}
              onClick={isFavorite ? removeFromFavorites : addToFavorites}
            >
              {isFavorite ? "Remove from favorites" : "Add to favorites"}
            </div>
          )}
        </>
      )}
    </Layout>
  )
}
export default DetailsPage
