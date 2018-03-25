import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable()
export class UserApiService {
    constructor(private http:HttpClient) {

    }
    getUsers(){
        this.http.get("/api/getusers").subscribe((data)=>{
            console.log(data);
        },(err)=>{
            console.log("error occured");
            console.log(err);
        },
    ()=>console.log("Completed"))};
}