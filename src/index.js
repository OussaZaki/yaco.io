import './index.css'
import renderApplication from './core/application'
import registerServiceWorker from './registerServiceWorker'


renderApplication(document.getElementById('root'))
registerServiceWorker()

