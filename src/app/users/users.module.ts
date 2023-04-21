import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { userRoutes } from "../shared/routes";
import { EditUserProfileComponent } from "./edit-user-profile/edit-user-profile.component";
import { LoginComponent } from './login/login.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes),
        SharedModule
    ],
    declarations: [
        EditUserProfileComponent,
        LoginComponent
    ],
    providers: [],
    exports: []
})
export class UsersModule { }