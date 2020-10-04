import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Passenger } from '../model/passenger';
import { PassengerService } from '../service/service';


@Component({
  selector: 'app-viewallpassenger',
  templateUrl: './viewallpassenger.component.html',
  styleUrls: ['./viewallpassenger.component.css']
})
export class ViewallpassengerComponent {

  bookings:Passenger[];
  passenger: Passenger[];

  constructor(private service:PassengerService) { 
    let observable:Observable<Passenger[]>=service.getAllPassenger();
    observable.subscribe(passengerArg=>{this.passenger=passengerArg});
  }

  removePassenger(PassengerId:number){
    let observable=this.service.deletePassenger(PassengerId);
    observable.subscribe(result=>{this.removeById(PassengerId);
    });
  }

  removeById(passengerId:number):void{
    for(let i=0;i<this.passenger.length;i++){
      let passenger=this.passenger[i];
      if(passenger.passengerId===passengerId){
        this.passenger.splice(i,1);
      }
    }
  }

}


