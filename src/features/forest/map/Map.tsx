import { useAppSelector } from "app/hooks";
import { selectMap } from "../mapSlice";
import Block from "./Block/Block";

const Map = () => {
  const map = useAppSelector(selectMap);

  return (
    <>
      <table>
        <tbody>
          {map.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>
                  <Block index={cell.index} to={cell.to}/>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Map;
