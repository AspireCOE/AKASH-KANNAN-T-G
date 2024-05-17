export class Account{
    AccountNumber: String;
    AccountHolderName:String;
    TypeOfAccount:String;
    Amount:number;
    BankName:String;
    DateOfCreate:Date;


    constructor( AccountNumber: String,AccountHolderName:String,TypeOfAccount:String,Amount:number,BankName:String,DateOfCreate:Date){
        this.AccountNumber=AccountNumber;
        this.AccountHolderName=AccountHolderName;
        this.TypeOfAccount=TypeOfAccount;
        this.Amount=Amount;
        this.BankName=BankName;
        this.DateOfCreate=DateOfCreate;
    }
}