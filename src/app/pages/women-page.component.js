import {WFMComponent} from "../../framework";


class WomenPageComponent extends WFMComponent{
    constructor(config){
        super(config)
    }
}

export const womenPageComponent = new WomenPageComponent({
    selector: 'app-women-page',
    template: `
        <div>WOMEN PAGE</div>
    `
})