import "regenerator-runtime/runtime"; /* https://stackoverflow.com/a/61517521 babel 7 webpack polyfill es8 async/await */
import "../favicon.ico";
import './styles.scss';
import App from './app';

document.addEventListener("DOMContentLoaded", () => new App());
