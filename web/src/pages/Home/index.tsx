import React from "react"

import { FiLogIn } from "react-icons/fi"

import { Container } from "./styles"

import logo from "../../assets/logo.svg"

const HomePage: React.FC = () => {
  return (
    <Container>
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta Logo"/>
        </header>
        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
          <a href="https://google.com">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </a>
        </main>
      </div>
    </Container>
  );
};

export default HomePage
