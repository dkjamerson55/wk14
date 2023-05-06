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
                         //function that takes sets rating to appropriate value when clicked
                         onClick={() => setRating(ratingValue)}
                        ></input>

                        <FaStar 
                        className="star" 
                        color={ratingValue <= (hover || rating) ? "#daa520" : "#e4e5e9"} 
                        size={20}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                         />

                    </label>
                )
            })}
        </div>

    )
}

export default StarRating