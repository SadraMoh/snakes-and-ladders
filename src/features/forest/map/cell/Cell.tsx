const Cell = () => {
  return (
    <div className={true ? "snake" : false ? "ladder" : ""}>
      <span className="number"></span>
      <span className="to"></span>
    </div>
  );
};

export default Cell;
