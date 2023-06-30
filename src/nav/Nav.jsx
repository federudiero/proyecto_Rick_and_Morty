import React from 'react'
import  SearchBar  from '../searchBar/SearchBar.jsx';
import  styles  from '../nav/nav.module.css';
import { NavLink } from "react-router-dom";
function Nav(props) {
  const rutaAbout = `/about`
  const rutaHome= `/home`
  const rutaFavorites= '/favorites'
  
  return (
    <div className={styles.containerNav}>
    <div>
      <NavLink to={rutaFavorites} ><button className={styles.buttonNav}>Favorite</button></NavLink>
        <NavLink to={rutaAbout} ><button className={styles.buttonNav}>About</button></NavLink>
        <NavLink to={rutaHome} ><button className={styles.buttonNav}>Home</button></NavLink>
        </div>
       
       <SearchBar onSearch={(characterID)=> props.onSearch(characterID)}/>
    </div>
  )
}

export default Nav