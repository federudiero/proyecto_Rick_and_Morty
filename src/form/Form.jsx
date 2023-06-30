import React, { useState } from 'react'

import styles from '../form/form.module.css'
import img from '../img/wp3277657.jpg'
import validate from './validate'

function Form(props) {
// expresiones regulares


//estados
const [userData, setUserData] = useState({username:'', password:''})
const [errors, setErrors] = useState({username:'', password:''})
    
    
  //funcion handelChange
  const handleChange = (e)=>{
    setUserData({...userData,[e.target.name] : e.target.value})
    setErrors(validate({...userData,[e.target.name] : e.target.value}))
 }
    


 const handleSubmit = (e)=>{
  e.preventDefault()
  props.login(userData)

}

    
  return (
    <div className={styles.divContainer}>
        <form  className={styles.form} onSubmit={handleSubmit}>
        <div> 
        <img className={styles.img} src={img} />
        </div>
        
        <label  className={styles.label} >Correo Electrónico:</label>

                <input 
                name='username' 
                className={errors.username} 
                onChange={handleChange}
                value={userData.username} 
                placeholder='Escribe tu email...' 
                type='text'></input>
                <p>{errors.username}</p>
                
               


               <br/>




        <label className={styles.label}>Password:</label>


               <input 
                name='password' 
                className={errors.password} 
                onChange={handleChange}
                value={userData.password} 
                placeholder='Escribe tu password' 
                type='password'></input>
                <p>{errors.password}</p>
                
                


                <br/>

                <button  className={styles.buttonLogin} type='submit' >Login</button>
        </form>
    </div>
  )
}

export default Form