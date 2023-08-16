const Player = ({ player, onAttack }) => {
    return (
      <div className="player">
        <h2>{player.name}</h2>
        <p>Hit Points: {player.hitpoints}</p>
        <button onClick={onAttack}>Attack</button>
      </div>
    )
  }

  export default Player