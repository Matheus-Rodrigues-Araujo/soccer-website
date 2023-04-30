const HomePage = () => {
  return (
    <div className="home-page">
      <img
        src={process.env.PUBLIC_URL + '/images/pokeball_wallpaper.jpg'}
        alt="Pokemon Wallpaper"
      />
      
      <div className="greeting">
        <h3>Welcome!</h3>
        <p>Click below to check out all your favorite Pokemons!</p>
        {/* <a href="https://matheus-rodrigues-araujo.github.io/pokedex/#/pokemons">Explore</a> */}
        <a href="#/pokemons">Explore</a>
      </div>

    </div>
  )
}

export default HomePage
