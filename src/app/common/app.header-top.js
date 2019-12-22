import { WFMComponent } from '../../framework/index';
import {templateComponent} from "../pages/template.component";

class AppHeaderTop extends WFMComponent {
    constructor(config){
        super(config);
        this.isLoggined = false;
    }

    events(){
        return{
            'click .profile__item': 'signUpIn'
        }
    }
    signUpIn(){
        window.location.hash = 'registration';
    }

}


export const appHeaderTop = new AppHeaderTop({
    selector: 'app-header-top',
    template: `
        <div class="top-header" id="header-top">		 
			<div class="container">
				<div class="top-header__inner">
					<div class="profile">
						<div class="profile__item item--register">Register</div>
						<div class="profile__item item--sign">Sign in</div>
					</div>
				</div>
			</div>
		</div>
    `
})