import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

//import images from '../../assets/images';




const CardCategory = (categoria) => {
    const {nombre, urlImage}= categoria;
   
    const selected= true;
    //Al dar click extraido el nombre de la categoria para despues pasarlo al state
    const onclick = (e) => {
        e.preventDefault();
        console.log(e.target);
        console.log(e.target.value)
        //console.log(e)
    };


    //Linea para cambiar el estado del corazon
    //{ selected ?<i class="fas fa-heart"></i> :  <i class="far fa-heart"> </i> }

    // <img class="card-img-top" src={images.img1} alt="Deportes" />

    /*
        <div className="card-body">
                <img class="card-img-top" src={urlImage} alt="Deportes" />
                <h4 className="card-title">{nombre}</h4>
               {/*  <p className="card-text">
                    Alguna probable Descripcion
                </p> */
/* 
                <IconButton
                    color='primary'
                    onClick={onclick}
                    value={nombre}
                    children
                >
                   { selected ?<i class="fas fa-heart red" value={nombre}></i> :  <i class="far fa-heart "> </i> }
                </IconButton>
                
            </div> */

    return ( 
        <div className="card border">

            <img class="card-img-top" src={urlImage} alt="Deportes" />
            <div class="card-img-overlay">
                <p class="card-text bg-primary text-white font-weight-bold "> {nombre} </p>
            </div>
           
            
        </div>
     );
}
 
export default CardCategory;