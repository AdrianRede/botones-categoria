import { Container } from '@material-ui/core';
import React from 'react';
import ListaCategorias from './ListaCategorias';
import ListaFavoritos from './ListaFavoritos';


const CategoriasFavoritas = () => {
    return ( 
        <Container>
            <ListaCategorias />
            <ListaFavoritos />
        </Container>
     );
}
 


export default CategoriasFavoritas;