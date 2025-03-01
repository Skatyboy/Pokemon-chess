import { useState, useCallback } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import GameStatus from './GameStatus';
import PokemonPiece from './ui/PokemonPiece';

export default function ChessGame() {
  const [game, setGame] = useState(new Chess());
  const [moveFrom, setMoveFrom] = useState('');
  const [status, setStatus] = useState('');

  const makeMove = useCallback((move: any) => {
    try {
      const result = game.move(move);
      if (result) {
        setGame(new Chess(game.fen()));
        setStatus(getGameStatus(game));
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  }, [game]);

  const getGameStatus = (game: Chess) => {
    if (game.isCheckmate()) return 'Échec et mat !';
    if (game.isDraw()) return 'Match nul !';
    if (game.isCheck()) return 'Échec !';
    return `Au tour des ${game.turn() === 'w' ? 'blancs' : 'noirs'}`;
  };

  const onSquareClick = (square: string) => {
    if (!moveFrom) {
      const piece = game.get(square);
      if (piece && piece.color === game.turn()) {
        setMoveFrom(square);
      }
    } else {
      const move = makeMove({
        from: moveFrom,
        to: square,
        promotion: 'q'
      });

      if (move) {
        setMoveFrom('');
      } else {
        if (game.get(square)?.color === game.turn()) {
          setMoveFrom(square);
        } else {
          setMoveFrom('');
        }
      }
    }
  };

  const customPieces = {
    wP: () => <PokemonPiece piece="wP" />,
    wN: () => <PokemonPiece piece="wN" />,
    wB: () => <PokemonPiece piece="wB" />,
    wR: () => <PokemonPiece piece="wR" />,
    wQ: () => <PokemonPiece piece="wQ" />,
    wK: () => <PokemonPiece piece="wK" />,
    bP: () => <PokemonPiece piece="bP" />,
    bN: () => <PokemonPiece piece="bN" />,
    bB: () => <PokemonPiece piece="bB" />,
    bR: () => <PokemonPiece piece="bR" />,
    bQ: () => <PokemonPiece piece="bQ" />,
    bK: () => <PokemonPiece piece="bK" />
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <GameStatus status={status} />
        <div className="aspect-square">
          <Chessboard 
            position={game.fen()}
            onSquareClick={onSquareClick}
            customPieces={customPieces}
            boardWidth={1000}
            customDarkSquareStyle={{ backgroundColor: '#4A5568' }}
            customLightSquareStyle={{ backgroundColor: '#A0AEC0' }}
          />
        </div>
      </div>
    </div>
  );
}
