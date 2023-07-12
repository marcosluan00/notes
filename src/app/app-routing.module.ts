import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { PaginasDeNotasComponent } from './pages/paginas-de-notas/paginas-de-notas.component';

const routes: Routes = [
  { path: 'inicial', component: PaginaInicialComponent },
  { path: 'notas', component: PaginasDeNotasComponent},
  { path: '', redirectTo: '/inicial', pathMatch: 'full'},
  { path: '**', component: PaginasDeNotasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
