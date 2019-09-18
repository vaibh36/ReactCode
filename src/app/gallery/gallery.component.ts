import { Component, OnInit ,Input,OnChanges} from '@angular/core';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit,OnChanges {

  visibleImages:any[]=[];
   filterBy?:string='boats'

  constructor(private gallaryser :GalleryService) { 
    this.visibleImages = this.gallaryser.getImages();
  }

  ngOnInit() {
  }

  ngOnChanges(){
    this.visibleImages = this.gallaryser.getImages()
  }

}

