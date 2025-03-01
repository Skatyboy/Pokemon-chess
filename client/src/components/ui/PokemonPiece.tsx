interface PokemonPieceProps {
  piece: string;
}

const pokemonMap = {
  wP: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", // Pikachu
  wN: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png", // Arcanine
  wB: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png", // Alakazam
  wR: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png", // Snorlax
  wQ: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png", // Mew
  wK: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png", // Mewtwo
  bP: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", // Charmander
  bN: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", // Charizard
  bB: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png", // Dragonite
  bR: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png", // Gyarados
  bQ: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png", // Articuno
  bK: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png", // Moltres
};

export default function PokemonPiece({ piece }: PokemonPieceProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img 
        src={pokemonMap[piece as keyof typeof pokemonMap]} 
        alt={piece}
        className="w-4/5 h-4/5 object-contain"
        draggable={false}
      />
    </div>
  );
}
