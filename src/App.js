import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Componentes
import Home from './components/Home'; 
import Category from './components/Category/Category'
import BotonUI from './components/Prefabricados/BotonImagenUI/BotonUI';

function App() {
  return (

    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/category' component={Category}/>
            <Route exact path='/prefabricados/botonUI' component={BotonUI} />
        </Switch>
    </Router>

  );
}

export default App;
