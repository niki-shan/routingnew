import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiproductsComponent } from './components/multiproducts/multiproducts.component';
import { MultiusersComponent } from './components/multiusers/multiusers.component';
import { SingleuserComponent } from './components/singleuser/singleuser.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SingleprodComponent } from './components/singleprod/singleprod.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MultiproductsComponent,
    MultiusersComponent,
    SingleuserComponent,
    NavbarComponent,
    HomeComponent,
    SingleprodComponent,
    PageNotFoundComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
