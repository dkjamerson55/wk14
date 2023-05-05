import React, {useState} from 'react'
import {FaStar} from "react-icons/fa"

const StarRating =() => {
    const[rating, setRating]= useState(null);
    const[hover, setHover]= useState(null);

    return (
        <div className="starRating">
            {/* method to map over an array of 5 undefined items and use index to help iterate the position*/}
            {[...Array(5)].map((star,i) => {
                const ratingValue = i +1

                return (
                    <label>

                        <input
                         type='radio' 
                         name='rating' 
                         value={ratingValue} 
                         onClick={() => setRating(ratingValue)}
                        ></input>

                        <FaStar 
                        className="star" 
                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                        size={35}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                         />

                    </label>
                )
            })} 
            <p>Movie Rating {rating}</p>
        </div>

    )
}

export default StarRating