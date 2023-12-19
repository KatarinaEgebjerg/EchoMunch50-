import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';
import { AuthGuard } from 'src/app/guards/auth-guard/auth.guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToTabs = () => redirectLoggedInTo(['tabs']);

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('../profile/profile.module').then((m) => m.ProfilePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../login/login.module').then((m) => m.LoginPageModule),
    ...canActivate(redirectLoggedInToTabs),
    canLoad: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
