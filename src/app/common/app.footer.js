import { WFMComponent } from '../../framework/index';
import { wfm} from "../../framework/index";
import {templateComponent} from "../pages/template.component";

class AppFooter extends WFMComponent {
    constructor(config){
        super(config)
    }
    events(){
        return{
            'click .fast-links--work': 'openDetail'
        }
    }
    openDetail({ target }){
        this.relocation()
        templateComponent.template = `
          <div class="container">
             <div class="footer-template">
                 <h2 class="footer-template__title">${target.dataset.title}</h2>
                 <p class="footer-template__text">
                    ${target.dataset.text}             
                </p>
              </div>
        </div>
        `
    }
    relocation(){
        window.location.hash = 'template1'
        templateComponent.template = ``
        window.location.hash = 'template'
    }
}
export const appFooter = new AppFooter({
    selector: 'app-footer',
    template: `
        <footer>
        
        <section class="fast-links">
            <div class="container">
                <div class="fast-links__inner">
                    <section class="fast-links__item">
                        <h4 class="fast-links__title">information</h4>
                        <a href="#brand" class="fast-links__text">The brand</a>
                        <p class="fast-links__text fast-links--work" data-title="Privacy & cookies"
                                                                     data-text="Some rules about Privacy & cookies">
                                                                     Privacy & cookies</p>
</section>                   
                    <section class="fast-links__item">
                        <h4 class="fast-links__title">why buy from us</h4>
                        <p class="fast-links__text fast-links--work" data-title="Shipping & returns"
                                                    data-text="Some rules about Shipping & returns">
                                                    Shipping & returns</a>
                        <p class="fast-links__text fast-links--work"data-title="Secure shopping"
                                                    data-text="Some rules about Secure shopping">Secure shopping</p>
                        <p class="fast-links__text fast-links--work" data-title="Testimonials"
                                                    data-text="Something about Testimonials">Testimonials</p>
</section>           
                    <section class="fast-links__item">
                        <h4 class="fast-links__title">your account</h4>
                        <p class="fast-links__text">Sign in</p>
                        <p class="fast-links__text">Register</p>
</section>                    
                    <section class="fast-links__item">
                        <h4 class="fast-links__title">lookbook</h4>
                        <p class="fast-links__text">Latest posts</p>
                        <p class="fast-links__text">View your lookbook</p>
</section>                    
                    <section class="fast-links__item">
                        <h4 class="fast-links__title">contact details</h4>
                        <address class="fast-links__address">Head Office: Avenue Fashion, 
                                 180-182 Regent Street, London.
                                 </address>
                        <p class="fast-links__text">Telephone: 0123-456-789</p>
                        <p class="fast-links__text">Email: support@yourwebsite.com</p>
</section>
                
</div>
</div>
</section>
        <section class="copyright">
            <div class="container">
                <div class="copyright__inner">
                <p>© 2016 Avenue Fashion™</p>
                <p>Design by RobbyDesigns.com</p>
                <p>Dev by DenInc</p>
    </div>  
</div>
</section>
</footer>
    `
});