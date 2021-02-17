import React from 'react';

import CardCategoria from '../Cards/CardCategoria'
import   images from "../../assets/images";
//Este arreglo categorias simula a obtener las categorias usando el back
//Los valores descritos se pasaran al componente CardCategoria.
const categorias = [
                    {id:1, nombre:'Ciencia', urlImage:images.ciencia},
                    {id:2, nombre:'Deportes', urlImage:images.deportes},
                    {id:3, nombre:'Gamers', urlImage:images.games},
                    {id:4, nombre:'Moda', urlImage:images.moda},
                    {id:5, nombre:'Niños', urlImage:images.ninio},
                    {id:6, nombre:'Peliculas', urlImage:images.starWars},
                    {id:7, nombre:'DC Comic\'s', urlImage:images.superhero},
                    {id:8, nombre:'Viajes', urlImage:images.viajes},
                    {id:9, nombre:'Lectura', urlImage:images.lectura}
                
                ]

const Category = () => {

  

   
    
    return ( 
        <div className='container text-center'>
            <h1>Desde Category</h1>

            <div className='row'>

                { categorias.map((categoria) => (
                        
                        <div className='col-lg-3 col-md-6 mb-2'>
                            <CardCategoria 
                                key={categoria.id} 
                                nombre={categoria.nombre}
                                urlImage={categoria.urlImage}
                                onClick={onclick}
                            />
                        </div>
                    ))
                }
            </div>

        </div>
     );
}
 
export default Category;