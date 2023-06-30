import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  {path:'signup', component:SignUpComponent},
  {path:'signin', component:SignInComponent},
  {path:'contact', component:ContactListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
