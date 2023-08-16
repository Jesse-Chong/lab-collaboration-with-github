import './App.css';
import { useState } from 'react';
import Player from './Components/Player';

function App() {
  const initialPlayers= [
{
    name: "Me",
    color: "orchid",
    hitpoints: 100,
    turn: true,
  },
  
{
    name: "You",
    color: "cornflowerblue",
    hitpoints: 100,
    turn: false,
  }
]

const [players, setPlayers] = useState(initialPlayers)

const getRandomAttackValue = () => {
  return Math.floor(Math.random() * 20) + 1;
}

const handleAttack = (attackerIndex) => {
  const updatedPlayers = [...players];
  const defenderIndex = attackerIndex === 0 ? 1 : 0;
  const attackValue = getRandomAttackValue();

updatedPlayers[defenderIndex].hitpoints -= attackValue;

updatedPlayers[attackerIndex].turn = false;
updatedPlayers[defenderIndex].turn = true;

setPlayers(updatedPlayers)
}

  const dice = 5;
  
  return (
    <div className="App">
      <h1>Color Battle</h1>
      {players.map((player, index) => (
      <Player key={index} player={player} onAttack={() => handleAttack(index)} />
      ))}
    </div>
  );
}

export default App;
