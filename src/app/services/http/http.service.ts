import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }


  simpleGet(url: string) {
    return this.http.get(url);
  }

  /**
   * Helper method to call the POST api for any url.
   * @param url string url that needs to be called.
   */
  simplePost(url: string, body: any) {
    return this.http.post(url, body);
  }

  /**
   * Helper method to call the PUT api for any url.
   * @param url string url that needs to be called.
   */
  simplePut(url: string, body: any) {
    return this.http.put(url, body);
  }
}
