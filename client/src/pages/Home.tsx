import ChessGame from '../components/ChessGame';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Pokémon Chess
        </h1>
        <ChessGame />
      </div>
    </div>
  );
}
