import {Component, Input} from '@angular/core';
import {Pensamento} from "../pensamento";

@Component({
  selector: 'app-thinking',
  templateUrl: './thinking.component.html',
  styleUrls: ['./thinking.component.scss']
})
export class ThinkingComponent {

  @Input() pensamento: Pensamento = {
    id: 1,
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length > 250){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
