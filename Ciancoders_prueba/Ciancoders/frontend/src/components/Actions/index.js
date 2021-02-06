export function ingreso_cliente(){
    return {
        type :'1'
    }
}

export const Usuario= (correo)=>{
    return{
        type:"User",
        payload:correo
    }
}

export const Producto= (Id)=>{
    return{
        type:"Producto",
        payload:Id
    }
}

export function cancel_producto (){
    return{
        type:'-Producto'
    }
}


export function Cierre_sesion(){
    return {
        type :'0'
    }
}

export function ingreso_vendedor(){
    return {
        type:'2'
    }
}