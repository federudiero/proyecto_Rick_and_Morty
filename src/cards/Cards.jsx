import Card from '../card/Card'
import styles from '../cards/cards.module.css'


export default function Cards(props) {
   
   const {characters}= props;
 
 
   
   return (
     
   <div className={styles.containerCards}> 
   
   
   { characters.map(({ id,name,status,species,gender,image})=>{
      
      
      
      return(
      <Card
     
       id={id}
      name={name}
      status={status}
      species={species}
      gender={gender}
     
      image={image}
      onClose ={() => props.onClose(id)}/>)
      

    
   
   
   })}
   </div>);
}
