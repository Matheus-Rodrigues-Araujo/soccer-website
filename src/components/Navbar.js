import { Link } from "react-router-dom"

import iconsList from "./icons/icons"
export const Navbar = () =>{
  return(
    <header className="bg-dark" >
    <div className="px-3 py-4 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
          Soccer{iconsList[0].svg}News
          </Link>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            
            <li>
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            
            <li>
              <Link to="/content/leagues" className="nav-link text-white">
                Leagues
              </Link>
            </li>
            <li>
              <Link to="/content/teams" className="nav-link text-white">
                Teams
              </Link>
            </li>
            <li>
              <Link to="/content/players" className="nav-link text-white">
                Players
              </Link>
            </li>
            <li>
              <Link to="/content/matches" className="nav-link text-white">
                Matches
              </Link>
            </li>
            <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">

          <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
        </form>
          </ul>
        </div>
      </div>
    </div>
    <div className="px-3 py-2 border-bottom mb-3">
      <div className="container d-flex flex-wrap justify-content-center">
        {/* <div className="text-end">
          <button type="button" className="btn btn-light text-dark me-2">Login</button>
          <button type="button" className="btn btn-primary">Sign-up</button>
        </div> */}
      </div>
    </div>
  </header>
  )
} 

