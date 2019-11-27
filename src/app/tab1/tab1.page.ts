import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {timer, Subscription, VirtualTimeScheduler } from 'rxjs';

import { DataService } from '../data.service';
//import {Task} from '../models/task.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  taskForm: FormGroup;
  timerSub: Subscription;
  time: number;

  constructor(
    private formBuilder:FormBuilder,
    private dataService : DataService
  ) {  }

  ngOnInit(){
    this.taskForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

}
