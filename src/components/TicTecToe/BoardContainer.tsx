import { useState } from 'react';
import BoardSquare from '../BoradInputComp/BoardSquare';
import Board from './Board';
import toast from 'react-hot-toast';

function BoardContainer() {
    const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState<boolean>(true);

    function calculateWinner(squares: Array<string | null>): string | null {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]

        for (const [a, b, c] of lines) {
            if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    const winner = calculateWinner(squares)

    const isDraw = squares.every(square => square !== null) && !winner;


    // let status = winner
    //     ? `Winner: ${winner}`
    //     : isDraw
    //         ? "It's a draw!"
    //         : `Next player: ${xIsNext ? 'X' : 'O'}`;
    let status = "" 
    if(winner) {
        status = `Winner: ${winner} Please restart the game..`
        toast(status , {
            icon: '👏',
        })
    }else {
        if(isDraw) {
            status = "It's a draw! please restart the game"
            toast(status , {
                icon: '😒',
            })
        }else {
            status = `Next player: ${xIsNext ? 'X' : 'O'}`
        }
    }



    function handleClick(index: number) {
        if (calculateWinner(squares) || squares[index]) return;

        const newSquares = squares.slice()
        newSquares[index] = xIsNext ? "X" : "O";
        setSquares(newSquares);
        setXIsNext(!xIsNext)

    }

    function renderSquare(i: number) {
        return (
            <BoardSquare
                value={squares[i]}
                onClick={() => handleClick(i)}
            />
        );
    };

    return (
        <Board
            status={status}
            renderSquare={renderSquare}
            setSquares={setSquares}
            setXIsNext={setXIsNext}
        />
    )
}

export default BoardContainer