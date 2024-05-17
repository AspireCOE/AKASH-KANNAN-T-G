import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
   studentName:String="Akash";
   studentMark:number=499;
   joinDate:Date=new Date();
}
