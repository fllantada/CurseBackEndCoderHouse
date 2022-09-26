type Libros = { nombre: String; autor: String }[];

export class Usuario {
  private nombre: String;
  private apellido: String;
  private libros: Libros = [];
  private mascotas: String[] = [];

  constructor(nombre: String, apellido: String) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  getFullName(): String {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascota(mascota: String): void {
    this.mascotas.push(mascota);
  }
  countMascotas(): Number {
    return this.mascotas.length;
  }
  addBook(nombre: String, autor: String): void {
    this.libros.push({ nombre, autor });
  }
  getBookNames(): String[] {
    return this.libros.map((libro) => libro.nombre);
  }
}
