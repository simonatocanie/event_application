import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./components/errors/404/404.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([])
    ],
    declarations: [
        NavBarComponent,
        Error404Component
    ],
    providers: [],
    exports: [
              NavBarComponent,
              ReactiveFormsModule
            ]
})
export class SharedModule {

}