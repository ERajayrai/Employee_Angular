import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curd-dependants',
  templateUrl: './curd-dependants.component.html',
  styleUrls: ['./curd-dependants.component.css']
})
export class CurdDependantsComponent implements OnInit {
  isOpen =false
  public listOfData:any
  public search: any =[];
  id='';
  employeeId=''
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  getIt(){
    console.log()
    
    var resp: any;
    const httpHeaders=new HttpHeaders({
      'security-key':'abcd'

    })

    this.http.get<any>('http://localhost:9090/dependants/search/'+this.id,{headers:httpHeaders}).subscribe(data => {
      console.log(data);
      console.log(this.id)
      console.log
      resp=data;
      if (resp.code==0) {
        this.search=resp.data;
        console.log(this.search)
      }
      
    });
  }
  getDelete(){

    const headers = { 'security-key': 'abcd' };
    this.http.delete('http://localhost:9090/dependants/delete/'+this.employeeId,{headers}).subscribe(data=>{
      console.log(data)
    })
     

  }

}
