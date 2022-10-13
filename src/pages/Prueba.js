import React from "react";
import { useParams } from "react-router-dom";

export default function Prueba() {
  const { name } = useParams();
  console.log(name);
  return <p>desde profile con el nombre de { name }</p>;
}
