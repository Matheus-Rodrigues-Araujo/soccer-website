import axios from "axios";
import soccerField from '../../assets/soccer-club-logo.png'
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../App";
import { Spinner } from "../../components/spinner";

export const Teams = () =>{
    const [teams, setTeams] = useState([])
    // const [text, setText] = useState('')
    const {leagues, setLeagues} = useContext(ThemeContext)
    let text = ''

    // const getTeamsByLeague = async()=>{

    //     const options = {
    //         method: 'GET',
    //         url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
    //         params: {season: '2021', league: '39'},
    //         headers: {
    //         'X-RapidAPI-Key': 'a44ca3f124mshf5256df877ee8a2p16ed0djsn312ab59cbb57',
    //         'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    //         }
    //     };
        
    //     try {
    //         const response = await axios.request(options);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // useEffect(()=>{
    //     getTeamsByLeague()
    // },[])
    const searchTeams = async (input) =>{
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
            params: {search: input},
            headers: {
              'X-RapidAPI-Key': 'a44ca3f124mshf5256df877ee8a2p16ed0djsn312ab59cbb57',
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              setTeams(response.data);
          } catch (error) {
              console.error(error);
          }
    }

    const SwitchComponent = () =>{
        if(teams?.response){

        
            return(
                teams.response.map(team => (
                        <div className="card team-card  text-white" style={{width: '18rem'}}>
                
                            <img src={team['team'].logo} href=""  
                            className="card-img-top" alt="..." style={{width:'80%', height:'80%', margin: '10px auto', objectFit:'contain', objectPosition:'bottom'}}/>
                                                    
                            <div className="card-body">
                                <h5 className="card-title">{team['team'].name}</h5>
                            </div>
                        </div> 
                ))
            )
        }else{
            return(<img src={soccerField} alt="soccer" style={{width:'35%', height:'auto', margin: '50px auto', objectFit:'contain', objectPosition:'bottom'}} /> )
        }
    }

    const SearchInput = () =>{
        return(
            <>
                <div class="input-group mb-3 mx-auto" style={{width: '50%'}} >
                    <span class="input-group-text bg-dark input-span fs-5" id="basic-addon1">Teams</span>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Search the teams..." 
                        aria-label="Search the teams..." 
                        aria-describedby="basic-addon1"
                        
                        onChange={(e) => {
                            let value = e.target.value
                            if(value.length >=3){
                                searchTeams(value)
                            }else{
                                setTeams("")
                            }
                            
                        }}
                    />
                </div>
                <p>Must have at least 3 letters</p>
            </>
        )
    }

    return(
        <>
            <h1 >Teams</h1>
            <h2 style={{color: 'gray'}}>Search for your teams of interest</h2>
            <SearchInput/>
            <div className="row border-top p-4  justify-content-center gap-3" style={{marginInline: 'auto'}}>
                 <SwitchComponent/>

            </div>
            {/* <SwitchComponent/> */}
        </>
    )

    
    // return (
    //     <>
    //         <h1 >Teams</h1>
    //         <h2 style={{color: 'gray'}}>Search for your teams of interest</h2>
    //         <SearchInput/>

    //         <div className="row border-top p-4  justify-content-center gap-3" style={{marginInline: 'auto'}}>
    //             {
    //                 teams?.response && teams?.response.map(team => (
    //                     <div className="card team-card  text-white" style={{width: '18rem'}}>
    //                         {/* <h5 className="card-title">ID: {team['team'].id}</h5> */}

    //                         <img src={team['team'].logo} href=""  className="card-img-top" alt="..." style={{width:'80%', height:'80%', margin: '10px auto', objectFit:'contain', objectPosition:'bottom'}}/>
                            
    //                         <div className="card-body">
    //                             <h5 className="card-title">{team['team'].name}</h5>
    //                         </div>
    //                      </div> 
    //                 ))
    //             }
    //             </div>

    //     </>
        
    // )
}