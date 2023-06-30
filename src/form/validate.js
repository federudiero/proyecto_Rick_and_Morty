const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
const  regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

//funcion validadora
export  default function validate(userData) {
let errors = {}

  if (regexEmail.test(userData.userName)) errors.userName= 'el usuario deb ser un email'
  else if(!userData.userName) errors.userName= 'el usuario no puede estar vacio'
  else if(userData.userName.length>35) errors.userName= 'el usuario no puede ser mayor de 35 caracteres'


  if( !regexPassword.test(userData.password) ) errors.password= 'la contraseña debe tener un numero'
  else if (userData.password.length < 6 && userData.password.length >10)errors.password= 'ela contraseña debe tener entre 6 y 10 caracteres'
 
return errors;
} 