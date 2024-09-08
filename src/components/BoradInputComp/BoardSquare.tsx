

interface BoardSquareProps {
    onClick: () => void;
    value: string | null;
}

function BoardSquare(props: BoardSquareProps) {
    const {
        onClick,
        value
    } = props
    return (
        <button

            onClick={onClick}
            className="w-24 h-24 bg-gray-100 border-2 border-gray-400 text-3xl font-bold flex items-center justify-center over:bg-gray-300 focus:outline-none"
        >{value}</button>
    )
}

export default BoardSquare