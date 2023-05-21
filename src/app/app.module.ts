import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroEstudanteComponent } from './cadastro-estudante/cadastro-estudante.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroEstudanteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot
    ([
    { path: 'cadastro', component: CadastroEstudanteComponent }
    ]), // Adicione esta linha
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
