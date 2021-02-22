import {
    CONTADOR,
    CONTADOR_MENOS   
}from '../../types/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {

    switch (action.type) {
        
        case CONTADOR:
            return {
                ...state,
                contador:state.contador+1
            }

        case CONTADOR_MENOS:
                return {
                    ...state,
                    contador:state.contador*2
                }
        
    
        default:
            return state;
    }

}