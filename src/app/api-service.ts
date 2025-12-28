import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http:HttpClient){}
  getTopRated(){
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=87747b289fab37e7627da45b2d0411dd&language=en-US&page=1')
  }

  getEnglishMovies(){
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=87747b289fab37e7627da45b2d0411dd&with_original_language=en&sort_by=popularity.desc&page=1')
  }

  getRomanticComedy(){
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=87747b289fab37e7627da45b2d0411dd&with_genres=35,10749&sort_by=popularity.desc&page=1')
  }

  getSciFic(){
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=87747b289fab37e7627da45b2d0411dd&with_genres=878&sort_by=popularity.desc&page=1')
  }

}
