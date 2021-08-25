import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';

import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "contact-us", component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
