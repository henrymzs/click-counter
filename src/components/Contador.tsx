import React, { useState } from 'react';

function Contador() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
        if (count <= 0) {
            setCount(0);
        }
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <div>
            <h1>Contador {count}</h1>
            <button onClick={incrementCount}>Incrementar</button>
            <button onClick={decrementCount}>Decrementar</button>
            <button onClick={resetCount}>Resetar</button>
        </div>
    );
};

export default Contador;