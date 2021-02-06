import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Agregar from './Agregar'
import Editando from './Editando'
import {Producto,cancel_producto} from './Actions'
import {useDispatch,useSelector} from 'react-redux'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link, BrowserRouter
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  icon: {
      marginRight: theme.spacing(2),
  },
  heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
      marginTop: theme.spacing(4),
  },
  cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
  },
  card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
  },
  cardMedia: {
      paddingTop: '56.25%', // 16:9
  },
  cardContent: {
      flexGrow: 1,
  },
  footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
  },
}));



export default function Editar() {
  const [items, setItems] = React.useState([]);
  const dispatch = useDispatch()
  const Correo = useSelector(state=> state.Correo)  

  React.useEffect(() => {
    console.log(Correo)
    async function getCharacters() {
      const request={
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          Id_producto:Correo,
        })
    }
        const response = await fetch("/api/productos_list",request);
        const body = await response.json();
        var arr = [];
        Object.keys(body).forEach(function(key) {
            arr.push(body[key]);
        })
        setItems(arr.map((item,i)=> ({
            
            Id_producto: item.Id_producto,
            Nombre:item.Nombre,
            Vendedor:item.Vendedor,
            Cantidad:item.Cantidad,
            Precio:item.Precio,
            Descripcion:item.Descripcion
           
        })));
    }
    getCharacters();
}, []);


function handle(e){
  e.preventDefault()

  dispatch(cancel_producto())
  console.log(e.target.Id_producto.value)
  const lista=[
    e.target.Id_producto.value,
    e.target.Nombre.value,
    e.target.Precio.value,
    e.target.Cantidad.value,
    e.target.Descripcion.value
  ]
dispatch(Producto(lista))

window.location.replace("/Editando");
}

const classes = useStyles();


    return (
        <div class="jumbotron jumbotron-fluid" style={{marginTop:'5rem',color:"rgb(63, 81, 181)"}}>
        <div class="container">
        
                    <div>
                                 <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {items.map(item => (
                          <Router>
                            <Grid item key={1} xs={12} sm={6} md={4}>
                                <Card className={classes.card} style={{backgroundColor:'darkgray'}}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.Id_producto}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Producto:
                                            <br/>
                                            {item.Nombre}
                                        </Typography>
                                        <Typography>
                                            Descripcion:
                                            {item.Descripcion}
                                        </Typography>
                                        <Typography>
                                            Precio:
                                            {item.Precio}
                                        </Typography>
                                        <Typography>
                                            Cantidad:
                                            {item.Cantidad}
                                        </Typography>
                                        
                                        
                                    </CardContent>




                                    <form   onSubmit={handle} >
                                        <input type="hidden"  id="Nombre" name="Producto" value={item.Nombre} />
                                        <input type="hidden"  id="Descripcion" name="Descripcion" value={item.Descripcion} />
                                        <input type="hidden"  id="Precio" name="Precio" value={item.Precio} />
                                        <input type="hidden"  id="Cantidad" name="Cantidad" value={item.Cantidad} />
                                        <input type="hidden"  id="Id_producto" name="item.Id_producto" value={item.Id_producto} />
                                        
                                      <div>
                                        <Button
                                            fullWidth
                                            type='submit'
                                            variant="contained"
                                            size="large"
                                            aria-label="large outlined primary button group"
                                            className={classes.submit}
                                            id="boton_registro"
                                          
                                        >
                                        
                                        Editar

                                        </Button>

                                      

                                        </div>

                                



                                    </form>


                                </Card>
                            </Grid>

                          </Router>
                        ))}
                    </Grid>
                </Container>
                              </div>
                            
        </div>
      </div>
    )


}
