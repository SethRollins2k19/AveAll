import {WFMComponent} from "../../framework";


class LookBookPageComponent extends WFMComponent{
    constructor(config){
        super(config)
    }
}

export const lookbookPageComponent = new LookBookPageComponent({
    selector: 'app-lookbook-page',
    template: `
        <div>LookBook PAGE</div>
    `
})