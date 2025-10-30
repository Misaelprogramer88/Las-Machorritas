import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta por defecto (localhost:4200)
  //{ path: 'home', component: HomeComponent },  Ruta home (localhost:4200/home)
  { path: '**', redirectTo: '' } // Redirecciona rutas no encontradas al home
];