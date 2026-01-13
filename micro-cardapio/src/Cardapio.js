import React from "react";

const pratos = [
  { id: 1, nome: "Pizza", descricao: "Calabresa" },
  { id: 2, nome: "Hambúrguer", descricao: "Artesanal" },
];

export default function Cardapio() {
  function adicionar(prato) {
    window.dispatchEvent(
      new CustomEvent("add-item", { detail: prato })
    );
  }

  return (
    <div>
      <h2>🍽️ Cardápio</h2>
      {pratos.map((p) => (
        <div key={p.id}>
          <strong>{p.nome}</strong>
          <p>{p.descricao}</p>
          <button onClick={() => adicionar(p)}>
            Adicionar ao pedido
          </button>
        </div>
      ))}
    </div>
  );
}
