import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserContainerComponent } from './core/container/user-container/user-container.component';
import { OrderContainerComponent } from './core/container/order-container/order-container.component';
import { UserListComponent } from './core/components/user/user-list/user-list.component';
import { UserSingleComponent } from './core/components/user/user-single/user-single.component';
import { UserDetailComponent } from './core/components/user/user-detail/user-detail.component';
import { OrderListComponent } from './core/components/order/order-list/order-list.component';
import { OrderSingleComponent } from './core/components/order/order-single/order-single.component';
import { OrderDetailComponent } from './core/components/order/order-detail/order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    OrderContainerComponent,
    UserListComponent,
    UserSingleComponent,
    UserDetailComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
