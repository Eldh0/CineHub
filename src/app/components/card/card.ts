import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

 @Input() item: any;
  constructor(private router:Router) {}
 viewMediaDetails(item:any) {
    this.router.navigate(['/media'],{state:{item}});
  }

}
