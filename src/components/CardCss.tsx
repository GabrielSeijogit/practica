import React, { FC } from "react";

interface CardProps {
  titulo: string;
  precio: string;
}

export const CardCss: FC<CardProps> = ({ titulo, precio }) => {
  return (
    <div
      style={{
        maxWidth: "357px",
        height: "100%",
        padding: 4,
        backgroundColor: "black",
      }}
    >
      <img
        src="/imagenes/blood-Cross.jpg"
        style={{
          maxHeight: "471px",
          marginTop: 5,
          height: "100%",
          borderRadius: 5,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          position: "relative",
          maxWidth: "100%",
          marginTop:-48,
          padding: 6,
          backgroundColor: "rgba(0, 0, 0, .5)",
        }}
      >
        <h1
          style={{
            fontFamily: "serif",
            fontSize: "20px",
            marginTop: 6,
            wordWrap: "break-word",
            whiteSpace: "pre-line",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {titulo}
        </h1>
        <h1 style={{ fontFamily: "serif", fontSize: "20px", marginTop: 6 }}>
          {precio}
        </h1>
      </div>
    </div>
  );
};
