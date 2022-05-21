import React, { useRef, useState } from "react";
import { ReactComponent as One } from "assets/dice/dice-six-faces-one.svg";
import { ReactComponent as Two } from "assets/dice/dice-six-faces-two.svg";
import { ReactComponent as Three } from "assets/dice/dice-six-faces-three.svg";
import { ReactComponent as Four } from "assets/dice/dice-six-faces-four.svg";
import { ReactComponent as Five } from "assets/dice/dice-six-faces-five.svg";
import { ReactComponent as Six } from "assets/dice/dice-six-faces-six.svg";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { OneToSix, selectDice, setDice } from "../gameSlice";

const svgSize: React.CSSProperties = { width: 48, height: 48 };
const dotmap = [
  <></>,
  <One style={svgSize} />,
  <Two style={svgSize} />,
  <Three style={svgSize} />,
  <Four style={svgSize} />,
  <Five style={svgSize} />,
  <Six style={svgSize} />,
];

interface DiceProps {
  rolled?: (num: number) => void;
}

const Dice = ({ rolled }: DiceProps) => {
  const dice = useAppSelector(selectDice);
  const dispatch = useAppDispatch();

  const [rolling, setRolling] = useState<boolean>(false);

  const diceButton = useRef<HTMLButtonElement>(null);

  async function rollDice() {
    setRolling(true);
    await new Promise((res) => setTimeout(res, 2000));

    const newDice = (Math.floor(Math.random() * 6) + 1) as OneToSix;
    dispatch(setDice(newDice));
    setRolling(false);
    rolled?.(newDice);
  }

  const diceClassNames = classNames({
    btn: true,
    rolling: rolling,
    rotate: rolling,
  });

  return (
    <button
      ref={diceButton}
      onClick={rollDice}
      disabled={rolling}
      className={diceClassNames}
    >
      {dotmap[dice]}
    </button>
  );
};

export default Dice;
