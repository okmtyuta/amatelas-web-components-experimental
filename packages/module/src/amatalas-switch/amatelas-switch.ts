import { color } from '../theme/js/color'

export class AmatelasSwitch extends HTMLElement {
  shadow: ShadowRoot
  _id: string
  baseZIndex: number
  switchBarZIndex: number
  switchBallZIndex: number
  transitionTime: number
  switchBarWidth: number
  switchBarHeight: number
  switchBarRadius: any
  switchBarLeft: number
  switchBallRadius: number

  constructor() {
    super()

    this.shadow = this.attachShadow({ mode: 'open' })
    this._id = crypto.randomUUID()

    this.baseZIndex = 0
    this.switchBarZIndex = this.baseZIndex
    this.switchBallZIndex = this.baseZIndex + 10
    this.transitionTime = 0.2
    this.switchBarWidth = 100
    this.switchBarHeight = 10
    this.switchBarRadius = this.switchBarHeight / 2
    this.switchBarLeft = 0
    this.switchBallRadius = 15
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadow.innerHTML = /* HTML */ `
      <style>
        .switch-input {
          display: none;
        }
        .switch {
          display: inline-block;
          position: relative;
          height: ${this.switchBarRadius * 2}px;
          width: ${this.switchBarWidth + this.switchBarLeft * 2}px;
        }
        .switch > .switch-ball {
          position: absolute;
          top: 50%;
          display: inline-block;
          width: ${this.switchBallRadius * 2}px;
          height: ${this.switchBallRadius * 2}px;
          border-radius: 50%;
          transition: all ${this.transitionTime}s;
          z-index: ${this.switchBallZIndex};
          box-shadow:
            0px 1px 1px -1px rgba(0, 0, 0, 0.2),
            0px 1px 1px 0px rgba(0, 0, 0, 0.14),
            0px 1px 3px 0px rgba(0, 0, 0, 0.12);
        }
        .switch:has(.switch-input:not(:checked)) > .switch-ball {
          left: 0;
          transform: translateY(-50%);
          -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          background-color: white;
        }
        .switch:has(.switch-input:checked) > .switch-ball {
          transform: translate(
            ${this.switchBarWidth -
            2 * (this.switchBallRadius - this.switchBarLeft)}px,
            -50%
          );
          -webkit-transform: translate(
            ${this.switchBarWidth -
            2 * (this.switchBallRadius - this.switchBarLeft)}px,
            -50%
          );
          -ms-transform: translate(
            ${this.switchBarWidth -
            2 * (this.switchBallRadius - this.switchBarLeft)}px,
            -50%
          );
          background-color: ${color.info};
        }
        .switch > .switch-bar {
          position: absolute;
          display: inline-block;
          top: 50%;
          left: ${this.switchBarLeft}px;
          transform: translateY(-50%);
          -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          width: ${this.switchBarWidth}px;
          height: ${this.switchBarHeight}px;
          border-radius: ${this.switchBarRadius}px;
          z-index: ${this.switchBarZIndex};
        }
        .switch:has(.switch-input:not(:checked)) > .switch-bar {
          background-color: ${color.accents3};
        }
        .switch:has(.switch-input:checked) > .switch-bar {
          background-color: #b9e3e9;
        }
      </style>

      <span class="switch">
        <input id=${this._id} class="switch-input" type="checkbox" />
        <label for=${this._id} class="switch-ball"></label>
        <label for=${this._id} class="switch-bar"></label>
      </span>
    `
  }
}
