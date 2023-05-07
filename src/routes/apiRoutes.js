import axios from "axios";
// import  Axios  from "axios"

// LEAGUES
export const getLeagues = async () =>{

    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
        headers: {
          'X-RapidAPI-Key': 'a44ca3f124mshf5256df877ee8a2p16ed0djsn312ab59cbb57',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.get(options)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
}

 