

  import React, { useEffect, useState } from 'react';
  import Friend from '../friend/Friend';
  
  const Images = () => {
    const [friend , setImage] =useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => setImage(data))
    },[])
    return (
        <div>
            {
            friend.map(image=><img src={image.avatar_url} alt="What am I doing?"></img>)    
            }
        </div>
    );
  };
  
  export default Images;