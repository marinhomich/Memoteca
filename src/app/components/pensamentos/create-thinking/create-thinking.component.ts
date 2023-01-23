import {Component, OnInit} from '@angular/core';
import {Pensamento} from "../pensamento";
import {ThinkingService} from "../thinking.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-thinking',
  templateUrl: './create-thinking.component.html',
  styleUrls: ['./create-thinking.component.scss']
})
export class CreateThinkingComponent {


  constructor(private service:ThinkingService, private router: Router
  ) {
  }
 pensamento: Pensamento = {

   conteudo: '',
   autoria: '',
   modelo: 'modelo1'
 }

  criarPensamento(){
   this.service.criar(this.pensamento).subscribe(() => this.router.navigate(['/listarPensamento']))
  }

  cancelar(){
   alert('Cancelar')
  }

}
