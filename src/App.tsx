import { useState } from 'react'
import { Chessboard } from 'react-chessboard'
import { Chess } from 'chess.js'

export default function App() {
  const [game, setGame] = useState(new Chess())

  function makeAMove(move: any) {
    const gameCopy = new Chess(game.fen())
    
    try {
      const result = gameCopy.move(move)
      if (result) {
        setGame(gameCopy)
        return true
      }
    } catch (error) {
      return false
    }
    return false
  }

  function onDrop(sourceSquare: string, targetSquare: string) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q',
    })
    return move
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 p-4">
      <h1 className="text-3xl font-bold text-white mb-8">Pokémon Chess</h1>
      <div className="w-full max-w-[600px] aspect-square">
        <Chessboard 
          position={game.fen()} 
          onPieceDrop={onDrop}
          customBoardStyle={{
            borderRadius: '4px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'
          }}
        />
      </div>
    </div>
  )
}
