import React from "react";
import Main from "../templates/Main";

export default props => (
  <Main
    icon="home"
    title="Início"
    subtitle="Segundo Projeto no capitulo de React"
  >
    <div className="display-4">Bem Vindo!</div>
    <hr />
    <div className="mb-0">
      <p className="item">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        doloremque eum dolor numquam molestias voluptates a necessitatibus
        veritatis eveniet totam itaque, quia quisquam aliquid, iure vero rem
        minima perspiciatis obcaecati?
      </p>
    </div>
  </Main>
);
