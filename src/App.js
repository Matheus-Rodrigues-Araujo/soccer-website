import {Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import { Leagues } from "./pages/leagues"
import { Teams } from "./pages/teams"
import { Players } from "./pages/players"
import { Events } from "./pages/events"
import { Main } from "./pages/main"
const App = () =>{
  return(
      <Routes>
        <Route path="/" element={<Home/>}>
            <Route index element={<Main/>} />
        </Route>
      
        <Route path="/content" element={<Home/>}>
          <Route path="leagues" element={<Leagues/>} />
          <Route path="teams" element={<Teams/>} />
          <Route path="players" element={<Players/>} />
          <Route path="events" element={<Events/>} />
        </Route>

      </Routes>
  )
}

export default App