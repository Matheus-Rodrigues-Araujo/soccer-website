import { Outlet } from "react-router"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

const Home = () => {
  return (
    <>
    <div className="h-100 text-center"  style={{minHeight:'100vh'}}>
      <Navbar/>
      <Outlet/> 
      <Footer/>
    </div>
    </>
  )
}

export default Home
