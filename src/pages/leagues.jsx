import { useEffect, useState } from "react"
import axios from 'axios';

export const Leagues = () =>{
    const [leagues, setLeagues] = useState([])
    const getLeagues = async () =>{
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
        headers: {
            'X-RapidAPI-Key': 'a44ca3f124mshf5256df877ee8a2p16ed0djsn312ab59cbb57',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

        try {
            const response = await axios.request(options);
            setLeagues(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // useEffect(()=>{
    //     getLeagues()
    // },[])
    
    return(
        <div>
            <h1>Leagues</h1>
            
            
             <div className="row  py-4 mx-3 gap-5"  >
                <div className="card py-2 "  style={{width: '15rem', height:'18rem'}}>
                    <h5 className="card-title " style={{'fontSize': '15px'}} >LA LIGA SANTANDER</h5>

                    <img style={{width:'150px', marginInline: 'auto'}} src="https://media-2.api-sports.io/football/leagues/140.png" href=""  className="card-img-top" alt="..."/>
                    
                    <div className="card-body container border-top">
                        <div style={{display:"flex", justifyContent: 'center', 'height':'100%', alignContent: 'center', gap:'5px'}} >
                            <img  width='40px' height='40px' src="https://media-1.api-sports.io/flags/es.svg" alt="Spain flag" />
                            <p className="m-0 fs-4" >SPAIN - ES</p>
                        </div>
                    </div>
                </div>

                <div className="card p-2 "  style={{width: '15rem', height:'18rem'}}>
                    <h5 className="card-title " style={{'fontSize': '15px'}} >UEFA CHAMPIONS LEAGUE</h5>

                    <img style={{width:'150px', marginInline: 'auto'}} src="https://media-2.api-sports.io/football/leagues/140.png" href=""  className="card-img-top" alt="..."/>
                    
                    <div className="card-body container border-top">
                        <div style={{display:"flex", justifyContent: 'center', 'height':'100%', alignContent: 'center', gap:'5px'}} >
                            <img  width='40px' height='40px' src="https://media-1.api-sports.io/flags/es.svg" alt="Spain flag" />
                            <p className="m-0 fs-4" >SPAIN - ES</p>
                        </div>
                    </div>
                </div>

                
            </div>


            
        </div>
    )
}