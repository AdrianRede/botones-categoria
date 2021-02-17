import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div className='container text-center'>
            <Link to='/category'>Categorias</Link>
            <Link to='/prefabricados/botonUI'>Boton prefabricado</Link>
        </div>
     );
}
 
export default Home;