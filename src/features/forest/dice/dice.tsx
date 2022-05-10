import React, { useState } from "react";
import { ReactComponent as One } from "assets/dice/dice-six-faces-one.svg";
import { ReactComponent as Two } from "assets/dice/dice-six-faces-two.svg";
import { ReactComponent as Three } from "assets/dice/dice-six-faces-three.svg";
import { ReactComponent as Four } from "assets/dice/dice-six-faces-four.svg";
import { ReactComponent as Five } from "assets/dice/dice-six-faces-five.svg";
import { ReactComponent as Six } from "assets/dice/dice-six-faces-six.svg";


const dotmap = [
  <></>,
  <One />,
  <Two />,
  <Three />,
  <Four />,
  <Five />,
  <Six />,
];

type OneToSix = 1 | 2 | 3 | 4 | 5 | 6;
const Dice = () => {
  const [num, setNum] = useState<OneToSix>(1);

  function rollDice() {
    const newDice = Math.round(Math.random() * 5) + 1 as OneToSix;
    setNum(newDice);
  }

  return (
    <button onClick={rollDice} className="btn">
      {dotmap[num]}
    </button>
  );
};

export default Dice;
