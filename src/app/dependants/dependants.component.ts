import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dependants',
  templateUrl: './dependants.component.html',
  styleUrls: ['./dependants.component.css']
})
export class DependantsComponent implements OnInit {
  isLoadingF=false
  constructor(private http: HttpClient,private router:Router,private fb: FormBuilder) { 



    this.validateForm = this.fb.group({
      firstName: ['', [Validators.required]], 
      lastName: ['',[Validators.required]],
      employeeId: ['', [Validators.required]],
      dob: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      relationShip: ['',[Validators.required]],
     
    });

  }

  ngOnInit(): void {
  }

  validateForm!: FormGroup;

  submitForm(value: { employeeId: string; firstName: string; lastName: string;dob:String; gender: string;relationShip: string}): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    const headers = { 'security-key':'abcd' };
     

     this.http.post<any>('http://localhost:9090/dependants/add',value,{ headers }).subscribe(data=>{
      console.log(data);
      console.log(value)
     })
      
  }
  loadF(){
    this.router.navigate(['/depandantsSearch'])
  }

}
