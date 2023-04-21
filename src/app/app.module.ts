import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { EventsModule } from './events/events.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './shared/routes';
import { UsersModule } from './users/users.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

    EventsModule,
    UsersModule,
    SharedModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
