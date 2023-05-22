import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEstudanteComponent } from './cadastro-estudante/cadastro-estudante.component';

const routes: Routes = [
  {path: '', component: CadastroEstudanteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
