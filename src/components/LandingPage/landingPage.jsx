import React from "react";
import { Link } from "react-router-dom";
import style from "./landingPage.module.css";

export default function LandingPage() {
  return (
    <div className={style.full}>
      <h1 className={style.title}>BUSCA PRODUCTOS POR CODIGO O DESCRIPCION</h1>
      <Link to="/home">
        <button className={style.button}>COMENZAR</button>
      </Link>
    </div>
  );
}
