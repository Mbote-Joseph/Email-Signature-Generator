import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatesComponent } from './components/templates/templates.component';
import { EditHomeComponent } from './components/edit-home/edit-home.component';
import { GeneralFormComponent } from './components/general-form/general-form.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:"templates", component: EditHomeComponent},
  {path:"form", component:GeneralFormComponent},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
