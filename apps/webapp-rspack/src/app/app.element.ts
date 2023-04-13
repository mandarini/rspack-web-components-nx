import './app.element.css';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.innerHTML = `
    <div class="katerina"></div>
    <div class="anastasis"></div>
    <div class="manmu"></div>
      `;
  }
}
customElements.define('myworksp-root', AppElement);
