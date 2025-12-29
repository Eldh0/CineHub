import { ChangeDetectorRef, Component } from '@angular/core';
import { Carousel } from "../../components/carousel/carousel";
import { Card } from "../../components/card/card";
import { ApiService } from '../../api-service';

@Component({
  selector: 'app-shows',
  imports: [Carousel, Card],
  templateUrl: './shows.html',
  styleUrl: './shows.css',
})
export class Shows {

  tvItems: any[] = [];
  romanceTvItems: any[] = [];
  comedyTvItems: any[] = []
  sciFiTvItems: any[] = [];

  constructor(private api: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getTvShows();
  }

  private getTvShows() {
    this.api.getTopRatedTvShows().subscribe((res: any) => {
        this.tvItems = res.results.slice(0, 15);
        this.cdr.detectChanges(); 
      });
    this.api.getRomanceTvShows().subscribe((res: any) => {
        this.romanceTvItems = res.results.slice(0, 12);
        this.cdr.detectChanges(); 
      });
    
      this.api.getComedyTvShows().subscribe((res: any) => {
        this.comedyTvItems = res.results.slice(0, 12);
        this.cdr.detectChanges(); 
      });

      this.api.getAnimeTvShows().subscribe((res: any) => {  
        this.sciFiTvItems = res.results.slice(0, 12);
        this.cdr.detectChanges(); 
      });
    }    
  }