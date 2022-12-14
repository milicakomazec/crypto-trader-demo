import React from "react"
import { Route, Routes } from "react-router-dom"

import DetailsPage from "./pages/DetailsPage"
import FavoritesPage from "./pages/FavoritesPage"
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details">
        <Route path="" element={<DetailsPage />} />
        <Route path=":currency" element={<DetailsPage />} />
      </Route>
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  )
}

export default App
