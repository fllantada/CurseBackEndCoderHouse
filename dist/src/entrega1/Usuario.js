"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(nombre, apellido) {
        this.libros = [];
        this.mascotas = [];
        this.nombre = nombre;
        this.apellido = apellido;
    }
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(mascota) {
        this.mascotas.push(mascota);
    }
    countMascotas() {
        return this.mascotas.length;
    }
    addBook(nombre, autor) {
        this.libros.push({ nombre, autor });
    }
    getBookNames() {
        return this.libros.map((libro) => libro.nombre);
    }
}
exports.Usuario = Usuario;
