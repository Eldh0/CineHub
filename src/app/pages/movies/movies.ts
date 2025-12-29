import { Component } from '@angular/core';
import { Carousel } from "../../components/carousel/carousel";
import { Card } from "../../components/card/card";

@Component({
  selector: 'app-movies',
  imports: [Carousel, Card],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {

}
