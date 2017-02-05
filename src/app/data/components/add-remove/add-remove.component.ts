import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trainee } from '../../../common/models/Trainee';

@Component({
  selector: 'app-add-remove',
  templateUrl: './add-remove.component.html',
  styleUrls: ['./add-remove.component.css']
})
export class AddRemoveComponent implements OnInit {
  @Input()
    trainee: Trainee

  @Output()
    removeTraineeUp = new EventEmitter<Trainee>();

  @Output()
    addTraineeUp = new EventEmitter<any>();

  addTraineeClicks: number;
  addButtonBuleColor: boolean;

  constructor() { }

  ngOnInit() {
    this.addTraineeClicks = -1
    this.addButtonBuleColor = false;
  }
  
  removeThisTrainee(){
    this.removeTraineeUp.emit(this.trainee);
    this.addTraineeClicks = -1;
    this.addButtonBuleColor = false;
  }
  addNewTrainee(){
    this.addTraineeClicks = this.addTraineeClicks + 1;

    if(this.addTraineeClicks == 0){
      this.addButtonBuleColor = true;
      this.addTraineeUp.emit(this.addTraineeClicks);

    } else {
      this.addTraineeUp.emit(this.addTraineeClicks);
      this.addTraineeClicks = -1;
      this.addButtonBuleColor = false;
    }



  }
}
