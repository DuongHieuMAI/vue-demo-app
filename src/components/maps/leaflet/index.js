import { Icon } from 'leaflet'
// import 'leaflet/dist/leaflet.css'

delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: 'leaflet/dist/images/marker-icon-2x.png',
  iconUrl: 'leaflet/dist/images/marker-icon.png',
  shadowUrl: 'leaflet/dist/images/marker-shadow.png',
})
