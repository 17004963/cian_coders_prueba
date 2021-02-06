import React from 'react'

export default function Registro() {

    const [contraseña, setContraseña]=React.useState('')
    const [error,setError]=React.useState(false)
    const [texto,settexto]=React.useState('')
    const [desactivado,setdesactivadp]=React.useState(false)
    
    function handleSubmit(e){
        e.preventDefault()
        const correo=document.getElementById('email').value
        const contrasena=document.getElementById('pass').value
        const nombre =document.getElementById('nombre').value
        const selector=document.getElementById('select').value
        console.log(correo,contrasena,nombre,selector)
       
        const request={
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                correo:correo,
                contrasena:contrasena,
                Nombre:nombre,
                tipo:selector
            })
        }
        
        if(selector==="1"){
            console.log(selector)
            fetch("/api/crear_clientes",request)
            .then((response)=>response.json())
            .then((data)=>{
                
                console.log(data)
                setTimeout(() => {  window.location.replace("/Catalogo");; }, 1000);
            });
        }else{
            console.log(selector)
            fetch("/api/crear_clientes",request)
            .then((response)=>response.json())
            .then((data)=>{console.log(data)
                setTimeout(() => {  window.location.replace("/Catalogo");; }, 1000);});
        }
    }

    function comparepass(e){
        const p1=document.getElementById('pass').value 
        const p2=document.getElementById('cofirmpass').value 
        if(p1!=p2){
            settexto("error claves diferentes")
            setdesactivadp(true)
        }else{
            settexto("")
            setdesactivadp(false)
        }
    }



    return (
        <div class="container" style={{width:'80%',marginTop:'5rem'}}>
        <form style={{textAlign:'center'}} onSubmit={handleSubmit}>
    <h1 class="h3 mb-3 fw-normal">Crear Cuenta</h1>
    <label for="inputEmail" class="visually-hidden">Correo Electronico</label>
    <input type="email" id="email" class="form-control" placeholder="Correo Electronico" required="" autofocus="" />
    <br></br>
    <label for="inputPassword" class="visually-hidden">Contraseña</label>
    <input type="password" id="pass" class="form-control" placeholder="Contraseña" required="" />
    <br></br>



    <div class="col-sm-4">
            <small id="passwordHelp" class="text-danger">
              {texto}
            </small>      
          </div>
    <label for="inputPassword" class="visually-hidden bg-danger">Contraseña </label>
    <input type="password"  onChange={comparepass} id="cofirmpass" class="form-control" placeholder="Confirmar contraseña" required="" />
    <span class="glyphicon glyphicon-remove form-control-feedback"></span>

    <br></br>


    <label for="inputEmail" class="visually-hidden">Nombre Completo</label>
    <input type="text" id="nombre" class="form-control" placeholder="Nombre Completo" required="" autofocus="" />
    <br></br>


    <select class="form-select" id='select' aria-label="Default select example">
    <option selected>Como desea registrar</option>
    <option value="1">Cliente</option>
    <option value="2">Vendedor</option>
    </select>


    <br></br>
    <button class="w-100 btn btn-lg btn-primary" disabled={desactivado} style={{backgroundColor:"rgb(63, 81, 181)"}}  >Crear</button>
    
  </form>
        </div>
        
    )
}
