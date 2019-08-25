import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { FormControl } from '@angular/forms';
import { TracksService } from '../track.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private tracks=[];
  private search = new FormControl();
  private searchTracks:Observable<any>;

  constructor(private _trackService: TracksService, private router:Router) { }
  
  ngOnInit(){
    this.search.valueChanges.subscribe(value=>
      this._trackService.getSearchTracks(value));
    
  }

  searching() {
    this._trackService.getSearchTracks(this.search.value).subscribe(data => {
      this.tracks = data;
    });
  }

  searchNavigate(){
    this.router.navigate(['search', this.search.value]);
  }
 
 
}