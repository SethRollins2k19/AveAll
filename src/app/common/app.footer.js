import { WFMComponent } from '../../framework/index';

class AppFooter extends WFMComponent {
    constructor(config){
        super(config)
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
                        <p class="fast-links__text">The brand</p>
                        <p class="fast-links__text">Local stores</p>
                        <p class="fast-links__text">Customer service</p>
                        <p class="fast-links__text">Privacy & cookies</p>
                        <p class="fast-links__text">Site map</p>
</section>                   
                    <section class="fast-links__item">
                        <h4 class="fast-links__title">why buy from us</h4>
                        <p class="fast-links__text">Shipping & returns</p>
                        <p class="fast-links__text">Secure shopping</p>
                        <p class="fast-links__text">Testimonials</p>
                        <p class="fast-links__text">Award winning</p>
                        <p class="fast-links__text">Ethical trading</p>
</section>           
                    <section class="fast-links__item">
                        <h4 class="fast-links__title">your account</h4>
                        <p class="fast-links__text">Sign in</p>
                        <p class="fast-links__text">Register</p>
                        <p class="fast-links__text">View cart</p>
                        <p class="fast-links__text">View your lookbook</p>
                        <p class="fast-links__text">Track an order</p>
                        <p class="fast-links__text">Update information</p>
</section>                    
                    <section class="fast-links__item">
                        <h4 class="fast-links__title">lookbook</h4>
                        <p class="fast-links__text">Latest posts</p>
                        <p class="fast-links__text">Men’s lookbook</p>
                        <p class="fast-links__text">Women’s lookbook</p>
                        <p class="fast-links__text">Lookbooks RSS feed</p>
                        <p class="fast-links__text">View your lookbook</p>
                        <p class="fast-links__text">Delete your lookbook</p>
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