import React,{useEffect, useState} from 'react';
import ReviewHeader from './ReviewHeader'
import{secondaryURL,config} from "../Services/index"
import axios from "axios"
import Post from './Post';



const ReviewPage = () => {
   const [reviewInfo, setReviewInfo] = useState([])

    const reviewsData= async()=>{
        const reviewsApi = await axios.get(secondaryURL,config)
        // console.log(reviewsApi.data)
        setReviewInfo(reviewsApi.data.records)
    }


    useEffect(()=>{
        reviewsData();
    },[])
    return (
        <div>
            <ReviewHeader/>
            <Post reviewInfo={reviewInfo}/>
        </div>
    );
};

export default ReviewPage;
