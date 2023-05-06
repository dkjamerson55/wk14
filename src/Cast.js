// class based component for Review
import React, {Component} from 'react'

//shell for class based component for ReviewForm
export default class Cast extends Component{
    render(){
        return(
            <section className='movieCast'>
                <h3>Top Cast</h3>
                <form className='cast'>

                    <div className='Actors'>
                        <ul>
                            <li>
                                 <img src="https://nationaltoday.com/wp-content/uploads/2022/06/25-Harrison-Ford-1200x834.jpg" alt="Harrison Ford" style={{width: 90, height: 100}}/>
                                 <label className='starActors' for='part'>Harrison Ford as Indiana Jones</label>
                            </li> <br></br>

                            <li>
                                <img src="https://m.media-amazon.com/images/M/MV5BMTg2NjgyMjQwMF5BMl5BanBnXkFtZTcwNzkwMjE3MQ@@._V1_.jpg" alt="Karen Allen" style={{width: 90, height: 100}}/>
                                <label className='starActors' for='part'>Karen Allen as Marion Ravenwood</label>
                            </li> <br></br>

                            <li>
                                <img src="https://flxt.tmsimg.com/assets/83286_v9_ba.jpg" alt="Denholm Elliott" style={{width: 90, height: 100}}/>
                                <label className='starActors' for='part'> Denholm Elliott as Marcus Brody</label>
                            </li> <br></br>

                            <li>
                                 <img src="https://m.media-amazon.com/images/M/MV5BMWQzMjkyMTMtNmEzMy00YmRmLTg3NDQtMDI0NzhlYzhhNDc3L2ltYWdlXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg" alt="Paul Freeman" style={{width: 90, height: 100}}/>
                                 <label className='starActors' for='part'>Paul Freeman as Belloq</label>
                            </li> <br></br>

                            <li>
                                 <img src="https://flxt.tmsimg.com/assets/67941_v9_ba.jpg" alt="John-Rhys Davies" style={{width: 90, height: 100}}/>
                                 <label className='starActors' for='part'>John-Rhys Davies as Sallah</label>
                            </li> <br></br>

                            <li>
                                <img src="https://pbs.twimg.com/media/EWFEyW8VcAAw7HU.jpg" alt="Wolf Kahler" style={{width: 90, height: 100}}/>
                                <label className='starActors' for='part'>Wolf Kahler as Dietrich</label>
                            </li> <br></br>

                            <li>
                                <img src="https://m.media-amazon.com/images/M/MV5BYTliYzY1MGItNzg3MS00ZjAyLWI0ZTQtNWVlNTkwNWFlZGU3XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_FMjpg_UX1000_.jpg" alt="Ronald Lacey" style={{width: 90, height: 100}}/>
                                <label className='starActors' for='part'>Ronald Lacey as Toht</label>
                            </li> <br></br>
                        </ul>
                    </div>

                    <div className='directedBy'>
                        <h4>Directed by</h4>
                        <img src="https://m.media-amazon.com/images/M/MV5BMTY1NjAzNzE1MV5BMl5BanBnXkFtZTYwNTk0ODc0._V1_FMjpg_UX1000_.jpg" alt="Steven Spielberg" style={{width: 90, height: 100}}/>
                        <label className='starActors' for='part'>Steven Spielberg</label>
                    </div>
                    
                    <br></br>

                    <div className='writers'>
                        <h4>Writers</h4>
                        <ul>
                            <li>Lawrence Kasdan</li> <br></br>
                            <li>George Lucas</li> <br></br>
                            <li>Philip Kaufman</li>
                        </ul>
                    </div>

                </form>
            </section>
        )
    }
}