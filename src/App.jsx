import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import MainMenu from './components/MainMenu';
import PlayerSelection from './components/PlayerSelection';
import PlayerNameInput from './components/PlayerNameInput';
import RoleDistribution from './components/RoleDistribution';
import GamePhase from './components/GamePhase';
import VotingPhase from './components/VotingPhase';
import ResultPhase from './components/ResultPhase';
import HowToPlay from './components/HowToPlay';
import locationsData from './data/locations.json';

// JSON'dan mekanları yükle
const LOCATIONS = locationsData.locations;

function App() {
  const [gameState, setGameState] = useState('menu'); // menu, playerSelect, nameInput, roleDistribution, game, voting, result, howToPlay
  const [playerCount, setPlayerCount] = useState(0);
  const [playerNames, setPlayerNames] = useState([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [spyIndex, setSpyIndex] = useState(-1);
  const [currentLocation, setCurrentLocation] = useState('');
  const [playersReady, setPlayersReady] = useState([]);
  const [votes, setVotes] = useState({});
  const [roundNumber, setRoundNumber] = useState(1);
  const [usedLocations, setUsedLocations] = useState([]);

  // Rastgele kullanılmamış mekan seç
  const getRandomUnusedLocation = () => {
    const availableLocations = LOCATIONS.filter(loc => !usedLocations.includes(loc));
    
    // Eğer tüm mekanlar kullanıldıysa, listeyi sıfırla
    if (availableLocations.length === 0) {
      setUsedLocations([]);
      return LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
    }
    
    const randomLocation = availableLocations[Math.floor(Math.random() * availableLocations.length)];
    setUsedLocations([...usedLocations, randomLocation]);
    return randomLocation;
  };

  const selectPlayerCount = (numPlayers) => {
    setPlayerCount(numPlayers);
    setGameState('nameInput');
  };

  const startGameWithNames = (names) => {
    setPlayerNames(names);
    
    // Rastgele casus seç
    const randomSpy = Math.floor(Math.random() * names.length);
    setSpyIndex(randomSpy);
    
    // Rastgele kullanılmamış mekan seç
    const randomLocation = getRandomUnusedLocation();
    setCurrentLocation(randomLocation);
    
    setCurrentPlayerIndex(0);
    setPlayersReady([]);
    setGameState('roleDistribution');
  };

  const nextPlayer = () => {
    if (currentPlayerIndex < playerCount - 1) {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
    } else {
      setGameState('game');
    }
  };

  const markPlayerReady = () => {
    setPlayersReady([...playersReady, currentPlayerIndex]);
  };

  const startVoting = () => {
    setVotes({});
    setGameState('voting');
  };

  const submitVotes = (votedPlayerIndex, spyGuessedLocation = null) => {
    setVotes({ votedPlayer: votedPlayerIndex, spyGuess: spyGuessedLocation });
    setGameState('result');
  };

  const startNewRound = () => {
    setRoundNumber(roundNumber + 1);
    
    // Yeni casus seç
    const randomSpy = Math.floor(Math.random() * playerCount);
    setSpyIndex(randomSpy);
    
    // Yeni kullanılmamış mekan seç
    const randomLocation = getRandomUnusedLocation();
    setCurrentLocation(randomLocation);
    
    setCurrentPlayerIndex(0);
    setPlayersReady([]);
    setVotes({});
    setGameState('roleDistribution');
  };

  const resetGame = () => {
    setGameState('menu');
    setPlayerCount(0);
    setPlayerNames([]);
    setCurrentPlayerIndex(0);
    setSpyIndex(-1);
    setCurrentLocation('');
    setPlayersReady([]);
    setVotes({});
    setRoundNumber(1);
    setUsedLocations([]);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <AnimatePresence mode="wait">
          {gameState === 'menu' && (
            <MainMenu
              key="menu"
              onStart={() => setGameState('playerSelect')}
              onHowToPlay={() => setGameState('howToPlay')}
            />
          )}
          
          {gameState === 'playerSelect' && (
            <PlayerSelection
              key="playerSelect"
              onSelectPlayers={selectPlayerCount}
              onBack={() => setGameState('menu')}
            />
          )}
          
          {gameState === 'nameInput' && (
            <PlayerNameInput
              key="nameInput"
              playerCount={playerCount}
              onContinue={startGameWithNames}
              onBack={() => setGameState('playerSelect')}
            />
          )}
          
          {gameState === 'roleDistribution' && (
            <RoleDistribution
              key="roleDistribution"
              playerCount={playerCount}
              playerNames={playerNames}
              currentPlayerIndex={currentPlayerIndex}
              spyIndex={spyIndex}
              location={currentLocation}
              onNext={nextPlayer}
              onReady={markPlayerReady}
              isReady={playersReady.includes(currentPlayerIndex)}
            />
          )}
          
          {gameState === 'game' && (
            <GamePhase
              key="game"
              onStartVoting={startVoting}
            />
          )}
          
          {gameState === 'voting' && (
            <VotingPhase
              key="voting"
              playerCount={playerCount}
              playerNames={playerNames}
              spyIndex={spyIndex}
              location={currentLocation}
              locations={LOCATIONS}
              onSubmitVotes={submitVotes}
            />
          )}
          
          {gameState === 'result' && (
            <ResultPhase
              key="result"
              playerCount={playerCount}
              playerNames={playerNames}
              spyIndex={spyIndex}
              location={currentLocation}
              votes={votes}
              onNewRound={startNewRound}
              onBackToMenu={resetGame}
              roundNumber={roundNumber}
            />
          )}
          
          {gameState === 'howToPlay' && (
            <HowToPlay
              key="howToPlay"
              onBack={() => setGameState('menu')}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
