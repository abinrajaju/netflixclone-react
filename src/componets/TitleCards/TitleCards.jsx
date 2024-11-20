import React, { useEffect, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import {Link} from 'react-router-dom'

export default function TitleCards({title,category}) {
  const[apiData,setApiDate]=useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODRiYjQ0ZDI2YzRkZDVlOGVkMzkyZDhiMThhYzcxOSIsIm5iZiI6MTczMDgxMTc0Ni45NjAzNzMsInN1YiI6IjY3MmExNjFhMDZkYzg4NTk2MzI0MGJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6yjS8UImHHu2IdUt431r-Z0q1O67tkLmrAtNsNzdbqw'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiDate(res.results))
    .catch(err => console.error(err)); 
  })
  
  return (
    <div className='title-cards'>
      <h2>{title?title:"Populer on netflix"}</h2>
      <div className="card-list">
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>

            <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}
