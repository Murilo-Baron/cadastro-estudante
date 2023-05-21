import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-estudante',
  templateUrl: './cadastro-estudante.component.html',
  styleUrls: ['./cadastro-estudante.component.css']
})
export class CadastroEstudanteComponent {
  estudanteForm: FormGroup;
  estudantes: any[] = [];

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.estudanteForm = this.formBuilder.group({
      nome: ['', Validators.required],
      idade: ['', Validators.required],
      curso: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required]
    });
  }

  cadastrarEstudante() {
    if (this.estudanteForm.invalid) {
      return;
    }

    const estudante = this.estudanteForm.value;

    this.http.post('http://localhost:3000/estudantes', estudante)
      .subscribe(
        response => {
          console.log('Estudante cadastrado com sucesso:', response);
          this.estudanteForm.reset();
        },
        error => {
          console.error('Erro ao cadastrar o estudante:', error);
        }
      );
  }

  carregarEstudantes() {
    this.http.get('http://localhost:3000/estudantes')
      .subscribe(
        (estudantes: any) => {
          this.estudantes = estudantes;
        },
        error => {
          console.error('Erro ao carregar os estudantes:', error);
        }
      );
  }
}
