// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CartoesComponent } from './components/cartoes/cartoes.component';



import { 
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatTableModule,
  MatSortModule,
  MatGridListModule,
  MatDialogModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatCardModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartoesComponent
  ],
  imports: [
    // BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
