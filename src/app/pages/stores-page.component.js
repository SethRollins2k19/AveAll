import {WFMComponent} from "../../framework";


class StoresPageComponent extends WFMComponent{
    constructor(config){
        super(config)
    }
}

export const storesPageComponent = new StoresPageComponent({
    selector: 'app-stores-page',
    template: `
        <div>Stores PAGE</div>
    `
})