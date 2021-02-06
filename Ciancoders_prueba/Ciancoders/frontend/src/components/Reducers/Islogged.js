
const Islogged=(state=false,action)=>{
    switch(action.type){
        case 'Logged':
            return !state
        default:
            return state
        }
}

export default Islogged; 