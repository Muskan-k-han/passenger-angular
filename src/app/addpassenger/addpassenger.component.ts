import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Passenger} from '../model/passenger';
import { PassengerService } from '../service/service';

@Component({
  selector: 'add-passenger',
  templateUrl: './add-passengercomponent.html',
  styleUrls: ['./add-passenger.component.css']
})
export class AddPassengerComponent {

  constructor(private service:PassengerService) {

   }

   passenger:Passenger;

   addPassenger(form:any){
     let data=form.value;
     let userId=data.userId;
     let passengerDate=data.passengerDate;
     let ticketCost=data.ticketCost;
     let pnrNumber=data.pnrNumber;
     let sfId=data.sfId;
     this.passenger=new Passenger(1,userId,passengerDate,ticketCost,pnrNumber,sfId);
     let observable:Observable<Passenger>=this.service.addBooking(this.passenger);
     observable.subscribe(bookingArg=>{
       this.passenger=bookingArg;
     });
   }
   

}