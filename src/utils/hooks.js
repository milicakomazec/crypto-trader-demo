import { useEffect, useRef, useState } from "react"

import { TICKER_FORMAT } from "../constants/dataFormat"

// eslint-disable-next-line import/prefer-default-export
export const useSubscribeToSymbols = (subscriptionChannel, symbols, ready = true) => {
  const [data, setData] = useState({})
  const [currencies, setCurrencies] = useState({})
  const ws = useRef(null)

  useEffect(() => {
    if (!ready) return
    ws.current = new WebSocket("wss://api-pub.bitfinex.com/ws/2")

    const listOfSubscriptions = symbols.map(item => {
      return {
        event: "subscribe",
        channel: subscriptionChannel,
        symbol: item,
      }
    })

    ws.current.onopen = () => {
      listOfSubscriptions.forEach(item => {
        ws.current.send(JSON.stringify(item))
      })
    }

    // eslint-disable-next-line consistent-return
    return () => ws.current.close()
  }, [ready])

  useEffect(() => {
    if (!ws.current) return

    ws.current.onmessage = e => {
      const json = JSON.parse(e.data)

      if (json.event === "subscribed") {
        setCurrencies(prevData => ({
          ...prevData,
          [json.chanId]: json.pair,
        }))
      }

      const formatTickerData = jsonData => {
        const keyValueArr = TICKER_FORMAT.map((item, index) => {
          return [item, jsonData[index]]
        })

        return Object.fromEntries(keyValueArr)
      }

      if (!json.event && json[1] !== "hb") {
        setData(prevData => ({
          ...prevData,
          [json[0]]: formatTickerData(json[1]),
        }))
      }
    }
  }, [currencies, data, ready])

  const parsedData = Object.entries(currencies).map(([key, value]) => {
    return { id: +key, name: value, ...data[key] }
  })

  return { data: parsedData, loading: parsedData.length !== symbols.length }
}
