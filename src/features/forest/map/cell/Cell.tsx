const Cell = () => {
  return (
    <div className={true ? "snake" : false ? "ladder" : ""}>
      <span className="number"></span>
      <span className="to"></span>
      <div className="players">
        <div className="player"></div>
      </div>
    </div>
  );
};

export default Cell;
