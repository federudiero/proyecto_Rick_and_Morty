import {ADD_FAVORITE }from './actionsTypes'
import {DELETE_FAVORITE} from './actionsTypes'

export  function addFavorite(character){
    console.log(character)
    return{
        type: ADD_FAVORITE,
        payload : character
    }
}

export function deleteFavorite(id){
    return{
        type: DELETE_FAVORITE,
        payload : id,
    }
}

 
 




