import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-feedback',
  template: `
    <div class="has-danger" *ngIf="modelRef.touched || modelRef.dirty || formRef.submited">
        <div class="form-control-feedback"
           *ngIf = "modelRef.errors?.required">
           TO POLE JEST WYMAGANE
        </div>
        <div class="form-control-feedback"
          *ngIf="modelRef.errors?.minlength">
          TO POLE MUSI MIEĆ PRZYNAJMNIEJ {{modelRef.errors.minlength.requiredLength}} ZNAKI       
        </div>
      </div>
  `,

  styles: []
})



export class FormFeedbackComponent implements OnInit {

  @Input('model')
  modelRef;

  @Input('form')
  formRef;

  constructor() { }

  ngOnInit() {
  }

}
