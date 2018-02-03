import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Console } from '@angular/core/src/console';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ApiService {

    private selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();
    
  

    constructor(private http: HttpClient) { }
   
    getQuestions() {
        return this.http.get('http://localhost:49304/api/questions');
    }

    postQuestion(question) {

        this.http.post('http://localhost:49304/api/questions', question).subscribe(res => {
            console.log(res);
        });
    }

    put(question){
        this.http.put(`http://localhost:49304/api/questions/${question.id}`, question).subscribe(res => {
            console.log(res);
        });
    }

    selectQuestion(question){
        this.selectedQuestion.next(question);
    }
}