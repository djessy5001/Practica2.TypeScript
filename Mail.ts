export class Mail { //declaración atributos y métodos sin valores predefinidos
  tipoMail: string;
  direccionMail: string;
    

  //constructor para inicializar los valores de la instancia al crear nuevo objeto
  constructor(tipoMail: string, direccionMail: string) {
    this.tipoMail = tipoMail
    this.direccionMail = direccionMail
    
  }
  //para que se devuelvan los valores en el main craré un getter
  getMail(): string {
      return `${this.tipoMail}, ${this.direccionMail}`;
  }
  

}