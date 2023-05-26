import { Gender } from './Gender'
import React from 'react'
import movie from '../assets/peliculas.json'
import './MovieMain.css'

export const MovieMain = ({dogs}) => {

  return (
    <div className='move-main-container'>
        
      {/* <img src={movie.imgsrc} alt="" /> */}
      <img src={dogs[0]?.url} alt="" />
      <Gender movie={movie}/>
      <span>
        {movie.resume}
      </span>
    </div>
  )
}


