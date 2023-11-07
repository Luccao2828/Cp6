import React from 'react';
import '/src/css/livros.css'

const dados = [
  { id: 1, nome: 'Aprenda a Programar', preco: 50.0, emEstoque: true },
  { id: 2, nome: 'C++', preco: 60.0, emEstoque: true },
  { id: 3, nome: 'Data Science', preco: 60.0, emEstoque: true },
  { id: 4, nome: 'Html', preco: 60.0, emEstoque: true },
  { id: 5, nome: 'Introdução a Programação', preco: 60.0, emEstoque: true },
  { id: 6, nome: 'Java', preco: 60.0, emEstoque: true },
  { id: 7, nome: 'Php', preco: 60.0, emEstoque: true },
  { id: 8, nome: 'Se torne um programador Profissional', preco: 60.0, emEstoque: true },
  { id: 9, nome: 'Python', preco: 60.0, emEstoque: true },
  { id: 10, nome: 'Web', preco: 60.0, emEstoque: true },
];

const TabelaProdutos = () => {
  return (
    <table className="tabela-estilizada">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Disponibilidade</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((produto) => (
          <tr key={produto.id}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>R$ {produto.preco.toFixed(2)}</td>
            <td className={produto.emEstoque ? 'em-estoque' : 'fora-de-estoque'}>
              {produto.emEstoque ? 'Em Estoque' : 'Indisponível'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaProdutos;
