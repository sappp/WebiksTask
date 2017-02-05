import { Injectable } from '@angular/core';
import { Trainee } from '../../models/trainee'

@Injectable()
export class DataService {

  //constructor() { }

  //mock data
  trainee: Trainee[] = [
    {id: 134873298,
    name: 'Ringo',
    grade: 55,
    email: 'ringo@gmail.com',
    dateJoined: '27/1/1933',
    address: 'Drums',
    city: 'Liverpool',
    country: 'UK',
    zip: 11121312311,
    subject: 'To do nothing'},
    {id: 123124535436,
    name: 'John',
    grade: 100,
    email: 'John@gmail.com',
    dateJoined: '27/1/1933',
    address: 'kmkjsand',
    city: 'Liverpool',
    country: 'UK',
    zip: 52345,
    subject: 'Life'},
    {id: 333545765,
    name: 'Paul',
    grade: 100,
    email: 'Paul@gmail.com',
    dateJoined: '27/1/1933',
    address: 'dsgsfd213',
    city: 'Liverpool',
    country: 'UK',
    zip: 213124,
    subject: 'Musician'},
    {id: 4549865987,
    name: 'George',
    grade: 100,
    email: 'George@gmail.com',
    dateJoined: '27/1/1933',
    address: 'fdsgdsfds',
    city: 'Liverpool',
    country: 'UK',
    zip: 3232,
    subject: 'Soul'}
  ]

  getTrainee(): Promise<Trainee[]> {
    return Promise.resolve(this.trainee);
  }

  changeDetailForATrainee(traineeId: number, type: string, newVal: any): void{
    this.trainee.forEach(function(t){
      if(t.id == traineeId)
        t[type] = newVal;
    })
  }
  removeTrainee(trainee: Trainee){
    let newTrainee = this.trainee.slice();
        newTrainee.splice(this.trainee.indexOf(trainee), 1)
        this.trainee = newTrainee.slice();
  }
  addTrainee(newTrainee: Trainee){
    this.trainee.push(newTrainee);
    this.trainee = this.trainee.slice();
  }
  repalceAddedTrainee(trainee: Trainee){
    this.trainee.pop();
    this.trainee.push(trainee);
  }

}
