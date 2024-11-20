import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
export default function Player() {
  const{id}=useParams();

const navigate=useNavigate()


  const[apiData,setApiDate]=useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODRiYjQ0ZDI2YzRkZDVlOGVkMzkyZDhiMThhYzcxOSIsIm5iZiI6MTczMDgxMTc0Ni45NjAzNzMsInN1YiI6IjY3MmExNjFhMDZkYzg4NTk2MzI0MGJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6yjS8UImHHu2IdUt431r-Z0q1O67tkLmrAtNsNzdbqw'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiDate(res.results[0]))
    .catch(err => console.error(err));
  })
  
  
  return (
    <div>
      <div className="player">
        <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
        <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer' frameBorder='0' allowFullScreen></iframe>
        <div className="player-info">
          <p>{apiData.published_at}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
      </div>
    </div>
  )
}
