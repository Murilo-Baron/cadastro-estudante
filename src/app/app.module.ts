import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdastroEstudanteComponent } from './adastro-estudante/adastro-estudante.component';
import { CadastroEstudanteComponent } from './cadastro-estudante/cadastro-estudante.component';

@NgModule({
  declarations: [
    AppComponent,
    AdastroEstudanteComponent,
    CadastroEstudanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
