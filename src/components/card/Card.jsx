import Icon from "../icon/Icon";

const Card = ({ player, onPlay, index }) => {
  let icon = <Icon name={"pen"} />;
  if (player === "O") {
    icon = <Icon name={"circle"} />;
  } else if (player === "X") {
    icon = <Icon name={"cross"} />;
  }
  return (
    <div className="card" onClick={() => onPlay(index)}>
      <span>{icon}</span>
    </div>
  );
};
export default Card;
