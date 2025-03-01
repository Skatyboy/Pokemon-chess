interface GameStatusProps {
  status: string;
}

export default function GameStatus({ status }: GameStatusProps) {
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4 rounded">
      <p className="font-bold text-lg">{status}</p>
    </div>
  );
}
