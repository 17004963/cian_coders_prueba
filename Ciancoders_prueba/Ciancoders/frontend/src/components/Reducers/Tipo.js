const Tipo=(state="N",action)=>{
    switch(action.type){
        case '0':
            return 'N'
        case '1':
            return 'C'
        case '2':
            return 'V'
        default:
            return state
        }
}

export default Tipo; 