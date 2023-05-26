import { Chip } from './Chip'
import React from 'react'
import './Gender.css'

export const Gender = ({movie}) => {
  // const movie = props.movie
  const gender = movie.gender
  return (
    <div className='gender-container'>
    {
      gender.map((genero, index) => (
        <Chip genero = {genero} key = {index}/>
      ))
    }
    </div>
  )
}

