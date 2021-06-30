import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FacilityComponent } from './facility/facility.component';
import { HomeComponent } from './home/home.component';
import { MembershipComponent } from './membership/membership.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'facilities', component: FacilityComponent},
  {path: 'services', component: ServiceComponent },
  {path: 'membership', component: MembershipComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
