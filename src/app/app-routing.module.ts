import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetosComponent } from './projetos/projetos.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProjetosDetalheComponent } from './projetos-detalhe/projetos-detalhe.component';

const routes: Routes = [
  { path: '', redirectTo: '/projetos', pathMatch: 'full' },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'projetos/:id', component: ProjetosDetalheComponent },
  { path: 'sobre', component: SobreComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
