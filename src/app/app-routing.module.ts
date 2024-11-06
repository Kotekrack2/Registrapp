import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperarpass',
    loadChildren: () => import('./recuperarpass/recuperarpass.module').then( m => m.RecuperarpassPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },

  {
    path: 'mantenedor',
    loadChildren: () => import('./mantenedor/mantenedor.module').then( m => m.MantenedorPageModule)
  },

  {
    path: '**',
    loadChildren: () => import('./error404/error404.module').then( m => m.Error404PageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
