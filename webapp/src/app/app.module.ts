import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SinginComponent } from './components/singin/singin.component';
import { ListsComponent } from './components/lists/lists.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventComponent } from './components/event/event.component';
import { CardComponent } from './components/shared/card/card.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { AlertComponent } from './components/shared/alert/alert.component';
import { ConfirmComponent } from './components/shared/confirm/confirm.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./guards/auth.guard";
import {ApiService} from "./services/api.service";
import {ListService} from "./services/list.service";
import {ItemService} from "./services/item.service";
import {EventService} from "./services/event.service";
import {UserService} from "./services/user.service";


export const appRoutes: Routes = [
  { path: '', component:AppComponent },
  { path: 'teste', component:AppComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: SinginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SinginComponent,
    ListsComponent,
    ProfileComponent,
    ItemComponent,
    ListComponent,
    CalendarComponent,
    EventComponent,
    CardComponent,
    ToolbarComponent,
    AlertComponent,
    ConfirmComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes, { enableTracing: true /* <-- debugging purposes only */ } )
  ],
  providers: [AuthService, AuthGuard, ApiService, ListService, ItemService, EventService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
