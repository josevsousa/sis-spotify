import { Component, OnInit } from '@angular/core';

import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  novasMusicas: any[] = [];
  loading: boolean;

 
  constructor( 
    private spotifyService: SpotifyService
    ) { 

      this.loading = true;
      this.spotifyService.getNewReleases()
          .subscribe( (data: any) => {
            console.log(data);
            this.novasMusicas = data;
            this.loading = false;
          }, ( error ) => {
            this.loading = false;
            console.log(error);
          });
  }

  ngOnInit() {
  }

}
