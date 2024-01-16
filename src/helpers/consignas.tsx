import { Exercise1 } from "@/components/Exercise1"
import { Exercise2 } from "@/components/Exercise2"
import { Exercise3 } from "@/components/Exercise3"
import { Exercise4 } from "@/components/Exercise4"
import { Exercise5 } from "@/components/Exercise5"
import { Exercise6 } from "@/components/Exercise6"
import { Exercise7 } from "@/components/Exercise7"
import { Exercise8 } from "@/components/Exercise8"
import { Exercise9 } from "@/components/Exercise9"
import { ReactNode } from "react"

interface Tasks {
  numberTask: number;
  description: string;
  expectedResult: string;
  exercise?: ReactNode;
}

export const Tasks: Tasks[] = [
  {
    numberTask: 1,
    description:
      "Tenes un array de objetos, cada uno representando información sobre un libro. Cada objeto tiene propiedades como título, autor, año de publicación, y género. Crea una función que tome el array de libros y devuelva un array que contenga solo los títulos de los libros.",
    expectedResult:
      "Deberia Renderizarse uno al lado del otro los titulos de los libros separados por una coma y espacio entre cada nombre",
    exercise: <Exercise1 />,
  },
  {
    numberTask: 2,
    description:
      "Tenes un array de objetos, cada uno representa informacion sobre productos electronicos , laptops y celulares, con varias propiedades, crea una funcion que tome el array de productos y devuelva solo aquellos que tengan 16GB de memoria RAM y como retorno final de la funcion devolver un array con los nombres de estos productos y renderizarlos igual que en el ejercicio 1",
    expectedResult:
      "Deberia renderizarse uno abajo de otro los nombres de los productos",
    exercise: <Exercise2 />,
  },
  {
    numberTask: 3,
    description:
      "Tenes 2 arrays de strings con los nombres de los amigos de gaby y los amigos de buba. Crear una funcion que los compare y retorne un array de strings con los amigos que tienen en comun gaby y buba, TENER EN CUENTA que los nombres pueden no estar perfectamente escritos en sentido de mayusculas, la funcion tiene que poder encontrar coincidencias entre los arrays igualmente.",
    expectedResult:
      "Deberia renderizarse uno al lado del otro los nombres pero sin usar la funcion map() en el return, usar join",
    exercise: <Exercise3 />,
  },
  {
    numberTask: 4,
    description:
      "Crear un componente que se vea como en el video, que renderize 2 botones, uno hecho con css y otro con tailwind solo que el que tiene css va a ser rojo y el de tailwind azul, cuando le hago click a uno , deshabilito el otro, TENER EN CUENTA que los estilos de disabled no se hacen solos como con material UI, los botones son identicos en propiedades de estilo , se ven diferentes porque tienen textos diferentes si queres podes ponerle la misma palabra a los 2 para que tengan el mismo largo",
    expectedResult: "Que pase lo mismo que en el video",
    exercise: <Exercise4 />,
  },
  {
    numberTask: 5,
    description: 'Tienes información sobre autores, libros y datos adicionales relacionados. El objetivo es crear una función obtenerArrayLibrosConTodaLaInformacion que tome esta información y devuelva un array de objetos que contengan la información completa de los libros, incluyendo el nombre y apellido del autor, la nacionalidad y los detalles adicionales de cada libro.',
    expectedResult: 'Renderizar el resultado en una lista o componente a gusto lo importante son los datos',
    exercise: <Exercise5 />
  },
  {
    numberTask: 6,
    description: 'Tenes un array de productos con id , producto y precio , crea una funcion que permita aplicar un descuento a cada elemento del array',
    expectedResult: 'Deberia quedar renderizado el nombre del producto y el precio al costado, uno debajo de otro , y en algun lugar un input con un boton que te permita ingresar un numero , solo numeros , y cuando haces click aplica el descuento en porcentaje a todos los productos , el precio se debe actualizar en el renderizado, mostrar un alert de que diga que el descuento se aplico correctamente',
    exercise: <Exercise6 />
  },
  {
    numberTask: 7,
    description: 'Se dejo una imagen de la Card de zafira como ejemplo , crear un componente nuevo en /components que se llame Card y se vea igual a la card de ejemplo',
    expectedResult: 'llamar al nuevo componente Card dentro de Exercise7 para que quede una foto alado de la otra y sean comparables, el componente no tiene que poder romperse, desde el padre cuando se pasen las props como titulo precio,etc, tiene que poder soportar textos largos, Desarrollar con css y luego lo mismo pero con tailwind , crear CARDTailwind como componente',
    exercise: <Exercise7 />
  },
  {
    numberTask: 8,
    description: 'PARTE 1: Ordena alfabéticamente el siguiente array de ciudades y muestra el resultado. PARTE 2: Ordena el siguiente array de números de manera descendente y muestra el resultado. PARTE 3: Ordena el siguiente array de objetos por la propiedad puntuacion de manera ascendente y muestra el resultado ',
    expectedResult: '',
    exercise: <Exercise8 />
  },
  {
    numberTask: 9,
    description: 'Instalar Jest',
    expectedResult: '',
    exercise: <Exercise9 />
  }
]
