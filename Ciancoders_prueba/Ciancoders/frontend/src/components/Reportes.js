import React from 'react'
import {useSelector,useDispatch} from 'react-redux'



import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link, BrowserRouter
  } from "react-router-dom";

  
  
export default function Editando() {


    
  const [contraseña, setContraseña]=React.useState('')
  const [error,setError]=React.useState(false)
  const [texto,settexto]=React.useState('')
  const [desactivado,setdesactivadp]=React.useState(false)
  const [codigo,setcodigo]=React.useState('')
  const User = useSelector(state=> state.Correo)  
  const List_producto=useSelector(state=>state.Producto_editar)



  function producto(e){


      window.location.replace("/Reporte_Producto")
    
   
  }

  function global(e){

    window.location.replace("/Reporte_global")
    

  }

  function promedio(e){

    window.location.replace("/Reporte_Promedio")
    
  }
  

  return (
      <div class="container" style={{width:'80%',marginTop:'3rem'}}>
     
<button class="w-100 btn btn-lg btn-primary" disabled={desactivado} onClick={producto} style={{backgroundColor:"rgb(63, 81, 181)"}}   >Reporte Por Producto</button>
  <br></br>
  <br></br>
<button class="w-100 btn btn-lg btn-secondary" onClick={global} disabled={desactivado} style={{backgroundColor:"rgb(63, 81, 181)"}}  >Reporte Global</button>
  <br></br>
  <br></br>
<button class="w-100 btn btn-lg btn-secondary" onClick={promedio} disabled={desactivado} style={{backgroundColor:"rgb(63, 81, 181)"}}  >Reporte Promedio</button>
<br></br>
<br></br>
</div>
      
  )
}
