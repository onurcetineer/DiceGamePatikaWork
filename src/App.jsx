import React, { useState, useEffect } from 'react';
import dice1 from './dice1.png';
import dice2 from './dice2.png';
import dice3 from './dice3.png';
import dice4 from './dice4.png';
import dice5 from './dice5.png';
import dice6 from './dice6.png';

const diceFaces = [dice1,dice2, dice3, dice4, dice5, dice6];

function App() {
  const [player1Name, setPlayer1Name] = useState("Player 1");
  const [player2Name] = useState("Player 2");
  const [player1Dice, setPlayer1Dice] = useState(null);
  const [player2Dice, setPlayer2Dice] = useState(null);
  const [winner, setWinner] = useState("");
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);
    setWinner(""); // Yeni zar atışı başladığında önceki sonucu temizle
    setPlayer1Dice(null);
    setPlayer2Dice(null);

    setTimeout(() => {
      const player1Roll = Math.floor(Math.random() * diceFaces.length);
      const player2Roll = Math.floor(Math.random() * diceFaces.length);

      setPlayer1Dice(diceFaces[player1Roll]);
      setPlayer2Dice(diceFaces[player2Roll]);

      if (player1Roll > player2Roll) {
        setWinner(`${player1Name} wins!`);
      } else if (player1Roll < player2Roll) {
        setWinner(`${player2Name} wins!`);
      } else {
        setWinner("It's a tie!");
      }

      setRolling(false);
    }, 3000); // 3 saniyelik animasyon süresi
  };

  const handleNameChange = (e) => {
    setPlayer1Name(e.target.value);
  };

  return (
    <div className="App">
      <h1>Dice Game</h1>
      <div>
        <label>
          Enter Player 1 name:
          <input type="text" value={player1Name} onChange={handleNameChange} />
        </label>
        
      </div>
      <div className="dice-container">
        <div>
          <h2>{player1Name}</h2>
          <div className="dice">
            {rolling ? <img src={dice1}/>  : player1Dice ? <img src={player1Dice} alt="Player 1 dice" /> : <img src={dice1}/>}
          </div>
        </div>
        <div>
          <h2>{player2Name}</h2>
          <div className="dice">
            {rolling ? <img src={dice2}/> : player2Dice ? <img src={player2Dice} alt="Player 2 dice" /> : <img src={dice2}/>}
          </div>
        </div>
      </div>
      <div>
        <button onClick={rollDice} disabled={rolling}>
          {rolling ? "Rolling..." : "Roll Dice"}
        </button>
      </div>
      <h2>{winner}</h2>
    </div>
  );
}

export default App;
