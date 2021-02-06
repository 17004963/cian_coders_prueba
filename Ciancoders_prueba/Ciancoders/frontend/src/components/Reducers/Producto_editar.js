const Producto_editar=(state="",action)=>{
    switch(action.type){
        case 'Producto':
            return action.payload
        case '-Producto':
            return ""
        default:
            return state
        }    
}

export default Producto_editar; 