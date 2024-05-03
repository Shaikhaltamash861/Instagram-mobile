import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo:'/main'
  },
  {
    path: '',
    component:LayoutComponent,
    children: [
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'search',
        component: SearchPageComponent
      },
    ]
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
