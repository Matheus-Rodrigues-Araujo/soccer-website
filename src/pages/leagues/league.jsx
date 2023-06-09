import { useNavigate, useParams } from "react-router"
import axios from 'axios'
import { useEffect, useState } from "react"
import { SeasonCard } from "../../components/cards/table"
import { Spinner } from "../../components/spinner"

export const League = () =>{
    const [league, getLeague] = useState([])
    const [players, setPlayers] = useState([])
    let { leagueId} = useParams()
    
    // const navigate = useNavigate()

    const getLeagueData = async () =>{
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
            params: {id: leagueId},
            headers: {
              'X-RapidAPI-Key': 'a44ca3f124mshf5256df877ee8a2p16ed0djsn312ab59cbb57',
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              getLeague(response.data);
          } catch (error) {
              console.error(error);
          }
    }

    const getPlayers = async(id)=>{
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/players',
            params: {
              league: leagueId,
              season: '2020'
            },
            headers: {
              'X-RapidAPI-Key': 'a44ca3f124mshf5256df877ee8a2p16ed0djsn312ab59cbb57',
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              setPlayers(response.data);
          } catch (error) {
              console.error(error);
          }
    }

    useEffect(()=>{
        getLeagueData()
    }, [])


    useEffect(()=>{
        getPlayers()
    },[])


    if(league.response){
        return(
            <div  className="container" >
            <div className="row align-items-center">
                <div className="d-flex  align-items-center " >
                    <div style={{flex: 1}}>
                        <h3>{league.response[0]['league'].name}</h3>
                        <img src={league.response[0]['league'].logo} alt="" style={{width:'30%', height:'auto', marginInline: 'auto', objectFit:'contain', objectPosition:'bottom'}} />
                    </div>
                    <div style={{flex: 1}} >
                        <h3>{league.response[0]['country'].name && league.response[0]['country'].name } {league.response[0]['country'].code && ' - ' + league.response[0]['country'].code}  </h3>
                        <img src={league.response[0]['country'].flag} alt="" style={{width:'25%', height:'auto', marginInline: 'auto', objectFit:'contain', objectPosition:'bottom'}} />

                    </div>
                </div>

                

                <table class="table caption-top bg-dark text-white">
                    <caption className="fs-4">Seasons</caption>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Start</th>
                            <th scope="col">End</th>
                            <th scope="col">Current</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        league.response[0]['seasons'].map((e, index) =>(
                            (<tr>
                                <th scope="row">{index+1}</th>
                                <td>{e.start}</td>
                                <td>{e.end}</td>
                                <td>{e.current ? 'True' : 'False'}</td>
                                </tr>
                        )))}
                    
                    
                    
                    </tbody>
                </table>
            
             {/* Players */}

                <table class="table caption-top bg-dark text-white">
                    <caption className="fs-4">Players</caption>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Team</th>
                            <th scope="col">Name</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">Age</th>
                            <th scope="col">Nationality</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    
                        players?.response ? players?.response.map((e, index)=>(    
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td><img src={e.statistics[0].team.logo} alt='team logo' style={{width:'35px'}} /> </td>
                                <td>{e.player.name}</td>
                                <td>{e.player.lastname}</td>
                                <td>{e.player.age}</td>
                                <td>{e.player.nationality}</td>
                                {/* <td></td> */}
                            </tr>
                            
                            )): (
                            <tr>
                                <th scope="row">None</th>
                                <td>None</td>
                                <td>None</td>
                                <td>None</td>
                                <td>None</td>
                                <td>None</td>
                                <td></td>
                            </tr>)
                    }
                    
                    
                    
                    </tbody>
                </table>
            </div>
        </div>
        )
    }else{
        return(
            <Spinner/>
        )
    }
}