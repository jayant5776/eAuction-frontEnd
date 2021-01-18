import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';
import { CreateBuyerComponent } from './create-buyer/create-buyer.component';
import { UpdateBuyerComponent } from './update-buyer/update-buyer.component';
import { BuyerDetailsComponent } from './buyer-details/buyer-details.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyerListComponent,
    CreateBuyerComponent,
    UpdateBuyerComponent,
    BuyerDetailsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
