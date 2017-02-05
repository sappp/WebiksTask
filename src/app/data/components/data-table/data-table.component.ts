import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Trainee } from '../../../common/models/Trainee';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input()
    trainees: Trainee[];
  @Input()
    filterByThisSearch: any;

  @Output()
    onSelectedTrainee = new EventEmitter<Trainee>();

  selectedTraineeId: number;

  constructor() { }

  ngOnInit() {

  }
  selectTrainee(trainee: Trainee){
    this.selectedTraineeId = trainee.id;
    this.onSelectedTrainee.emit(trainee)
  }


}
