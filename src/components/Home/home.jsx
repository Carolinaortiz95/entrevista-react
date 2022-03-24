import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCode, filterByDescription } from "../../actions";
import Card from "../Card/card";
import style from "../Home/home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const stock = useSelector((state) => state.filterStock);
  const [inputCode, setInputCode] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  function handleCodeFilter(e) {
    e.preventDefault();
    dispatch(setInputCode(e.target.value));
  }

  function handleDescriptionFilter(e) {
    e.preventDefault();
    dispatch(setInputDescription(e.target.value));
  }

  function handleSubmitCode(e) {
    e.preventDefault();
    dispatch(filterByCode(inputCode));
    setInputCode("");
  }

  function handleSubmitDescription(e) {
    e.preventDefault();
    dispatch(filterByDescription(inputDescription));
    setInputDescription("");
  }


  return (
    <div className={style.contains}>
      <h1>REALIZA UN BUSQUEDA</h1>
      <div>
        <input
          className={style.input}
          value={inputCode}
          type="text"
          placeholder="Codigo aquí..."
          onChange={(e) => handleCodeFilter(e)}
        />
        <button
          className={style.btnSearch}
          type="submit"
          onClick={(e) => handleSubmitCode(e)}
        >
          Search
        </button>
      </div>
      <div>
        <input
          className={style.input}
          value={inputDescription}
          type="text"
          placeholder="Descripción aquí..."
          onChange={(e) => handleDescriptionFilter(e)}
        />
        <button
          className={style.btnSearch}
          type="submit"
          onClick={(e) => handleSubmitDescription(e)}
        >
          Search
        </button>
      </div>
      {stock &&
        stock.map((item, index) => (
          <Card
            key={index}
            codigo={item.codigo}
            descripcion={item.descripcion}
          />
        ))}
    </div>
  );
}
