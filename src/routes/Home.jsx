import React, { useState } from 'react';
import 'C:/Users/lucca/MexicanLovers/src/css/slideshow.css';
import ProductCard from '/src/components/ProductCard.jsx';

import Aprenda from '/src/assets/AprendaAProgramar.jpg';
import C from '/src/assets/C.jpg';
import Data from '/src/assets/Data.jpg';
import Html from '/src/assets/HTML.jpg';
import Introducao from '/src/assets/Introdução.jpg';
import Java from '/src/assets/Java.jpg';
import Php from '/src/assets/PHP.jpg';
import Profissional from '/src/assets/Profissional.jpg';
import Python from '/src/assets/Python.jpg';
import Web from '/src/assets/Web.jpg';

const imagens = [
  'src/assets/Img1.png',
  'src/assets/Img2.png',
];

const Home = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);

  const irParaProximoSlide = () => {
    const novoIndice = indiceAtual === imagens.length - 1 ? 0 : indiceAtual + 1;
    setIndiceAtual(novoIndice);
  };

  const irParaSlideAnterior = () => {
    const novoIndice = indiceAtual === 0 ? imagens.length - 1 : indiceAtual - 1;
    setIndiceAtual(novoIndice);
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Nossos Livros</h1>
    
      <div className="slideShowContainer">
        <div className="navegacao">
          <button onClick={irParaSlideAnterior}>Anterior</button>
          <button onClick={irParaProximoSlide}>Próximo</button>
        </div>
        <img src={imagens[indiceAtual]} alt={`Slide ${indiceAtual}`} />
      </div>

      <div className="card-container">
        <ProductCard
          productName="Aprenda a Programar"
          description="Aprenda a Programar como nunca."
          price="60.00"
          imageUrl={Aprenda}
        />
        <ProductCard
          productName="C++ "
          description="Aprenda a se tornar um gênio em C++."
          price="60.00"
          imageUrl={C}
        />
        <ProductCard                                                      
          productName="Data Science"
          description="Interesse em Data? Esse é o melhor livro de Data Science que temos para você!."
          price="60.00"
          imageUrl={Data}
        />
        <ProductCard
          productName="HTML"
          description="Aprenda o básico do HTML com esse belo livro ."
          price="60.00"
          imageUrl={Html}
        />
        <ProductCard
          productName="Introdução a Programação"
          description="Novo na área? temos o livro perfeito pra você, conheça o livro :Introdução a Programação."
          price="60.00"
          imageUrl={Introducao}
        />
        <ProductCard
          productName="Java"
          description="Aprenda tudo e mais um pouco de Java."
          price="60.00"
          imageUrl={Java}
        />
        <ProductCard
          productName="Php"
          description="Aprenda sobre Php com o melhor livro disponivel."
          price="60.00"
          imageUrl={Php}
        />
        <ProductCard
          productName="Profissional"
          description="Aprenda a se tornar um Profissional na Área com o Programador Cidades!."
          price="60.00"
          imageUrl={Profissional}
        />
        <ProductCard
          productName="Python"
          description="Aprenda a transformar qualquer coisa em Python, até Bananas!."
          price="60.00"
          imageUrl={Python}
        />
        <ProductCard
          productName="Web"
          description="Aprenda tudo e mais um pouco de Web com o programador Cidades."
          price="60.00"
          imageUrl={Web}
        />
      </div>
    </>
  );
};

export default Home;
