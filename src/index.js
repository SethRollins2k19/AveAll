import { appModule } from './app/app.module';
import { bootstrap,wfm } from './framework/index';

import './css/style.main.css';
import './css/style.men.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all';

// wfm.delay(2000).then(()=>{
	
// })
bootstrap(appModule);