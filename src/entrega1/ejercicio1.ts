//
import { Usuario } from "./Usuario";

export const ejercicio1: Function = () => {
  const mockMascotas = ["perro", "gato", "pez", "perro", "gato", "pez"];
  const mockLibros = [
    { nombre: "harryPotter", autor: "JK Rowling" },
    { nombre: "harryPotter2", autor: "JK Rowling2" },
  ];

  const usuario = new Usuario("Juan", "Perez");
  for (const mascota of mockMascotas) {
    usuario.addMascota(mascota);
  }
  for (const libro of mockLibros) {
    usuario.addBook(libro.nombre, libro.autor);
  }

  console.log(
    "getFullName debe retornar el nombre separado por un espacio",
    usuario.getFullName()
  );
  console.log(
    "debe indicar la cantidad de mascotas agregadas total 6 de mock Mascotas:",
    usuario.countMascotas()
  );

  console.log(
    "debe indicar los nombres de los libros como un arreglo de string en este caso harry potter 1 y 2",
    usuario.getBookNames()
  );
};
