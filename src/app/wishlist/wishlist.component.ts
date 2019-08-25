import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from '../wishlist.service';
import { AllTracks } from '../track';
import { TrackListComponent } from '../track-list/track-list.component';
import { SearchTracksComponent } from '../search-tracks/search-tracks.component';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  private track={
  
  };
  private tracks=[];
  public start=0;
  public end=7;

  constructor(private router: Router, private wishlistService: WishlistService) {

 }

  ngOnInit() {
    this.createTrack();
    this.getTracks();
  }

  getTracks():any{  
    this.wishlistService.getTracks()
    .subscribe(data =>{
      this.tracks = data;
    });
  }

  deleteTracks(track){
    console.log(track);
    this.wishlistService.deleteTrack(track)
    .subscribe(data => console.log(data)
    );
    
  }

  createTrack() {
    this.wishlistService.saveTrack(this.track);
  };
  
 updateTrack(track):any{
   track.comments = (document.getElementById(track.id) as HTMLInputElement).value;
   this.wishlistService.updateTrack(track).subscribe();
   console.log(track);
 }
   
play(){
  console.log("Playing");
}

pushSlides(){
  this.tracks=this.tracks.slice(this.start, this.end);
}


next(){
  if(this.end<this.tracks.length){
    this.tracks=this.tracks.slice(this.start+1,this.end+1);
    this.start=this.start+1;
    this.end=this.end+1;
  }
}
previous(){
  if(this.start>0&& this.end>10){
    this.tracks = this.tracks.slice(this.start-1,this.end-1);
    this.start=this.start-1;
    this.end=this.end-1;
  }
}

}
