import React from "react";

const amigosDeGaby = ["Nicolas", "Mariano", "Pollo", "maxy", "El negro"];
const amigosDeBuba = ["Agustina", "maxy", "Lourdes", "El Negro", "Camila"];

export const Exercise3 = () => {
  //AYUDA: toUpperCase(), join(), filter, includes()

  const amigosGaby = amigosDeGaby.map((amigos) => amigos.toUpperCase());
  const amigosBuba = amigosDeBuba.map((amigos) => amigos.toUpperCase());

  const amigos = () => {
    const amigo = amigosGaby.filter((amigo) => amigosBuba.includes(amigo));
    return amigo.join(", ");
  };

  const amigosEnComun = amigos();

  return <div>{amigosEnComun} </div>;
};
