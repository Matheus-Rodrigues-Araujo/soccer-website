import soccerBall from '../assets/soccer-ball.jpg'

export const Main = () =>{
    return(
        <div class="px-4 pt-5 my-3 text-center border-bottom">
            <h1 class="display-4 fw-bold text-body-emphasis">Sports information everyday!</h1>
            <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Get to know all the statistics, news and curiosities of the sports world. With our website you will have in real time the most precious data of sports around the world!</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                <button type="button" class="btn btn-success btn-lg px-4 me-sm-3">Explore</button>
                {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button> */}
            </div>
            </div>
            <div class="overflow-hidden" style={{maxHeight: "30vh"}}>
            <div class="container px-5">
                <img src={soccerBall} class="img-fluid  rounded-3  mb-4" alt="Example image" width="200" height="500" loading="lazy"/>
            </div>

            <div class="row">
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <h2 class="fw-normal">Heading</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <h2 class="fw-normal">Heading</h2>
        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <h2 class="fw-normal">Heading</h2>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
    </div>

            
            </div>
        </div>
    )
}