import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AllTracks } from './track';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) {}

  private trackUrl = 'http://localhost:8080/api/v1';
  private saveUrl = 'http://localhost:8080/api/v1/track';

  public getTracks() {
    return this.http.get<AllTracks[]>(this.saveUrl);
  }
  updateTrack(track):Observable<AllTracks>{
    return this.http.put<AllTracks>(`${this.trackUrl}`+'/update/' + track.id, track);
    
  }

  public deleteTrack(track) {
    console.log(track);
    return this.http.delete(this.trackUrl + "/delete/"+ track.id);
  }

  public saveTrack(track) {
    return this.http.post<AllTracks>(this.saveUrl, track);
  }

}
