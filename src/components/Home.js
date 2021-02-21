import React from 'react';
import { Link } from 'react-router-dom';
import Card4 from './cards/Card4'

const Home = () => {
    return ( 
        <div className='container text-center'>
            <Link to='/categories'>Categorias</Link>
            <Link to='/prefabricados/botonUI'>Boton prefabricado</Link>
            <Link to='/prefabricados/learnState'>Learn State</Link>
            <Card4 />
        </div>
     );
}
 
export default Home;