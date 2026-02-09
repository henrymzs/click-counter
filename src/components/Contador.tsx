import { useState } from 'react';

function Contador() {
    const [count, setCount] = useState<number>(0);

    const incrementCount = () => {
        setCount(prev => prev + 1);
    };

    const decrementCount = () => {
        setCount(prev => Math.max(prev - 1, 0)); 
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Contador: {count}</h1>
            <div className="flex gap-4">
                <button onClick={incrementCount} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Incrementar
                </button>
                <button onClick={decrementCount} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Decrementar
                </button>
                <button onClick={resetCount} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Resetar
                </button>
            </div>
        </div>
    );
};

export default Contador;