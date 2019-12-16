import {WFMComponent} from "../../framework";
import { wfm } from "../../framework/tools/unit";
//Import photos
import {photo} from "../../img/card-photo.png"
import {photo2} from "../../img/card-photo2.png"
import {photo3} from "../../img/card-photo3.png"
import {photo4} from "../../img/card-photo4.png"
import {photo5} from "../../img/card-photo5.png"
import {photo6} from "../../img/card-photo6.png"

class MenPageComponent extends WFMComponent {

    constructor(config) {
        super(config)
        this.isScrole = 0;
    }

    events() {
        return {
            'click .men-intro__link': 'addScroll',
        }
    }
    addScroll({target}){
        // if(isScroll == 0) {
        // isScroll = 1;
        scrollToPosition(target)
        // } else return;
        // console.log(selector);
        function scrollToPosition(selector){
            let ourPos = pageYOffset;
            let contPos = document.querySelector(selector.dataset.scrollId).getBoundingClientRect().top + pageYOffset - 120;
            if(ourPos > contPos){
                let timer = setInterval(()=>{
                    if (pageYOffset < contPos){
                        clearInterval(timer);
                        // isScroll = 0;
                    } else {
                        scrollTo(0, ourPos);
                        ourPos-=10;
                    }}, 5)
            } else {
                let timer = setInterval(() => {
                    if (pageYOffset > contPos ){
                        clearInterval(timer);
                        // isScroll = 0;
                    } else {
                        scrollTo(0, ourPos);
                        ourPos+=10;
                    }
                }, 5)
            }
        }
    }

}


export const menPageComponent = new MenPageComponent({
    selector: 'app-men-page',
    template: `
        <header class="men-intro">
            <div class="container">
                <div class="men-intro__inner">
                    <a class="men-intro__link" data-scroll-id="#shop">shop men\`s collection</a>
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
                <div class="men-content__card"><img src="assets/img/card-photo.png" alt="" class="men-content__img">
                    <div class="men-content__price">£29.95</div>
                    <div class="men-content__info">
                        <div class="men-content__title">Women burnt orange casual tee  £29.95</div>
                        <div class="men-content__description">Classic casual t-shirt for women on the move. 
                                100% cotton.
                        </div>
                    </div>
                </div>            
                <div class="men-content__card"><img src="assets/img/card-photo.png" alt="" class="men-content__img"><div class="men-content__price">£29.95</div>
                    <div class="men-content__info">
                        <div class="men-content__title">Women burnt orange casual tee  £29.95</div>
                        <div class="men-content__description">Classic casual t-shirt for women on the move. 
                                100% cotton.
                        </div>
                    </div></div>            
                <div class="men-content__card men-content__card--hit"><img src="assets/img/card-photo.png" alt="" class="men-content__img"><div class="men-content__price">£29.95</div>
                    <div class="men-content__info">
                        <div class="men-content__title">Women burnt orange casual tee  £29.95</div>
                        <div class="men-content__description">Classic casual t-shirt for women on the move. 
                                100% cotton.
                        </div>
                    </div></div>            
                <div class="men-content__card men-content__card--hit"><img src="assets/img/card-photo.png" alt="" class="men-content__img"><div class="men-content__price">£29.95</div>
                    <div class="men-content__info">
                        <div class="men-content__title">Women burnt orange casual tee  £29.95</div>
                        <div class="men-content__description">Classic casual t-shirt for women on the move. 
                                100% cotton.
                        </div>
                    </div></div>            
                <div class="men-content__card"><img src="assets/img/card-photo.png" alt="" class="men-content__img"><div class="men-content__price">£29.95</div>
                    <div class="men-content__info">
                        <div class="men-content__title">Women burnt orange casual tee  £29.95</div>
                        <div class="men-content__description">Classic casual t-shirt for women on the move. 
                                100% cotton.
                        </div>
                    </div></div>            
                <div class="men-content__card"><img src="assets/img/card-photo.png" alt="" class="men-content__img">
                    <div class="men-content__price">£29.95</div>
                    <div class="men-content__info">
                        <div class="men-content__title">Women burnt orange casual tee  £29.95</div>
                        <div class="men-content__description">Classic casual t-shirt for women on the move. 
                                100% cotton.
                        </div>
                    </div>
                </div>            
            </div>
        
        
</main>
    `
})