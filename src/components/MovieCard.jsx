import React from 'react'
import { Gender } from './Gender'
import movie from '../assets/peliculas.json'
import './MovieCard.css'

export const MovieCard = ({image}) => {

  return (
    <div className='movie-card-container'>
      <img src={image} alt=''/>
    </div>
  )
}




{/*  <img src={peli.Poster} alt="" />
      {/* <img src={movie.imgsrc} alt="" /> */}
      {/* <img src={dogs[0]?.url} alt="" /> */}
     {/*  <Gender peli={peli}/>
      <span>
        {peli.Plot}
      </span> */} 