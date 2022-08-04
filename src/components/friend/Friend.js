import React, { useEffect, useState } from 'react'
import './style.css'

const friend = (props) => {
    // const [friend , setImage] =useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users')
    //     .then(res => res.json())
    //     .then(data => setImage(data))
    // },[])
    return (
        <div className='friend'>
            <div>
            <img src={props.friends.avatar_url} alt="hope this will work"></img>
            </div>
            <div className='frienddata'>
            <p><b>Name:</b> {props.friends.name}</p>
            <p><b>Email:</b> {props.friends.email}</p>
            <p><b>Phone:</b> {props.friends.phone}</p>
            <p><b>Annual-Salary:</b> {props.friends.annual_salary} $</p>
            <button onClick={()=>props.addFriends(props.friends)}>Add Friend</button>
            </div>
        </div>
    );
};

export default friend;