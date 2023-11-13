# Projeto para aprender React Router Dom
    Para aprender a desenvolver "SPA" (Single Page Application), em português aplicações de página única, o projeto foi realizado com auxílio de video aulas para aprender a manusear uma biblioteca muito conhecida do React: o React Router Dom.

## O que é roteamento
Roteamento é a capacidade de mostrar diferentes páginas ao usuário, mas sem necessidade de recarregar a página. Isso significa que o usuário pode mover-se entre diferentes partes de um aplicativo clicando em um elemento ou inserindo uma URL.

## Instalação do React Router Dom
usando npm:  
`npm install react-router-dom`  
ou  
`npm install react-router-dom@next`  
@next para garantir que vocÊ está instalando a versão mais recente

## Componentes do React Router Dom
### `<BrowserRouter>`
Esse componente fornece a infraestrutura necessária para que a aplicação possa gerenciar a navegação do usuário.

### `<Routes>`
Esse componente é usado para definir as rotas em seu aplicativo. Ele atua como o recipiente para todas as rotas da sua aplicação.

### `<Route>`
Esse componente é usado para configurar uma rota específica dentro do componente `<Routes>`. Ele aceita propriedades como `path` para a URL correspondente e `element` para o componente, geralmente se trata de uma página, a ser renderizado quando a URL corresponder.

### `<Link>`
Esse componente é usado para criar links de navegação. Funciona como uma tag `<a href=""></a>` mas ele evita a recarga da página inteira, proporcionando uma experiência de navegação suave em aplicações React, usando a propriedade `to` para direcionar para URL que corresponderá a uma rota definida pelo `<Route>`. 

### `<Outlet>`
Esse componente é usado como saída, responsável por renderizar os componentes filhos de uma rota, ou seja é escrito em um componente que servirá como rota pai. __Sim é possível aninhar rotas__.

## Rotas aninhadas
O roteamento aninhado refere-se à prática de definir rotas dentro de outras rotas. É útil quando você precisa representar hierarquias de URLs em sua aplicação React. Isso é especialmente comum em aplicações que têm layouts complexos, com diferentes seções e páginas aninhadas dentro de outras. Usando `<Route> </Route>` como contêiner de outras `<Route>`.

## Hooks do React Router Dom
Simplificam a obtenção e manipulação das informações da URL atual. Esses hooks facilitam o acesso a parâmetros de URL, informações de localização e navegação entre rotas de uma maneira mais direta e amigável.

### `useLocation()`
Esse hook fornece informações sobre a localização da URL atual. Isso pode ser útil para condicionalmente estilizar ou renderizar componentes com base nisso.

### `useNavigate()`
Esse hook é utilizado para obter a função de navegação que pode ser usada para navegar programaticamente, ou seja, mudar de rota em resposta a alguma lógica.

### `useParams()`
Esse hook é essencial quando você está lidando com rotas dinâmicas, aquelas que incorporam parâmetros variáveis. Ao utilizá-lo, você obtém acesso fácil ao valor desses parâmetros por meio do objeto retornado pelo hook. Nesse objeto, as chaves são os nomes dados aos parâmetros na definição da rota, e os valores correspondentes são os dados passados na URL, disponíveis para serem acessados e utilizados dentro do seu componente. __Sim é possível tornar as rotas dinâmicas__.

## Rotas dinâmicas
É possível criar uma rota, na qual um segmento da URL pode mudar com base em valores dinâmicos. Essa flexibilidade é possível ao adicionar parâmetros no `path` de uma rota. Eles são definidos na rota após uma segmento estático, separado por barra, usando dois pontos seguidos por um nome.  
Exemplo: `<Route path="/produto/:identificacao" element={<Produto />} />`

Utilidade das rotas dinâmicas:
* Permitem uma estrutura de aplicação mais flexível e adaptável. Você pode criar rotas que se ajustam dinamicamente a diferentes contextos, evitando a necessidade de criar rotas estáticas para cada possível cenário.
* Facilitam o roteamento condicional com base em parâmetros da URL. Isso permite que seu aplicativo se comporte de maneira diferente com base nos valores fornecidos na URL, exemplo: uma aplicação de comércio em que através do id de um produto é verificado se ele está disponível ou não no estoque, senao um determinado botão de "adicionar ao carrinho" fica vermelho com uma mensagem indicando que o produto está esgotado.
* Permite criar rotas exclusivas para diferentes tipos de usuários, como por exemplo clientes cadastrados, administradores, etc.