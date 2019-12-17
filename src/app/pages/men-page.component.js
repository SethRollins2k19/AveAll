import {WFMComponent} from "../../framework";
import { wfm } from "../../framework/tools/unit";

import { templateComponent } from "./template.component";
//Import photos
import {photo} from "../../img/card-photo-man.png"
import {photo2} from "../../img/card-photo-man2.png"
import {photo3} from "../../img/card-photo-man3.png"
import {photo4} from "../../img/card-photo-man4.jpg"
import {photo5} from "../../img/card-photo-man5.jpg"
import {photo6} from "../../img/card-photo-man6.jpg"

class MenPageComponent extends WFMComponent {

    constructor(config) {
        super(config)
        this.isScrole = 0;
    }

    events() {
        return {
            'click .men-intro__link': 'addScroll',
            'click .men-content__card': 'openDetail'
        }
    }

    openDetail({target}){
        let elem;
        scrollTo(0, 150);
        if(target.parentElement.classList.contains('men-content__card')){
            elem = target.parentElement
        } else if (target.parentElement.parentElement.classList.contains('men-content__card')){
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


export const menPageComponent = new MenPageComponent({
    selector: 'app-men-page',
    template: `
        <header class="men-intro">
            <div class="container">
                <div class="men-intro__inner">
                    <a class="men-intro__link button" data-scroll-id="#shop">shop men\`s collection</a>
                </div>
        </div>
</header>
    
    <main class="men-content">
        
            <header class="sort">
                <a href="" class="sort__link">popular</a>
                <a href="" class="sort__link">new arrivals</a>
                <a href="" class="sort__link">best sellers</a>
                <a href="" class="sort__link">special offers</a>
                <a href="" class="sort__link">coming soon</a>
            </header> 
            <div class="men-content__inner" id="shop">
                <div class="men-content__card" data-src="assets/img/card-photo-man.png"
                                               data-name="ave classic sweatshirt"
                                               data-cost="29.95"
                                               data-description="
                                               Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.
                                               "><img src="assets/img/card-photo-man.png" alt="" class="men-content__img">
                    <div class="men-content__price">£29.95</div>
                    <div class="men-content__info">
                        <div class="men-content__title">Women burnt orange casual tee</div>
                        <div class="men-content__description">Classic casual t-shirt for women on the move. 
                                100% cotton.
                        </div>
                    </div>
                </div>            
                 <div class="men-content__card" data-src="assets/img/card-photo-man2.png"
                                               data-name="ave classic sweatshirt"
                                               data-cost="199.99"
                                               data-description="
                                               Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.
                                               "><img src="assets/img/card-photo-man2.png" alt="" class="men-content__img">
                    <div class="men-content__price">£199.99</div>
                    <div class="men-content__info">
                        <div class="men-content__title">Women burnt orange casual tee</div>
                        <div class="men-content__description">Classic casual t-shirt for women on the move. 
                                100% cotton.
                        </div>
                    </div>
                </div> 
                 <div class="men-content__card men-content__card--hit" data-src="assets/img/card-photo-man3.png"
                                               data-name="ave classic sweatshirt"
                                               data-cost="329.95"
                                               data-description="
                                               Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.
                                               "><img src="assets/img/card-photo-man3.png" alt="" class="men-content__img">
                    <div class="men-content__price">£329.95</div>
                    <div class="men-content__info">
                        <div class="men-content__title">Women burnt orange casual tee </div>
                        <div class="men-content__description">Classic casual t-shirt for women on the move. 
                                100% cotton.
                        </div>
                    </div>
                </div> 
                 <div class="men-content__card men-content__card--hit" data-src="assets/img/card-photo-man4.jpg"
                                               data-name="ave classic sweatshirt"
                                               data-cost="1900.95"
                                               data-description="
                                               Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.
                                               "><img src="assets/img/card-photo-man4.jpg" alt="" class="men-content__img">
                    <div class="men-content__price">£1900.95</div>
                    <div class="men-content__info">
                        <div class="men-content__title">Women burnt orange casual tee </div>
                        <div class="men-content__description">Classic casual t-shirt for women on the move. 
                                100% cotton.
                        </div>
                    </div>
                </div> 
                 <div class="men-content__card" data-src="assets/img/card-photo-man5.jpg"
                                               data-name="ave classic sweatshirt"
                                               data-cost="229.95"
                                               data-description="
                                               Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.
                                               "><img src="assets/img/card-photo-man5.jpg" alt="" class="men-content__img">
                    <div class="men-content__price">£229.95</div>
                    <div class="men-content__info">
                        <div class="men-content__title">Women burnt orange casual tee  </div>
                        <div class="men-content__description">Classic casual t-shirt for women on the move. 
                                100% cotton.
                        </div>
                    </div>
                </div> 
                 <div class="men-content__card" data-src="assets/img/card-photo-man6.jpg"
                                               data-name="ave classic sweatshirt"
                                               data-cost="329.95"
                                               data-description="
                                               Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.
                                               "><img src="assets/img/card-photo-man6.jpg" alt="" class="men-content__img">
                    <div class="men-content__price">£329.95</div>
                    <div class="men-content__info">
                        <div class="men-content__title">Women burnt orange casual tee </div>
                        <div class="men-content__description">Classic casual t-shirt for women on the move. 
                                100% cotton.
                        </div>
                    </div>
                </div>         
            </div>
        
        
</main>
    `
})