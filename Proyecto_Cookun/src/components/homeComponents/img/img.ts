export enum Attribute {

    "image" ="image",
  

}

export class images extends HTMLElement {

    image?: string ;


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
            
            <div class= "images">
                <img src="${this.image}"></img> 
            
            </div>

            `;

        }

    }
}

customElements.define ('search-bar', images);
export default images;
