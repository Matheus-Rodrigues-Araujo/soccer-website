export const Teams = () =>{
    return (
        <>
            <h1>Teams</h1>

            <div className="row border-top py-4 mx-3">
                <div className="card p-2" style={{width: '18rem'}}>
                <h5 className="card-title">Position</h5>

                <img src="https://th.bing.com/th/id/R.bdd4fbe409215698f0ebebe1d3434a47?rik=QyKgP6nP7dGHsw&pid=ImgRaw&r=0" href=""  className="card-img-top" alt="..."/>
                
                <div className="card-body">
                    <h5 className="card-title">Player name</h5>
                    <p className="card-text">Description</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Attack</li>
                    <li className="list-group-item">Defense</li>
                    <li className="list-group-item">Speed</li>
                </ul>
                {/* <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div> */}
                </div>
            </div>

        </>
        
    )
}