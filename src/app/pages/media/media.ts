import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media',
  imports: [CommonModule, RouterLink],
  templateUrl: './media.html',
  styleUrl: './media.css',
})
export class Media implements OnInit {
  mediaDetails: any;
  constructor(private http:HttpClient,private route:ActivatedRoute, private cdr: ChangeDetectorRef) {}
  ngOnInit() {
    const id=Number(this.route.snapshot.paramMap.get('id'));
    const type=this.route.snapshot.paramMap.get('type') || 'movie';
    this.getMediaDetails(id,type).subscribe((res)=>{
        console.log(res);
        
        this.mediaDetails=res;
        this.cdr.detectChanges();
    });
    
  }

  getMediaDetails(id:any, type:string){ {
     return this.http.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=87747b289fab37e7627da45b2d0411dd&language=en-US`)
  }
}
}
