import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) { }

  getQuery(query){
    const url = `https://api.spotify.com/v1/${query}`;

    const key = "BQBa_Uk0MP4fv7jy7OEZMm55ZqZb3lMHprHFxmQmSdhn2PV4MJi-ZirrwCMR237V7tUJFL3S-1xM6z-WLng";

    //define o headers que o spotify necessita
    const headers = new HttpHeaders({
      Authorization: `Bearer ${key}`
    });
    return this.http.get(url, { headers });
  }

  

  getNewReleases(){
    return this .getQuery("browse/new-releases?limit=10").pipe(
      map(data => data['albums'].items )  
    )
  }


  getArtistas(artistas: string){
    return this.getQuery(`serch?q=${artistas}&type=artist&limit=10`).pipe(
      map(data=>{
        data['artists'].items
      })
    )
  }
}
