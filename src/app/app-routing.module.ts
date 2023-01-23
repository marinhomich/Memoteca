import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateThinkingComponent} from "./components/pensamentos/create-thinking/create-thinking.component";
import {ListThinkingComponent} from "./components/pensamentos/list-thinking/list-thinking.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CreateThinkingComponent
  },
  {
    path: 'listarPensamento',
    component: ListThinkingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
