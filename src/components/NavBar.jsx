import React from 'react'
import './NavBar.css'

import homeIcon from '../assets/icons/home.png';
import otroIcon from '../assets/icons/other.png';
import estrellaIcon from '../assets/icons/estrella.png';
import profileIcon from '../assets/icons/persona.png';


export const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className="navbar-item-1">
         <img src={homeIcon} alt="Inicio" />
      </div>
      <div className="navbar-item-2">
        <img src={otroIcon} alt="Buscar" />
      </div>
      <div className="navbar-item-3">
        <img src={estrellaIcon} alt="Mensajes" />
      </div>
      <div className="navbar-item-4">
        <img src={profileIcon} alt="Perfil" />
      </div>
   {/*      <Button icon={"solar:home-2-outline"}/>
        <Button icon={"solar:ticked-sale-outline"}/>
        <Button icon={"solar:ticked-sale-outline"}/> */}
    
    </div>
  )
}

export default NavBar