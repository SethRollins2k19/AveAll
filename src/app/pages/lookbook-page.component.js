import {wfm, WFMComponent} from "../../framework";
import {templateComponent} from "./template.component";


class LookBookPageComponent extends WFMComponent{
    constructor(config){
        super(config)
        this.isScrole = 0;
    }
    events(){
        return {
        'click .lookbook__item': 'openDetail'
        }
    }


    openDetail({target}){
        let elem;
        scrollTo(0, 150);
        if (target.classList.contains('lookbook__item')){
            elem = target
        } else if(target.parentElement.classList.contains('lookbook__item')){
            elem = target.parentElement
        } else if (target.parentElement.parentElement.classList.contains('lookbook__item')){
            elem = target.parentElement.parentElement
        } else if (target.parentElement.parentElement.parentElement.classList.contains('lookbook__item')){
            elem = target.parentElement.parentElement.parentElement;
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
<!--                        <a class="template__button button">add to lookBook</a>-->
                    </div>
                </div>
            </div>
        `
    }
    addScroll({target}){
        wfm.scrollInit(target, this.isScrole)
    }
}

export const lookbookPageComponent = new LookBookPageComponent({
    selector: 'app-lookbook-page',
    template: `
         <div class="lookbook-intro">
              <h1 class="lookbook-intro__title">our</h1> 
        </div>
        <div class="container">
             <div class="lookbook">
                 <div class="lookbook__item"  data-src="assets/img/card-photo-woman.png"
                                               data-name="ave classic sweatshirt"
                                               data-cost="332.11"
                                               data-description="Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.">
                    <img src="assets/img/card-photo-woman.png" alt="" class="lookbook__img">
                    <div class="lookbook-info">
                          <p class="lookbook-info__cost">£332.11</p>
                          <i class="fas fa-search lookbook__icon"></i>
                          <div class="lookbook-info__overview">
                              Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.
      
                        </div>              
                    </div>
                 </div> 
                 <div class="lookbook__item"  data-src="assets/img/card-photo-man.png"
                                               data-name="ave classic sweatshirt"
                                               data-cost="312.11"
                                               data-description="Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.">
                    <img src="assets/img/card-photo-man.png" alt="" class="lookbook__img">
                    <div class="lookbook-info">
                          <p class="lookbook-info__cost">£312.11</p>
                          <i class="fas fa-search lookbook__icon"></i>
                          <div class="lookbook-info__overview">
                              Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.
      
                        </div>              
                    </div>
                 </div> 
                 <div class="lookbook__item"  data-src="assets/img/card-photo-woman2.png"
                                               data-name="ave classic sweatshirt"
                                               data-cost="432.11"
                                               data-description="Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.">
                    <img src="assets/img/card-photo-woman2.png" alt="" class="lookbook__img">
                    <div class="lookbook-info">
                          <p class="lookbook-info__cost">£432.11</p>
                          <i class="fas fa-search lookbook__icon"></i>
                          <div class="lookbook-info__overview">
                              Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.
      
                        </div>              
                    </div>
                 </div> 
                 <div class="lookbook__item"  data-src="assets/img/card-photo-man2.png"
                                               data-name="ave classic sweatshirt"
                                               data-cost="342.11"
                                               data-description="Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.">
                    <img src="assets/img/card-photo-man2.png" alt="" class="lookbook__img">
                    <div class="lookbook-info">
                          <p class="lookbook-info__cost">£342.11</p>
                          <i class="fas fa-search lookbook__icon"></i>
                          <div class="lookbook-info__overview">
                              Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.
      
                        </div>              
                    </div>
                 </div> 
                 <div class="lookbook__item"  data-src="assets/img/card-photo-woman3.png"
                                               data-name="ave classic sweatshirt"
                                               data-cost="32.11"
                                               data-description="Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.">
                    <img src="assets/img/card-photo-woman3.png" alt="" class="lookbook__img">
                    <div class="lookbook-info">
                          <p class="lookbook-info__cost">£32.11</p>
                          <i class="fas fa-search lookbook__icon"></i>
                          <div class="lookbook-info__overview">
                              Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.
      
                        </div>              
                    </div>
                 </div> 
                 <div class="lookbook__item"  data-src="assets/img/card-photo-man3.png"
                                               data-name="ave classic sweatshirt"
                                               data-cost="12.11"
                                               data-description="Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.">
                    <img src="assets/img/card-photo-man3.png" alt="" class="lookbook__img">
                    <div class="lookbook-info">
                          <p class="lookbook-info__cost">£12.11</p>
                          <i class="fas fa-search lookbook__icon"></i>
                          <div class="lookbook-info__overview">
                              Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.
      
                        </div>              
                    </div>
                 </div> 
                 <div class="lookbook__item"  data-src="assets/img/card-photo-woman4.png"
                                               data-name="ave classic sweatshirt"
                                               data-cost="132.11"
                                               data-description="Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.">
                    <img src="assets/img/card-photo-woman4.png" alt="" class="lookbook__img">
                    <div class="lookbook-info">
                          <p class="lookbook-info__cost">£132.11</p>
                          <i class="fas fa-search lookbook__icon"></i>
                          <div class="lookbook-info__overview">
                              Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.
      
                        </div>              
                    </div>
                 </div> 
                 <div class="lookbook__item"  data-src="assets/img/card-photo-man4.jpg"
                                               data-name="ave classic sweatshirt"
                                               data-cost="932.11"
                                               data-description="Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.">
                    <img src="assets/img/card-photo-man4.jpg" alt="" class="lookbook__img">
                    <div class="lookbook-info">
                          <p class="lookbook-info__cost">£932.11</p>
                          <i class="fas fa-search lookbook__icon"></i>
                          <div class="lookbook-info__overview">
                              Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.
      
                        </div>              
                    </div>
                 </div> 
                 <div class="lookbook__item"  data-src="assets/img/card-photo-woman5.jpg"
                                               data-name="ave classic sweatshirt"
                                               data-cost="1132.11"
                                               data-description="Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.">
                    <img src="assets/img/card-photo-woman5.jpg" alt="" class="lookbook__img">
                    <div class="lookbook-info">
                          <p class="lookbook-info__cost">£1132.11</p>
                          <i class="fas fa-search lookbook__icon"></i>
                          <div class="lookbook-info__overview">
                              Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.
      
                        </div>              
                    </div>
                 </div> 
                 <div class="lookbook__item"  data-src="assets/img/card-photo-man5.jpg"
                                               data-name="ave classic sweatshirt"
                                               data-cost="532.11"
                                               data-description="Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.">
                    <img src="assets/img/card-photo-man5.jpg" alt="" class="lookbook__img">
                    <div class="lookbook-info">
                          <p class="lookbook-info__cost">£532.11</p>
                          <i class="fas fa-search lookbook__icon"></i>
                          <div class="lookbook-info__overview">
                              Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.
      
                        </div>              
                    </div>
                 </div> 
            </div>   
        </div>      
    `
})