// The controller knows how to glue everything together
const router = require('express').Router();

module.exports = class Controller {
  constructor(namespace){
    const route = `/${namespace || ''}`;
  }
}