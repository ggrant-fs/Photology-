import React from 'react';

const Post = (props) => {
    console.log(props)
  const reviews =  props.reviewInfo.map((item)=>{
        console.log(item)
        return(
            <div id="review-div" key={item.id}>
              <h2 id="reviewer-title">{item.fields.reviewer}</h2>  
              <p>{item.fields.reviews}</p>
            </div>
        )
    })
    return (
        <div id="review-background">
            <h1 id="reivew-title2">Our Clients</h1>
            {reviews}
        </div>
    );
};

export default Post;