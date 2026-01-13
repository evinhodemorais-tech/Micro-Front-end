Micro Frontends – Cardápio e Pedido

Este projeto tem como objetivo praticar os conceitos de Micro Frontends utilizando React e Webpack Module Federation, simulando um cenário real de aplicações independentes que se comunicam entre si por meio de um container.

O sistema representa um fluxo simples de pedidos:

Um micro de Cardápio, onde o usuário escolhe os pratos

Um micro de Pedido, que recebe e exibe os itens adicionados

Um Container, responsável por integrar os micros

🏗️ Estrutura do Projeto

O projeto pode ser organizado em monorepo, com a seguinte estrutura:

micro-front-end/
│
├── container/
│   └── aplicação principal (porta 3000)
│
├── micro-cardapio/
│   └── lista de pratos (porta 3001)
│
└── micro-pedido/
    └── itens do pedido (porta 3002)


Cada aplicação é independente, com seu próprio:

package.json

webpack.config.js

servidor de desenvolvimento

🚀 Tecnologias Utilizadas

React

Webpack 5

Webpack Module Federation

Babel

JavaScript (ES6+)

🔗 Comunicação entre os Micros

A comunicação entre os micro-frontends é feita por eventos globais do navegador, mantendo baixo acoplamento.

Fluxo de comunicação:

O Micro Cardápio dispara um evento global ao clicar em “Adicionar ao pedido”:

window.dispatchEvent(
  new CustomEvent("add-item", { detail: prato })
);


O Micro Pedido escuta esse evento:

window.addEventListener("add-item", handler);


O item é adicionado ao estado do Pedido e renderizado na tela.

👉 Nenhum micro importa diretamente o outro
👉 O container apenas orquestra os micros

▶️ Como Rodar o Projeto
🔧 Pré-requisitos

Node.js (versão 18 ou superior recomendada)

npm ou yarn

VS Code (ou outro editor)

1️⃣ Clonar o repositório
git clone <URL_DO_REPOSITORIO>
cd micro-front-end

2️⃣ Instalar dependências

Você deve instalar as dependências em cada projeto.

Micro Cardápio
cd micro-cardapio
npm install

Micro Pedido
cd ../micro-pedido
npm install

Container
cd ../container
npm install

3️⃣ Rodar os projetos (IMPORTANTE)

⚠️ Os micros devem estar rodando antes do container

Terminal 1 – Micro Cardápio
cd micro-cardapio
npm start


➡️ roda em: http://localhost:3001

Terminal 2 – Micro Pedido
cd micro-pedido
npm start


➡️ roda em: http://localhost:3002

Terminal 3 – Container
cd container
npm start


➡️ roda em: http://localhost:3000

🧪 Como Testar

Acesse:

http://localhost:3000


No Cardápio, clique em:

Adicionar ao pedido

Veja o item aparecer automaticamente no Pedido

📦 Module Federation (Resumo)

O micro-cardapio expõe:

"./Cardapio"


O micro-pedido expõe:

"./Pedido"


O container consome ambos usando:

React.lazy(() => import("cardapio/Cardapio"))
React.lazy(() => import("pedido/Pedido"))

📚 Aprendizados do Projeto

Separação real de responsabilidades

Comunicação desacoplada entre micros

Uso prático de Module Federation

Organização de projeto escalável

Integração de múltiplos builds React

🔮 Possíveis Evoluções

Adicionar quantidade de itens

Remover itens do pedido

Persistência em localStorage

Estado global compartilhado

Publicar micros em servidores diferentes

