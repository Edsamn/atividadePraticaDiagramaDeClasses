import FormatoDeElemento from "./FormatoDeElemento";

class Retangulo extends FormatoDeElemento {
  public comprimento: number;
  public altura: number;

  constructor(comprimento: number, altura: number) {
    super();
    this.comprimento = comprimento;
    this.altura = altura;
  }

  desenhar(): void {}

  redimensionar(): void {}
}

export default Retangulo;
