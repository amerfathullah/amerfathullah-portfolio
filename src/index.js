import App from './App'
import './index.css'
import { hydrate, render } from "react-dom";

const rootElement = document.querySelector('#root');

if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
  } else {
    render(<App />, rootElement);
  }