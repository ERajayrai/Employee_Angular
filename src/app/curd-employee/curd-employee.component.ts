import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SearchRequest } from './curd-employee.request.model';

@Component({
  selector: 'app-curd-employee',
  templateUrl: './curd-employee.component.html',
  styleUrls: ['./curd-employee.component.css']
})
export class CurdEmployeeComponent implements OnInit {
 public listOfData:any
  public searchReq : SearchRequest=new SearchRequest()
  public search: any =[];
  

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  getIt(){
    console.log(this.searchReq.q)
    
    var resp: any;
    const httpHeaders=new HttpHeaders({
      'security-key':'abcd'

    })

    this.http.get<any>('http://localhost:9090//employee/search/'+this.searchReq.q,{headers:httpHeaders}).subscribe(data => {
      console.log(data);
      console.log(this.searchReq.q)
      resp=data;
      if (resp.code==0) {
        this.search=resp.data;
        console.log(this.search)
      }
      
    });
  }

}
