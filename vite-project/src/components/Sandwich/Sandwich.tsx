import { useState } from "react";

import style from "./Sandwich.module.css";

export default function Sandwich(): JSX.Element {
  const [sandwich, setSandwich] = useState<string>("Sandwich configurator:  ");

  function handleAddBread(): void {
    setSandwich(`${sandwich} bread 🍞`);
  }
  function handleAddCheese(): void {
    setSandwich(`${sandwich} cheese 🧀`);
  }
  function handleAddSalami(): void {
    setSandwich(`${sandwich} salami 🍖`);
  }
  function handleAddSalat(): void {
    setSandwich(`${sandwich} salad 🥗`);
  }
  function handlAddClear(): void{
    setSandwich('Sandwich: ');
  }




  return (
    <div className={style.container}>
      <h2>Sandwich</h2>
      <img className={style.sandwich_img} src="https://webpulse.imgsmail.ru/imgpreview?key=pulse_cabinet-file-7c775a84-8e17-4e7e-9430-1be6800e3a16&mb=webpulse" alt="" />
      <p>{sandwich}</p>
      <div className={style.btnContainer}>
        <button type="button" className={style.btn} onClick={handleAddBread}>
          Add bread🤌
        </button>
        <button type="button" className={style.btn} onClick={handleAddCheese}>
          Add cheese👍
        </button>
        <button type="button" className={style.btn} onClick={handleAddSalami}>
          Add salami😌
        </button>
        <button type="button" className={style.btn} onClick={handleAddSalat}>
          Add salad😒
        </button>
        <button type="button" className={style.btn} onClick={handlAddClear}>
        Reset🥹
        </button>
      </div>
    </div>
  );
}
