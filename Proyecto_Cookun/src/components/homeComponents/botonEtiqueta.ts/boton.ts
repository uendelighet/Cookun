
export enum FilterButtonProps {
	'img' = 'img',
	'tittle' = 'tittle',
}
	

class FilterButton extends HTMLElement {
	img?: string;
	tittle?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<FilterButtonProps, null> = {
			img: null,
			tittle: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: FilterButtonProps, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
				<link rel="stylesheet" href="Proyecto_Cookun/src/components/homeComponents/botonEtiqueta.ts/boton.css>
			<button> 
				<img class="portadas" src="${this.img}" alt="">
				<h1>${this.tittle}</h1>
			</button>
          `;
		}
	}
}

customElements.define('filter-button', FilterButton);
export default FilterButton;

