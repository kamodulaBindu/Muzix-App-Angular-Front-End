import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { TracksService } from '../track.service';
import { WishlistService } from '../wishlist.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-tracks',
  templateUrl: './search-tracks.component.html',
  styleUrls: ['./search-tracks.component.css']
})
export class SearchTracksComponent implements OnInit {
  private searchString: string;
  private track;
  private searchTracks;
  private trackname;
  constructor(private router: Router ,private route: ActivatedRoute, private _trackService: TracksService, private wishlistService:WishlistService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.searchString = param.get('name');
    });
    this._trackService.getSearchTracks(this.searchString).subscribe(searchTracks => {
      this.searchTracks = searchTracks
    });
  }
  createTrack(track): any {
   /* this.trackname=value.name;
    this.router.navigate(['/saveTrack'],value);
  
    this.wishlistService.saveTrack(this.track)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };*/
  let musix={
    id:track.listeners,
    name:track.name,
    artist: track.artist
  }
  console.log(musix);
  this.wishlistService.saveTrack(musix);
  }


}

