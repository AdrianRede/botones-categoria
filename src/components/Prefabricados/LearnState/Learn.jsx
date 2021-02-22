import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";

import ListLearn from "./ListLearn";
import Contador from '../LeartContext/Contador'

const ListaNames = [
    { nombreN: "Juan" },
    { nombreN: "Pedro" },
    { nombreN: "Julieta" },
];
const Learn = () => {
    // Declaración de una variable de estado que llamaremos "count"
    const [count, setCount] = useState(0);

    const [name, setName] = useState({
        nombre: "Juan",
        edad: 45,
    });

    const [selected, setSelected] = useState(false);

    //console.log(name);

    const newName = {
        nombre: "Pedro",
        edad: 50,
    };

    const lanzarContador = () => {
        //nombre=nombre2
        setCount(count + 1);
        //setHola(hola-1)
    };

    const lanzarFuncion = (nombre) => {
        //nombre=nombre2
        setName(nombre);
        //setHola(hola-1)
    };
    //const {nombreN}=ListaNames;
    //console.log(selected);
    const Like = (nombreR) => {
        //e.preventDefault()
        const {nombre} =nombreR
        const {nombreN}=nombre;
        if (!selected) {
            setSelected(true);
        } else {
            setSelected(false);
        }

        console.log(nombreN);
    };

    // De forma similar a componentDidMount y componentDidUpdate
    /*useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        document.title = `You clicked ${count} times`;
    });*/

    /**<i class="fas fa-heart"></i> <i class="far fa-heart"></i> */

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => lanzarContador()}>Click me</button>
            <p>You clicked {name.nombre} times</p>
            <button onClick={() => lanzarFuncion(newName)}>Click me</button>
            <div className="row">
                <div className="col">
                    {ListaNames.map((nombre) => (
                        <IconButton
                            color="secondary"
                            value={nombre}
                            onClick={()=>Like({nombre})}
                        >   <p>{nombre.nombreN}</p>
                            {selected ? (
                                <i class="fas fa-heart red"></i>
                            ) : (
                                <i class="far fa-heart black-heart"></i>
                            )}
                        </IconButton>
                    ))}
                </div>
                
                <ListLearn />
                <Contador />
            </div>
        </div>
    );
};

export default Learn;
