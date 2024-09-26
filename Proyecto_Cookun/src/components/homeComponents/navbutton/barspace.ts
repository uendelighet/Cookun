export enum Attribute {

    "search" ="search",
  

}

export class Search extends HTMLElement {

    search?: string ;


    constructor (){

        super(); 
        this.attachShadow({mode:'open'})
    }

    static get observedAttributes(){
        
        return Object.values (Attribute); 

    }

    connectedCallback(propName:Attribute, oldValue: string |undefined, newValue: string){
    }
    
    
    render (){

        if(this.shadowRoot) {
            this.shadowRoot.innerHTML= `
            <link rel="stylesheet" href= "./src/components/homeComponents/navbutton/barbuttons.css">  
            
                <div class="search-bar">
                            <input ${this.search || 'No search'}>
                          
                </div>     


            `;

        }

    }
}

customElements.define ('search-bar', Search);
export default Search;
