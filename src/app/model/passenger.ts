export class Passenger{
    passengerId:number;
	userId:number;
	passengerDate:Date;
	ticketCost:number;
	pnrNumber:number;
    sfId:number;
    
    constructor(passengerId:number,userId:number,passengerDate:Date,ticketCost:number,pnrNumber:number,sfId:number){
        this.passengerId=passengerId;
        this.userId=userId;
        this.passengerDate=passengerDate;
        this.ticketCost=ticketCost;
        this.pnrNumber=pnrNumber;
        this.sfId=sfId;
    }
}