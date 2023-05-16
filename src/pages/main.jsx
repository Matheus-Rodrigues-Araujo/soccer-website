import soccerBall from '../assets/soccer-ball.jpg'
import soccerPlayer from '../assets/soccer-player.png'
import soccerClubLogo from '../assets/soccer-club-logo.png'
import soccerField from '../assets/soccer-field.png'
import soccerTrophy from '../assets/soccer-trophy.png'
import { Link } from 'react-router-dom'

export const Main = () =>{
    return(
      <div className="px-4 pt-5 my-3 text-center border-bottom">
        <h1 className="display-4 fw-bold text-body-emphasis">Soccer information everyday!</h1>
        <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Get to know all the statistics, news and curiosities of soccer around the world. With our website you will have in real time the most precious data of sports around the world!</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <Link className="btn  btn-lg px-4 me-sm-3" to='leagues' style={{backgroundColor:'#39ff2c'}}>Explore</Link>
            {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button> */}
        </div>
        </div>
        <div className="overflow-hidden">
        <div className="container px-5">
            <img src={soccerBall} className="img-fluid  rounded-3  mb-4" alt="Example image" width="200" height="500" loading="lazy"/>
        </div>

        <div className="row border-top py-4">
        <h2 className="display-4 fw-bold text-body-emphasis my-5">Content for each of these categories</h2>

          <div className="category-card col-lg-6"   >
            <img  src={soccerTrophy}  style={{backgroundColor:'#39ff2c'}} className=" bd-placeholder-img rounded-circle border p-2" alt="" width="100" height="100" />
            <h2 className="fw-normal">Leagues</h2>
            <p>The best leagues around the world</p>
            {/* <p><a className="btn btn-secondary" href="#">View details »</a></p> */}
          </div>
          <div className="category-card col-lg-6">
            <img  src={soccerClubLogo} style={{backgroundColor:'#39ff2c'}}  className=" bd-placeholder-img rounded-circle border p-2" alt="" width="100" height="100" />
            <h2 className="fw-normal">Teams</h2>
            <p>Find everything about your favorites teams.</p>
            {/* <p><a className="btn btn-secondary" href="#">View details »</a></p> */}
          </div>
          <div className="category-card col-lg-6">
            <img  src={soccerPlayer}  style={{backgroundColor:'#39ff2c'}} className=" bd-placeholder-img rounded-circle border p-2" alt="" width="100" height="100" />
            <h2 className="fw-normal">Players</h2>
            <p>Find the most famous players gathered in one place.</p>
            {/* <p><a className="btn btn-secondary" href="#">View details »</a></p> */}
          </div>
          <div className="category-card col-lg-6">
            <img  src={soccerField}  style={{backgroundColor:'#39ff2c'}} className=" bd-placeholder-img rounded-circle border p-2" alt="" width="100" height="100" />
            <h2 className="fw-normal">Matches</h2>
            <p>A calendar for all the matches you want to follow</p>
            {/* <p><a className="btn btn-secondary" href="#">View details »</a></p> */}
          </div>
        </div>
        </div>
      </div>
    )
}