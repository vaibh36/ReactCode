import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import {CricketComponent} from './cricket/cricket.component'
import {HomepageComponent} from './homepage/homepage.component';
import { LoginmaxComponent } from './loginmax/loginmax.component';
import { SignupmaxComponent } from './signupmax/signupmax.component';
import { AuthGuard } from './auth.guard';
import { UseractivityComponent } from './useractivity/useractivity.component';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [

  {path:'login',component:LoginmaxComponent},
  {path:'signup',component:SignupmaxComponent},
  { path:'homepage',component:HomepageComponent, canActivate:[AuthGuard]},
  {path:'activity/:email',component:UseractivityComponent},
  {path:'customerdashboard',loadChildren:'./customer-dashboard/customer-dashboard.module#CustomerDashboardModule'},
  {path:'gallery',component:GalleryComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
