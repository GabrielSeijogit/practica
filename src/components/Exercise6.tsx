import React, { useState } from "react";

interface Productos {
  id: number;
  producto: string;
  precio: number;
}

const carrito = [
  { id: 1, producto: "Laptop", precio: 1000 },
  { id: 2, producto: "Mouse", precio: 20 },
  { id: 3, producto: "Teclado", precio: 50 },
];

export const Exercise6 = () => {
  const [discountValue, setDiscountValue] = useState<number>(0);
  const [productsDiscount, setProductDiscount] = useState<Productos[]>(carrito);

  const discount = () => {
    const final = carrito.map((p) => {
      const x = p.precio - (p.precio * discountValue) / 100;
      return { id: p.id, producto: p.producto, precio: x };
    });

    setProductDiscount(final);
  };

  return (
    <div
      style={{
        display: "flex",
        padding: 10,
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <p>Lista de Productos</p>
      <div>
        {productsDiscount.map((p) => (
          <p>
            {p.producto} ${p.precio}
          </p>
        ))}
      </div>
      <div>
        <input
          style={{ color: "black" }}
          type="number"
          value={discountValue}
          onChange={(e) => setDiscountValue(e.target.valueAsNumber)}
        />
        <button
          className="h-10 px-6 ml-2  rounded-md border  text-slate-900"
          onClick={discount}
        >
          Descontar
        </button>
      </div>
    </div>
  );
};
