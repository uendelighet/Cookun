export enum Attribute {

    "button" ="button", 

}

export class OrangeButtons extends HTMLElement {

    button?: string ;

    constructor (){

        super(); 
        this.attachShadow({mode:'open'})
    }

    static get observedAttributes(){
        
        return Object.values (Attribute); 

    }

    attributeChangedCallback(propName:Attribute, oldValue: string |undefined, newValue: string){
        this[propName] = newValue ? newValue : undefined;
    }
    
    connectedCallback() {
        this.render();
    }
    
    render (){

        if(this.shadowRoot) {
            this.shadowRoot.innerHTML= `
            <link rel="stylesheet" href= "./src/components/homeComponents/navbutton/barbuttons.css">  
            <section>
                <button>${this.button || 'No button'}</button>
            </section>
            
            `;

        }

    }
}

customElements.define ('home-button', OrangeButtons);
export default OrangeButtons;
