import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CarouselComponent } from "./carousel/carousel.component";
import{LoginComponent} from "./login/login.component"
import { NavebarComponent } from "./navebar/navebar.component";
import { RegistroComponent } from "./registro/registro.component";

const routes = [
    {path: '', component: LoginComponent},
    {path:'registrarse',component: RegistroComponent},
    {path:'inicio',component: NavebarComponent}
];
@NgModule({
    imports:
    [
        RouterModule.forRoot(routes)
    ],
    exports:
    [
        RouterModule
    ]
})
export class AppRoutingModule
{

}