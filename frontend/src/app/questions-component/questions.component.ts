import { Component } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'
})

export class QuestionsComponent {

    question = {}
    questionList
    constructor(private api: ApiService) { }

    ngOnInit() {
        this.api.getQuestions().subscribe(res => {
            console.log('aici');            
            this.questionList = res;
        });
    }

    post(question) {
        this.api.postQuestion(question);
    }
}