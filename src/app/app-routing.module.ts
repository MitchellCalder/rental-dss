import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppModule } from './app.module';
import { RentalListComponent } from './components/rental-list/rental-list.component';
import { RentalDetailsComponent } from './components/rental-details/rental-details.component';
import { AddRentalComponent } from './components/add-rental/add-rental.component';


const routes: Routes = [
  { path: '', redirectTo: 'rentals', pathMatch: 'full' },
  { path: 'rentals', component: RentalListComponent },
  { path: 'rentals/:id', component: RentalDetailsComponent },
  { path: 'add', component: AddRentalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
