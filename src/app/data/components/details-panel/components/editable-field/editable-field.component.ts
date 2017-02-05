import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'editable-field',
  templateUrl: './editable-field.component.html',
  styleUrls: ['./editable-field.component.css']
})
export class EditableField implements OnInit {
  @Input()
    detail: any;
  @Input()
    typeName: string;
  @Input()
    newTraineeState: number;

  @Output()
    updateDataUpToDetailsPanel = new EventEmitter<[any]>();
  @Output()
    newTraineeUpdateFieldsOutput = new EventEmitter<[any]>();

    showEditIconState: boolean;
    modelDetail: any;

  constructor() { }

  ngOnInit() {
    this.showEditIconState = false;
    this.modelDetail = this.detail;
  }
  ngOnChanges(changes){
    console.log()
    if(changes.detail && changes.detail.previousValue != changes.detail.currentValue){
      this.cancelChanges();
    }
    if(changes.newTraineeState && changes.newTraineeState.currentValue == 1)
      this.newTraineeUpdateFields();
  }
  toggleStateShowEditIcon(){
    this.showEditIconState = !this.showEditIconState;
  }

  cancelChanges(){
    this.modelDetail = this.detail;
    this.showEditIconState = false;
  }

  makeChanges(){
    this.updateDataUpToDetailsPanel.emit([this.modelDetail, this.typeName]);
  }
  newTraineeUpdateFields(){
    this.newTraineeUpdateFieldsOutput.emit([this.modelDetail, this.typeName])
  }


}
