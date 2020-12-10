import React from 'react';

const Post = (props) => {
    console.log(props)
  const reviews =  props.reviewInfo.map((item)=>{
        console.log(item)
        return(
            <div>
              <h2 id="testH1">{item.fields.reviewer}</h2>  
              <p>{item.fields.reviews}</p>
            </div>
        )
    })
    return (
        <div>
            {reviews}
        </div>
    );
};

export default Post;