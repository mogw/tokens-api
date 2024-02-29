# Crypto Token API

## Background of Tokens in the Crypto Industry
Tokens represent a broad range of digital assets in the crypto industry, including but not limited to cryptocurrencies, utility tokens, security tokens, and non-fungible tokens (NFTs). 

They serve various purposes:
- Cryptocurrencies: Like Bitcoin or Ether, meant to be used as a medium of exchange.
- Utility Tokens: Provide access to a project's products or services.
- Security Tokens: Represent investment contracts and are subject to regulatory oversight.
- Non-Fungible Tokens (NFTs): Represent ownership or proof of authenticity of unique items or content.

Tokens are typically issued on a blockchain platform and can be traded on various exchanges and platforms within the crypto ecosystem.

## Overview of project

This project provides a REST API for managing crypto tokens, offering functionalities to create and retrieve token information from a PostgreSQL database. Tokens in the crypto industry represent a unit of value issued by a project or organization and can be used for investment purposes, to purchase goods or services, or to participate in the project's ecosystem. They are a fundamental aspect of most blockchain-based projects.

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- PostgreSQL
- TypeScript

### Setting Up the Project

1. **Clone the Repository**

   ```bash
   git clone https://github.com/mogw/tokens-api.git
   cd tokens-api
   ```
2. **Install Dependencies**

   ```bash
   npm install
   ```
3. **Database Configuration**

   ```bash
   cp .env.example .env
   ```
   Please update `.env` and `.env.test` with your PostgreSQL credentials

### Running the Application

1. **Start the Application**

   ```bash
   npm run build
   npm start
   ```
2. **Development Mode**

   ```bash
   npm run dev
   ```

   The server should now be running on [`http://localhost:3000`](http://localhost:3000).

### Testing the Application

1. **Test command**

   ```bash
   npm run test
   ```

## API Documentation

### Create a New Token

- URL: /api/v1/tokens
- Method: POST
- Body:
  ```json
  {
    "name": "Token Name",
    "ticker": "TokenTicker",
    "description": "A brief description of the token."
  }
  ```
- Success Response: A JSON object containing the created token details, including its id.
  ```json
  {
    "id": 1,
    "name": "Ethereum",
    "ticker": "ETH",
    "description": "Decentralized platform that runs smart contracts."
  }
  ```

### Retrieve a Token by ID

- URL: /api/v1/tokens/:id
- Method: GET
- URL Params: id=[integer]
- Success Response: A JSON object containing the token details if found.
  ```json
  {
    "id": 1,
    "name": "Ethereum",
    "ticker": "ETH",
    "description": "Decentralized platform that runs smart contracts."
  }
  ```
  If the token with the specified ID does not exist, a 404 Not Found status code is returned with an appropriate message.


### Error Handling
The API uses standard HTTP status codes to indicate the success or failure of requests. Common responses include:

- 200 OK: The request was successful.
- 400 Bad Request: The request was malformed or missing required fields.
- 404 Not Found: The requested resource was not found.
- 500 Internal Server Error: An error occurred on the server.

## Deployment
- Live URL: [http://35.178.31.155/](http://35.178.31.155/)
- Postman Collection: [here](https://github.com/mogw/tokens-api/blob/main/tokens-api.postman_collection.json)