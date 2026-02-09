# 🌤️ App de Clima

Aplicativo web simples que permite pesquisar uma cidade e exibir **a temperatura atual** e **a condição climática** em tempo real, utilizando uma **API REST pública**.

O fundo da aplicação muda dinamicamente de acordo com o clima (sol, chuva, neve ou nublado).

---

## 🚀 Funcionalidades

- Buscar clima pelo **nome da cidade**
- Exibir:
  - Temperatura atual
  - Condição climática (Ensolarado, Chuvoso, Nevando ou Nublado)
- Alterar o **GIF de fundo** conforme o clima
- Interface simples e responsiva

---

## 🛠️ Tecnologias utilizadas

- HTML
- CSS  
- JavaScript (Vanilla JS)  
- **Open-Meteo API** (API REST pública)
- IA

---

## 🌐 API utilizada

- **Geocoding API (Open-Meteo)**  
  Converte o nome da cidade em latitude e longitude.

- **Weather API (Open-Meteo)**  
  Retorna dados meteorológicos atuais, como:
  - Temperatura
  - Código da condição climática (`weathercode`)

Documentação oficial:  
https://open-meteo.com/

---

## 📁 Estrutura do projeto

├── index.html
├── css/
│ └── style.css
├── js/
│ ├── api.js
│ ├── main.js
│ └── ui.js
└── assets/
└── images/
├── sol.gif
├── chuva-kyogre.gif
├── nublado.gif
├── neve.gif


---

## ▶️ Como executar o projeto

1. Clone ou baixe este repositório
2. Abra a pasta do projeto
3. Dê **duplo clique no arquivo `index.html`**
4. Digite o nome de uma cidade e clique em **Buscar temperatura**

> Não é necessário instalar dependências ou usar servidor.

---

## 📌 Observações

- A condição climática é determinada a partir do `weathercode` retornado pela Open-Meteo.
- A aplicação mostra apenas quatro estados climáticos:
  - Ensolarado
  - Chuvoso
  - Nevando
  - Nublado

---

## 📚 Aprendizados

- Consumo de API REST pública
- Manipulação do DOM com JavaScript
- Organização de projeto frontend
- Uso de dados em tempo real

---

## 👤 Autor

Projeto desenvolvido para fins de estudo e aprendizado.
