import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import First from "./components/basic/First";
import WithParameter from "./components/basic/WithParameter";

ReactDOM.render(
  <div>
    <First />
    <WithParameter
      title="Situação do aluno"
      aluno="Carlos"
      nota={6.4}
    />
    <WithParameter
      title="Situação do aluno"
      aluno="Maria"
      nota={8.9}
    />
    <Fragment />
  </div>,
  document.getElementById("root")
);
