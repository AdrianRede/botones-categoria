import {
    OBTENER_CATEGORIAS,
    CATEGORIA_ESTADO    
}from '../../types/index';

export default (state, action) => {

    switch (action.type) {
        
        case OBTENER_CATEGORIAS:
            return {
                ...state
            }

        case CATEGORIA_ESTADO:
            return {
                ...state,

            }
    
        default:
            return state;
    }

}