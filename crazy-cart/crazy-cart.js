class CrazyCartButton extends HTMLElement {
  connectedCallback() {
    console.log("CrazyCartButton connected");
  }
}

customElements.define("crazy-cart-button", CrazyCartButton);
