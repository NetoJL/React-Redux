import React from "react";

export default function (props) {
  const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
  return (
    <div>
      <h2>{ props.title }</h2>
      <p>
        <strong>{ props.aluno } </strong>
        tem nota:
        <strong> { props.nota }</strong>
        , com isso ele foi
        <strong> { status }</strong>
      </p>
    </div>
  );
}
