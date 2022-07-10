import alunos from "../../data/alunos";
import produtos from "../../data/Produtos";
import './TabelaProdutos.css';


function TabelaProdutos(){

    const products = produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R${produto.preco}.00</td>
            </tr>
        )
    })
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nome</td>
                        <td>Preço</td>
                    </tr>
                </thead>

                <tbody>
                 {products}
                </tbody>

            </table>
        </div>
    )
};

export default TabelaProdutos;