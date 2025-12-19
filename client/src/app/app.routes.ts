import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { ResearchPage } from './pages/research-page/research-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
    },
    {
        path: 'research',
        component: ResearchPage,
    }
];
