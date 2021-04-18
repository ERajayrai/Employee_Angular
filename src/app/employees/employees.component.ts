import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient,private router:Router,private fb: FormBuilder ) { 
    this.validateForm = this.fb.group({
      firstName: ['', [Validators.required]], 
      lastName: ['', [Validators.required]], 
      id: ['', [Validators.required]], 
      designation: ['',[Validators.required]],
      pincode: ['', [Validators.required]],
      department: ['',[Validators.required]],
      EndDate: ['',[Validators.required]],
      startDate: ['',[Validators.required]],
      dob: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      reportingManager: ['',[Validators.required]],
      status: ['',[Validators.required]],
      bloodgroup: ['',[Validators.required]],
      adress: ['',[Validators.required]],
    }); 


  }

  ngOnInit(): void {
  }
  validateForm!: FormGroup;

  submitForm(value: { fistName: string; lastName: string; id: string; endDate: string; startDate: string; status:String; dOB:String;department:String;adress:String;pincode:String;gender:String;reportingManager:String;designation:String;bloodGroup:String }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  
    //let url="http://localhost:9095/add-user";

     // this.http.post<any>(url,value).subscribe(data=>{
      //111111console.log(value);
      console.log(this.validateForm.value);
  }
  resetForm(){

    this.validateForm.reset();
  }
      

    
    
    

}
