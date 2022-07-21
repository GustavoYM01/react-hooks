import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 1 - useEffect, sem dependências
  useEffect(() => {
    console.log("Executado!");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  //   2 - array de dependências vazio
  useEffect(() => {
    console.log("Serei executado apenas 1 vez");
  }, []);

  //   3 - item no array de dependências
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Executado somente quando o anotherNumber muda");
    }
  }, [anotherNumber]);

  //   4 - cleanup do useEffect
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   console.log("Olá mundo");
    // }, 1000);

    // return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Número: {number}</p>
      <button onClick={changeSomething}>Executar</button>
      <p>Outro número: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Alterar "Outro número"
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
