import styles from '../searchBar/searchBar.module.css'


import React, { useState } from 'react'

function SearchBar(props) {
   const [character,setCharacters]= useState('')
   const {seacrh}= props
    const handleInputChange= (event)=>{
      const {value} =event.target
      setCharacters(value)
    }
   return (
      <div className={styles.searchBar}>
          <input className={styles.inputSearch} type='search' onChange={handleInputChange} />
         <button className={styles.buttonSearch} onClick={()=> props.onSearch(character)}>Agregar</button> 
      </div>
   );
}

export default SearchBar