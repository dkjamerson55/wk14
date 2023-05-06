
import { useState } from "react";
// import { CardText } from 'reactstrap';
import StarRating from './StarRating';
//state is used when needing to update forms
function ReviewForm (){
    //[] declare state variables, first item is current value the second is its ability to update
    const[review, setReview] = useState([]);
    const[inputReview, setInputReview] = useState('');

    //changes useState for each const declared and then adds to an array
    const handleSubmit = (e) => {
        e.preventDefault();
        setReview([...review, inputReview]);
        setInputReview('');
    };

    //changes useState to the string value input
    const handleChange = (e) => {
        setInputReview([e.target.value]);
    };

    return (
        <div className='reviewForm'>
            <form onSubmit={handleSubmit}>

                <input
                    className='form-control'
                    value={inputReview}
                    placeholder='Leave a Review!'
                    onChange={handleChange}>
                </input>

                {/* <StarRating></StarRating> */}
                    <button className='btn m-2' type='submit'>submit</button>
            </form>
            <div className='row'>
                {review.map((reviews, i)=> (
                    <div key={i}>{reviews}</div>
                ))}
            </div>
        </div>
    )
}

export default ReviewForm;