import { init } from './init'

import './reset.css'

init()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
  <amatelas-list >
    <amatelas-list-item>list 1</<amatelas-list-item>
    <amatelas-list-item>list 2</<amatelas-list-item>
    <amatelas-list-item>list 3</<amatelas-list-item>
  </amatelas-list>
</div>
`
