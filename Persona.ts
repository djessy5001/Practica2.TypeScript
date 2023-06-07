//importar los datos que queremos incluir de otras clases
import { Direccion } from './Direccion';
import { Telefono } from './Telefono';
import { Mail } from './Mail';

export class Persona {
  nombre: string;
  apellidos: string;
  edad: number;
  dni: string;
  cumpleaños: Date;
  colorFavorito: string;
  sexo: string;
  direcciones: Direccion[];
  mails: Mail[];
  telefonos: Telefono[];
  notas: string;

  //constructor
  constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleaños: Date,colorFavorito: string, sexo: string, direcciones: Direccion[],mails: Mail[],telefonos: Telefono[], notas: string   ) {
    this.nombre = nombre
    this.apellidos = apellidos
    this.edad = edad
    this.dni = dni
    this.cumpleaños = cumpleaños
    this.colorFavorito = colorFavorito
    this.sexo = sexo
    this.direcciones = direcciones
    this.mails = mails
    this.telefonos = telefonos
    this.notas = notas

  }

  //getters

  getNombre(): string {
    return this.nombre
  }

  getApellidos(): string {
    return this.apellidos
  }

  getEdad(): number {
    return this.edad
  }

  getDni(): string {
    return this.dni
  }

  getCumpleaños(): Date {
    return this.cumpleaños
  }

  getColorFavorito(): string {
    return this.colorFavorito
  }

  getSexo(): string {
    return this.sexo
  }

  getDirecciones(): string[] {
    //debemos hacer una construcción más compleja para poder obtener la dirección de las otras clases
    //el método .map() lo usamos para iterar en la clase y aplicar una transformación. Devuelve la cadena correspondiente con el getter
    return this.direcciones.map (direccion => direccion.getDireccion());
  }

  getMails(): string[] {
    return this.mails.map (direccionMail => direccionMail.getMail());
  }

  getTelefonos(): string[]{
    return this.telefonos.map (numeroTel => numeroTel.getTelefono());
  }

  getNotas(): string {
    return this.notas
  }

// para añadir una dirección a la lista de direcciones de la clase persona:
  addDireccion(direcciones: Direccion) {
    this.direcciones.push(direcciones); //.push nos permite agregar un elemento nuevo al final del array
  }

  addMail(mails: Mail){
    this.mails.push(mails);
  }

  addTelefono(telefonos: Telefono){
    this.telefonos.push(telefonos);
  }

  toString(): string {
    return `Nombre: ${this.getNombre()}
Apellidos: ${this.getApellidos()}
Edad: ${this.getEdad()}
Dni: ${this.getDni()}
Cumpleaños: ${this.getCumpleaños()}
Color Favorito: ${this.getColorFavorito()}
Sexo: ${this.getSexo()}
Direcciones: ${this.getDirecciones().join(' | ')}
Mails: ${this.getMails().join(' | ')}
Telefono: ${this.getTelefonos().join(' | ')}
Notas: ${this.getNotas()}`
  }

}
