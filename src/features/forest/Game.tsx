import Dice from "./dice/dice";
import Map from "./map/Map";
import Players from "./players/Players";

const Game = () => {
  return (
    <div>
      <Map />
      <div>
        <Dice />
        <Players />
      </div>
    </div>
  );
};

export default Game;
