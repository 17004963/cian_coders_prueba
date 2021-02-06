import { List } from '@material-ui/core';
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'



import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link, BrowserRouter
  } from "react-router-dom";

  
  
export default function Comprar() {


    
  const [contraseña, setContraseña]=React.useState('')
  const [error,setError]=React.useState(false)
  const [texto,settexto]=React.useState('')
  const [desactivado,setdesactivadp]=React.useState(false)
  const [codigo,setcodigo]=React.useState('')
  const User = useSelector(state=> state.Correo)  
  const List_producto=useSelector(state=>state.Producto_editar)



  

  function generador(e){
        
    var chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        
    serialLength = 10,
    
    randomSerial = "",
    
    i,
    
    randomNumber;

    for (i = 0; i < serialLength; i = i + 1) {
    
    randomNumber = Math.floor(Math.random() * chars.length);
    
    randomSerial += chars.substring(randomNumber, randomNumber + 1);
    
    }
      settexto("")
      setcodigo(randomSerial)
  }
  function handleSubmit(e){

    

      e.preventDefault()
      const cantidad=document.getElementById('Cantidad').value
      const id_producto=document.getElementById('id_producto').value
      const nombre_producto =document.getElementById('nombre_producto').value
      const descripcion=document.getElementById('descripcion').value
      const precio=document.getElementById('precio').value
      const comprador=User
      const vendedor=List_producto[5]
      console.log(cantidad,id_producto,nombre_producto,descripcion,precio,comprador,vendedor)

    if(cantidad==0){
        settexto('Producto agotado :(')
        setTimeout(() => {  settexto("/Catalogo");; }, 1000);
    }else{

      const request={
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            Id_producto:id_producto,
            Nombre:nombre_producto,
            Descripcion:descripcion,
            Vendedor:vendedor,
            Comprador:comprador,
            Cantidad:cantidad,
            Precio:precio,
          })
      }

          fetch("/api/Ventas_List",request)
          .then((response)=>response.json())
          .then((data)=>{
           
                settexto('Compra Exitosa')
                setTimeout(() => {  window.location.replace("/Catalogo");; }, 1000);
              
          });

        }
   
  }


  

  return (
      <div class="container" style={{width:'80%',marginTop:'3rem'}}>
      <form style={{textAlign:'center'}} onSubmit={handleSubmit}>
  <h1 class="h3 mb-3 fw-normal">Agregar Producto</h1>


  <div class="col-sm-4">
          <small id="passwordHelp" class="text-success">
            {texto}
          </small>      
        </div>


  <label for="inputEmail" class="visually-hidden">Nombre del Producto</label>
  <input type="text"  id="id_producto" class="form-control" value={List_producto[0]}  required="" autofocus="" readOnly/>
  <br></br>

  <label for="nombre_prducto" class="visually-hidden">Nombre del Producto</label>
  <input type="text" id="nombre_producto" class="form-control"   value={List_producto[1]} required="" autofocus=""  />
  <br></br>
  


  <label for="exampleFormControlTextarea1"> Descripcion del producto</label>
  <textarea class="form-control"  value={List_producto[4]}  id="descripcion" rows="3"></textarea>
  <br></br>



  


<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Cuantas Unidades</span>
  </div>
  <input type="number" min="0" required id="Cantidad" max={List_producto[3]} class="form-control" aria-label="Cuantos" aria-describedby="inputGroup-sizing-default"/>
</div>

<br></br>


<div class="input-group mb-3">

<div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Precio Unidad</span>
  </div>
  <label for="nombre_prducto" class="visually-hidden">Nombre del Producto</label>
  <input input type="number" value={List_producto[2]} min="0.00" max="10000.00" step="0.50" id="precio" class="form-control"   required="" autofocus="" />
  <br></br>
  </div>

 

  <button class="w-100 btn btn-lg btn-primary" disabled={desactivado} style={{backgroundColor:"rgb(63, 81, 181)"}}>Comprar</button>
  <br></br>
  <br></br>


  
<div></div>
</form>

  <br></br>
      </div>
      
  )
}
