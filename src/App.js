
import './App.css';
import Cards from './cards/Cards';

import Nav from '../src/nav/Nav'
import { useEffect, useState } from 'react';
import { Routes ,Route, useLocation, useNavigate } from "react-router-dom";
import About from './abaut/About';

import Form from './form/Form';
import Favorite from './favorite/Favorite';
import Detail from '../src/detail/Detail'



function App() {
   
   const location = useLocation();


   const navigate = useNavigate()
   const [access,setAccess]= useState(false)
   const username = 'federudiero@gmail.com'
   const password = 'fede1234'





   const  [characters,setCharacters] = useState([])
   


   const onSearch=(id)=>{
      
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
     .then((res)=>res.json())
     .then(data=>{
      (data.name  ? characters.filter((char) => char.id === data.id).length === 0 : "" ) ? setCharacters([...characters,data]): alert('no encontrado')
   
   
   })
      .catch((error)=>{
         // eslint-disable-next-line no-throw-literal
         throw('error')
      })
   }


   const onClose=(id)=>{
      
      const filtered = characters.filter((char)=>char.id !== Number(id))
      setCharacters(filtered)
   }


   function login (userData){
      
     if (userData.username === username && userData.password === password ){
      setAccess(true)
      navigate('./home')
     } else{
         alert('usuario o contraseña incorrecta')
     }
      
   }

useEffect(()=>{
   !access && navigate('/')
},[access])







  return (
    <div className='App'>
    {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
      
      <Routes>
     
         <Route  path='/' element={<Form login={login}/>} />
         <Route  path='/home'  element={ <Cards characters={characters} onClose={onClose} />  } />
         
        
         <Route path="/favorites" element={<Favorite/>} />
       
         <Route path="/about" element={<About/>} />
         <Route path="/detail/:id" element={<Detail/>} />
      </Routes>

     
    </div>
 );
}

export default App;
