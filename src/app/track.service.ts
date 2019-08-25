import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { error } from 'util';
import { AllTracks } from './track';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TracksService {
  private _url: string = "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain";
private url:string="&api_key=891cab45a94177d4e0b696d797a9bf2d&format=json";

private search_url:string ="http://ws.audioscrobbler.com/2.0/?method=track.search&track=";
private searchUrl:string="&api_key=891cab45a94177d4e0b696d797a9bf2d&format=json";

  constructor(private http: HttpClient) { }
  getTracks(): Observable<any>{
    return this.http.get<any>(this._url+this.url)
              .pipe(map(data => data.tracks.track))
              .pipe(catchError(this.errorHandler));
  }

  getSearchTracks(value):Observable<any>{
    return this.http.get<any>(this.search_url + value + this.searchUrl)
      .pipe(map(data => data.results.trackmatches.track))
      .pipe(catchError(this.errorHandler));
  }
  
  errorHandler(error: HttpErrorResponse)
  {
     return throwError(error.message || "Server Error");
   }
  
   
 }
 

