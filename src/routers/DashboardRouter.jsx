import React from "react";
import { Routes, Route } from "react-router-dom";
import MarvelScreen from '../components/marvel/MarvelScreen'
import DCScreen from '../components/dc/DCScreen'
import SearchScreen from '../components/search/SearchScreen'
import SiteNav from "../components/ui/SiteNav"
import HeroScreen from "../components/hero/HeroScreen";

const AppRouter = () => {
  return (
    <>
      <SiteNav />

      <Routes>

        <Route path="/" element={<MarvelScreen />} />
        <Route path="/dc" element={<DCScreen />} />
        <Route path="/marvel" element={<MarvelScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        
        <Route path="/hero/:heroId" element={<HeroScreen />} />

      </Routes>
    </>
  )
}


export default AppRouter
