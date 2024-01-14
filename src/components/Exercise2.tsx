import React from "react";

const productos = [
  {
    id: 1,
    nombre: "Laptop Intel",
    marca: "HP",
    precio: 1200,
    stock: 15,
    especificaciones: {
      procesador: "Intel Core i7",
      memoriaRAM: "16GB",
      almacenamiento: "512GB SSD",
    },
    categorias: ["Electrónicos", "Computadoras"],
  },
  {
    id: 2,
    nombre: "Teléfono",
    marca: "Samsung",
    precio: 600,
    stock: 25,
    especificaciones: {
      procesador: "snapDragon 8",
      memoriaRAM: "4GB",
      almacenamiento: "128B ",
    },
    categorias: ["Electrónicos", "Teléfonos"],
  },
  {
    id: 1,
    nombre: "Laptop AMD",
    marca: "Lazer",
    precio: 1200,
    stock: 15,
    especificaciones: {
      procesador: "ryzen 7",
      memoriaRAM: "16GB",
      almacenamiento: "512GB SSD",
    },
    categorias: ["Electrónicos", "Computadoras"],
  },
];

export const Exercise2 = () => {

 const filter = productos.filter(p=> p.especificaciones.memoriaRAM === "16GB")
  

  //AYUDA:filter

  return <div>
    {filter.map((f)=>(
        <p>{f.nombre}</p>
    ))}
  </div>;
};
