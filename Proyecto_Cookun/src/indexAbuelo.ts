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
    } 
  }
}

customElements.define('app-container', AppContainer);

