import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pokemon.chess',
  appName: 'Pokémon Chess',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  android: {
    buildOptions: {
      keystorePath: 'pokemon-chess.keystore',
      keystoreAlias: 'pokemon-chess',
    }
  }
};

export default config;
