import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';


function fancyLog() {
    console.log("%c Rendered with 👉 👉👇", "background: purple; color: #FFF");
    console.log(store.getState());
}
  

const render = () => {
    fancyLog();
    return ReactDOM.render(<App />, document.getElementById('root')) 
};

render();

store.subscribe(render);

serviceWorker.unregister();
