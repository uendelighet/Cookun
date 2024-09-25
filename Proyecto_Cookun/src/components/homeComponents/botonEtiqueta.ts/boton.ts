class FilterButton extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['image', 'title'];
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		if (oldValue !== newValue) {
			this[propName] = newValue;
			this.render();
		}
	}

	render() {
		this.shadowRoot.innerHTML = `
			<link rel="stylesheet" href="./src/components/myComponent/explore.css">
			<button> 
				<img class="portadas" src="${this.image}" alt="">
				<h1>${this.title}</h1>
			</button>
		`;
		
	}
}

customElements.define('filter-button', FilterButton);
export default FilterButton;