import React, { useEffect, useState } from 'react'
import { HashRouter } from 'react-router-dom'

import HomePage from './components/HomePage'
import Header from './components/Header'
import NavigationList from './components/NavigationList'
import Footer from './components/Footer'

import RenderPokemons from './components/RenderPokemons'

import axios from 'axios'

import { Routes, Route } from 'react-router-dom'

import { PokemonPage } from './components/PokemonPage'

import ThemeContext from './components/ThemeContext'

const pokemonThemes = {
  fire: 'orange',

  water: 'cornflowerblue',

  grass: '#2fff9a',

  normal: 'rgb(239 239 72)',

  flying: 'rgba(0, 223, 255,1)',

  bug: 'rgb(0 128 58 / 79%)',

  poison: '#c016c0de',

  electric: 'rgb(217, 231, 15)',

  ground: 'rgb(182, 84, 84)',

  psychic: 'rgb(197, 10, 50)',

  ghost: 'rgb(26, 24, 24)',

  dark: 'black',

  rock: 'brown',

  fairy: 'rgb(255, 63, 159)',

  dragon: 'darkcyan',

  ice: 'aqua',

  fighting: 'darkseagreen',

  steel: 'rgba(223, 217, 217, 0.699)'
}

function App() {
  const [items, setItems] = useState([])
  const [limit, setLimit] = useState(12)
  const [loading, setLoading] = useState(false)

  // const getSports = async()=> {

  //   const options = {
  //     method: 'GET',
  //     url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
  //     headers: {
  //       'X-RapidAPI-Key': 'a44ca3f124mshf5256df877ee8a2p16ed0djsn312ab59cbb57',
  //       'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  //     }
  //   };
    
  //   try {
  //     const response = await axios.request(options);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
    
  // }

  // useEffect(()=>{
  //   getSports()
  // },[])


  const links = [
    {
      path: '/#',
      name: 'Home'
    },
    {
      path: '/pokemons',
      name: 'Pokemons'
    },
    {
      path: '/about',
      name: 'About'
    }
  ]

  const getPokemon = async () => {
    setLoading(false)
    var endpoints = []
    for (let i = 1; i <= 800; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }

    try {
      let res = await axios.all(endpoints.map(endpoint => axios.get(endpoint)))
      setLimit(12)
      setItems(res)
      setLoading(true)
    } catch (error) {
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
      }
    }
  }

  // Calls the getPokemon function
  useEffect(() => {
    getPokemon()
  }, [])

  const pokemonFilter = e => {
    setLoading(false)
    var filteredPokemons = []

    if (e.length) {
      for (var i in items) {
        if (items[i].data.name.includes(e)) {
          filteredPokemons.push(items[i])
        }
      }

      setItems(filteredPokemons)
      setLoading(true)
    } else {
      getPokemon()
    }
  }

  // Home Component
  function PokedexPage() {
    return (
      <div className="home">
        <RenderPokemons
          loading={loading}
          items={items}
          limit={limit}
          load={() => setLimit(limit + 3)}
        />
      </div>
    )
  }

  return (
    <HashRouter>
      <ThemeContext.Provider value={pokemonThemes}>
        {/* <div className="main> */}
        <NavigationList routes={links} />

        <Routes>
          <Route path="/" element={<HomePage />}>
            {' '}
          </Route>
          <Route
            path="/pokemons"
            element={
              <>
                <Header handleInput={pokemonFilter} />
                <PokedexPage />
              </>
            }
          />
          <Route path="/pokemons/:id" element={<PokemonPage />}></Route>
          <Route
            path="*"
            element={<h1>Page doesn't exist yet, comeback later!</h1>}
          />
        </Routes>
      </ThemeContext.Provider>
      <Footer />
    </HashRouter>
  )
}

export default App
