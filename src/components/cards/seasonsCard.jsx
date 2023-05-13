import { useNavigate} from "react-router"

export const SeasonCard = ({data}) =>{
    const navigate = useNavigate()
    // const leagueId = id
    return(
        <div className="card season-card  gap-3 text-white"
        style={{width: '15rem', height:'15rem', textTransform: 'uppercase'}}
        >
            <h5 className="card-title border-bottom" style={{'fontSize': '18px', width:'100%'}} >Season {data.year}</h5>
            
            <div className="card-body container">
                <div style={{ justifyContent: 'center', 'height':'100%', alignContent: 'center', gap:'5px'}} >
                    {/* {flag && <img  width='40px' height='40px' src={flag} alt="Spain flag" style={{objectFit:'contain', objectPosition:'bottom'}}  />} */}
                    <p className=" fs-5" >Start: {data.start}</p>
                    <p className=" fs-5" >End: {data.end}</p>
                    {data.current ?
                     (<p className=" fs-5" >Current: <span style={{ color:'rgb(57, 255, 44)' }} >True</span></p>)
                      :
                    (<p className="fs-5" >Current: <span style={{color: 'rgb(233, 33, 53)'}}>False</span></p>)}
                </div>
            </div>
        </div>
        )
} 