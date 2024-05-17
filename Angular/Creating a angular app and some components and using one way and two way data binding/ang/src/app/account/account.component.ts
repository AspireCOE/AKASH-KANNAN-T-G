import { Component } from '@angular/core';
import { Account } from './account.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

    accountCondition(num:number): String{
      if(num>10000){
        return "Loyal";
      }
      else if(num>=1000 && num<=10000){
        return "Active"
      }
      else if(num>=500 && num<1000){
        return "Inactive"
      }
      return "Less Than 500 limit";
    }

    AccountType: String = "Savings"

    accounts : Account[] = [{AccountNumber: "978964563211",AccountHolderName:"Akash",TypeOfAccount:"Current",Amount:10000,BankName:"Axis",DateOfCreate:new Date()},
                           {AccountNumber: "978964563212",AccountHolderName:"Kannan",TypeOfAccount:"Current",Amount:91000,BankName:"ICICI",DateOfCreate:new Date()},
                           {AccountNumber: "975964563213",AccountHolderName:"JoyBoy",TypeOfAccount:"Savings",Amount:29000,BankName:"CUB",DateOfCreate:new Date()},
                           {AccountNumber: "978264560004",AccountHolderName:"James Lee",TypeOfAccount:"Savings",Amount:38000,BankName:"Axis",DateOfCreate:new Date()},
                           {AccountNumber: "978964563215",AccountHolderName:"Jay Jo",TypeOfAccount:"Savings",Amount:7000,BankName:"ICICI",DateOfCreate:new Date()},
                           {AccountNumber: "978364563216",AccountHolderName:"Shanks",TypeOfAccount:"Salary",Amount:6000,BankName:"HDFC",DateOfCreate:new Date()},
                           {AccountNumber: "970004563217",AccountHolderName:"Eren",TypeOfAccount:"Salary",Amount:5000,BankName:"Kotak Mahindra ",DateOfCreate:new Date()},
                           {AccountNumber: "978964463218",AccountHolderName:"Armin",TypeOfAccount:"Salary",Amount:540 ,BankName:"Kotak Mahindra ",DateOfCreate:new Date()},
                           {AccountNumber: "978964563219",AccountHolderName:"Levi",TypeOfAccount:"Salary",Amount:23000,BankName:"SBI",DateOfCreate:new Date()},
                           {AccountNumber: "978964163220",AccountHolderName:"Sanji",TypeOfAccount:"Fixed deposit",Amount:75000,BankName:"SBI",DateOfCreate:new Date()},
                           {AccountNumber: "978004563221",AccountHolderName:"Zoro",TypeOfAccount:"Fixed deposit",Amount:6110,BankName:"Punjab National",DateOfCreate:new Date()},
                           {AccountNumber: "978964563222",AccountHolderName:"David",TypeOfAccount:"Fixed deposit",Amount:24000,BankName:"Punjab National",DateOfCreate:new Date()}
                          ];
}
