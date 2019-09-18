import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Name } from './names.model';


const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  _url1='http://localhost:3000/insert';
  _url2='http://nodeangular-env.fnrtqrn2py.us-east-1.elasticbeanstalk.com/insert'

  constructor(private http:HttpClient) { }

  AddViaService(a,b){

    console.log('The userdata entered by the user is:-');
    let fullname = new Name(a,b);
    console.log("Fullname is:-"+fullname);
    return this.http.post<any>(this._url2,fullname,httpOptions);

  }
}
