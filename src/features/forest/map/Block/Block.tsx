import { useAppDispatch, useAppSelector } from "app/hooks";
import classNames from "classnames";
import {
  Cell,
  highlightPair,
  removeHighlights,
  selectCell,
} from "features/forest/mapSlice";
import { selectPlayersOnCell } from "features/forest/playersSlice";

type CellType = "" | "snake" | "ladder";

const Block = (cell: Cell) => {
  const { index, to, highlighted } = cell;
  const hasGemini = Boolean(to);

  let geminiCell: Cell | undefined = useAppSelector((state) =>
    selectCell(state, to)
  );

  const residentPlayers = useAppSelector((state) =>
    selectPlayersOnCell(state, index)
  );

  const dispatch = useAppDispatch();

  // determine cell type
  let cellType: CellType = "";
  if (to) cellType = index >= to ? "snake" : "ladder";
  const blockClasses = classNames({
    block: true,
    snake: cellType === "snake",
    ladder: cellType === "ladder",
    highlighted,
  });

  return (
    <div
      className={blockClasses}
      onMouseEnter={
        hasGemini
          ? () => {
              dispatch(highlightPair([cell, geminiCell!]));
            }
          : undefined
      }
      onMouseLeave={
        highlighted ? () => dispatch(removeHighlights()) : undefined
      }
    >
      <span className="number">{index}</span>

      {to && (
        <span className="to">
          {cellType === "ladder" ? "↑" : "↓"}
          {to}
        </span>
      )}

      {residentPlayers.length > 0 && (
        <div className="players">
          {residentPlayers.map((player) => (
            <div key={player.id} className="player"></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Block;
