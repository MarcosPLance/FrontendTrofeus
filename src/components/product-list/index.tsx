interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
}

interface ProdutoProps{
    produto: Produto;
}


export default function ProductList({ produto }: ProdutoProps) {

    return(
      <div>
          <h4>{produto.nome}</h4>
          <p>{produto.descricao}</p>
          <p> R$ {produto.preco.toFixed(2)}</p>
          <p> <span>ID: {produto.id}</span></p>
        </div> 
      )
    }