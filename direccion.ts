export class direccion { //declaración atributos y métodos sin valores predefinidos
    calle: string;
    numero: number;
    piso: number;
    letra: string;
    codigopostal: string;
    poblacion: string;
    provincia: string;

//constructor para inicializar los valores de la instancia al crear nuevo objeto
constructor(calle: string, numero: number, piso: number, letra: string, codigopostal: string, poblacion: string, provincia: string  ) {
    this.calle= calle
    this.numero = numero
    this.piso = piso
    this.letra = letra
    this.codigopostal = codigopostal
    this.poblacion = poblacion
    this.provincia = provincia
  }
//para que se devuelvan los valores en el main craré un getter
    getdireccion(): string {
        return `${this.calle}, ${this.numero}, ${this.piso}, ${this.letra}, ${this.codigopostal}, ${this.poblacion}, ${this.provincia}`;
    }
    

  }