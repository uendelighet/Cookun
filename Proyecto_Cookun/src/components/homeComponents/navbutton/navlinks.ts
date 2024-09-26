export enum Attribute {

    "ulinks" ="ulinks",
  

}

export class Links extends HTMLElement {

    ulinks?: string ;


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
            
                <div class="links">
                            
                        <a>${this.ulinks || 'No links' }</a>
                          
                </div>     


            `;

        }

    }
}

customElements.define ('search-bar', Links);
export default Links;
