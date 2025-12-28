import { useEffect, useState } from "react";
import Card from "../card/Card.jsx";
import Icon from "../icon/Icon.jsx";
import { checkWinner, isPlayLeft } from "../../utils/checkWinner.js";

const Grid = ({ numberOfCards }) => {
  // X turn -> False O turn -> true
  const [turn, setTurn] = useState(false);
  const [board, setBoard] = useState(
    Array.from({ length: numberOfCards }).fill("")
  );

  const handleCardClick = (index) => {
    if (board[index] === "") {
      if (turn) {
        board[index] = "O";
      } else {
        board[index] = "X";
      }
      setTurn(!turn);
      setBoard([...board]);
    }
    console.log(`board[${index}] : `, board[index]);
  };
  useEffect(() => {
    const winner = checkWinner(board, numberOfCards);
    if (winner) {
      alert(`Winner: ${winner}!`);
      const emptyAr = Array.from({ length: numberOfCards }).fill("");
      setBoard(emptyAr);
      setTurn(false);
    } else if (!isPlayLeft(board)) {
      alert("It's a draw!");
      const emptyAr = Array.from({ length: numberOfCards }).fill("");
      setBoard(emptyAr);
      setTurn(false);
    }
  }, [board, numberOfCards]);
  return (
    <>
      <h1 style={{ color: "white", textAlign: "center", marginTop: "10px" }}>
        Current Turn : {turn ? <Icon name="circle" /> : <Icon name="cross" />}
      </h1>
      <div className="grid" onClick={() => {}}>
        {board.map((val, idx) => (
          <Card onPlay={handleCardClick} player={val} key={idx} index={idx} />
        ))}
      </div>
    </>
  );
};
export default Grid;
