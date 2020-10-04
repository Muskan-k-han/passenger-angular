import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Passenger } from '../model/passenger';

@Injectable()
export class PassengerService{

    baseUrl="http://localhost:8687/passenger";

    constructor(private http:HttpClient){}

    addBooking(booking:Passenger):Observable<Passenger>{
        let url=this.baseUrl+"/add";
        let observable:Observable<Passenger>=this.http.post<Passenger>(url,booking);
        return observable;
    }

    getPassenger(passengerId:number):Observable<Passenger>{
        let url=this.baseUrl+"/get/"+passengerId;
        let observable:Observable<Passenger>=this.http.get<Passenger>(url);
        return observable;
    }

    getAllPassenger():Observable<Passenger[]>{
        let url=this.baseUrl+"/all";
        let observable:Observable<Passenger[]>=this.http.get<Passenger[]>(url);
        return observable;
    }

    deletePassenger(passengerId:number):Observable<void>{
        let url=this.baseUrl+"/delete/"+passengerId;
        let observable:Observable<void>=this.http.delete<void>(url);
        return observable;
    }

}
