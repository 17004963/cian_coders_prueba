const Correo=(state="",action)=>{
    switch(action.type){
        case 'User':
            return action.payload
        default:
            return state
        }    
}

export default Correo; 