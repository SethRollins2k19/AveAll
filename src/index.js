import { appModule } from './app/app.module';
import { bootstrap,wfm } from './framework/index';

import './css/style.main.css';
import './css/style.men.css';
import './css/style.template.css';
import './css/style.women.css'
import './css/style.brand.css'
import './css/style.lookbook.css'
import './css/style.footer.template.css'

import '../node_modules/@fortawesome/fontawesome-free/js/all';

// wfm.delay(2000).then(()=>{
	
// })
bootstrap(appModule);