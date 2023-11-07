import React from 'react';
import '/src/css/Sobre.css';
import imagem1 from '/src/assets/yuri.jpg'; 
import imagem2 from '/src/assets/nicolas.jpg'; 
import imagem3 from '/src/assets/lucca.jpg'; 
import imagem4 from '/src/assets/leandro.jpg'; 
import imagem5 from '/src/assets/heitor.jpg'; 

const Sobre = () => {
  return (
    <div>
      <h2 className="titulo">
      Era uma vez, em um reino digital não tão distante, um quinteto de amigos programadores com uma paixão por livros tão vasta quanto suas bibliotecas de códigos. Entre os loops e as tags, eles teceram um plano para unir bits e literatura, e assim nasceu a "BookLovers" – a mais nova livraria virtual da rede!

      Na linha de frente dessa aventura, temos Yuri, o mestre do frontend, que garante que nossa livraria não seja apenas funcional, mas deslumbrante, com páginas tão convidativas quanto capas de best-sellers.

      Lucca, o gênio do backend, é a engrenagem secreta por trás da cena, mantendo tudo rodando suavemente, como uma narrativa bem construída, onde cada linha de código conta uma história.

      Leandro, especialista em UX/UI, garante que a jornada do usuário pelo site seja tão fascinante quanto uma trama de mistério, com reviravoltas intuitivas e revelações satisfatórias.

      Heitor, nosso guru de segurança cibernética, mantém os trolls e os hackers longe, como um herói de fantasia defendendo seu reino com feitiços de criptografia.

      E, finalmente, Nicolas, a mente visionária do marketing digital, espalha a palavra sobre nossas últimas coleções e promoções como um bardo cantando as lendas de terras distantes.

      Juntos, nós, transformamos a "BookLovers" no ponto de encontro favorito dos amantes de livros e tecnologia. Venha nos visitar no mundo virtual e perca-se entre páginas que prometem aventuras e conhecimento, tudo a um clique de distância!

      </h2>
      <div className="image-gallery">
        <div className="image-container">
          <img src={imagem1} alt="Yuri O Mestre do FrontEnd" />
          <div className="image-description">Yuri O Mestre do FrontEnd</div>
        </div>
        <div className="image-container">
          <img src={imagem2} alt="Nicolas O Gênio do Markting Digital" />
          <div className="image-description">Nicolas O Gênio do Markting Digital</div>
        </div>
        <div className="image-container">
          <img src={imagem3} alt="Lucca O Gênio do BackEnd" />
          <div className="image-description">Lucca O Gênio do BackEnd</div>
        </div>
        <div className="image-container">
          <img src={imagem4} alt="Leandro O Especialista em UX/UI" />
          <div className="image-description">Leandro O Especialista em UX/UI</div>
        </div>
        <div className="image-container">
          <img src={imagem5} alt="Heitor O Guru de Segurança Cibernética" />
          <div className="image-description">Heitor O Guru de Segurança Cibernética</div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
