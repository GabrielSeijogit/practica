import React from 'react'

interface Libros {
    id: number
    titulo: string
    añoPublicacion: number
    genero: string
}

interface LibrosConTodaLaInformacion {
    nombreYApellido: string
    nacioanalidad: string
    libros: Libros[]
}

const autores = [
    { id: 1, nombre: "J.K. ", apellido: 'Rowling', nacionalidad: "británica" },
    { id: 2, nombre: "George ", apellido: 'Orwell', nacionalidad: "británica" },
    { id: 3, nombre: "Gabriel García ", apellido: 'Márquez', nacionalidad: "colombiana" },
];

const libros = [
    { id: 101, titulo: "Harry Potter", autorId: 1 },
    { id: 102, titulo: "1984", autorId: 2 },
    { id: 103, titulo: "Cien años de soledad", autorId: 3 },
];

const datosAdicionales = [
    { libroId: 101, añoPublicacion: 1997, genero: "Fantasía" },
    { libroId: 102, añoPublicacion: 1949, genero: "Ciencia ficción" },
    { libroId: 103, añoPublicacion: 1967, genero: "Realismo mágico" },
];

export const Exercise5 = () => {
    //AYUDA: El método find devuelve el primer elemento que cumple con la condición proporcionada por la función de prueba.
    // Cuando utilizas find dentro de un map, estás aplicando la función de prueba a cada elemento del array,
    // ya que map itera sobre cada elemento.

    // const obtenerArrayLibrosConTodaLaInformacion = (): LibrosConTodaLaInformacion[] => { }


    return (
        <div>Resolver aca ejercicio 5</div>
    )
}
