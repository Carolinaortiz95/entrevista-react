import React from "react";
import style from "../Card/card.module.css";

export default function Card({ codigo, descripcion }) {
  return (
    <div className={style.card}>
      <h5> Código: {codigo}</h5>
      <h4> Descripción: {descripcion}</h4>
    </div>
  );
}
