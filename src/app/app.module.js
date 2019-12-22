import { WFMModule } from '../framework/index';
import { appComponent } from './app.component';
import { appHeader } from './common/app.header'
import { appFooter} from "./common/app.footer";
import {appRoutes} from "./app.routes";
import {appHeaderTop} from "./common/app.header-top";

class AppModule extends WFMModule {
	constructor(config) {
		super(config)
	}
}

export const appModule = new AppModule({
	components: [
	    appHeaderTop,
		appHeader,
        appFooter
	],
	bootstrap: appComponent,
    routes: appRoutes
})