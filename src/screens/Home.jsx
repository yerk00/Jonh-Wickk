import React from 'react'
import Serch from '../components/Serch'
import PosterCard from '../components/SeccionMovie'
import SeccionMovie from '../components/SeccionMovie'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <div>
      <Serch/> 
      <SeccionMovie/>
      <SeccionMovie title={"Comming Soon"}/>
      <SeccionMovie title={"Top Movie"}/>
      <SeccionMovie title={"Action Movies"}/>
      <NavBar/>

      {/* <SeccionMovie/> */}
    </div>
  )
}

export default Home
