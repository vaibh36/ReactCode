import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ImageFilterPipe} from './gallery/filter.pipe'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamesComponent } from './names/names.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { CricketComponent } from './cricket/cricket.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginmaxComponent } from './loginmax/loginmax.component';
import { SignupmaxComponent } from './signupmax/signupmax.component';
import { AuthInterceptor } from './auth-interceptor';
import { UseractivityComponent } from './useractivity/useractivity.component';
import { Child1Component } from './child1/child1.component';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NamesComponent,
    CricketComponent,
    HomepageComponent,
    LoginmaxComponent,
    SignupmaxComponent,
    UseractivityComponent,
    Child1Component,
    GalleryComponent,ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
