
export enum imgMain {
	'img' = 'img',
}
	

class imgMainProps extends HTMLElement {
	img?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<imgMainProps, null> = {
			img: null,
			tittle: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: imgMainProps, oldValue: string | undefined, newValue: string | undefined) {
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
				<link rel="stylesheet" href=zProyecto_Cookun/src/components/homeComponents/filters/filters.css
			<button> 
				<img class="portadas" src="${this.img}" alt="">
			</button>
          `;
		}
	}
}

customElements.define('img-main', imgMainProps);
export default imgMainProps;

