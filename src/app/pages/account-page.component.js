import {WFMComponent} from "../../framework";
import {templateComponent} from "./template.component";


class AccountComponent extends WFMComponent {
    constructor(config) {
        super(config)
        this.template = `
         
    `

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
    enterAllInfo(){
        return this.enterCards(this.cardsInfo)
    }

    enterCards(data){
        let result = ``;
        for(let i = 0; i < data.length; i++){
            result+= this.createBlock(data[i])
        }
        return result
    }
    createBlock(data){
        return `<div class="lookbook__item"  data-src="${data.src}"
                                               data-name="${data.name}"
                                               data-cost="${data.cost}"
                                               data-description="${data.description}">
                            <img src="${data.src}" alt="" class="lookbook__img">
                            <div class="lookbook-info">
                                  <p class="lookbook-info__cost">£${data.cost}</p>
                                  <i class="fas fa-search lookbook__icon"></i>
                                  <div class="lookbook-info__overview">${data.description}</div>
                        </div>
                    </div>
                   `
    }
}



export const accountComponent = new AccountComponent({
    selector: 'app-account'
})