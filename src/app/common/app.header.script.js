import { WFMComponent} from '../../framework/index';

class AppHeaderScript extends WFMComponent {
	constructor(config) {
		super(config);
	}
}
export const appHeaderScript = new AppHeaderScript({
	selector: 'head-script',
	
})