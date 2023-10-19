export class AmatelasList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <ul>
        <li>list 1</li>
        <li>list 2</li>
        <li>list 3</li>
      </ul>
    `;
  }
}
