import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Movies } from './pages/movies/movies';
import { Shows } from './pages/shows/shows';
import { Media } from './pages/media/media';
import { PageNotFound } from './pages/page-not-found/page-not-found';

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
    },
    {
        path:'media/:type/:id',
        component:Media
    },
    {
        path: '**',
        component:PageNotFound
    }
];
 