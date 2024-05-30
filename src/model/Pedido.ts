import Item from "./Item";

class Pedido {
  public itens: Item[];
  public valorTotal: number;

  constructor() {
    this.itens = [];
    this.valorTotal = 0;
  }
}

export default Pedido;
