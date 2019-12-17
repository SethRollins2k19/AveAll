import {WFMComponent} from "../../framework";

// brand photo

import '../../img/brand.jpg'
import '../../img/brand2.jpg'
import '../../img/brand3.jpg'

class BrandPageComponent extends WFMComponent{
    constructor(config){
        super(config)
    }
}

export const brandPageComponent = new BrandPageComponent({
    selector: 'app-brand-page',
    template: `
        <div class="brand">
              <h1 class="brand__title">THE</h1> 
              <p class="brand__subtitle">you can get everything if you wanna</p>
        </div>
        
        <div class="brand-content">
            <div class="container">
                <div class="brand-content__inner">
                    <div class="brand__photo">
                          <img src="assets/img/brand.jpg" alt="" class="brand__img">              
                    </div>
                    <div class="brand-info">
                         <p class="brand-info__title">hand designed clothing</p>  
                         <p class="brand-info__subtitle">established in 2013, avenue fashion Sed dictum elit vel sapien luctus eras</p> 
                         <p class="brand-info__text">Praesent feugiat malesuada tristique maecenas rhoncus diam eget quam vestibulim consectetur, id condimentum leo porttitor. Cum sociis natoque penatibus eta magnis disut parturient montes, nascetur ridiculus mus. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.</p>
                    </div>
                     
                    <div class="brand__photo">
                          <img src="assets/img/brand2.jpg" alt="" class="brand__img">              
                    </div>
                    <div class="brand__photo">
                          <img src="assets/img/brand3.jpg" alt="" class="brand__img">              
                    </div>
                     <div class="brand-info">
                        <p class="brand-info__title">Ethical trading</p>  
                        <p class="brand-info__subtitle">we oversee the working conditions of the people in the supply chain</p> 
                        <p class="brand-info__text">Nullam dapibus consectetur neque, faucibus porttitor purus iaculis sed. Aenean eras dapibus augue, eget dignissim dui maecenas et rhoncus mim, vel semper arcu lorem
Pellentesque congue justo esteir pellentesque aliquet massa eget posuere tincidunt. Cras viverra ullamcorper nunc accumsan hendrerit. A link 
</p>                
                    </div>
                    <div class="brand-info">
                        <p class="brand-info__title">our values, vision and strategy</p>  
                        <p class="brand-info__subtitle">The above image would be a great place for an advertising video</p> 
                        <p class="brand-info__text">Cras maximus venenatis malesuada. Nulla sagittis elit felis, ac facilisis quam ornare aliquam. Etiam cursus odio vitae dui dignissim, sed tempus lacus tincidunt et donec sapien velit, rhoncus eu nulla a, molestie tempus mi maecenas sagittis ornare.
Pellentesque sapien mi, tincidunt nec magna vitae, volutpat elementum odioni lorem Aliquam tempor massa vitae augue mattis tempor id in ante ut augue erat, luctus eil.
</p>                
                    </div>
                    
                </div>
            </div>
       </div>
    `
})