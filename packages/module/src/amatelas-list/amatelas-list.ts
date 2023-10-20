export class AmatelasList extends HTMLElement {
  shadow: ShadowRoot
  constructor() {
    super()

    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadow.innerHTML = `
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

export class AmatelasListItem extends HTMLElement {
  shadow: ShadowRoot
  constructor() {
    super()

    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadow.innerHTML = `
    <style>
    .amatelas-list-item {
      text-align: -webkit-match-parent;
      line-height: 1.7;
    }
    .amatelas-list-item::marker {
      color: #999;
    }
    </style>
      <li class="amatelas-list-item">
        <slot></slot>
      </li>
      `
  }
}
