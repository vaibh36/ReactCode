import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  visibleImages=[];
  constructor() { }

  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id:number){
    return IMAGES.slice(0).find(image=>image.id==id)
  }

  
}

const IMAGES=[

  {"id":1,"category":"boats","caption":"View from the boat","url":"src/app/gallery/boat1"},
  {"id":1,"category":"boats","caption":"View from the boat","url":"src/app/gallery/images/img/boat2"},
  {"id":1,"category":"boats","caption":"View from the boat","url":"src/app/gallery/images/img/boat3"},
  {"id":1,"category":"cars","caption":"View from the boat","url":"src/app/gallery/images/img/car1"},
  {"id":1,"category":"cars","caption":"View from the boat","url":"src/app/gallery/images/img/car2"}

]
