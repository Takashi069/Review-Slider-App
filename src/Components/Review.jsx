import './Review.css'
import reviews from '../data/data';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'
import { useState } from 'react';
const Review = () => {
    const [arrayIndex,setArrayIndex] = useState(0);
    const {name, image, job, text} = reviews[arrayIndex];
    return ( 
        <div className="reviewlist">
            <div className="review-box">
                <div className="img-container">
                    <img src={image} alt={"image of "+name}></img>
                    <span className="quote">
                        <FaQuoteRight/>
                    </span>
                </div>
                <h3 className="name">{name}</h3>
                <div className="job">{job}</div>
                <div className="message">{text}</div>
                <div className="button-container">
                    <button className="prev-button" onClick={()=>{arrayIndex=== 0 ? setArrayIndex(reviews.length-1) : setArrayIndex(arrayIndex-1)}}>
                        <FaChevronLeft/>
                    </button>
                    <button className="next-button" onClick={()=>{arrayIndex===reviews.length-1 ? setArrayIndex(0) : setArrayIndex(arrayIndex+1)}}>
                        <FaChevronRight/>
                    </button>
                </div>
                {/* Random Number Generation: Math.floor(Math.random() * (max - min + 1) ) + min */}
                <button className="SurpriseMe" onClick={()=>{
                    //This will always ensure that you get a new number and not the old one
                    let newIndex = 0;
                    while(newIndex === arrayIndex){
                        newIndex = Math.floor(Math.random() * 4)
                    }
                    setArrayIndex(newIndex)
                    }}>
                    Surprise Me
                </button>
            </div>
        </div>
     );
}
 
export default Review;