import { useNavigate} from "react-router"

export const LeagueCard = ({id, name, country, code, logo, flag}) =>{
    const navigate = useNavigate()
    const leagueId = id
    return(
        <div className="card league-card p-3 gap-3"
        style={{width: '20rem', height:'20rem', textTransform: 'uppercase'}}
        onClick={()=>navigate(`/leagues/${leagueId}`)}
        >
            <h5 className="card-title border-bottom" style={{'fontSize': '18px', width:'100%'}} >{name}</h5>

            {logo && <img style={{width:'50%', height:'60%', marginInline: 'auto', objectFit:'contain', objectPosition:'bottom'}}  src={logo}  className="card-img-top" alt="..."/>}
            
            <div className="card-body container border-top">
                <div style={{display:"flex", justifyContent: 'center', 'height':'100%', alignContent: 'center', gap:'5px'}} >
                    
                    {flag && <img  width='40px' height='40px' src={flag} alt="Spain flag" style={{objectFit:'contain', objectPosition:'bottom'}}  />}
                    <p className="m-1 fs-5" >{country} {code ? '- '+ code: ''}</p>
                </div>
            </div>
        </div>
        )
}