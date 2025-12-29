import { ChangeDetectorRef, Component, Input, OnInit, SimpleChanges,OnChanges } from '@angular/core';
import { ApiService } from '../../api-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel{
  items: any[] = [];

  @Input() set type(value: 'movies' | 'tv') {
    this.loadItems(value)
  }
  
  constructor(private api: ApiService, private cdr: ChangeDetectorRef) { }

  private loadItems(Type:string) {
   const request = Type === 'movies' 
    ? this.api.getPopularMovies() 
    : this.api.getPopularTvShows();

  request.subscribe((res: any) => {
    this.items = res.results.slice(0, 6);
    this.cdr.detectChanges(); 
  });
  }

}
