import { Component, OnInit } from '@angular/core';

import { DataService } from '../common/services/dataService/data.service';
import { Trainee } from '../common/models/Trainee'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private dataService: DataService) { }

  trainees: Trainee[];
  selectedTrainee: Trainee;
  filterByThisSearch: any;
  addNewTraineeState: number;

  ngOnInit() {
    this.filterByThisSearch = '';
    this.getData();
  }

  ngOnDestroy(){
    //if new trainee has been created but not publish (second click) remove it from trainees data
    if(this.addNewTraineeState == 1)
      this.dataService.removeTrainee(this.trainees[this.trainees.length - 1])
  }


  getData(){
    this.dataService.getTrainee().then(data => {
      this.trainees = data
    })
  }
  //Selected trainee from data-table component
  onSelectedTrainee(trainee: Trainee){
    this.selectedTrainee = trainee;
  }
  // update the fields for selected trainee.
  updateDataMain(changes){
    let traineeId = changes[1];
    let type = changes[0][1];
    let detail = changes[0][0];

    this.dataService.changeDetailForATrainee(traineeId, type, detail );
    this.trainees = this.trainees.slice()
  }

  removeTrainee(trainee: Trainee){
    this.selectedTrainee = null;
    this.dataService.removeTrainee(trainee)
    this.getData();

  }

  // manage 'first' new trainee addition. insert new empty Trainee object. (not showing in data-table)
  addTrainee(state: any, trainee: Trainee){
    if(state == 0){
      this.addNewTraineeState = state;
      let randomId = Math.floor((Math.random() * 1000000000) + 1);
      this.dataService.addTrainee({id: randomId, name: '', grade: 0, email: '', dateJoined: '', address: '', city: '', country: '', zip: 0, subject: ''})
      this.selectedTrainee = this.trainees[this.trainees.length - 1];

    }

    if(state == 1)
      this.addNewTraineeState = state;

  }
  //Update the fields of the new added trainee with user's values. insert as default value = value field.
  newTraineeUpdateFields(trainee: Trainee){

    this.dataService.repalceAddedTrainee(trainee);
    this.getData();

    //workound to handle an error that seems to be an issue with angular 2. https://github.com/angular/angular/issues/10131
    let timeoutId = setTimeout(() => {
      this.addNewTraineeState = -1;
      this.selectedTrainee = null;
    }, 0);
  }

}
