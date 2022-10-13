import React, { useState, useEffect } from "react";
import "./../App.css";

export default function Welcome(props) {
  let [counter, setCounter] = useState(0);
  const [semaforo, setSemaforo] = useState(false);

  useEffect(() => {
    console.log(semaforo);
  }, [semaforo]);

  const contar = () => {
    setCounter(counter + 1);
    setSemaforo(!semaforo);
  };

  const { message, name } = props;
  return (
    <div className="welcome">
      <h1>Hola, {name}</h1>
      <h2>Contador de react con hooks</h2>
      <h4>El número de contador es:</h4>
      <p>El semaforo es de color: {semaforo ? "red" : "green"}</p>
      <input
        type="text"
        placeholder="contador"
        value={counter}
        readOnly={true}
      />
      <button type="submit" onClick={contar}>
        Sumar contador
      </button>
      <button type="submit" onClick={() => setCounter(counter - 1)}>
        Restar contador
      </button>
      <button type="submit" onClick={() => setCounter((counter = 0))}>
        Resetear contador
      </button>
    </div>
  );
}
