import styles from '../card/card.module.css'
import { Link } from "react-router-dom";
import {deleteFavorite,addFavorite} from '../redux/actions'
import { connect } from 'react-redux';
import { useState ,useEffect} from 'react';


export function Card({ id, name,status,species,gender,image,onClose,addFavorite,deleteFavorite,myFavorites}) {


   const [isFav,setIsFav] = useState(false)
   
   const handleFavorite = ()=>{
      if (isFav) {
         setIsFav(false)
         deleteFavorite(id)
                                                  
      }else{
         setIsFav(true)
         addFavorite({id, name,status,species,gender,image,onClose})
      }
   } 
  

   useEffect(() => {
      myFavorites?.forEach((character) => {
         if (character.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

 console.log(isFav)


    return (
     
       <div className={styles.container}>
       <Link to={`/detail/${id}`} > <h2 className={styles.h2CardNombre}>{name}</h2></Link>
         
          <h2 className={styles.h2Card}>{status}</h2>
          <h2 className={styles.h2Card}>{species}</h2>
          <h2 className={styles.h2Card}>{gender}</h2>
          <img className={styles.imgCard} src={image} alt={name} /> 
          
           {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
{isFav ? null: ( <button className={styles.buttonCard} onClick={onClose}>X</button>)}
       </div>
       
    );
 }

export const mapDispatchToProps= (dispatch)=>{
   return{
      addFavorite:function(character){
         dispatch(addFavorite(character))
      },
      deleteFavorite : function(id){
         dispatch(deleteFavorite(id))
      },
   }
 }

export const mapStateToProps=(state)=>{
   return{
      myFavorites: state.myFavorites
   }

 }



 export default  connect (mapStateToProps,mapDispatchToProps)(Card)