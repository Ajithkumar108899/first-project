import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { SignupComponent } from './signup/signup.component';
import { SuccessmessageComponent } from './successmessage/successmessage.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login',component: LoginComponent },
  {path:'signup',component: SignupComponent },
  {path:'home',component: HomeComponent },
  {path:'movie/:type/:id',component: MovieComponent },
  {path:'successmessage',component:SuccessmessageComponent},
  {path:'**',component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
