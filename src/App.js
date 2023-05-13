import {Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import { Leagues } from "./pages/leagues/leagues"
import { Teams } from "./pages/teams/teams"
import { Players } from "./pages/players/players"
import { Events } from "./pages/matches/matches"
import { Main } from "./pages/main"
import { LeagueCard } from "./components/cards/leagueCard"
import { League } from "./pages/leagues/league"

const App = () =>{
  return(
      <Routes>
        <Route path="/" element={<Home/>}>
            <Route index element={<Main/>} />
            <Route path="leagues"  element={<Leagues/>} />
            <Route path='leagues/:leagueId'  element={<League/>} />
            <Route path="players" element={<Players/>} />
        </Route>
    
      </Routes>
  )
}

export default App
