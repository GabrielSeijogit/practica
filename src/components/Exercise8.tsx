import React from 'react'
//Parte 1:
const ciudades = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza'];

//Parte 2:
const numerosDescendentes = [45, 21, 78, 34, 56, 12];

//Parte 3:
const juegos = [
    { nombre: 'Ajedrez', puntuacion: 9 },
    { nombre: 'Damas', puntuacion: 6 },
    { nombre: 'Dominó', puntuacion: 7 },
    { nombre: 'Scrabble', puntuacion: 8 }
];

export const Exercise8 = () => {
    //AYUDA: sort()
    //https://www.w3schools.com/js/js_array_sort.asp

    return (
        <div className='flex flex-col space-y-2'>
            <h1>Parte 1</h1>
            {/* mostrar resultado aca*/}
            <h1>Parte 2</h1>
            {/* mostrar resultado aca*/}
            <h1>Parte 3</h1>
            {/* mostrar resultado aca*/}
        </div>
    )
}
