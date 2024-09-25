export enum Attribute  {
    "logo" ="logo", 
    "explore"= "explore", 
    "create"= "create",
    "textbutton"="textbutton",
    "logout"= "logout", 
}

class Nav extends HTMLElement {
    logo?:string; 
    explore?:string;
    create?:string;
    textbutton?:string;
    logout?:string;




    static get observedAttributes(){
        return

    }
    attributeChangedCallback (propName:Attribute,oldValue: string | undefined, newValue: string |undefined ) {
     
        switch (propName) {
            case Attribute.create:  
            
            break;

            default: 
                break; 


        }
    };

    constructor(){

        super();
    
        this.attachShadow({mode:"open"})
    }
    
    connectedCallback(){
        this.render();

    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = ``;
        }
    }
}



customElements.define('card-home', Nav);
export default Nav;
