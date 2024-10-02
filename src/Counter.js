import React, { useState } from "react";
import styles from "./counter.modules.css";
 
function Counter() {
  const [count, setCount] = useState(0);
 
  return (
    <div className={styles.counter}>
      <h1>Counter: {count}</h1>
      <button className={styles.button} onClick={() => setCount(count + 1)}>Aumentar</button>
        
    </div>
  );
}
 
export default Counter;