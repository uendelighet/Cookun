export enum Attribute {
    search = "search",
}

export class Search extends HTMLElement {

    search?: string;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return Object.values(Attribute); 
    }

    // Reacciona a los cambios de atributos
    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string) {
        if (oldValue !== newValue) {
            this[propName] = newValue; // Actualiza el valor de la propiedad
            this.render(); // Vuelve a renderizar cuando el valor cambia
        }
    }

    connectedCallback() {
        this.render(); // Renderiza cuando el componente se agrega al DOM
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./src/components/homeComponents/navbutton/barbuttons.css">  
            
            <div class="search-bar">
                <input type="text" placeholder="${this.search || 'No search'}">
            </div>
            `;
        }
    }
}

customElements.define('search-bar', Search);
export default Search;
