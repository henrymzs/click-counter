import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

function Counter() {
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

        <Card>
            <CardHeader className="text-center">
                <CardTitle>Contador de Cliques</CardTitle>
                <CardDescription>Clique no botão para incrementar o contador</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-6 p-8">
                <div className="flex flex-col items-center gap-2 py-6 px-8 rounded-2xl bg-sky-50">
                    <span className="text-lg font-medium uppercase">Contador:</span>
                    <span className="text-7xl font-bold">{count}</span>
                </div>
            </CardContent>

            <div className="flex gap-4 px-8">
                <Button
                    onClick={incrementCount}
                    size="lg"
                    variant="outline"
                >
                    Incrementar
                </Button>
                <Button
                    onClick={decrementCount}
                    size="lg"
                    variant="destructive"
                >
                    Decrementar
                </Button>
                <Button
                    onClick={resetCount}
                    size="lg"
                    variant="default"
                >
                    Resetar
                </Button>
            </div>

        </Card>


    );
};

export default Counter;