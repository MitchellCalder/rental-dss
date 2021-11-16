import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRentalComponent } from './components/add-rental/add-rental.component';
import { RentalDetailsComponent } from './components/rental-details/rental-details.component';
import { RentalListComponent } from './components/rental-list/rental-list.component';
import { RentalService } from './services/rental.service';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    AddRentalComponent,
    RentalDetailsComponent,
    RentalListComponent,
    FilterPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [
    RentalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
