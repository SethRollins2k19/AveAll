import { WFMComponent } from '../framework/index';


class AppComponent extends WFMComponent {
	constructor(config){
		super(config)
	}
}

export const appComponent = new AppComponent({
	selector: 'app-root',
	template: ` 
        <app-header-top></app-header-top>
		<app-header></app-header>
		<router-outlet></router-outlet>
		<app-footer></app-footer>
	`   
})