import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Passenger } from '../model/passenger';
import { PassengerService } from '../service/service';

@Component({
  selector: 'app-listpassenger',
  templateUrl: './listpassenger.component.html',
  styleUrls: ['./listpassenger.component.css']
})
export class ListpassengerComponent {

  constructor(private route:ActivatedRoute, private service:PassengerService) {
    let observable=route.paramMap;
    observable.subscribe((params:ParamMap)=>{
      let idVal:string=params.get("passengerId");
      let idNum:number=Number(idVal);
      console.log("id is "+idNum);
      this.findPassengerById(idNum);
    })
   }

   passenger:Passenger;

   findPassengerById(passengerId:number){
     let observable:Observable<Passenger>=this.service.getPassenger(passengerId);
     observable.subscribe(passengerArg=>{this.passenger=passengerArg;
    });
   }

   findPassenger(form:any){
     let data=form.value;
     let passengerID=data.passengerId;
     this.findPassengerById(passengerID);
   }
  

}

  
