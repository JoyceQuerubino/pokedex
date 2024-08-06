![Frame 1000001175](https://github.com/user-attachments/assets/bb413121-867d-458f-b558-da51a53d05ea)

Aplicativo simples com uma listagem de Pokemons, para capturar e descobrir!

## Funcioanamento?

O aplicativo Pokedex, deve apresentar uma listagem paginada de todos os pokemons conforme recebidos da [api do pokemon](https://pokeapi.co/). Nesta listagem devem ser apresentados o nome, foto e o nível de dificuldade de captura, sendo possível pesquisar os pokemons pelo componente de input. Além disso, ao clicar em um card da listagem outras informações como especie, type e habilidades devem ser apresentadas e nesta tela, deve ser possível "capturar" um pokemon ao clicar no icone da pokebola e os pokemons capturados são armazenados no AsyncStorage do dispositivo, permitindo manter os dados ou fechar o app.

## Preview

![Gravação de Tela 2024-08-06 às 01 06 30 (1)](https://github.com/user-attachments/assets/ffd56127-8805-4e48-a75b-9ec3fb3aaa2f)

# Sobre o design

- Criei um design simples, mantendo os componentes de forma arredondada e usando multiplos de 4 em todos os componentes;
- Criei um thema personalizado para facilitar a reutilizaçao de código e organização, no qual separei as cores, tamanhos e fontes utilizadas no app.
- Criei uma função de cores personalizada, visto que as cores retornadas pela api do Pokemon, não eram atraentes. Eu poderia ter deixado o app mais performático ao utilizar a lib react-native-image-colors para pegar a cor predominante de uma image, ao invés de chamar um outro endpoint que retorna as cores, porém teria que ejjetar o expo e a fim de facilitar a analise deste teste, preferi usar o expo Go e adicionar o QRCode público neste readme.
- Não utilizei nenhuma lib de componentes prontos de UI, preferi criar meus próprios componentes personalizados usando o styled-componentes.

![Frame 48095509 (1)](https://github.com/user-attachments/assets/72607a90-9b34-46eb-85d6-d4654e5b6f91)

## Estrutura do app e desenvolvimento

Utilizei os Principios SOLIDS:

- Single Responsibility Principle (SRP) - Princípio da Responsabilidade Única
- Open/Closed Principle (OCP) - Princípio Aberto/Fechado
- Liskov Substitution Principle (LSP) - Princípio da Substituição de Liskov
- Interface Segregation Principle (ISP) - Princípio da Segregação de Interface
- Dependency Inversion Principle (DIP) - Princípio da Inversão de Dependência

A aplicação foi desenvolvida utilizando os princípios SOLID, onde os componentes são separados para terem responsabilidades únicas (Princípio da Responsabilidade Única), que é representado em todos os componentes. Além disso, componentes grandes são divididos em componentes menores e mais específicos (seguindo o Princípio de Segregação de Interface). Também separei algumas regras em helpers e hooks para manter o código limpo e independente (Princípio de Inversão de Dependência). Além disso, não forcei os componentes a dependerem de interfaces que não utilizam, seguindo o Princípio de Segregação de Interface.

Obs.: Ao invés de utilizar os Hooks personalizados para as chamadas da API, poderia ter feito com a lib do React-Query, que melhoraria a performane e armazenamento, criando o componente com Infinite Pagination utilizando o hook, useInfinityQuery. Mas preferi fazer com o Hook personalizado, para demostrar meus conhecimentos sem ferramentas que facilitam, visto que não precisaria fazer nenhuma regra de paginação.

Da mesmo forma, poderia ter utiliza o Zustand e armazenado diretamente no estado o valor do asyncStorage, com o middleware do Zustand persist, mas preferi criar diretamente no asyncstorage e separar as funções tratadas nos helpers.

### Api

Para a estrutura da API, separei o código em serviços para facilitar a manutenção e garantir responsabilidades únicas. Também dividi o código em “escopos” e utilizei o Factory Design Pattern para facilitar alterações caso a API consumida seja modificada. Para segurança e facilidade de alteração, também adicionei BASE_URL no arquivo .env e optei por utilizar a biblioteca Axios para facilitar a conexão da API e criei hooks para fazer as chamadas dos dados.

### Dificuldades enfrentadas

- Nunca tinha utilizado a api do Pokemon, e senti uma dificuldade em manter a performance e reduzir as chamadas de endpoints, visto que para todos os dados do pokemon era necesário chamar um novo enpoint, fazendo com que na home, fossem chamados 3 enpoints, para retornar o nome, cor, foto e a dificuldade de captura, para todos os pokemons.

### Testes

Apliquei alguns testes unitários para componentes, screens e helpers, gostaria de ter aplicado mais alguns testes, porém iniciei o teste no final de doming, e acabei não tendo tempo de aplicar todos os testes em toda a aplicação. Para organização, separei todos eles na pasta “testes” e utilizei a biblioteca Jest.js para desenvolvê-los, seguindo o padrão Triple A (Arrange, Act, Assert).

A cobertura de testes para componentes, screens e helpers:

<img width="1405" alt="Captura de Tela 2024-08-06 às 15 47 27" src="https://github.com/user-attachments/assets/2fb54aa3-190b-4ef0-8604-8f95ed754d2c">

<img width="1406" alt="Captura de Tela 2024-08-06 às 15 47 41" src="https://github.com/user-attachments/assets/de8a1f2b-ab8e-4a77-9565-fc9c4d887d3a">

<img width="1405" alt="Captura de Tela 2024-08-06 às 15 47 54" src="https://github.com/user-attachments/assets/d5c33030-9ce0-4040-b195-97a5e9d57769">

## 🛠 Tecnologias utilizadas

For the development of this website, I used the following technologies:

- Visual Studio Code;
- React-Native
- Styled-Components
- JavaScript
- Typescript
- Jest.js
- Expo
- Axios

## 🚀 Como testar a aplicação

```bash
# Clone o repositório
git clone https://github.com/JoyceQuerubino/coffee-app

# Instale as dependências
npm install

# Execute o script
npx expo start
# O projeto inciará através do Expo em uma nova aba, e um QR Code estará disponível.

#caso queira ver a cobertura de testes, pode rodar:
npm run test:coverage

------------------------------------------------------------------
Para usar a aplicação
- Baixe o aplicativo 'Expo Go' no seu celular
- Clique em 'Scan QR Code' para escanear o código abaixo
- Ou copie e cole o link abaixo: https://expo.dev/preview/update?message=fix%3A%20refector%20abstraction%20components&updateRuntimeVersion=1.0.0&createdAt=2024-08-06T14%3A19%3A38.901Z&slug=exp&projectId=734cd460-a071-4cc5-9244-be445d9d4a65&group=9c26342d-b60a-4e8e-9755-8e597475717f
```

<img width="419" alt="Captura de Tela 2024-08-06 às 11 20 18" src="https://github.com/user-attachments/assets/cd169bde-4aa3-42da-aaed-ccf660860608">

---

<p align= center>
Developed by <strong>Joyce Querubino</strong>   -----   add me on <a href="https://www.linkedin.com/in/joyce-querubino/"target="_blank">Linkedin</a>
</p>
