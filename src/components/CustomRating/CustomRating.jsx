import React from 'react'
import StarRatings from "react-star-ratings";
import  './customRating.scss'
const CustomRating = ({name , rating ,handleRating}) => {
    return (
      <div className="custom-rating-container">
            <label>{name}</label>
            <StarRatings
              starRatedColor="yellow"
              numberOfStars={5}
              rating={rating}
              starHoverColor="yellow"
              starDimension="35px"
              name={name}
              changeRating={handleRating}
            />
          </div>
    )
}

export default CustomRating
