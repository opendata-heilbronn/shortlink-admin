import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShortlinkListComponent} from "./shortlink-list/shortlink-list.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth.guard";
import {EditShortlinkComponent} from "./create-shortlink/edit-shortlink.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ShortlinkListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
