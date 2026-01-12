class AmazingButton extends HTMLElement {
  connectedCallback() {
    console.log("AmazingButton connected");
  }
}

customElements.define("amazing-button", AmazingButton);
