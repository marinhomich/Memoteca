import {Component, OnInit} from '@angular/core';
import {Pensamento} from "../pensamento";
import {ThinkingService} from "../thinking.service";

@Component({
  selector: 'app-list-thinking',
  templateUrl: './list-thinking.component.html',
  styleUrls: ['./list-thinking.component.scss']
})
export class ListThinkingComponent implements OnInit{

  listaPensamentos: Pensamento[] = [];

  constructor(private service: ThinkingService) {
  }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }
}
