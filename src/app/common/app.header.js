import { WFMComponent } from '../../framework/index';

class AppHeader extends WFMComponent {
    constructor(config){
        super(config);
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

export const appHeader = new AppHeader({
    selector: 'app-header',
    template: `
		
<header class="header">	
	<div class="header__logo">
	avenue
</div>
	<nav class="nav">
	    <div class="nav__sections">
            <a href="#" class="nav__item ">mens   </a>
            <a href="#woman" class="nav__item ">womens</a>
            <a href="#brand" class="nav__item ">the brand</a>
            <a href="#lookbook" class="nav__item ">look book</a>    
        </div>  
	</nav>
			
</header>
	 `
})