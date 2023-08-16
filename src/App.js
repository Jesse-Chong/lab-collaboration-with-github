import './App.css';
import Player from './Components/Player';

function App() {
  const player1 = {
    name: "Me",
    color: "orchid",
    hitpoints: 100,
    turn: true,
  };
  
  const player2 = {
    name: "You",
    color: "cornflowerblue",
    hitpoints: 100,
    turn: false,
  };
  
  const dice = 5;
  
  return (
    <div className="App">
      <h1>Color Battle</h1>
      <Player player={player1} />
      <Player player={player2} />
    </div>
  );
}

export default App;
