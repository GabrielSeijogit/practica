import React, { FC } from "react";
interface CardProps {
  titulo: string;
  precio: string;
}

export const CardTailwind: FC<CardProps> = ({ titulo, precio }) => {
  return (
    <div className="w-full bg-black max-w-80 m-auto p-1">
      <img className="max-w-full h-auto" src="/imagenes/blood-Cross.jpg" />
      <div className="bg-opacity-5 p-1 - max-w-full relative justify-between flex ">
        <h1 className="font-serif text-xl mt-2 break-words whitespace-pre-line overflow-hidden text-ellipsis">
          {titulo}
        </h1>
        <h1 style={{ fontFamily: "serif", fontSize: "20px", marginTop: 6 }}>
          {precio}
        </h1>
      </div>
    </div>
  );
};
