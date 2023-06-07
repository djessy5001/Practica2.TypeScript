//importar los datos que queremos incluir de otras clases
import {Direccion} from './Direccion';
import {Telefono} from './Telefono';
import {Mail} from './Mail';

export class persona {
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

  getColorfavorito(): string {
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

//para poder modificar la persona buscando por el dni en la clase main:
modificarPersona(dni: string, newDireccion: Direccion, newMail: Mail, newTelefono: Telefono){
    if (this.dni == dni){ //comparar el dni dado con el dni existente
        this.addDireccion(newDireccion); //cambiar la dirección
        this.addMail(newMail); //cambiar el Mail
        this.addTelefono(newTelefono);  //cambiar el teléfono 

    }

}

}
