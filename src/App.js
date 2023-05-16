import { createContext , useContext, useState } from "react"
import {Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import { Leagues } from "./pages/leagues/leagues"
import { Teams } from "./pages/teams/teams"
import { Players } from "./pages/players/players"
import { Events } from "./pages/matches/matches"
import { Main } from "./pages/main"
import { LeagueCard } from "./components/cards/leagueCard"
import { League } from "./pages/leagues/league"
import { Matches } from "./pages/matches/matches"

export const ThemeContext = createContext(null)

const App = () =>{
  const [leagues, setLeagues] = useState([])
  return(
    <ThemeContext.Provider value={{leagues, setLeagues}}>
     <Routes>
        <Route path="/" element={<Home/>}>
            <Route index element={<Main/>} />
            <Route path="leagues"  element={<Leagues/>} />
            <Route path='leagues/:leagueId'  element={<League/>} />
            <Route path="players" element={<Players/>} />
            <Route path="teams" element={<Teams/>} />
            <Route path="matches" element={<Matches/>} />
        </Route>
    
      </Routes>
    </ThemeContext.Provider>
  )
}

export default App
