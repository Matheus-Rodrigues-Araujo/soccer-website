import { useNavigate} from "react-router"

export const Table = () =>{
    const navigate = useNavigate()
    // const leagueId = id
    return(
        <table class="table caption-top bg-dark text-white">
            <caption className="fs-4">Seasons</caption>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">League</th>
                    <th scope="col">Teams</th>
                    <th scope="col">Current</th>
                </tr>
            </thead>
            <tbody>
            {/* {
                league.response[0]['seasons'].map((e, index) =>(
                    (<tr>
                        <th scope="row">{index+1}</th>
                        <td>{e.start}</td>
                        <td>{e.end}</td>
                        <td>{e.current ? 'True' : 'False'}</td>
                        </tr>
                )))} */}
            
            
            
            </tbody>
        </table>
        )
} 