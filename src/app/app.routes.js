import {menPageComponent} from "./pages/men-page.component";
import {womenPageComponent} from "./pages/women-page.component";
import {brandPageComponent} from "./pages/brand-page.component";
import {storesPageComponent} from "./pages/stores-page.component";
import {lookbookPageComponent} from "./pages/lookbook-page.component";
import {notFound} from "./common/app.page-notfound";
import {templateComponent} from "./pages/template.component";

export const appRoutes = [
    { path: '', component: menPageComponent},
    { path: 'woman', component: womenPageComponent},
    { path: 'brand', component: brandPageComponent},
    { path: 'stores', component: storesPageComponent},
    { path: 'template', component: templateComponent},
    { path: 'lookbook', component: lookbookPageComponent},
    { path: '**', component: notFound}
]