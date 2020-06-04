import React from "react"
import { Link } from "react-router-dom";

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
          <Link to="/point/new">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </div>
    </Container>
  );
};

export default HomePage
