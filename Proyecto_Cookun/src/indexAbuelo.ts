 import OrangeButtons, { Attribute } from './components/homeComponents/navbutton/barbuttons'
 
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
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML= `

      <home>
        <nav>
          <button>Home</button>
          <button>Login</button>

          <links> 
              <a>Explore</a>
              <a>Create</a
          </links>

          <div class= "Search">
           
            <input type="text" placeholder="Search...">
          
          </div>
        
        </nav>
      
      </home>
   
      
      
      `;


      // Para meter elementos de componentes propios, los creas de esta manera
      const barButtonHome = this.ownerDocument.createElement('bar-button') as OrangeButtons;

      barButtonHome.setAttribute(Attribute.button, 'Home');

      // Append child ya sea al shadow root o a algun container 
      // const contenedor = this.ownerDocument.createElement('div') ======> contenedor.appendChild(barButtonHome)
      this.shadowRoot?.appendChild(barButtonHome);
    } 
  }
}

customElements.define('app-container', AppContainer);

