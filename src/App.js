import './App.css';
import Header from './components/Header';
import {useEffect, useState} from 'react';
import Square from './components/Square';

const borderStyle = {
    border: '4px solid blue',
    width: '500px',
    height: '500px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto'
}

function App() {
    const siteName = 'Tic-Tac-Toe-Game';

    const [board, setBoard] = useState(Array(9).fill(null));
    const [gamerX, setGamerX] = useState(true);
    const [ winner, setWinner] = useState(undefined);

    const handleMove = (ind, element) => {
        if (element === null) {
            const gamer = gamerX ? 'X' : 'O';
            const newBoard = board.map((el, i) => i === ind ? gamer : el)
            setBoard(newBoard)
            setGamerX(!gamerX)
        }
    }

    const winnerCalculate = () => {
        const winningCombination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
        ]
        for (let i = 0; i < winningCombination.length; i++){
            const [a, b, c] = winningCombination[i]
            if (board[a] && board[a] === board[b] && board[b] === board[c]){
                setWinner(`${board[a]} won!`)
            }
        }
    }

    useEffect(() => {
        winnerCalculate()
    }, [board])

    return (
        <div className="App">
            <Header siteName={siteName}/>
            <div style={borderStyle}>
            {board.map((el, i) =>
                <Square
                    key={i}
                    el={el}
                    index={i}
                    handleMove={ handleMove }
                />
            )}
            </div>
           <h2> {winner} </h2>
        </div>
    );
}

export default App;
