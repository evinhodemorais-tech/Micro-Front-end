import React, { Suspense } from "react";

const Cardapio = React.lazy(() => import("cardapio/Cardapio"));
const Pedido = React.lazy(() => import("pedido/Pedido"));

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>🍽️ Sistema de Pedidos</h1>

      <Suspense fallback={<p>Carregando Cardápio...</p>}>
        <Cardapio />
      </Suspense>

      <hr />

      <Suspense fallback={<p>Carregando Pedido...</p>}>
        <Pedido />
      </Suspense>
    </div>
  );
}
