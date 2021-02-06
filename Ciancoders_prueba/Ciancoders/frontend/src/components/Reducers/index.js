import Islogged from './Islogged'
import Tipo from './Tipo'
import Correo from './Correo'
import Producto_editar from './Producto_editar'
import {combineReducers} from 'redux'

const all_reducers=combineReducers({
    Islogged,
    Tipo,
    Correo,
    Producto_editar
})

export default all_reducers