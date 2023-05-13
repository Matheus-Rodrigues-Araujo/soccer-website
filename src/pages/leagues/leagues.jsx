import { useEffect, useState } from "react"
import axios from 'axios';
import { LeagueCard } from "../../components/cards/leagueCard";
import { Spinner } from "../../components/spinner";

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

    useEffect(()=>{
        getLeagues()
        leagues && console.log(leagues)
    },[])
    
    return(


        <div>
            <h1>Leagues</h1>
                       
             <div className="row  py-4 gap-5" style={{justifyContent: 'center'}} >      
                {leagues?.response && leagues?.response.map(
                    e=>(<LeagueCard
                        id={e.league.id} 
                        name={e.league.name}
                        logo={e.league.logo}
                        country={e.country.name} 
                        code={e.country.code} 
                        flag={e.country.flag} 
                    />))}               
            </div>          
        </div>
        
        

)
}