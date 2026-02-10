import Contador from '../features/counter/Counter.tsx';

function Main() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-6 ">
            <section className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    Exercício de React
                </h1>
                <p className="text-gray-600 text-lg">
                    Este é um exemplo de contador em React
                </p>
            </section>
            <Contador />
        </main>

    );
};

export default Main;