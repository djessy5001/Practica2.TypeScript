//importar los datos que queremos incluir de otras clases
import { Direccion } from './Direccion';
import { Telefono } from './Telefono';
import { Mail } from './Mail';
import { Persona } from './Persona';

//primero crearemos los objetos y después las 3 personas con sus correspondientes objetos
const direccion1 = new Direccion('Calle Sevilla', 1, 1, 'A', '0101', 'Sevilla', 'Sevilla' );
const telefono1 = new Telefono('móvil', '611111111');
const mail1 = new Mail('personal', 'juant@gmail.com');

const direccion2 = new Direccion('Calle Alicante', 2, 2, 'B', '0102', 'Alicante', 'Alicante' );
const telefono2 = new Telefono('móvil', '622222222');
const mail2 = new Mail('personal', 'mariag@gmail.com');

const direccion3 = new Direccion('Calle Madrid', 3, 3, 'C', '0103', 'Madrid', 'Madrid' );
const telefono3 = new Telefono('móvil', '633333333');
const mail3 = new Mail('profesional', 'luciarm@empresa.es');

//crear objeto Persona
const persona1 = new Persona('Juan', 'Torres', 32, '11111111A', new Date (1991, 1, 15), 'Verde', 'Masculino', [direccion1], [mail1], [telefono1], 'Nota 1');
const persona2 = new Persona('María', 'Gómez', 26, '22222222A', new Date (1997, 7, 27), 'Morado', 'Femenino', [direccion2], [mail2], [telefono2], 'Nota 2');
const persona3 = new Persona('Lucía', 'Rodríguez', 20, '33333333A', new Date (2003, 8, 24), 'Negro', 'Femenino', [direccion3], [mail3], [telefono3], 'Nota 3');

const personas = [persona1, persona2, persona3];

function mostrarDatosPersona(persona: Persona) {
  console.log(persona.getNombre());
  console.log(persona.getApellidos());
  console.log(persona.getEdad());
  console.log(persona.getDni());
  console.log(persona.getCumpleaños());
  console.log(persona.getColorFavorito());
  console.log(persona.getSexo());
  console.log(persona.getDirecciones());
  console.log(persona.getMails());
  console.log(persona.getTelefonos());
  console.log(persona.getNotas());
}

//mostrar personas en terminal
personas.forEach(persona => {
  mostrarDatosPersona(persona);
});

//nuevas dirección, Mail y tel para modificar persona3
const direccionMod = new Direccion('Calle Colombia', 31, 31, 'Z', '0110', 'Madrid', 'Madrid' );
const mailMod = new Mail('personal', 'luciarodm@egmail.com');
const telefonoMod = new Telefono('móvil personal', '711111111');


//modificar Persona por dni
function buscarPersonaPorDni(personas: Persona[], dni: String): Persona | undefined {
  return personas.find(persona => persona.getDni() === dni)
}

//para poder modificar la persona buscando por el dni en la clase main:
function modificarPersona(persona: Persona, newDireccion: Direccion, newMail: Mail, newTelefono: Telefono) {
  persona.addDireccion(newDireccion);
  persona.addMail(newMail);
  persona.addTelefono(newTelefono);
}

const personaAModificar = buscarPersonaPorDni(personas, '33333333A');
if (personaAModificar) {
  modificarPersona(personaAModificar, direccionMod, mailMod, telefonoMod);
}


//mostrar los registros con los cambios realizados
personas.forEach(persona => {
  mostrarDatosPersona(persona);
});