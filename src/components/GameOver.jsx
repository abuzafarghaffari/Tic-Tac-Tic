import React from 'react'

const GameOver = ({winner,handleRestart}) => {
  return (
    <div id="game-over">
        <h2>GameOver</h2>
        {winner && <p>{winner} won!</p>}
        {!winner && <p>It's a draw</p>}
        <p>
            <button onClick={handleRestart}>Restart game</button>
        </p>
    </div>
  )
}

export default GameOver