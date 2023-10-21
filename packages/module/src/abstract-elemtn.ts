export class AbstractElement extends HTMLElement {
  shadow: ShadowRoot

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadow.innerHTML = /* HTML */ `
      <style>
        .amatelas-list {
          text-align: -webkit-match-parent;
          display: flex;
          flex-direction: column;
        }
      </style>

      <ul class="amatelas-list">
        <slot></slot>
      </ul>
    `
  }
}
