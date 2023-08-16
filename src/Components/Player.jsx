const Player = ({ player }) => {
    return (
      <div className="player">
        <h2>{player.name}</h2>
        <p>Hit Points: {player.hitpoints}</p>
        <button>Attack</button>
      </div>
    )
  }

  export default Player