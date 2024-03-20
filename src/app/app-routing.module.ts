import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { EShopComponent } from './e-shop/e-shop/e-shop.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: 'e-shop', component: EShopComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', redirectTo: '/e-shop', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
