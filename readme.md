# One Blue

O escopo principal do projeto consiste na criação das páginas de login e cadastro, utilizando as tecnologias descritas como requisito. Como adicional, para agregar o projeto, foram criadas as páginas de recuperação de conta e recuperação de senha do usuário. O projeto em si respeita totalmente os conceitos de responsividade, usabilidade e acessibilidade.

## Instalação

Para instalar as dependências do projeto, escolha uma das opções abaixo.

```bash
npm install
```
ou
```bash
yarn install
```

## Uso

Para a utilização e integração do Front-End ao Back-End, é necessário executar o serviço Back-End disponibilizado pela equipe, que está disponível no link do [GitHub](https://github.com/oneblueapp/testing_react_js). Para que a integração ocorra, é necessário liberar o Cors no Back-End adicionando a linha de código abaixo no arquivo **server.ts**, dentro da raiz do projeto.


```javascript
import express, { json } from 'express'
import { routes } from './Routes/routes'
const cors = require('cors')
const app = express()
const PORT = 4000
app.use(cors()) //Liberação do cors para a integração do Front-End
app.use(json())
app.use(routes)
app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`))
```