import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

export default function Agregar() {
    
  const [contraseña, setContraseña]=React.useState('')
  const [error,setError]=React.useState(false)
  const [texto,settexto]=React.useState('')
  const [desactivado,setdesactivadp]=React.useState(false)
  const [codigo,setcodigo]=React.useState('')
  const User = useSelector(state=> state.Correo)  




  

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
      const cantidad=document.getElementById('cantidad').value
      const id_producto=document.getElementById('id_producto').value
      const nombre_producto =document.getElementById('nombre_producto').value
      const correo_vend=document.getElementById('correo_vend').value
      const descripcion=document.getElementById('descripcion').value
      const precio=document.getElementById('precio').value

      console.log(cantidad,id_producto,nombre_producto,correo_vend,descripcion,precio)

      const request={
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            Id_producto:id_producto,
            Nombre:nombre_producto,
            Vendedor:correo_vend,
            Cantidad:cantidad,
            Descripcion:descripcion,
            Precio:precio
          })
      }


      
    
          fetch("/api/agregar_producto",request)
          .then((response)=>response.json())
          .then((data)=>{
                console.log(data)
              if(data.Vendedor){
                
                settexto('producto añadido')
                setTimeout(() => {  window.location.replace("/Agregar");; }, 1000);
              }
          });
    
      
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
  <input type="text" id="id_producto" class="form-control" value={codigo} onFocus={generador} required="" autofocus="" readOnly/>
  <br></br>

  <label for="nombre_prducto" class="visually-hidden">Nombre del Producto</label>
  <input type="text" id="nombre_producto" class="form-control"  placeholder="Nombre del producto" required="" autofocus=""  />
  <br></br>
  

  <label for="nombre_prducto" class="visually-hidden">Nombre del Producto</label>
  <input type="text" id="correo_vend" class="form-control"  value={User} required="" autofocus="" readOnly/>
  <br></br>

  <label for="exampleFormControlTextarea1"> Descripcion del producto</label>
  <textarea class="form-control" placeholder="Describa su producto..." id="descripcion" rows="3"></textarea>
  <br></br>



  
        <label for="example-number-input" >Cantidad</label>
        <input class="form-control" type="number"  id="cantidad"/>
        <span class="glyphicon glyphicon-remove form-control-feedback"></span>

  <br></br>

  <label for="nombre_prducto" class="visually-hidden">Nombre del Producto</label>
  <input input type="number" min="0.00" max="10000.00" step="0.50" id="precio" class="form-control"  placeholder="Q0.00" required="" autofocus="" />
  <br></br>

  <label for="nombre" class="visually-hidden">Foto si me da tiempo</label>
  <input type="file" id="a" class="form-control" placeholder="foro" required="" autofocus="" />
  <br></br>

  <button class="w-100 btn btn-lg btn-primary" disabled={desactivado} style={{backgroundColor:"rgb(63, 81, 181)"}}  >Crear</button>
  
</form>
      </div>
      
  )
}
