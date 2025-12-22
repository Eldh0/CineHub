import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Movies } from './pages/movies/movies';
import { Shows } from './pages/shows/shows';

export const routes: Routes = [
    {
        path: '',
        component:Home
    },
    {
        path: 'movies',
        component:Movies
    },
    {
        path: 'tv-shows',
        component:Shows
    }
];
 