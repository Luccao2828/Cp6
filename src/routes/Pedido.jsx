import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '/src/css/Pedido.css';

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

function Pedido() {
  const [idPedido, setIdPedido] = useState('');
  const [detalhesPedido, setDetalhesPedido] = useState(null);
  const [pedidos, setPedidos] = useState([]);
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);

  useEffect(() => {
    if (cep.length === 8) {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
          setEndereco(response.data);
        })
        .catch(error => {
          console.error('Erro ao buscar CEP:', error);
          setEndereco(null);
        });
    }
  }, [cep]);

  const buscarProduto = (id) => {
    const produto = dados.find(produto => produto.id === parseInt(id));
    if (produto) {
      setDetalhesPedido(produto);
    } else {
      setDetalhesPedido(null);
      alert('Produto não encontrado');
    }
  };

  const adicionarAoPedido = () => {
    if (detalhesPedido) {
      setPedidos(pedidosAntigos => [...pedidosAntigos, detalhesPedido]);
      setIdPedido('');
      setDetalhesPedido(null);
    } else {
      alert('Nenhum produto selecionado');
    }
  };

  const removerDoPedido = (indexToRemove) => {
    setPedidos(pedidos.filter((_, index) => index !== indexToRemove));
  };

  const cadastrarPedido = () => {
    if (pedidos.length > 0) {
      console.log('Pedido cadastrado:', pedidos);
      alert('Pedido cadastrado com sucesso!');
    } else {
      alert('Adicione produtos ao pedido antes de cadastrar');
    }
  };

  return (
    <div className="pedido-container">
      <input
        className="pedido-input"
        type="text"
        value={idPedido}
        onChange={(e) => setIdPedido(e.target.value)}
        onBlur={() => buscarProduto(idPedido)}
        placeholder="Digite o ID do produto"
      />
      <button className="pedido-button" onClick={adicionarAoPedido}>Adicionar ao Pedido</button>
      <button className="pedido-button" onClick={cadastrarPedido}>Cadastrar Pedido</button>
      <input
        className="pedido-input"
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
        placeholder="Digite o CEP"
      />
      {endereco && (
        <div>
          <p>Endereço: {endereco.logradouro}</p>
          <p>Bairro: {endereco.bairro}</p>
          <p>Cidade: {endereco.localidade}</p>
          <p>Estado: {endereco.uf}</p>
        </div>
      )}
      <div>
        <h2>Pedidos Cadastrados</h2>
        <ul className="pedido-lista">
          {pedidos.map((produto, index) => (
            <li key={index}>
              ID: {produto.id}, Nome: {produto.nome}, Preço: R$ {produto.preco.toFixed(2)}
              <button className="pedido-button remover" onClick={() => removerDoPedido(index)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Pedido;
