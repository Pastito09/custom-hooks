// un hook es una funcion simple que tiene un return que devuelve lo que necesitamos que regrese este hook (puede ser un objeto, un arreglo, un boolean, etc)

import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState( initialValue )

    const increment = ( value = 1) => {
        setCounter( (current) => current + value ); //toma el valor acutal del counter
    }
    const decrement = ( value = 1) => {
        if (counter === 0) return;
        setCounter( (current) => current - value );        
    };
    const reset = () => {
        setCounter( initialValue );
    };

//si el custom hook retorna un objeto, la desestructuracion del hook en otro elemento es de objeto. Si retorna un arreglo, la desestructuracion es de arreglo

    return {
        counter,
        increment,
        decrement,
        reset,
    }


}