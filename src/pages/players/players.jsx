import axios from 'axios'
import { useEffect, useState } from 'react';

export const Players = () =>{
    const [player, setPlayer] = useState([])
    const searchPlayer = async()=>{

        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/players',
            params: {search: 'neymar', league: '61'},
            headers: {
            'X-RapidAPI-Key': 'a44ca3f124mshf5256df877ee8a2p16ed0djsn312ab59cbb57',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };
        
        try {
            const response = await axios.request(options);
            setPlayer(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        searchPlayer()
    },[])
    
    if(player.response){
        return(
            <div>
                {console.log(player)}
                <p>Name: {player.response[0]['player'].name}</p>
                <p>Firstname: {player.response[0]['player'].firstname}</p>
                <p>Lastname: {player.response[0]['player'].lastname}</p>
                {/* <p>Team: {player.response['player']}</p> */}
                <img src={player.response[0]['player'].photo} alt='a neymer photo' />
                <img src={player.response[0]['statistics'][0].team.logo} alt='a team' />

            </div>
        )
    }else{
        return (
            <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        )
    }
}