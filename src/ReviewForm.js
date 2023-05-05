// class based component for Review
import React, {useState} from 'react'


//shell for class based component for ReviewForm
export default class Form extends Component{
    render(){
        const [review, setReview] = useState([])
        const handleSubmit= (e) =>{
            e.preventDefault();
        }
        return(
            <form className='reviewForm'>
                <label>Leave a Review!</label>
                <input type='text' placeholder='Enter your review'></input>
                <button onSubmit={(e) => handleSubmit(e)}>Submit</button>
            </form>
        )
    }
}