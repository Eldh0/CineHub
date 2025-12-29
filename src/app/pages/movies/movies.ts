import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Carousel } from "../../components/carousel/carousel";
import { Card } from "../../components/card/card";
import { ApiService } from '../../api-service';

@Component({
  selector: 'app-movies',
  imports: [Carousel, Card],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies implements OnInit {
  movieItems: any[] = [];
  englishMovieItems: any[] = [];
  romanceComedyItems: any[] = []
  sciFiItems: any[] = [];

  constructor(private api: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.api.getTopRated().subscribe((res: any) => {
        this.movieItems = res.results.slice(0, 15);
        this.cdr.detectChanges(); 
      });

    this.api.getEnglishMovies().subscribe((res: any) => {
        this.englishMovieItems = res.results.slice(0, 15);
        this.cdr.detectChanges(); 
      });
    this.api.getRomanticComedy().subscribe((res: any) => {
        this.romanceComedyItems = res.results.slice(0, 15);
        this.cdr.detectChanges(); 
      });
    this.api.getSciFic().subscribe((res: any) => {
        this.sciFiItems = res.results.slice(0, 15);
        this.cdr.detectChanges(); 
      });
  }
}
