import React from 'react'
import { MovieCard } from './MovieCard'
import './SeccionMovie.css'
 export const SeccionMovie = ({movies, title, images}) => {
/*   const moviesData=[
    {
      title: 'Comming Soon',
      images: ['https://es.web.img2.acsta.net/c_310_420/pictures/20/06/17/13/39/2095384.jpg',
               'https://es.web.img3.acsta.net/c_310_420/pictures/22/08/29/09/36/3559880.jpg',]

    }
  ] */
  
  return (
    <div className="seccion-container">
      {/* <span>{title}</span> */}
      <span className='title'>{title}</span>
      <div className='slider'>
        <MovieCard image="https://es.web.img2.acsta.net/c_310_420/pictures/20/06/17/13/39/2095384.jpg"/>

        <MovieCard/>

        <MovieCard/>

        <MovieCard/>
        <MovieCard/>
        <MovieCard/>


       {/*  {
          movies.map((movie) => {
            <img src={movie.url} alt="" />
          })
        } */}
        
      </div>
    </div>
  )
}

export default SeccionMovie
