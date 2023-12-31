import { AmatelasSwitch } from './amatalas-switch'
import { AmatelasList, AmatelasListItem } from './amatelas-list/amatelas-list'

export const init = () => {
  customElements.define('amatelas-list', AmatelasList)
  customElements.define('amatelas-list-item', AmatelasListItem)
  customElements.define('amatelas-switch', AmatelasSwitch)
}
