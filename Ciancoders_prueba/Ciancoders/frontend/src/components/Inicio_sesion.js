import React from 'react'
import {ingreso_cliente,Cierre_sesion,ingreso_vendedor,Usuario} from './Actions'
import {useSelector,useDispatch} from 'react-redux'


export default function Inicio_sesion() {
    const dispatch = useDispatch()
    const [texto,settexto]=React.useState('')

    function handlesubmit(e){
        e.preventDefault()
        const correo=document.getElementById('inputEmail').value
        const contrasena=document.getElementById('inputPassword').value
        console.log(correo)
        const request={
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                correo:correo,
                contrasena:contrasena,
            })
        }
        console.log(request)
        fetch("/api/Iniciar_Sesion",request)
        .then((response)=>response.json())
        .then( (data)=> {
            console.log(data)
            if(!data.correo){
                settexto("Usuario Incorrecto o Contraseña incorrecta")
            }else{
                if(data.tipo=='1'){
                    dispatch(ingreso_cliente())
                    dispatch(Usuario(data.correo))
                }else if(data.tipo=='2'){
                    dispatch(ingreso_vendedor())
                    dispatch(Usuario(data.correo))
                }
                settexto("")
                window.location.replace("/");
            }
        } );
    }


    return (

    <div class="container" style={{width:'80%',marginTop:'5rem'}}>
    <form style={{textAlign:'center'}} onSubmit={handlesubmit}>
    <h1 class="h3 mb-3 fw-normal">Ingrese Datos</h1>

    <div class="col-sm-4">
            <small id="passwordHelp" class="text-danger">
              {texto}
            </small>      
    </div>  
    <label for="inputEmail" class="visually-hidden">Correo Electronico</label>
    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
    <br></br>
      
    <label for="inputPassword" class="visually-hidden">Contraseña</label>
    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
    <div class="checkbox mb-3">
      
    </div>
    <button class="w-100 btn btn-lg btn-primary" style={{backgroundColor:"rgb(63, 81, 181)"}} >Iniciar Sesion</button>
    
  </form>
        </div>
     
    )
}
