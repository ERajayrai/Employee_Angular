import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit {
  isLoadingThree = false;

  constructor(private http: HttpClient,private router:Router,private fb: FormBuilder, ) {
    this.validateForm = this.fb.group({
      employeeId: ['', [Validators.required]], 
      type: ['',[Validators.required]],
      nType: ['', [Validators.required]],
      institution: ['',[Validators.required]],
      endDate: ['',[Validators.required]],
      startDate: ['',[Validators.required]],
      percentage: ['',[Validators.required]],
      adress: ['',[Validators.required]],
    });





   }

  ngOnInit(): void {
  }

  validateForm!: FormGroup;

  submitForm(value: { employeeId: string; type: string; nType: string;institution:String; endDate: string; startDate: string;  adress:String; percentage:String;}): void  {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    const headers = { 'security-key': 'abcd' };
  
      let url="http://localhost:9090/qulification/add";

     this.http.post<any>(url,value,{headers}).subscribe(data=>{
      console.log(data);
      console.log(value)
     })
      
  }
  loadThree():void{

    
      this.isLoadingThree = true;
      setTimeout(() => {
        this.isLoadingThree = false;
      }, 5000);
    
    this.router.navigate(['/dependants'])

  }
  

}
