import {Component} from '@angular/core';
import {PhotosService} from "../photos.service";

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrl: './photo-show.component.css'
})
export class PhotoShowComponent {
  photoUrl = '';

  constructor(private photosService: PhotosService) {
    this.fetchPhoto();
  }

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photosService.getPhoto().subscribe((url) => {
      this.photoUrl = url;
    });
  }
}
