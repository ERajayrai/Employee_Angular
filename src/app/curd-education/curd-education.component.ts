import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curd-education',
  templateUrl: './curd-education.component.html',
  styleUrls: ['./curd-education.component.css']
})
export class CurdEducationComponent implements OnInit {
  public search: any =[];
  isOpen =false
  employeeId='';
  listOfData:any
  id='';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
   
  getIt(){
    console.log()
    
    var resp: any;
    const httpHeaders=new HttpHeaders({
      'security-key':'abcd'

    })

    this.http.get<any>('http://localhost:9090/search/qulification/'+this.employeeId,{headers:httpHeaders}).subscribe(data => {
      console.log(data);
      console.log(this.employeeId)
      resp=data;
      if (resp.code==0) {
        this.search=resp.data;
        console.log(this.search)
      }
      
    });
  }
  getDelete(){
    
    const headers = { 'security-key': 'abcd' };
    this.http.delete('http://localhost:9090/qulification/delete/'+this.employeeId,{headers}).subscribe(data=>{
      console.log(data)
      console.log()
    })

  }

}
