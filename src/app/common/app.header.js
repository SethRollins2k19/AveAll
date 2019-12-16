import { WFMComponent } from '../../framework/index';

class AppHeader extends WFMComponent {
    constructor(config){
        super(config);
    }
}

export const appHeader = new AppHeader({
    selector: 'app-header',
    template: `
		<div class="top-header">		 
			<div class="container">
				<div class="top-header__inner">
					<div class="profile">
						<div class="profile__item item--register">Register</div>
						<div class="profile__item item--sign">Sign in</div>
					</div>
				</div>
			</div>
		</div>
<header class="header">	
	<div class="header__logo">
	avenue
</div>
	<nav class="nav">
	    <div class="nav__sections">
            <a href="#" class="nav__item ">mens   </a>
            <a href="#woman" class="nav__item ">womens</a>
            <a href="#brand" class="nav__item ">the brand</a>
<!--            <a href="#stores" class="nav__item ">local stores</a>-->
            <a href="#lookbook" class="nav__item ">look book</a>    
        </div>  
<!--		<div class="nav__search"><input class="nav__input-search" type="text" placeholder="search"><bottom class="nav__search-bottom" type="submit"><i class="fas fa-search"></i></bottom></div>-->
	</nav>
			
</header>
	 `
})