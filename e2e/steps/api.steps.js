const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const fetch = require('node-fetch');
const { expect } = require('chai');

setDefaultTimeout(30000);

const BASE_URL = 'https://jsonplaceholder.typicode.com';
let response, responseBody;

Given('que la API está disponible', async () => {
  const res = await fetch(`${BASE_URL}/users`);
  expect(res.status).to.equal(200);
});

When('hago un GET a {string}', async (endpoint) => {
  response = await fetch(`${BASE_URL}${endpoint}`);
  responseBody = await response.json();
});

Then('el status code debe ser {int}', async (statusCode) => {
  expect(response.status).to.equal(statusCode);
});

Then('la respuesta debe contener una lista de usuarios', async () => {
  expect(responseBody).to.be.an('array');
  expect(responseBody.length).to.be.greaterThan(0);
});

Then('el usuario debe tener nombre y email', async () => {
  expect(responseBody).to.have.property('name');
  expect(responseBody).to.have.property('email');
});