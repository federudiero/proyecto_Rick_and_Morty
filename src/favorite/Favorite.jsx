import React from 'react'
import { connect } from 'react-redux'
import Card from '../card/Card'

 function Favorite({myFavorites}) {
  console.log(myFavorites)
  return (
    <div>
        
        {myFavorites?.map(({id, name,status,species,gender,image})=>{

         return (  
          <Card
            
            id={id}
            name={name}  
            status={status}  
            species={species}  
            gender={gender} 
            image={image} 


            />)
          
           

        })}
    </div>
  )
}
const mapStateToProps=(state)=>{
    return{
       myFavorites: state.myFavorites
    }
 
  }
export default connect(mapStateToProps,null)(Favorite)