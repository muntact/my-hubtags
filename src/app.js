import app from 'ampersand-app';

import Router from './router';
import './styles/main.styl'

//Bind for console logging.
window.app = app;

app.extend({
  init() {
    this.router = new Router();
    this.router.history.start();
  },
});

app.on('local', function() {
  console.log(arguments);
});

app.init();
