import { init } from '@okmtyuta/amatelas-web-components-experimental'

init()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <amatelas-list>
    <amatelas-list-item>list 1</amatelas-list-item>
    <amatelas-list-item>list 2</amatelas-list-item>
    <amatelas-list-item>list 3</amatelas-list-item>
  </amatelas-list>
`
