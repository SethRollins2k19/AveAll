import {WFMComponent} from "../../framework";
import { wfm } from "../../framework/tools/unit";

import { templateComponent } from "./template.component";

import {photo} from "../../img/card-photo-woman.jpg"
import {photo2} from "../../img/card-photo-woman2.png"
import {photo3} from "../../img/card-photo-woman3.png"
import {photo4} from "../../img/card-photo-woman4.png"
import {photo5} from "../../img/card-photo-woman5.jpg"
import {photo6} from "../../img/card-photo-woman6.png"

class WomenPageComponent extends WFMComponent{
    constructor(config) {
        super(config)
        this.isScrole = 0;
    }

    events() {
        return {
            'click .women-intro__link': 'addScroll',
            'click .women-content__card': 'openDetail'
        }
    }

    openDetail({target}){
        let elem;
        scrollTo(0, 150);
        if(target.parentElement.classList.contains('women-content__card')){
            elem = target.parentElement
        } else if (target.parentElement.parentElement.classList.contains('women-content__card')){
            elem = target.parentElement.parentElement
        }
        window.location.hash = 'template';
        templateComponent.template = `
         <div class="template-intro">
                <div class="container">
                    <div class="template-intro__inner">
                        <h1 class="template-intro__title">product</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="template">
                    <div class="template__image">
                        <img src="${elem.dataset.src}" alt="" class="template__photo">             
                    </div>
                    <div class="template__info">
                        <div class="template__title">          
                            ${elem.dataset.name}
                        </div>
                        <div class="template__price">
                            £${elem.dataset.cost}
                        </div>
                        <div class="template__availability">
                            availability: <a class="template__link" href="https://www.tsum.ru/" target="_blank">TSUM</a>
                        </div>
                        <div class="template__tags">
                            Tags: <span class="template__tag">Classic, </span><span class="template__tag">Casual, </span><span class="template__tag">V-neck ,</span><span class="template__tag">Loose</span>
                        </div>
                        <div class="template__description">
                            ${elem.dataset.description}
                            <ul class="template__advantages">
                                <li class="template__advantage">Elasticated cuffs</li>
                                <li class="template__advantage">Casual fit</li>
                                <li class="template__advantage">100% Cotton</li>
                                <li class="template__advantage">Free shipping with 4 days delivery</li>
                            </ul>
                        </div>
                        <button onclick="window.history.back()" class="button template__back">back</button>
                        <a class="template__button button">add to lookBook</a>
                    </div>
                </div>
            </div>
        `
    }
    addScroll({target}){
        wfm.scrollInit(target, this.isScrole)
    }
}

export const womenPageComponent = new WomenPageComponent({
    selector: 'app-women-page',
    template: `
        
        <header class="women-intro">
            <div class="container">
                <div class="women-intro__inner">
                    <a class="women-intro__link button" data-scroll-id="#shop">shop women\`s collection</a>
                </div>
        </div>
</header>
    
    <main class="women-content">
        
            <header class="sort">
                <a href="" class="sort__link">popular</a>
                <a href="" class="sort__link">new arrivals</a>
                <a href="" class="sort__link">best sellers</a>
                <a href="" class="sort__link">special offers</a>
                <a href="" class="sort__link">coming soon</a>
            </header> 
            <div class="women-content__inner" id="shop">
                <div class="women-content__card" data-src="assets/img/card-photo-woman6.png"
                                               data-name="ave classic sweatshirt"
                                               data-cost="29.95"
                                               data-description="
                                               Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.
                                               "><img src="assets/img/card-photo-woman6.png" alt="" class="women-content__img">
                    <div class="women-content__price">£29.95</div>
                    <div class="women-content__info">
                        <div class="women-content__title">Women burnt orange casual tee</div>
                        <div class="women-content__description">Classic casual t-shirt for women on the move. 
                                100% cotton.
                        </div>
                    </div>
                </div>            
                 <div class="women-content__card" data-src="assets/img/card-photo-woman2.png"
                                               data-name="ave classic sweatshirt"
                                               data-cost="199.99"
                                               data-description="
                                               Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.
                                               "><img src="assets/img/card-photo-woman2.png" alt="" class="women-content__img">
                    <div class="women-content__price">£199.99</div>
                    <div class="women-content__info">
                        <div class="women-content__title">Women burnt orange casual tee</div>
                        <div class="women-content__description">Classic casual t-shirt for women on the move. 
                                100% cotton.
                        </div>
                    </div>
                </div> 
                 <div class="women-content__card women-content__card--hit" data-src="assets/img/card-photo-woman3.png"
                                               data-name="ave classic sweatshirt"
                                               data-cost="329.95"
                                               data-description="
                                               Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.
                                               "><img src="assets/img/card-photo-woman3.png" alt="" class="women-content__img">
                    <div class="women-content__price">£329.95</div>
                    <div class="women-content__info">
                        <div class="women-content__title">Women burnt orange casual tee </div>
                        <div class="women-content__description">Classic casual t-shirt for women on the move. 
                                100% cotton.
                        </div>
                    </div>
                </div> 
                 <div class="women-content__card women-content__card--hit" data-src="assets/img/card-photo-woman4.png"
                                               data-name="ave classic sweatshirt"
                                               data-cost="1900.95"
                                               data-description="
                                               Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.
                                               "><img src="assets/img/card-photo-woman4.png" alt="" class="women-content__img">
                    <div class="women-content__price">£1900.95</div>
                    <div class="women-content__info">
                        <div class="women-content__title">Women burnt orange casual tee </div>
                        <div class="women-content__description">Classic casual t-shirt for women on the move. 
                                100% cotton.
                        </div>
                    </div>
                </div> 
                 <div class="women-content__card" data-src="assets/img/card-photo-woman5.jpg"
                                               data-name="ave classic sweatshirt"
                                               data-cost="229.95"
                                               data-description="
                                               Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.
                                               "><img src="assets/img/card-photo-woman5.jpg" alt="" class="women-content__img">
                    <div class="women-content__price">£229.95</div>
                    <div class="women-content__info">
                        <div class="women-content__title">Women burnt orange casual tee  </div>
                        <div class="mwomen-content__description">Classic casual t-shirt for women on the move. 
                                100% cotton.
                        </div>
                    </div>
                </div> 
                 <div class="women-content__card" data-src="assets/img/card-photo-woman.jpg"
                                               data-name="ave classic sweatshirt"
                                               data-cost="329.95"
                                               data-description="
                                               Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.
                                               "><img src="assets/img/card-photo-woman.jpg" alt="" class="women-content__img">
                    <div class="women-content__price">£329.95</div>
                    <div class="women-content__info">
                        <div class="women-content__title">Women burnt orange casual tee </div>
                        <div class="women-content__description">Classic casual t-shirt for women on the move. 
                                100% cotton.
                        </div>
                    </div>
                </div>         
            </div>
        
        
</main>
    `
})