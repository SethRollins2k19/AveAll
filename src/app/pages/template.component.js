import {WFMComponent} from "../../framework";

class TemplateComponent extends WFMComponent {

    constructor(config) {
        super(config)
    }
}

export const templateComponent = new TemplateComponent({
    selector: 'app-template',
    template: `
            
    `
})