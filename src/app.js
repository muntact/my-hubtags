/* 3rd party libs */
import app from 'ampersand-app';

/* our components */
import Router from './router';
/* Models */
import Me from './models/me';

/* Global style bind */
import './styles/main.styl'

//Bind for console logging.
window.app = app;

app.extend({
  init() {
    this.me = new Me();
    this.router = new Router();
    this.router.history.start();
  },
});

app.on('local', function() {
  console.log(arguments);
});

app.init();
