import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

interface UnsplashResponse {
  urls: {
    small: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(private http: HttpClient) {
  }

  public getPhoto() {
    return this.http
      .get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization: 'Client-ID J08v1NOqBKO6gMa7cHdjMhkMsAWBUsGcMeEcKj2VAhM'
        }
      }).pipe(
        map(x => x?.urls.small)
      )
  }
}
