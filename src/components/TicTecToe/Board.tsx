

interface BoardProps {
    status: string;
    renderSquare: (index: number) => JSX.Element
    setSquares: (value : React.SetStateAction<(string | null)[]>) => void
    setXIsNext: (value: React.SetStateAction<boolean>) => void
}

function Board(props: BoardProps) {
    const {
        status ,
        renderSquare,
        setSquares,
        setXIsNext
    } = props;
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-screen">
            <h1 className="text-center text-5xl md:text-8xl font-extrabold text-white py-8 ">
                Tic-Tac-Toe
            </h1>
        <div className="flex flex-col items-center justify-center pt-5">
            <div className="text-2xl mb-4">{status}</div>
            <div className="grid grid-cols-3 gap-4">
                {
                    Array.from({ length: 9 }).map((_, i)=> 
                        renderSquare(i)
                    )
                }
            </div>
            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                onClick={() => {
                    setSquares(Array(9).fill(null));
                    setXIsNext((prev) => !prev);
                }}
            >
                Restart
            </button>
        </div>
        </div>
    )
}

export default Board