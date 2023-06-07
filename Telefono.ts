export class telefono { //declaración atributos y métodos sin valores predefinidos
    tipoTel: string;
    numeroTel: string;
    

//constructor para inicializar los valores de la instancia al crear nuevo objeto
constructor(tipoTel: string, numeroTel: string) {
    this.tipoTel = tipoTel
    this.numeroTel = numeroTel
    
  }
//para que se devuelvan los valores en el main craré un getter
    getTelefono(): string {
        return `${this.tipoTel}, ${this.numeroTel}`;
    }
    

  }