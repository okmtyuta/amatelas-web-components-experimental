import { init } from './init'

import './reset.css'
import "./main.css"

init()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* HTML */ `
  <div class="wrap">
    <amatelas-switch></amatelas-switch>
  </div>
`
