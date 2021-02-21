import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Componentes
import Home from './components/Home'; 
import ListaCategorias from './components/categorias/ListaCategorias';
import BotonUI from './components/Prefabricados/BotonImagenUI/BotonUI';
import  Card4 from './components/cards/Card4'

import Learn from './components/Prefabricados/LearnState/Learn'
import CategoriasFavoritas from './components/categorias/CategoriasFavoritas'

//context
import CardState from './context/cards/cardState';



function App() {
  return (
    
    <CardState>
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/categories' component={ListaCategorias}/>
                <Route exact path='/prefabricados/botonUI' component={BotonUI} />
                <Route exact path='/prefabricados/Card' component = {Card4} />
                <Route exact path='/prefabricados/learnState' component={Learn} />
                <Route exact path= '/pages/categorias' component ={CategoriasFavoritas} />
            </Switch>
        </Router>
    </CardState>

  );
}

export default App;
