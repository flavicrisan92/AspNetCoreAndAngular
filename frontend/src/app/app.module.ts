import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCard} from '@angular/material';

import { AppComponent } from './app.component';
import {QuestionComponent} from './question-component/question.component';
import {ApiService} from './api.service'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {QuestionsComponent} from './questions-component/questions.component';


@NgModule({
  declarations: [
    AppComponent, QuestionComponent, QuestionsComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatInputModule,
    MatCardModule, FormsModule,
    HttpClientModule, MatListModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
