// class based component for Review
import React, {Component} from 'react'
import StarRating from './StarRating'

//shell for class based component for ReviewForm
export default class Movie extends Component{
    render(){
        return(
            <section className='movieCard'>
                <h3>🎥Movie Reviews🍿</h3>
                <div>
                     <div className='Title'>
                        <img src="https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_UY1200_CR93,0,630,1200_AL_.jpg" alt="Raiders" style={{width: 200, height: 400}}/>
                        <br></br>
                        <label className='movie-lable' for="title">Raiders of the Lost Ark</label>
                    </div>

                    <div className='synopsis'>
                        <p>
                        In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis can obtain its awesome powers.
                        </p>
                    </div>
                    <StarRating></StarRating>
                    <p className='yourRating'>Your Rating</p>
                    
                </div>
            </section>
        )
    }
}