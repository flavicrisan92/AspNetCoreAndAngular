import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})

export class QuestionComponent {

    question = new Question();

    constructor(private api: ApiService) { }

    ngOnInit(){
        this.api.questionSelected.subscribe(question=>this.question = question);
    }

    post(question) {
        this.api.postQuestion(question);
    }

    putQuestion(question) {
        this.api.put(question);
    }

}
class Question{
    id:number
    text: string
    correctAnswer:string
    answer1:string
    answer2:string
    answer3:string

}