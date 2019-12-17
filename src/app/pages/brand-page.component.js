import {WFMComponent} from "../../framework";


class BrandPageComponent extends WFMComponent{
    constructor(config){
        super(config)
    }
}

export const brandPageComponent = new BrandPageComponent({
    selector: 'app-brand-page',
    template: `
        <div></div>
    `
})