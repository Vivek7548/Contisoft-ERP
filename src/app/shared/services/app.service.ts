import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  TOKEN = 'Bearer ' + window.localStorage.getItem('token');
  constructor(private httpClient: HttpClient) { }

  postVendorDemo(data: any) {
    // let url = 'http://localhost:8001/api'
     let url = 'https://trackpayout-backend.contisofttechno.com/api'
    return this.httpClient.post(`${url}/website/create_vendor_demo`, data);
  }
}
