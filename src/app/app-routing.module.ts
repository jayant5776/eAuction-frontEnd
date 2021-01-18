import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerDetailsComponent } from './buyer-details/buyer-details.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';
import { CreateBuyerComponent } from './create-buyer/create-buyer.component';
import { UpdateBuyerComponent } from './update-buyer/update-buyer.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'buyers', component: BuyerListComponent },
  { path: 'create-buyer', component: CreateBuyerComponent },
  { path: '', redirectTo: 'buyers', pathMatch: 'full' },
  { path: 'update-buyer/:buyerId', component: UpdateBuyerComponent },
  { path: 'buyer-details/:buyerId', component: BuyerDetailsComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
