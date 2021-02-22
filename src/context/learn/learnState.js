import React, {useReducer} from 'react';
import LearnContext from './learnContext';
import LearnReducer from "./learnReducer";

import {
    CONTADOR,
    CONTADOR_MENOS
} from '../../types/index'

const LearnState = (props) => {
    
    const initialState = {
        contador:0
    }

    const [state, dispatch] = useReducer(LearnReducer, initialState)

    const Aumentar = () => {
        console.log('Se ejecuto aumentar')
        dispatch({
            type:CONTADOR,
        })
    }

    const Minus = () => {
        console.log('Se ejecuto aumentar')
        dispatch({
            type:CONTADOR_MENOS,
        })
    }

    return ( 
        <LearnContext.Provider
            value={{
                contador:state.contador,
                Aumentar,
                Minus
            }}
        >
            {props.children}
        </LearnContext.Provider>
     );
}
 
export default LearnState;