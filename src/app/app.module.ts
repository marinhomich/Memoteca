import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateThinkingComponent } from './components/pensamentos/create-thinking/create-thinking.component';
import {FormsModule} from "@angular/forms";
import { ListThinkingComponent } from './components/pensamentos/list-thinking/list-thinking.component';
import { ThinkingComponent } from './components/pensamentos/thinking/thinking.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateThinkingComponent,
    ListThinkingComponent,
    ThinkingComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
