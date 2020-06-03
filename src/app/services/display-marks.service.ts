import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DisplayMarksService {

  constructor(private http:HttpClient) { }
  getallMarks(){
      return this.http.get('msau/allmarks');
  }
}
