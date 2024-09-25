
//import * as Modules from'./components/indexPadre';
//import { workers } from './Data/data'; 



class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  connectedCallback(){
    this.render()
  }

  render() {
  
  }
}

customElements.define('app-container', AppContainer);

