import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);
  const handleChange = (event) => {
    const parsed = parseInt(event.target.value);
    if (!isNaN(parsed)) { setCount(parsed) }
  };

  return (
    <div>
        <label htmlFor="count">Valeur de départ du compteur : </label>
      <input
        id="count"
        type="number"
        name="count"
        value={count}
        onChange={handleChange}
      />
      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;