import React, { useEffect, useState } from "react";

export default function Pedido() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    function handleAddItem(event) {
      setItens((prev) => [...prev, event.detail]);
    }

    window.addEventListener("add-item", handleAddItem);

    return () => {
      window.removeEventListener("add-item", handleAddItem);
    };
  }, []);

  return (
    <div>
      <h2>🧾 Pedido</h2>

      {itens.length === 0 && <p>Nenhum item no pedido</p>}

      <ul>
        {itens.map((item, index) => (
          <li key={index}>
            {item.nome} — {item.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
}
