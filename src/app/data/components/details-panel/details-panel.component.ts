import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Trainee } from '../../../common/models/Trainee';

@Component({
  selector: 'app-details-panel',
  templateUrl: './details-panel.component.html',
  styleUrls: ['./details-panel.component.css']
})
export class DetailsPanelComponent implements OnInit {
  @Input()
    trainee: Trainee;
  @Input()
    addNewTraineeState: number;

  @Output()
    updateDataToData = new EventEmitter<[any]>();
  @Output()
    newTraineeUpdateFieldsOutput = new EventEmitter<Trainee>();

  newTrainee: Trainee;

  constructor() { }

  ngOnInit() {
    this.newTrainee = Object.assign({}, this.trainee);
  }

  ngOnChanges(changes){
  }
  updateDataSecond(value){
    this.updateDataToData.emit([value, this.trainee.id])
  }
  newTraineeUpdateFields(value){
    this.newTrainee[value[1]] = value[0] || value[1];
    this.newTrainee['id'] = this.trainee['id'];

    if(this.newTrainee['zip'] && this.newTrainee['subject'] && this.newTrainee['country'] && this.newTrainee['city'] && this.newTrainee['address'] && this.newTrainee['email']  && this.newTrainee['grade']  && this.newTrainee['name']){
      this.newTraineeUpdateFieldsOutput.emit(this.newTrainee)
      this.newTrainee = Object.assign({}, this.trainee);
    }
  }
}
