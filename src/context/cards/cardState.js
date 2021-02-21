import React, {useReducer} from 'react';
import CardReducer from './cardReducer';
import CardContext from './cardContext';

import {
    OBTENER_CATEGORIAS,
    CATEGORIA_ESTADO
}from '../../types/index';

import   images from "../../assets/images";


const CardState  = (props) => {
    
    const initialState = {
        //Este arreglo categorias simula a obtener las categorias usando el back
//Los valores descritos se pasaran al componente CardCategoria.
    categorias:[
        {id:1, nombre:'Ciencia', urlImage:images.ciencia},
        {id:2, nombre:'Deportes', urlImage:images.deportes},
        {id:3, nombre:'Gamers', urlImage:images.games},
        {id:4, nombre:'Moda', urlImage:images.moda},
        {id:5, nombre:'Niños', urlImage:images.ninio},
        {id:6, nombre:'Peliculas', urlImage:images.starWars},
        {id:7, nombre:'DC Comic\'s', urlImage:images.superhero},
        {id:8, nombre:'Viajes', urlImage:images.viajes},
        {id:9, nombre:'Lectura', urlImage:images.lectura}
    ],
        selected:false
    }

    const [state, dispatch] = useReducer(CardReducer, initialState);

    //Desplegar las TODAS LAS CATEGORIAS
    const obtenerCategorias = (usuario) =>{
        dispatch({
            type:OBTENER_CATEGORIAS
        })
    }

    //Funciones para modificar los cards Categorias

    const actualizarCard =(categoria) => {
        

        dispatch({
            type:CATEGORIA_ESTADO,
            payload:categoria
        })
    }

    
    return ( 
        <CardContext.Provider
            value={{
                categorias:state.categorias,
                selected:state.selected,
                obtenerCategorias,
                actualizarCard
            }}
        >
            {props.children}
        </CardContext.Provider>
     );
}
 
export default CardState;