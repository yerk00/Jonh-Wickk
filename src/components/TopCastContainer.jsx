import React from 'react'
import { ActorCard } from './ActorCard'
import actor from '../assets/actor.json'
import './TopCastContainer.css'

export const TopCastContainer = () => {
  return (
    <section className="top-cast-container">
        <h6>TopCastContainer</h6>

        <div className="cards-container">
            {
                actor.map((actor)=>{
                    return <ActorCard actor={actor} key={actor.id}/>
                })
            }
        </div>
    </section>
  )
}

