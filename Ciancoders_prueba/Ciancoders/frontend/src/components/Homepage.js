import React, { Component } from 'react'
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Inicio_sesion from './Inicio_sesion'
import BookIcon from '@material-ui/icons/Book';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Principal from './Principal'
import Carrito from './Carrito'
import Catalogo from './Catalogo'
import Registro from './Registro'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import EditIcon from '@material-ui/icons/Edit';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import HistoryIcon from '@material-ui/icons/History';
import Agregar from './Agregar'
import Reportes from './Reportes'
import Editar from './Editar'
import Editando from './Editando'
import Comprar from './Comprar'
import Reporte_global from './Reporte_global'
import Reporte_por_prodcuto from './Reporte_por_producto'
import Reporte_promedio from './Reporte_promedio'

import {useSelector,useDispatch} from 'react-redux'
import {ingreso_cliente,Cierre_sesion} from './Actions'
import CloseIcon from '@material-ui/icons/Close';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, BrowserRouter
} from "react-router-dom";



//store

//action

//Reducer

//Dispatch





const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: "rgb(252, 186, 3)",
  },
});

export default function Homepage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const Tipo = useSelector(state=> state.Tipo)  
  const dispatch = useDispatch()

  function imprimir(){
    console.log(Tipo)
  }


  if(Tipo=='N'){
  return (

    <Router>



    <div style={{width:'100%'}}>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Principal" icon={<HomeIcon />} component={Link} to='/' />
      <BottomNavigationAction label="Catalogo" icon={<BookIcon />} component={Link} to='/Catalogo' />
      <BottomNavigationAction label="Iniciar Sesion" icon={<PersonIcon />} component={Link} to='/Iniciar_Sesion'/>
      <BottomNavigationAction label="Registro" icon={<AssignmentIndIcon />} component={Link} to='/Registro'/>
      <BottomNavigationAction label="Carrito" icon={<ShoppingCartIcon />} component={Link} to='/Carrito'/>

    </BottomNavigation>
    </div>


    <Route exact path="/" component={Principal} />
    <Route exact path="/Catalogo" component={Catalogo} />
    <Route exact path="/Registro" component={Registro} />
    <Route exact path="/Carrito" component={Carrito} />
    <Route exact path="/Iniciar_sesion" component={Inicio_sesion} />

    </Router>
    
      
  );
  }


  if(Tipo=='V'){
    return (
  
      
      <Router>
  
  
  
      <div style={{width:'100%'}}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Principal" icon={<HomeIcon />} component={Link} to='/' />
        <BottomNavigationAction label="Catalogo" icon={<BookIcon />} component={Link} to='/Catalogo' />
        <BottomNavigationAction label="Agregar " icon={<AddShoppingCartIcon />} component={Link} to='/Agregar'/>
        <BottomNavigationAction label="Editar " icon={<EditIcon />} component={Link} to='/Editar'/>
        <BottomNavigationAction label="Reportes" icon={<FindInPageIcon />} component={Link} to='/Reportes'/>
        <BottomNavigationAction label="Carrito" icon={<ShoppingCartIcon />} component={Link} to='/Carrito'/>
        <BottomNavigationAction label="Cerrar Sesion" onClick={()=> dispatch(Cierre_sesion())} icon={<CloseIcon />} component={Link} to='/'/>


      </BottomNavigation>
      </div>
  
  
      <Route exact path="/" component={Principal} />
      <Route exact path="/Catalogo" component={Catalogo} />
      <Route exact path="/Registro" component={Registro} />
      <Route exact path="/Carrito" component={Carrito} />
      <Route exact path="/Iniciar_sesion" component={Inicio_sesion} />
      <Route exact path="/Agregar" component={Agregar} />
      <Route exact path="/Editar" component={Editar} />
      <Route exact path="/Reportes" component={Reportes} />
      <Route exact path="/Editando" component={Editando} />
      <Route exact path="/Reporte_Producto" component={Reporte_por_prodcuto} />
      <Route exact path="/Reporte_Global" component={Reporte_global} />
      <Route exact path="/Reporte_Promedio" component={Reporte_promedio} />
      <Route exact path="/Comprar" component={Comprar} />


  
  
      </Router>
      
        
    );
    }

    if(Tipo=='C'){
      return (
    
        
        <Router>
        <div style={{width:'100%'}}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Principal" icon={<HomeIcon />} component={Link} to='/' />
          <BottomNavigationAction label="Catalogo" icon={<BookIcon />} component={Link} to='/Catalogo' />
          <BottomNavigationAction label="Carrito" icon={<ShoppingCartIcon />} component={Link} to='/Carrito'/>
          <BottomNavigationAction label="Compras" icon={<HistoryIcon />} component={Link} to='/Carrito'/>
          <BottomNavigationAction label="Cerrar Sesion" onClick={()=> dispatch(Cierre_sesion())} icon={<CloseIcon />} component={Link} to='/'/>

          
        </BottomNavigation>
        </div>
    
    
        <Route exact path="/" component={Principal} />
        <Route exact path="/Catalogo" component={Catalogo} />
        <Route exact path="/Registro" component={Registro} />
        <Route exact path="/Carrito" component={Carrito} />
        <Route exact path="/Iniciar_sesion" component={Inicio_sesion} />
    
    
    
        </Router>
        
          
      );
      }


}
