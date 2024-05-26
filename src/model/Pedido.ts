import Item from "./Item";

class Pedido {
  private itens: Item[];
  private valorTotal: number;

  constructor(itens: Item[], valorTotal: number) {
    this.itens = [];
    this.valorTotal = valorTotal;
  }
}

export default Pedido;
