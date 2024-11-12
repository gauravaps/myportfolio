import React, { useEffect, useState } from 'react'

const Github = () => {
    const[followers,setfollowers]=useState([])
    useEffect(()=>{
        fetch(' https://api.github.com/users/gauravaps')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setfollowers(data)

        })


    },[])
  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>
        <h3>your followers : {followers.followers}</h3>
        <h3>following: {followers.following}</h3>
        <h3>about:{followers.bio}</h3>
        <img src={followers.avatar_url} alt="git logo" width='300' />


    </div>
  )
}

export default Github