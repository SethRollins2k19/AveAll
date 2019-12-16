import {WFMComponent} from "../../framework";


class NotFound extends WFMComponent {
    constructor(config){
        super(config)
    }
}

export const notFound = new NotFound({
    selector: 'app-not-found',
    template: `
        <h2>PAGE NOT FOUND</h2>
    `
})