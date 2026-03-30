import Styles from "./NumberGrid.module.css";

const NumberGrid = ({ calledNumbers, prev, current }) => {
  return (
    <>
      <div className={Styles.gridContainer}>
        {Array.from({ length: 9 }).map((a, i) => (
          <div key={i} className={Styles.gridRow}>
            {Array.from({ length: 10 }).map((a, j) => (
              <div
                key={j}
                id={j + 1 + i * 10}
                className={
                  Styles.gridBox +
                  " " +
                  (calledNumbers.has(j + 1 + i * 10) ? Styles.pressed : "") +
                  " " +
                  (prev === j + 1 + i * 10 ? Styles.prev : "") +
                  " " +
                  (current === j + 1 + i * 10 ? Styles.current : "")
                }
              >
                {j + 1 + i * 10}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
export default NumberGrid; 
