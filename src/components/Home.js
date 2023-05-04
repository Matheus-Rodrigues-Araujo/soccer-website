import { Outlet } from "react-router"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

const Home = () => {
  return (
    <>
    <div className="text-center fs-5 text">
      <Navbar/>
      <div className="h-100" >
        <Outlet/> 
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default Home
