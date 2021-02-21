import React from 'react';
import {Container, Grid} from '@material-ui/core';
import CardCategoria2 from '../cards/CardCategoria2'
import   images from "../../assets/images";

/*  <div className='container text-center'>
           

        </div>
     ); */

     /* div className="row d-flex justify-content-center">
                
            </div>
 */

const ListaCategorias = () => {

    const categorias=[
        {id:1, nombre:'Ciencias', urlImage:images.ciencia},
        {id:2, nombre:'Deportes', urlImage:images.deportes},
        {id:3, nombre:'Gamers', urlImage:images.games},
        {id:4, nombre:'Moda', urlImage:images.moda},
        {id:5, nombre:'Niños', urlImage:images.ninio},
        {id:6, nombre:'Peliculas', urlImage:images.starWars},
        {id:7, nombre:'DC Comic\'s', urlImage:images.superhero},
        {id:8, nombre:'Viajes', urlImage:images.viajes},
        {id:9, nombre:'Lectura', urlImage:images.lectura},
        {id:10, nombre:'NI IDEA', urlImage:'https://images.pexels.com/photos/4886807/pexels-photo-4886807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
    ];


    
    return (
        <Container>
            <h1>Desde ListaCategorias</h1>

            <Grid 
                container 
                justify='center'
                alignItems='center'
                spacing={2}
            >
                {categorias.map((categoria) => (
                        
                        <Grid item xs={6} sm={3}>
                            <CardCategoria2
                                key={categoria.id}
                                nombre={categoria.nombre}
                                urlImage={categoria.urlImage}
                            />

                        </Grid>

                ))}

            </Grid>

        </Container>
    );
}
 
export default ListaCategorias;