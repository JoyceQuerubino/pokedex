
![Frame 1000001175](https://github.com/user-attachments/assets/bb413121-867d-458f-b558-da51a53d05ea)

Descriçao

## Funcioanamento?

Funcionamento

## Telas e Preview

![Frame 48095509 (1)](https://github.com/user-attachments/assets/d5fd7f51-feec-4525-a4e8-b06a9b35f7d7)

# Sobre o design

- Criei um design simples, mantendo os componentes de forma arredondada e usando multiplos de 4 em todos os componentes;
- Criei um thema personalizado para facilitar a reutilizaçao de código e organização, no qual separei as cores, tamanhos e fontes utilizadas no app.
- Criei uma função de cores personalizada, visto que as cores retornadas pela api do Pokemon, não eram atraentes. Eu poderia ter deixado o app mais performático ao utilizar a lib react-native-image-colors para pegar a cor predominante de uma image, ao invés de chamar um outro endpoint que retorna as cores, porém teria que ejjetar o expo e a fim de facilitar a analise deste teste, preferi usar o expo Go e adicionar o QRCode público neste readme.
- Não utilizei nenhuma lib de componentes prontos de UI, preferi criar meus próprios componentes personalizados usando o styled-componentes.

## Estrutura do app e desenvolvimento

Utilizei os Principios SOLIDS

Arquitetura

Obs.: Ao invés de utilizar os Hooks personalizados para as chamadas da API, poderia ter feito com a lib do React-Query, que melhoraria a performane e armazenamento, criando o componente com Infinite Pagination utilizando o hook, useInfinityQuery. Mas preferi fazer com o Hook personalizado, para demostrar meus conhecimentos sem ferramentas que facilitam, visto que não precisaria fazer nenhuma regra de paginação.

Da mesmo forma, poderia ter utiliza o Zustand e armazenado diretamente no estado o valor do asyncStorage, com o middleware do Zustand persist, mas preferi criar diretamente no asyncstorage e separar as funções tratadas nos helpers.

### Api

For the API structure, I separated the code into services to facilitate maintenance and ensure single responsibilities. I also divided the code into "scopes" and used the Factory Design Pattern to ease changes in case the consumed API is modified. For security and ease of change, I also added the BASE_URL in the .env file.

I chose to use the Axios library for easy API connection and the React Query library (now called Tanstack) for easy API consumption and cache control, one of the most interesting features of this tool. In the useListCoffees hook, I added a select parameter, which keeps the cached data on the app screen when a refetch is performed and only updates it if there are changes after making the GET request. This way, the user experiences a smooth application flow and avoids unnecessary loading.

### Dificuldades enfrentadas

### Testes

For all components and helpers, I applied unit tests, and for the screen, I created an integration test. For organization, I separated all of them into the "tests" folder and used the Jest.js library to develop them, following the Triple A pattern (Arrange, Act, Assert).

(\*\*\* add a print)

A cobertura de testes para componentes, screens e helpers ficou em 100%.

(\*\* add prints testes)

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
