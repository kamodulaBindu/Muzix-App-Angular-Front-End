import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TracksService } from '../track.service';
import { ChangeDetectionRef } from 'bootstrap';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';
import { from } from 'rxjs';
import { error } from 'util';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class TrackListComponent implements OnInit {
  public tracks = [];
  // public trackList=[];
  public errorMsg;
  // public start=0;
  // public end=7;
  constructor(private _trackService: TracksService, private wishlist: WishlistService) { }


  ngOnInit() {
    // this.getTracks();
     this._trackService.getTracks()
      .subscribe(data => this.tracks=data,
                  error => this.errorMsg = error);
  }
  // getTracks(){
  //   this._trackService.getTracks().subscribe(tracks=>{
  //     this.tracks=tracks,
  //     error => this.errorMsg = error
  //     this.pushSlides();
  //   });

  // }
  createTrack(track): any {
   
   let musix={
     id:track.listeners,
     name:track.name,
     artist: track.artist.name
   }
   this.wishlist.saveTrack(musix).subscribe(data =>{
      console.log(data);
    });
   }
 
 
 
// play(){
//   console.log("Playing");
// }

// pushSlides(){
//   this.trackList=this.tracks.slice(this.start, this.end);
// }


// next(){
//   if(this.end<this.tracks.length){
//     this.trackList=this.tracks.slice(this.start+1,this.end+1);
//     this.start=this.start+1;
//     this.end=this.end+1;
//   }
// }
// previous(){
//   if(this.start>0&& this.end>10){
//     this.trackList = this.tracks.slice(this.start-1,this.end-1);
//     this.start=this.start-1;
//     this.end=this.end-1;
//   }
// }


}

