import React, {useContext} from 'react';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import learnContext from '../../../context/learn/learnContext';


const Contador = () => {

    //IMPORTANTO EL CONTEXT QUE CONTIENE LOS STATES
    const learnscontext = useContext(learnContext);
    const {contador, Aumentar, Minus} = learnscontext;


    const clickPlus= () => (
        Aumentar()

    )


    const clickMinus= () => (
        Minus()

    )

    return ( 
        <Container>
            <h1>Insertando Contador</h1>
            <p>{contador}</p>
            <Button onClick={()=> clickPlus()}>Aumentar</Button>
            <Button onClick={()=> clickMinus()}>Disminuir</Button>
        </Container>
     );
}
 
export default Contador;