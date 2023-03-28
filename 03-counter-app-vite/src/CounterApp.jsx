import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState( value );
    
    const handleAdd  =  () => {
        //console.log(e);
        // setCounter ( counter +  1); //forma corta y tradicional
        setCounter((c)=> c+ 1); //otra forma de usarlo.
    } 
    const handleLess = () => setCounter (counter - 1);

    const handleReset = () => setCounter((c)=> value);
    
    return (

        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            {/* <button onClick={ (e) => handleAdd (e, 'hola') }> 
                + 1 
            </button> */}

            <button onClick={ handleAdd }> + 1 </button>
            <button onClick={ handleLess }> - 1 </button>
            <button onClick={ handleReset }> Reset </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}
CounterApp.defaultProps = {
    value: 'no hay un value definido',
}